import Colaborador from '../Colaborador/Colaborador'
import styles from './Time.module.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({time, times,colaboradores, aoDeletar, mudarCor}) => {

    // const css = { backgroundColor: props.corSecundaria }

    return (
       (colaboradores.length > 0) ?
       colaboradores.length > 0 &&
       <section className={styles.time}  
            style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(times.cor,'0.6') }}>
            
            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={times.cor}type='color' className={styles.input_cor} />
            
            <h3 style={{ borderColor: times.cor}}>
                {time.nome}
            </h3>
           <div className={styles.colaboradores}>
           {colaboradores.map( 
           (colaborador, indice) => {
                return  <Colaborador 
                corDeFundo={times.cor}
                key= {indice}
                nome={colaborador} 
                cargo={colaborador} 
                imagem={colaborador}
                aoDeletar={aoDeletar}
                />
            } 
           )}
           </div> 
        </section>
        : ''
    )

}

export default Time 