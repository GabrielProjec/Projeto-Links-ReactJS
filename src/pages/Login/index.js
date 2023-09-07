import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";

// COMPONENTS
import Logo from "../../components/Logo";

//FIREBASE
import { auth } from "../../services/FirebaseConnections";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Preencha todos os campos");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Seja Bem Vindo");
        navigate("/admin", { replace: true });
      })
      .catch(() => {
        toast.error("Usuário ou senha inválidos");
      });
  }

  return (
    <div className="login-container">
      <Logo />

      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="********"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}

export default Login;
