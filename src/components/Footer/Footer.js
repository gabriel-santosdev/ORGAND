import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer  className={styles.footer}>
            
                <div className={styles.socialIcones}>
                    <img src='../images/fb.png'/>
                    <img src='../images/ig.png'/>
                    <img src='../images/tw.png'/>
                </div>
                <div className={styles.logo}>
                    <img src='../images/logo.png'/>
                </div>
                <div className={styles.texto}>
                   <p>Desenvolvido por Gabriel Santos</p>
                </div>
            
        </footer>
    )
}

export default Footer 