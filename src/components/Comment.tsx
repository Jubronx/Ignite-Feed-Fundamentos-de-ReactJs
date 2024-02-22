import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar.tsx";
import { useState } from "react";
 
interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }
    function handleLikeComment(){
        // sempre que precisar atualizar uma informação e essa informação depender do valor que ela tinha anteriormente
        // ou seja, depender do valor dela mesma, é importante utilizar esse padrao de funções
        setLikeCount((state) => {
            return state + 1
        })
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/jubronx.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anderson Cássio</strong>
                            <time title="11 de maio às 08:13" dateTime="2022-05-03 15:55:02">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
