import { useState } from "react";
import "./FAQ.scss";

const faqData = [
  {
    question: "Onlayn terapiya nədir və necə işləyir?",
    answer:
      "Onlayn terapiya sizə lisenziyalı terapevtlə təhlükəsiz platformamız vasitəsilə video, audio və ya çat seansları vasitəsilə danışmağa imkan verir.",
  },
  {
    question: "Onlayn terapiya ənənəvi canlı terapiya qədər təsirlidirmi?",
    answer:
      "Bəli, çoxsaylı araşdırmalar göstərir ki, onlayn terapiya ənənəvi terapiya qədər təsirli ola bilər.",
  },
  {
    question: "Bir seansın qiyməti nə qədərdir?",
    answer:
      "Seansın qiyməti terapevtə və xidmət növünə görə dəyişir. Ətraflı məlumatı qiymət səhifəsindən görə bilərsiniz.",
  },
  {
    question: "Məlumatlarım gizli saxlanılırmı?",
    answer:
      "Əlbəttə. Bütün yazışmalar şifrələnir və ciddi məxfilik qaydalarına uyğun şəkildə qorunur.",
  },
  {
    question: "Necə başlamaq olar?",
    answer:
      "Sadəcə hesab yaradın, terapevt seçin və ilk seansınızı planlaşdırın.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqSection">
      {/* Blur shapes for UI effect */}
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      <div className="header fade-up">
        <p className="subtitle">Tez-tez verilən</p>
        <p className="title">Suallar</p>
        <div className="underline"></div>
      </div>

      <div className="faqWrapper">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faqItem fade-up ${
              openIndex === index ? "active" : ""
            }`}
          >
            <div className="questionRow" onClick={() => toggleFAQ(index)}>
              <p>{item.question}</p>

              <span
                className={`icon ${openIndex === index ? "rotate" : ""}`}
              >
                +
              </span>
            </div>

            <div
              className={`answerWrapper ${
                openIndex === index ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
