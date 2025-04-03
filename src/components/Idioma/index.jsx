import { useTranslation } from "react-i18next";
import "../../i18n";
import styles from "./styles.module.css";
import { useState } from "react";

import En from "../../assets/en-lang.png";
import Pt from "../../assets/pt-lang.png";

export function Idioma() {
    const [language, setLanguage] = useState('pt');
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <button className={styles.container} onClick={() => {
            changeLanguage(language === 'pt' ? 'en' : 'pt');
            setLanguage(language === 'pt' ? 'en' : 'pt');
        }}>
            {language === 'pt' ? <img src={Pt} alt="Pt"/> : <img src={En} alt="En"/>}
        </button>
    )
}