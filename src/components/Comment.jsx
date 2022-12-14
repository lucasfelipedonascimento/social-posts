import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ author, content }) {
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

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>10</span>
            </button>
        </footer>

      </div>
    </div>
  )
}