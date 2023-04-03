import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Gabreel-alves.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Alves</strong>
                            <time title='11 de maio às 8:45' dateTime='2022-05-11 08:45:25'>Cerca de 1hr atrás </time>
                        </div>
                        <button title='Botao de Deletar Comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito Bom, Parabens</p>
                </div>
              
                <footer>
                    <button>
                        <ThumbsUp/>
                        aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}