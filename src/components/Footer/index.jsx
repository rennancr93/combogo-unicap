import React from 'react';
import styles from "./styles.module.css";
import { InstagramLogo, YoutubeLogo, Envelope, LinkedinLogo } from 'phosphor-react';
import { useTranslation } from "react-i18next";
import "../../i18n";
import LogoCombogo from "../../assets/logo.png";
import LogoUnicap from "../../assets/unicap-logo.png";
import CursoLogo from "../../assets/curso-logo.png";

export function Footer() {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <div className={styles.divlogo}>
                <a href="https://portal.unicap.br/w/jogos-digitais" target='_blank'>
                <img src={CursoLogo} alt="logo curso de jogos" />
                </a>
                <a href="https://portal.unicap.br/" target='_blank'>
                <img src={LogoUnicap} alt="logo unicap" />
                </a>
                <a href="#home">
                <img src={LogoCombogo} alt="logo combogo" />
                </a>
            </div>
            <div className={styles.div2}>
                <div className={styles.div1}>
                    <div>
                        <strong>{t("footer.contact")}</strong>
                        <span>(+55) 81 2119-4402</span>
                    </div>

                    <div>
                        <strong>{t("footer.email")}</strong>
                        <span>combogo.unicap@unicap.br</span>
                    </div>
                </div>
                <div className={styles.div1}>
                    <div>
                        <strong>{t("footer.address")}</strong>
                        <span>R. do Principe, 526 - Boa Vista - Recife, PE - Cep: 50050-900 - Bloco R, Sala 117.</span>
                    </div>

                    <div>
                        <strong>{t("footer.open")}</strong>
                        <span>{t("footer.open.hour")} - {t("footer.close.hour")}</span>
                    </div>
                </div>
            </div>

            <span className={styles.copy}>
                    © 2025 - Copyright
                </span>

        </footer>
    );
}

//Universidade Catolica de Pernambuco - Rua do Principe, 526 - Boa Vista - Recife, PE - Cep: 50050-900 - Telefone (+55) 81 2119-4016 Sala 117