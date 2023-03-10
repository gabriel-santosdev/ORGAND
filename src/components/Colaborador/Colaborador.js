import {AiFillCloseCircle} from 'react-icons/ai'
import styles from './Colaborador.module.css'

const Colaborador = (props) => {
    return (
        <div className={styles.colaborador}>
            <AiFillCloseCircle size={25} className={styles.deletar} onClick={props.aoDeletar}/>
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