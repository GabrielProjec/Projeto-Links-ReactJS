import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Sujeito Programador</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="/">
            <p className="link-text">Canal do Youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="/">
            <p className="link-text">Canal do Youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="/">
            <p className="link-text">Canal do Youtube</p>
          </a>
        </section>
        <section className="link-area">
          <a href="/">
            <p className="link-text">Canal do Youtube</p>
          </a>
        </section>
      </main>
    </div>
  );
}

export default Home;
