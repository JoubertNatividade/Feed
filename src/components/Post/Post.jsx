import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from '../Avatar'
import { Commnet } from '../Comment'
import styles from './Post.module.css'
import { useState } from 'react'

export const Post = ({  author,  content,publishedAt }) => {

  const [listCommnets, setListComments] = useState([
    'Showw'
  ])
  const [comments, setComments] = useState('')

  const handleCommentsSubmit = () => {
    event.preventDefault()
    setListComments([...listCommnets,comments])
    setComments('')
  }
  const handleNewCommentChange = () => {
    setComments(event.target.value)
  }
  const publisheAtFormated = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publisheAtRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR
  })

  const handleDeleteCommnet = (commnetDelete) => {
    const newListWithouCommentDelete = listCommnets.filter(comment => comment !== commnetDelete)
    setListComments(newListWithouCommentDelete)
  }
  return (
    <div className={styles.post}>
      <header>  
        <div className={styles.profile}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.avatarInfo}>
            <strong> {author.name} </strong>
            <span> {author.role} </span>
          </div>
        </div>

        <time title={publisheAtFormated} > {publisheAtRelativeToNow} </time>
      </header>

      <div className={styles.content}>
       {
        content.map(item => (
          <p key={item}> {item} </p>
        ))
       }
      </div>

      <form 
        className={styles.commentForm}
        onSubmit={handleCommentsSubmit} 
      >
        <strong>Deixe um feedback</strong>
        <textarea 
          placeholder='Deixe um comentário...'
          value={comments}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button> Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {
          listCommnets.map((commnet) => (
            <Commnet 
              key={commnet} 
              onDeleteComment={handleDeleteCommnet} 
              content={commnet} 
            />
          ))
        }
      </div>
    </div>

  )
}