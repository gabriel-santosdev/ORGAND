import styles from './CampoTexto.module.css'

const CampoTexto = (props) => {
    return (
        <div className={styles.campo_texto}>

            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>

        </div>

    )
}

export default CampoTexto 