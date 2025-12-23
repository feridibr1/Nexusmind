import React from "react";
import "./ClientTherapistsPage.scss";
import TherapistCard from "../../Components/TherapistCard/TherapistCard";
import therapist1 from '../../assets/images/pschologist-1.png'
import therapist2 from '../../assets/images/pschologist-2.png'
import therapist3 from '../../assets/images/pschologist-3.png'
import therapist4 from '../../assets/images/pschologist-4.png'


const therapistsData = [
  {
    name: "Dr. Olivia Chen, Psy.D.",
    specialization: "Depressiya",
    years: "5-10",
    description:
      "Şəfqətli və sübutlara əsaslanan terapiya ilə sağalma və inkişaf üçün təhlükəsiz bir məkan təmin edir.",
    image: therapist1,
  },
  {
    name: "Dr. Isabella Rossi, LMFT",
    specialization: "Anksiyete",
    years: "10+",
    description:
      "İnsanların həyat çətinliklərini aşmasına və daxili dözümlülüyünü kəşf etməsinə kömək edir.",
    image: therapist2,
  },
  {
    name: "Dr. Ava Nguyen, Ph.D.",
    specialization: "Travma",
    years: "5-10",
    description:
      "Travmadan sağalma üzrə ixtisaslaşır və müştərilərin həyatlarını yenidən nəzarətə götürmələrinə kömək edir.",
    image: therapist3,
  },
  {
    name: "Dr. Marcus Cole, LCSW",
    specialization: "Depressiya",
    years: "1-5",
    description:
      "Güclü tərəflərinizə və məqsədlərinizə fokuslanan əməkdaşlığa əsaslanan terapiya yanaşması.",
    image: therapist4,
  },
  {
    name: "Dr. Leo Kim, Psy.D.",
    specialization: "Münasibət problemləri",
    years: "5-10",
    description:
      "Fərdlər və cütlüklər üçün daha sağlam əlaqə və ünsiyyət bacarıqlarını inkişaf etdirməyə kömək edir.",
    image: therapist1,
  },
  {
    name: "Dr. Samuel Jones, Ph.D.",
    specialization: "Anksiyete",
    years: "10+",
    description:
      "Daha sakit bir zihin və daha dolğun, anı yaşayan bir həyat üçün sizi doğru istiqamətə yönəldir.",
    image: therapist2,
  },
];

export default function ClientTherapistsPage() {
  return (
    <>
        <div className="therapists-page">
          <div className="content">
            <div className="header">
              <h1>Psixoloqlarımızla tanış olun</h1>
              <p>Rifahınızı dəstəkləyə biləcək mütəxəssislərlə əlaqə qurun.</p>

              <input
                className="search"
                placeholder="Ada görə axtar..."
              />
            </div>

            <div className="grid">
              {therapistsData.map((t) => (
                <TherapistCard key={t.name} therapist={t} />
              ))}
            </div>

            <div className="pagination">
              <span className="active">1</span>
              <span>2</span>
              <span>3</span>
              <span>...</span>
              <span>8</span>
            </div>
          </div>

        </div>
    </>
  );
}