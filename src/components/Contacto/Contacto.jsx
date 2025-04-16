import { useState } from "react";
import styles from "./Contacto.module.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [error, setError] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.email) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El correo no es válido.";
    }
    if (!formData.mensaje) newErrors.mensaje = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setError(errors);
    if (Object.keys(errors).length === 0) {
      // Aquí se haría la llamada API para enviar el formulario
      console.log("Enviando formulario", formData);
      setEnviado(true);
    }
  };

  return (
    <div className={styles.bodyWrap}>
      <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contacto</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
            />
            {error.nombre && (
              <span className={styles.error}>{error.nombre}</span>
            )}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {error.email && <span className={styles.error}>{error.email}</span>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="asunto">Asunto</label>
            <input
              id="asunto"
              name="asunto"
              type="text"
              value={formData.asunto}
              onChange={handleChange}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            {error.mensaje && (
              <span className={styles.error}>{error.mensaje}</span>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar Mensaje
          </button>

          {enviado && (
            <p className={styles.successMessage}>
              ¡Gracias! Tu mensaje ha sido enviado.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacto;
