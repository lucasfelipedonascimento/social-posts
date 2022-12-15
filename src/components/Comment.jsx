import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ author, content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0) // toda vez que uma ação do usuário vai mudar algo no código, então devemos criar um estado

  // cria uma função que recebe a função "onDeleteComment" por parâmetro do componente pai
  function handleDeleteComment() {
    onDeleteComment(content); 
    // recebe a função do componente pai e passa o parâmetro que deseja modificar
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    }) // podemos pegar a variável atual do estado
   } 
   
   // - podemos fazer dessa forma, ou da forma que fizemos lá embaixo no botão de aplaudir

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title="12 de dezembro 2022 às 23:07h" dateTime='2022/12/12 23:07:29'>Há cerca de 1h</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
            {/* <button onClick={() => setLikeCount(likeCount + 1)}> - podemos fazer dessa forma */} 
            <button onClick={handleLikeComment}> {/* ou, podemos fazer dessa forma, chamando a função lá em cima */}
              <ThumbsUp />
              Aplaudir <span> {likeCount} </span>
            </button>
        </footer>

      </div>
    </div>
  )
}