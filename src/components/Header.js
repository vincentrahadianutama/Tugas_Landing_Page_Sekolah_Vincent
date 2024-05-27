import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <a className="navbar-logo" href="/">
                <img src="https://res.cloudinary.com/dhyq9uts4/image/upload/v1676360444/logo_v09np1.png" className="logo-image" alt="Logo SMK TI Bazma" height="100"></img>
                    </a>
                    <div className="menu-icon">
                        <i className="fas fa-bars"></i>
                        </div>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a className="nav-links" href="/">Home</a>
                                    </li>
                                        <li className="nav-item"><a className="nav-links" href="/about">Profil Sekolah</a>
                                    </li>
                                        <li className="nav-item"><a className="nav-links" href="/partner">Kemitraan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-links" href="/career">Karir</a>
                                    </li>
                                <li className="nav-item"><a className="nav-links" href="/donation">Donasi</a></li>
                            <li className=""><a className="nav-links" href="/contact">Kontak</a></li>
                        <li className="">
                    <a href="https://ppdb.smktibazma.sch.id" target="_blank" className="btn-ppdb" rel="noreferrer">PPDB</a>
                </li>
            </ul>
        </div>
    </nav>
    <div style="background-image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWXAmEsYko0mZvu16jzXyJ3VFmldHGLoQdm7eICXiDA&s" className="header-image">
        <div style="transition: opacity 400ms ease 0s, transform 400ms ease 0s; transform: none; opacity: 1;">
            <div class="hero-container">
        <h1>SMK TI BAZMA</h1>
        <p>Merajut Asa, Menjejak & Menebar Manfaat</p>
            <div class="hero-btns"><a class="btn-mobile" href="/about">
                <button class="btn btn--secondary btn--large">INFO <i class="far fa-play-circle"></i></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Header;