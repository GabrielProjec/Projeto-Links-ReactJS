import React, { useState } from "react";
import "./admin.css";
import { toast } from "react-toastify";

// COMPONENTS
import Header from "../../components/Header/index.js";
import Logo from "../../components/Logo";
import InputArea from "../../components/Input";

// ICONS
import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

// FIREBASE
import { db } from "../../services/FirebaseConnections";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("");
  const [textColorInput, setTextColorInput] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (nameInput === "" || urlInput === "") {
      toast.warn("Preencha todos os campos !!!");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        toast.success("Link Cadastrado com Sucesso");
      })
      .catch((error) => {
        toast.warn(error);
      });
  }

  return (
    <div className="admin-container">
      <Header />

      <Logo />

      <form className="form" onSubmit={handleRegister}>
        <label className="label">Nome do Link</label>
        <InputArea
          placeholder="Nome do Link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="label">Url do Link</label>
        <InputArea
          type="url"
          placeholder="Url do Link..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="container-colors">
          <div>
            <label className="label right">Fundo do Link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
          <div>
            <label className="label right">Cor do Link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="preview">
            <label className="label">Veja Como esta ficando</label>
            <article
              className="list"
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF" />
        </button>
      </form>

      <h2 className="title">Meus Links</h2>

      <article className="list animate-pop">
        <p>Grupo Exclusiso do telegram</p>
        <div>
          <button className="btn-delete">
            <FiTrash2 size={18} color="#FFF" />
          </button>
        </div>
      </article>
    </div>
  );
}

export default Admin;
