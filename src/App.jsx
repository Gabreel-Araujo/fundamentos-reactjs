import { Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import './global.css'

export function App() {

  return (
    <div>

      <Header/>
     
      <div className={styles.wrapper}>
        <Sidebar/>
       
        <main>
        <Post author="Gabriel Alves"
        content="lorem ipsum dolor sit amet consectetur adipisicing elit "
      />
        <Post author="matheus"
        content="lorem ipsum dolor sit amet consectetur adipisicing elitlorem ipsum dolor sit amet consectetur adipisicing elit  "
      />
        </main>
      </div>

    </div>
  )
}


