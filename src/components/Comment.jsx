import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({content, OnDeleteComment}) {
    function handleDeleteComment() {
        OnDeleteComment(content);
    }
    return (
        <div className={styles.comment}>
            <Avatar hashBorder={false} src="https://github.com/jhonattan2121.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jhonattan Ferri</strong>
                            <time title='08 de Março às 03:03' dateTime='2023-03-08 03:03:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp  />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}