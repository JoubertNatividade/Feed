import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post/Post"
import { PostData } from './PostData'

import styles from './App.module.css'
import "./global.css"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {
          PostData.map(item => (
            <Post 
              key={item.id} 
              author={item.author}
              content={item.content}
              publishedAt={item.publishedAt}
            />
          ))
         }
        </main>
      </div>
    </>
  )
}

export default App
