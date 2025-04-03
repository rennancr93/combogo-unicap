import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import "../../i18n";

export function About() {
    const {t, i18n} = useTranslation();

    return (
        <section className={styles.container} id="sobre">                                                                      
            <section className={styles.about}>
                
                <h2>{t("about.title")}</h2>
                    <div className={styles.paragraph}>
                        <p>{t("about.p1")}</p>
                         
                        <p>{t("about.p2")}</p>

                        
                    </div>
                    <a href="https://portal.unicap.br/w/combogo" target="_blank" className={styles.button}>{t("about.button")}</a>
                
            </section>
            
            <div className={styles.Card}>
                <h2>+20</h2>
                <p>{t("about.card.title")}</p>
            </div>
        </section>
    );
}