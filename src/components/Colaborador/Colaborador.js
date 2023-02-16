import styles from './Colaborador.module.css'

const Colaborador = (props) => {
    return (
        <div className={styles.colaborador}>
            <div className={styles.cabecalho} style={{backgroundColor: props.corDeFundo}}>
                <img src = {props.imagem} alt={props.nome}/>
            </div>
            <div className={styles.rodape}>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador 