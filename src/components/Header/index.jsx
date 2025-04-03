import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { InstagramLogo, YoutubeLogo, Envelope, LinkedinLogo, List, X } from "phosphor-react";
import { useTranslation } from "react-i18next";
import "../../i18n";
import Logo from "../../assets/favicon.svg";

export function Header() {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = null;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo Combogó" />

            {/* Ícone do Menu Hambúrguer */}
            <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={32} /> : <List size={32} />}
            </button>

            {/* Navegação */}
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                <a href="#home" style={{ borderColor: activeSection === "home" ? "#F5821F" : "gray" }}>
                    {t("header.nav.home")}
                </a>
                <a href="#sobre" style={{ borderColor: activeSection === "sobre" ? "#F5821F" : "gray" }}>
                    {t("header.nav.about")}
                </a>
                <a href="#projetos" style={{ borderColor: activeSection === "projetos" ? "#F5821F" : "gray" }}>
                    {t("header.nav.projects")}
                </a>
            </nav>

            {/* Redes Sociais */}
            <div className={styles.socialLinks}>

                <a href="mailto:combogo.unicap@unicap.br" target="_blank">
                    <Envelope size={32} />
                </a>
                <a href="https://www.youtube.com/@combogounicap" target="_blank">
                    <YoutubeLogo size={32} />
                </a>

                <a href="https://www.instagram.com/combogounicap/" target="_blank">
                    <InstagramLogo size={32} />
                </a>
                <a href="https://www.linkedin.com/company/combog%C3%B3-unicap" target="_blank">
                    <LinkedinLogo size={32} />
                </a>
            </div>
        </header>
    );
}
