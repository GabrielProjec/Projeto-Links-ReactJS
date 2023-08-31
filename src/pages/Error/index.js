import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";

function Error() {
  return (
    <div className="error">
      <Logo />
      <h1>Pagina nao encontrada</h1>
      <p>Está pagina que está procurando não existe</p>

      <Link className="link" to="/">
        Voltar para Home
      </Link>
    </div>
  );
}

export default Error;
