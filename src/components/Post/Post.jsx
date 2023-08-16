import styles from './Post.module.css'

export const Post = () => {

  return (
    <div className={styles.post}>
      <header>  
        <div className={styles.profile}>
          <img className={styles.avatar} src="https://github.com/JoubertNatividade.png" />
          <div className={styles.avatarInfo}>
            <strong>Joubert Natividade</strong>
            <span>Developer Full Stack</span>
          </div>
        </div>

        <time title='10 de abril de 2023' >Publicado a 1 hr</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea 
          placeholder='Deixe aqui seu comentário...'
        />
        <button> Comentar</button>
      </form>

    </div>

  )
}