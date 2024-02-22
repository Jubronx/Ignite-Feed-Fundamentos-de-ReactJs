import { PencilLine } from "phosphor-react"

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar.jsx";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar  src="https://github.com/jubronx.png"/>
                <strong> Anderson Cássio</strong>
                <span> Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    );
}