// JSX = JavaScript + XML 
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

// author: { avatar_url: "", name: "",  role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasfelipedonascimento.png',
      name: 'Lucas Felipe',
      role: 'Dev. Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀 '},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-13 10:33:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Dev. Full-Stack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋 '},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.' },
      { type: 'paragraph', content: 'O nome do projeto é DoctorCare 🚀 '},
      { type: 'link', content: 'jane.design/doctorcare'},
      { type: 'link', content: 'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2022-12-13 10:33:00'),
  },

]

// iteração -> repetir alguma coisa
// forEach -> percorre um array, porém não tem retorno.
// map -> percorre um array e retorna um valor.

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
                key={post.id}
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

