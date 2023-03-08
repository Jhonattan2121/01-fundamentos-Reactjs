import {Post} from "./Post";
import { Header } from "./components/Header";
import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
      author="Jhonattan ferri" 
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum consectetur fugiat aperiam tenetur ipsa! Consequuntur temporibus mollitia assumenda minus culpa excepturi necessitatibus quas nulla animi? Velit delectus rem exercitationem sed!" />
      <Post 
      author="Claro show"
      content=" minus culpa excepturi necessitatibus quas nulla animi? Velit delectus rem exercitationem sed!" />
      </main>
    </div>
    </div>
  )
}


