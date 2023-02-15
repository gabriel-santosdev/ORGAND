import  styles from'./Banner.module.css'

function Banner () {

    return(
      <header className={styles.banner}>
          <img src="/images/banner.png" alt="Banner da página principal do Organd"/>
      </header>
    )

}

export default Banner 