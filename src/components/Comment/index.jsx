import { Avatar } from '../Avatar/index'
import {BiTrash} from 'react-icons/bi'
import {AiOutlineLike } from 'react-icons/ai'

import styles from "./Commnet.module.css"


export const Commnet = ({content, onDeleteComment}) => {

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  return (
    <div className={styles.commnet}> 
      <Avatar src="https://github.com/JoubertNatividade.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}> 
          <header> 
            <div className={styles.authorAndTime}>
              <strong>Joubert</strong>
              <time>cerca de 2hr</time>
            </div>
            <button onClick={handleDeleteComment} ><BiTrash size={24}/></button>
          </header>

          <p> {content} </p>
        </div>
        <footer>
          <button>
             <AiOutlineLike size={20}/>
              Aplaudir <span> 20 </span>
          </button>
        </footer>
      
      </div>
    </div>

  )
}