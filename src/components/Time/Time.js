import styles from './Time.module.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        <section className={styles.time} style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
        </section>
    )

}

export default Time 