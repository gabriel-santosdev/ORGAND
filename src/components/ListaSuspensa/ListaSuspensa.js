import styles from'./ListaSuspensa.module.css'

const ListaSuspensa = (props) => {
    

    return (
        <div className={styles.lista_suspensa}>
            <label>
                {props.label}
            </label>
            <select onChange={e => props.aoAlterado(e.target.value)} required={props.required} value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa