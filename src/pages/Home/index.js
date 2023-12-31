import React, { useState, useEffect } from "react";
import "./home.css";

// COMPONENTS
import Socials from "../../components/Socials";

// ICONS
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

// FIREBASE
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../services/FirebaseConnections";

function Home() {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });

        setLinks(lista);
      });
    }

    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");

      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data().facebook,
            instagram: snapshot.data().instagram,
            youtube: snapshot.data().youtube,
          });
        }
      });
    }

    loadSocialLinks();
  }, []);

  return (
    <div className="home-container">
      <h1>Sujeito Programador</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        {links.map((item) => (
          <section
            key={item.id}
            className="link-area"
            style={{ backgroundColor: item.bg }}
          >
            <a href="/">
              <p style={{ color: item.color }} className="link-text">
                {item.name}
              </p>
            </a>
          </section>
        ))}

        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Socials url={socialLinks?.facebook}>
              <FaFacebook size={35} color="#FFF" />
            </Socials>
            <Socials url={socialLinks?.youtube}>
              <FaYoutube size={35} color="#FFF" />
            </Socials>
            <Socials url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#FFF" />
            </Socials>
          </footer>
        )}
      </main>
    </div>
  );
}

export default Home;
