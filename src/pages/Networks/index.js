import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./networks.css";

// COMPONENTS
import Header from "../../components/Header";
import InputArea from "../../components/Input";

// ICONS
import { MdAddLink } from "react-icons/md";

//FIREBASE
import { db } from "../../services/FirebaseConnections";
import { setDoc, doc, getDoc } from "firebase/firestore";

function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    async function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data().facebook);
          setInstagram(snapshot.data().instagram);
          setYoutube(snapshot.data().youtube);
        }
      });
    }

    loadLinks();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();

    await setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        toast.success("Urls Salvas com Sucesso");
      })
      .catch(() => {
        toast.warn("Erro ao Salvar Urls");
      });
  }

  return (
    <div className="admin-container">
      <Header />

      <h1 className="title-social">Suas Redes Sociais</h1>

      <form className="form" onSubmit={handleRegister}>
        <label className="label">Link do Facebook</label>
        <InputArea
          placeholder="Digite a url do facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="label">Link do Instagram</label>
        <InputArea
          placeholder="Digite a url do instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="label">Link do Youtube</label>
        <InputArea
          placeholder="Digite a url do youtube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Salvar Links <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  );
}

export default Networks;
