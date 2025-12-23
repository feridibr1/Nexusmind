import React, { useState } from "react";
import "./TherapistSignUp.scss";

export default function TherapistSignup() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    degree: "",
    university: "",
    major: "",
    startDate: "",
    endDate: "",
    FIN: "",
    SerialNumber: "",
    DiplomSerialNumber: "",
    Description: "",
    CVFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Form successfully submitted!");
  };

  return (
    <div className="signup-container">
      <h1>Peşəkarlar Komandamıza Qoşulun</h1>
      <p className="subtitle">
        Psixoloji sağlamlığın hamı üçün əlçatan olmasına dəstək olun.
      </p>

      {/* Progress Bar */}
      <div className="progress-wrapper">
        <div className="progress-text">Addım {step} </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-box">
        {step === 1 && (
          <>
            <label>Tam Ad</label>
            <div className="row">
              <input
                name="name"
                placeholder="Ad"
                value={formData.name}
                onChange={handleChange}
              />
              <input
              className="inp"
                name="surname"
                placeholder="Soyad"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            <label>Yaş</label>
            <input
              name="age"
              placeholder="Yaşınızı daxil edin"
              value={formData.age}
              onChange={handleChange}
            />

            <label>Email Adres</label>
            <input
              name="email"
              placeholder="E-poçtunuzu daxil edin"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Telefon nömrəsi</label>
            <input
              name="phone"
              placeholder="+994 xx xxx xx xx"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Şifrə</label>
            <input
              type="password"
              name="password"
              placeholder="Təhlükəsiz parol daxil edin"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="button" className="continue" onClick={next}>
              Davam et
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>təhsil</label>
            <select
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            >
              <option value="">Təhsil seçin</option>
              <option value="bakalavr">Bakalavr</option>
              <option value="magistr">Magistr</option>
              <option value="doktorantura">Doktorantura</option>
            </select>

            <label>Universitet</label>
            <input
              name="university"
              placeholder="Universiteti ​​daxil edin"
              value={formData.university}
              onChange={handleChange}
            />

            <label>Major</label>
            <input
              name="İxtisas"
              placeholder="İxtisas daxil edin"
              value={formData.major}
              onChange={handleChange}
            />

            <div className="row">
              <div>
                <label>Başlama Tarixi</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Bitmə Tarixi</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="actions">
              <button type="button" className="back" onClick={prev}>
                Geri
              </button>
              <button type="button" className="continue" onClick={next}>
                Davam et
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label>FIN kod</label>
            <input
              name="FIN"
              placeholder="FIN daxil et"
              value={formData.FIN}
              onChange={handleChange}
            />

            <label>Seriya Nömrəsi</label>
            <input
              name="SerialNumber"
              placeholder="Seriya Nömrəsi daxil et"
              value={formData.SerialNumber}
              onChange={handleChange}
            />

            <label>Diplom Seriya Nömrəsi</label>
            <input
              name="DiplomSerialNumber"
              placeholder="Diplom Seriya Nömrəsi daxil et"
              value={formData.DiplomSerialNumber}
              onChange={handleChange}
            />

            <label>Təsvir</label>
            <textarea
              name="Description"
              placeholder="Özünüz haqqında yazin..."
              value={formData.Description}
              onChange={handleChange}
            />

            <label>CV yükləyin (PDF)</label>
            <input
              type="file"
              name="CVFile"
              accept="application/pdf"
              onChange={handleChange}
            />

            <div className="actions">
              <button type="button" className="back" onClick={prev}>
                Geri
              </button>
              <button type="submit" className="continue">
                Göndər
              </button>
            </div>
          </>
        )}
      </form>

      <p className="footer-text">
         Məlumatlarınız şifrələnmiş və təhlükəsizdir.
      </p>
    </div>
  );
}
