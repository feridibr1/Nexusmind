import React, { useState } from "react";
import "./Login.scss";
import Container from "../../Components/Container/Container";
import Logo from '../../assets/images/logo.png'
import Header from '../../Components/Header/Header'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phone: "+994",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Universal input handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SPECIAL PHONE HANDLER
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // prevent removing "+994"
    if (!value.startsWith("+994")) {
      value = "+994";
    }

    // only numbers
    value = "+994" + value.replace(/\D/g, "").slice(3);

    // limit length to +994XXXXXXXXX (13 chars)
    if (value.length > 13) {
      value = value.slice(0, 13);
    }

    setFormData({
      ...formData,
      phone: value
    });
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!isLogin) {
      if (formData.firstName.length < 2)
        newErrors.firstName = "Ad çox qısadır";

      if (formData.lastName.length < 2)
        newErrors.lastName = "Soyad çox qısadır";

      if (Number(formData.age) < 10 || Number(formData.age) > 100)
        newErrors.age = "Yaş düzgün deyil";

      if (!/^\+994\d{9}$/.test(formData.phone))
        newErrors.phone = "Telefon formatı belə olmalıdır: +994XXXXXXXXX";

      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Şifrələr uyğun deyil";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email düzgün deyil";

    if (formData.password.length < 6)
      newErrors.password = "Şifrə minimum 6 simvol olmalıdır";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isLogin) {
      console.log("Daxil ol:", formData.email, formData.password);
    } else {
      console.log("Qeydiyyat:", formData);
    }
  };

  return (
    <> 
    <section className="login__section">

      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
      <div className="blur blur-3"></div>
      <div className="blur blur-4"></div>
      <Container>
        <div className="login-page">

          <img src={Logo} className="urey" alt="login left img" />

          {/* RIGHT */}
          <div className="right">
            <div className="card">

              {/* Tabs */}
              <div className="tabs">
                <button
                  className={!isLogin ? "active" : ""}
                  onClick={() => setIsLogin(false)}
                >
                  Qeydiyyat
                </button>

                <button
                  className={isLogin ? "active" : ""}
                  onClick={() => setIsLogin(true)}
                >
                  Daxil ol
                </button>
              </div>

              <h2 className="welcome">
                {isLogin ? "Xoş gəldiniz" : "Hesab yaradın"}
              </h2>
              <p className="small">
                {isLogin
                  ? "Davam etmək üçün daxil olun."
                  : "Zəhmət olmasa formu doldurun."}
              </p>

              {/* FORM */}
              <form className="form" onSubmit={handleSubmit}>

                {/* SIGN UP FIELDS */}
                {!isLogin && (
                  <>
                    <label>Ad</label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Adınızı daxil edin"
                      onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}

                    <label>Soyad</label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Soyadınızı daxil edin"
                      onChange={handleChange}
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}

                    <label>Yaş</label>
                    <input
                      name="age"
                      type="number"
                      placeholder="Yaşınız"
                      onChange={handleChange}
                    />
                    {errors.age && <span className="error">{errors.age}</span>}

                    <label>Telefon</label>
                    <input
                      name="phone"
                      type="text"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      placeholder="+994 XX XXX XX XX"
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </>
                )}

                {/* EMAIL */}
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email daxil edin"
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                {/* PASSWORD */}
                <label>Şifrə</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Şifrənizi daxil edin"
                  onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}

                {/* CONFIRM PASSWORD */}
                {!isLogin && (
                  <>
                    <label>Şifrə təkrarı</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Şifrəni təkrar daxil edin"
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <span className="error">{errors.confirmPassword}</span>
                    )}
                  </>
                )}

                <button className="login-btn" type="submit">
                  {isLogin ? "Daxil ol" : "Qeydiyyat"}
                </button>
              </form>

              <p className="bottom">
                {isLogin ? (
                  <>
                    Hesabınız yoxdur?{" "}
                    <a onClick={() => setIsLogin(false)}>Qeydiyyat</a>
                  </>
                ) : (
                  <>
                    Hesabınız var?{" "}
                    <a onClick={() => setIsLogin(true)}>Daxil ol</a>
                  </>
                )}
              </p>

            </div>
          </div>

        </div>
      </Container>
    </section>
    </>
  );
};

export default Login;
