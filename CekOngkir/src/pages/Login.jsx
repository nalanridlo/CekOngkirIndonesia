import { useState } from "react";

import "../assets/css/login.css";
import buddy from "../assets/img/buddy.png";
import imglogin from "../assets/img/login.png";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      // Login successful, redirect is handled in the login function
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <section className="container-fluid login">
        <div className="row">
          <div className="col-sm-12 col-md-6 kiri">
            <div className="row align-items-center">
              <img src={imglogin} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 kanan">
            <div className="row justify-content-center boxLogin">
              <div className="col-md-7">
                <div className="buddy">
                  <img src={buddy} alt="" style={{ width: "70px" }} />
                  <span className="buddy-text fs-6">Cek Ongkir!</span>
                </div>
                <div className="judul">
                  <h1>Masuk</h1>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Kata Sandi</label>
                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="input form-control"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-label="password"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="row mt-md-4">
                    <button type="submit" className="btn btn-primary">
                      Masuk
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
