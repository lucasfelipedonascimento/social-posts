import { Avatar } from './Avatar';
import { Comment } from './Comment';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  // Estado = variáveis que eu quero que o componente monitore
  const [comments, setComments] = useState([
    'Post muito bacana em!!!',
  ])

  // criando estado para monitorar quando chega novos comentários
  const [newCommentText, setNewCommentText] = useState('')

  // criando função para formatar a Data do post
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  // criando função para criar novo comentário
  function handleCreateNewComment() {
    event.preventDefault();

    // imutabilidade -> passo o que eu quero inserir e o novo valor
    // spread operator -> pega os valores que já existem
    setComments([...comments, newCommentText])
    setNewCommentText('');
    
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);

    // event.target.comment.value = ''; limpando a textarea -> pega o valor e transforma em uma string vazia
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
         {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.type}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.type}><a href="#">{line.content}</a></p>
          }
         })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong> 

        <textarea 
        name="comment" 
        placeholder="Deixe um comentário"
        value={newCommentText}
        onChange={handleNewCommentChange} // toda vez que houver uma mudança no conteúdo, eu executo essa função
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} author={author} content={comment} />
        })}
      </div>
    </article>
  )
}