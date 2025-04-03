import styles from "./styles.module.css"

export function CardProjeto({ img, nome, categoria, link }) {
    return (
        <a href={link} className={styles.container} target="_blank">
            <img src={img} alt="capa" />
            <strong>{nome}</strong>
            <div>
                {
                    categoria.map((cat, index) => {
                        if (cat == "Aventura" || cat == "Adventure") {
                            return <span
                                key={index}
                                style={{ background: "rgba(185, 3, 33, 0.72)" }}
                            >{cat}</span>
                        } else if (cat == "RPG") {
                            return <span
                                key={index}
                                style={{ background: "rgba(3, 145, 185, 0.72)" }}
                            >{cat}</span>
                        } else if (cat == "Simulação" || cat == "Simulation") {
                            return <span
                                key={index}
                                style={{ background: "rgba(3, 76, 185, 0.72)" }}
                            >{cat}</span>
                        } else if (cat == "App") {
                            return <span
                                key={index}
                                style={{ background: "#715D4C" }}
                            >{cat}</span>
                        } else if (cat == "Educacional" || cat == "Educational") {
                            return <span
                                key={index}
                                style={{ background: "rgba(21, 29, 116, 0.61)" }}
                            >{cat}</span>
                        } else {
                            return <span
                                key={index}
                                style={{ background: "#A544CB" }}
                            >{cat}</span>
                        }

                    })
                }
            </div>
        </a>
    )
}