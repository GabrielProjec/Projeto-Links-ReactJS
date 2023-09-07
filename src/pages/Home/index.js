import React from "react";
import "./home.css";

// COMPONENTS
import Socials from "../../components/Socials";

// ICONS
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

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

        <footer>
          <Socials url="https://facebook.com/GabrielRodrigues">
            <FaFacebook size={35} color="#FFF" />
          </Socials>
          <Socials url="https://youtube.com/sujeitoprogramador">
            <FaYoutube size={35} color="#FFF" />
          </Socials>
          <Socials url="https://instagram.com/gabrielrodrigues">
            <FaInstagram size={35} color="#FFF" />
          </Socials>
        </footer>
      </main>
    </div>
  );
}

export default Home;
