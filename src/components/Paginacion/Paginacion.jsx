import styles from "./Paginacion.module.css";
/* eslint-disable react/prop-types */
function Paginacion({
  elementosPorPagina,
  paginaActual,
  setPaginaActual,
  totalDeElementos,
}) {
  const cantidadDePaginas = Math.ceil(totalDeElementos / elementosPorPagina);
  const numeroDePagina = [];
  for (let i = 0; i < cantidadDePaginas; i++) {
    numeroDePagina.push(i + 1);
  }

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const paginaSiguiente = () => {
    if (paginaActual < cantidadDePaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const numeroActual = (num) => {
    setPaginaActual(num);
  };

  return (
    <div className={styles.button}>
      {paginaActual > 1 && (
        <button onClick={paginaAnterior} className={styles["prev-button"]}>
          Prev
        </button>
      )}
      {numeroDePagina.map((num) => (
        <button
          key={num}
          className={
            num === paginaActual ? styles["curr-page"] : styles["page-button"]
          }
          onClick={() => numeroActual(num)}
        >
          {num}
        </button>
      ))}
      {paginaActual < cantidadDePaginas && (
        <button onClick={paginaSiguiente} className={styles["next-button"]}>
          Next
        </button>
      )}
    </div>
  );
}

export default Paginacion;
