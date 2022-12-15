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

    // spread operator -> pega os valores que já existem
    setComments([...comments, newCommentText])
    setNewCommentText('');
    
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);

    // event.target.comment.value = ''; limpando a textarea -> pega o valor e transforma em uma string vazia
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório') // com essa função podemos alterar a mensagem de validação do formulário
  }

  function deleteComment(commentToDelete) {
    // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)

    // filter -> percorre cada item da lista, se retornar "true" ele mantém na lista
    // se retornar "false", ele apaga da lista.

    // criamos uma nova lista, removendo o que retorna "false"
    const commentsWithoutDeletedOne  = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    // retornou os comentários que são DIFERENTES dos que eu quero deletar
    // logo, só é retornado os comentários não deletados

    setComments(commentsWithoutDeletedOne);  // precisa receber o valor que estará contido em Comments após eu mudar alguma coisa
    // Cria um novo valor, recebendo só os comentários retornados
    // No react não atualizamos uma informação, nós sempre criamos uma nova informação
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
        onInvalid={handleNewCommentInvalid} // chamada sempre que o HTML identificar que tentamos realizar um submit sendo que o texto é inválido
        required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              author={author} 
              content={comment} 
              onDeleteComment={deleteComment} // quando acontecer a ação do usuário -> padrão começar com "on"
              />
            )
        })}
      </div>
    </article>
  )
}