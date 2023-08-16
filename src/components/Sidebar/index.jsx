import styles from './Sidebar.module.css'
import {CiEdit} from 'react-icons/ci'


export const Sidebar = () => {

  return (
    <aside className={styles.sidebar} >
      <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=370&q=40" alt="" />
      <div className={styles.profile}>
        <img  className={styles.avatar} src="https://github.com/JoubertNatividade.png" />
      
        <strong>Joubert Nativida</strong>
        <span>Developer Full Stack</span>
      </div>

      <footer>
        <a href="#"> <CiEdit size={20} /> Editar Perfil</a>
      </footer>

    </aside>
  )
}