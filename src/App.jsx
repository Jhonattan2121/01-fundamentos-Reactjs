import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

const posts  = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jhonattan2121.png',
      name: 'Jhonattan Ferri',
      role: 'Front-end Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2023-03-08 03:03:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Ferreira Ferri',
      role: 'Front-end Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2023-03-10 03:03:30'),
  },
];

export function App() {
  return (
    <div>
      <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
             
            />
          )
        })}
      </main>
    </div>
    </div>
  )
}


