import React from "react";
import "./ContactPage.scss";
import Header from "../../Components/Header/Header";
import Container from "../../Components/Container/Container";

export default function ContactPage() {
  return (
    <>
      <Header />
      <Container>
        <div className="contact-page">

          {/* Header Section ------------------------------------------------ */}
          <div className="header-section">
            <h1>Sizə Kömək Etməyə Hazırıq</h1>
            <p>
              Bizimlə əlaqə yaratmaq ilk addımdır. Aşağıdakı formanı istifadə edərək
              bizə etibarlı və məxfiliyi qorunan bir mesaj göndərin. Sizə mümkün qədər tez cavab verəcəyik.
            </p>
          </div>

          {/* Info Cards ----------------------------------------------------- */}
          <div className="info-cards">

            <div className="card">
              <div className="icon">📞</div>
              <p className="label">Telefon Nömrəsi</p>
              <p className="value">+1 (555) 123-4567</p>
            </div>

            <div className="card">
              <div className="icon">📧</div>
              <p className="label">Email Ünvanı</p>
              <p className="value">contact@serenemind.com</p>
            </div>

            <div className="card">
              <div className="icon">📍</div>
              <p className="label">Klinikanın Ünvanı</p>
              <p className="value">
                123 Wellness Ave, Suite 100,<br />
                Tranquil City, TS 45678
              </p>
            </div>

            <div className="card">
              <div className="icon">⏰</div>
              <p className="label">İş Saatları</p>
              <p className="value">B.e – Cü, 09:00 – 17:00 (EST)</p>
            </div>

          </div>

          {/* Form ----------------------------------------------------------- */}
          <div className="form-container">
            <h2>Bizə Təhlükəsiz Mesaj Göndərin</h2>

            <form>
              <div className="row">
                <div className="field">
                  <label>Tam Adınız</label>
                  <input type="text" placeholder="Tam adınızı daxil edin" />
                </div>

                <div className="field">
                  <label>Email Ünvanınız</label>
                  <input type="email" placeholder="Email ünvanınızı daxil edin" />
                </div>
              </div>

              <div className="field">
                <label>Mövzu</label>
                <input type="text" placeholder="Sizə necə kömək edə bilərik?" />
              </div>

              <div className="field">
                <label>Mesajınız</label>
                <textarea placeholder="Zəhmət olmasa ehtiyaclarınızı təsvir edin..."></textarea>
              </div>

              <p className="privacy-note">
                Məxfiliyiniz bizim üçün vacibdir. Bütün yazışmalar tam məxfi və təhlükəsiz şəkildə qorunur.
              </p>

              <button type="submit" className="submit-btn">Mesajı Göndər</button>
            </form>
          </div>

          {/* Disclaimer ------------------------------------------------------ */}
          <div className="disclaimer">
            <span className="icon">⚠️</span>
            <div>
              <strong>Təcili Yardım Qeydiyyatı</strong><br />
              Əgər siz böhran vəziyyətindəsinizsə və ya hər hansı bir şəxsin həyatı təhlükədədirsə,
              bu saytdan istifadə etməyin. Dərhal yerli təcili yardım xidmətlərinə müraciət edin.
            </div>
          </div>

          {/* Footer ---------------------------------------------------------- */}
          <footer>
            <p>© 2024 SereneMind Dəstək Xidməti. Bütün Hüquqlar Qorunur.</p>

            <div className="links">
              <a href="#">Məxfilik Siyasəti</a>
              <a href="#">Xidmət Şərtləri</a>
            </div>
          </footer>

        </div>
      </Container>
    </>
  );
}
