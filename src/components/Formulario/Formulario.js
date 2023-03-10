import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import styles from  './Formulario.module.css'


const Formulario = (props) => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome , setNome] = useState('')
    const [cargo , setCargo] = useState('')
    const [imagem , setImagem] = useState('')
    const [time , setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto 
            obrigatorio={true}
            label="Nome" 
            placeholder="Digite seu nome" 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
             />
            <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu cargo" 
            valor={cargo}
            aoAlterado={cargo => setCargo(cargo)}
            />
            <CampoTexto 
            obrigatorio={true} 
            label="Imagem" 
            placeholder="Informe o endereço da imagem" 
            valor={imagem}
            aoAlterado={imagem => setImagem(imagem)}
            />
            <ListaSuspensa 
            obrigatorio={true} 
            label="Time" 
            itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />
            <Botao texto="Criar Card"/>
            </form>
        </section>
    )

}

export default Formulario 