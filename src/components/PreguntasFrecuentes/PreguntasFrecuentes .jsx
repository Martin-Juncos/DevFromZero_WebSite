// src/components/PreguntasFrecuentes/PreguntasFrecuentes.jsx
import { useState } from "react";
import styles from "./PreguntasFrecuentes.module.css";
import { faqs } from "../../data/faqs ";
function PreguntasFrecuentes() {
  const [openIndexes, setOpenIndexes] = useState(
    Array(faqs.length).fill(false)
  );

  const toggleFAQ = (index) => {
    const newOpenIndexes = [...openIndexes];
    newOpenIndexes[index] = !newOpenIndexes[index];
    setOpenIndexes(newOpenIndexes);
  };
  return (
    <div className={styles.bodyWrap}>
      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {openIndexes[index] && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreguntasFrecuentes;
