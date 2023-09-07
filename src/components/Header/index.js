import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

//ICONS
import { BiLogOut } from "react-icons/bi";

//FIREBASE
import { auth } from "../../services/FirebaseConnections";
import { signOut } from "firebase/auth";

async function handleLogout() {
  await signOut(auth);
}

function Header() {
  return (
    <div className="admin-header">
      <nav className="nav-header">
        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#DB2629" />
        </button>

        <Link to="/admin">Links</Link>
        <Link to="/admin/social">Redes Sociais</Link>
      </nav>
    </div>
  );
}

export default Header;
