// src/components/PagarInscripcion/PagarInscripcion.jsx
import styles from "./PagarInscripcion.module.css";
import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

function PagarInscripcion() {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/create_preference",
        {
          title: "Curso Full Stack",
          unit_price: 99,
          quantity: 1,
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    id && setPreferenceId(id);
  };

  const onSubmit = async (formData) => {
    // Callback called when clicking Wallet Brick
    // this is possible because the brick is a button
    // at this time of submit, you must create the preference
    console.log("onSubmit", formData);
  };

  const onError = async (error) => {
    // callback called in all Brick errors
    console.log("onError", error);
  };

  const onReady = async () => {
    // Callback called when Brick is ready.
    // Here you can hide loadings from your site, for example.
    console.log("onReady");
  };
  return (
    <div className={styles.bodyWrap}>
      <div className={styles.container}>
        <h1 className={styles.title}>Pagar tu inscripción</h1>
        <p className={styles.description}>
          Estás a punto de realizar el pago de tu curso. Al hacer clic en
          &quot;Pagar&quot;, confirmarás tu inscripción y obtendrás acceso
          inmediato a todo el contenido. Esta inversión te permitirá desarrollar
          habilidades fundamentales en programación, diseño, resolución de
          problemas, y estarás un paso más cerca de convertirte en un
          profesional digital.
          <br />
          <br />
          El curso incluye clases virtuales, encuentros presenciales, proyectos
          prácticos, soporte personalizado y una comunidad activa de
          aprendizaje. ¡Prepárate para transformar tu futuro!
        </p>
        <button className={styles.payButton} onClick={handleBuy}>
          Pagar
        </button>
        {preferenceId && (
          <Wallet
            initialization={{
              preferenceId: preferenceId,
              redirectMode: "blank", // self | blank | modal
            }}
            // customization={{
            //   texts: { valueProp: "smart_option" },
            //   visual: {
            //     buttonBackground: "default", // default | black | blue | white
            //   },
            // }}
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
          />
        )}
      </div>
    </div>
  );
}

export default PagarInscripcion;
