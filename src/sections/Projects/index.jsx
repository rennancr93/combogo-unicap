import styles from "./styles.module.css";
import { CardProjeto } from "../../components/CardProjeto";

import OResgateDeFarya from "../../assets/projetos/oresgatedefarya.png";
import IlustracoesRPG from "../../assets/projetos/ilustracoesrpg.png";
import Impressao3DOrgaosHumanos from "../../assets/projetos/impressao3dorgaoshumanos.png";
import MVPFisioterapiaComAR from "../../assets/projetos/mvpfisioterapiacomar.png";
import TrilhaDasMemorias from "../../assets/projetos/trilhamaringa.png";
import Neon from "../../assets/projetos/neonumafantasiadometaverso.png";
import Rugido from "../../assets/projetos/rugido.png";
import AnimacaoUnicap from "../../assets/projetos/animacaodeseguranca.png";
import UmaAventuraNoNatal from "../../assets/projetos/umaaventuranonatal.png";
import CorreAscensinho from "../../assets/projetos/correascensinho.png";

import { useTranslation } from "react-i18next";
import "../../i18n";


export function Projects() {
    const {t, i18n} = useTranslation();

    return (
        <section id="projetos" className={styles.container}>
            <h2>{t("projects.title")}</h2>
            <div>
                <CardProjeto
                    link={"https://oresgatedefarya.itch.io/o-resgate-de-farya"}
                    img = {OResgateDeFarya}
                    nome = {t("projects.card.OResgatedeFarya")}
                    categoria={[t("projects.categories.Aventura")]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/ilustraes-rpg"}
                    img = {IlustracoesRPG}
                    nome = {t("projects.card.IlustracoesRPG")}
                    categoria={[t("projects.categories.RPG")]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/impresso-3d-orgos-humanos"}
                    img = {Impressao3DOrgaosHumanos}
                    nome = {t("projects.card.Impressao3DOrgaosHumanos")}
                    categoria={[t("projects.categories.Plataforma")]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/mvp-fisioterapia-com-ar"}
                    img = {MVPFisioterapiaComAR}
                    nome = {t("projects.card.MVPFisioterapiaComAR")}
                    categoria={[t("projects.categories.Outro")]}
                />
                <CardProjeto
                    link = {"https://combogounicap.itch.io/trilha-das-memrias-maring"}
                    img = {TrilhaDasMemorias}
                    nome = {t("projects.card.TrilhaDasMemorias")}
                    categoria={[t("projects.categories.Outro")]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/neon-metaverso"}
                    img = {Neon}
                    nome = {t("projects.card.Neon")}
                    categoria={[t("projects.categories.Simulacao")]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/rugido"}
                    img = {Rugido}
                    nome = {t("projects.card.Rugido")}
                    categoria={[t("projects.categories.App")]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/animao-de-segurana-unicap"}
                    img = {AnimacaoUnicap}
                    nome = {"Animação de Segurança Unicap"}
                    categoria={["Educacional"]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/uma-aventura-no-natal"}
                    img = {UmaAventuraNoNatal}
                    nome = {t("projects.card.UmaAventuraNoNatal")}
                    categoria={[t("projects.categories.Simulacao")]}
                />
                <CardProjeto
                    link={"https://combogounicap.itch.io/corre-ascensinho"}
                    img = {CorreAscensinho}
                    nome = {t("projects.card.CorreAscensinho")}
                    categoria={[t("projects.categories.Plataforma")]}
                />

            </div>
        </section>
    )}