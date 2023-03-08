import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'


export function Post(props) {
    console.log(props)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                     src="https://github.com/jhonattan2121.png"  />
                     <div className={styles.authorInfo}>
                     <strong>Jhonattan Ferri</strong>
                     <span>Desenvolvedor Junior Web</span>
                     </div>
                </div>

                <time title='08 de Março às 03:03' dateTime='2023-03-08 03:03:30'>Publicado há 1h</time>
                
           </header>
           <div className={styles.content}>
            
           </div>

           <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
                placeholder='Deixe um comentário'
            />

            <footer>
            <button type='submit'>Publicar</button>
            </footer>
           </form>

           <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
           </div>
        </article>
    );
}