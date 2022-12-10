import styles from './Tasks.module.css'
import { Clipboard } from 'phosphor-react'

export function Tasks(){
    

    return(
        <div className={styles.tasks}>
            <div className={styles.info}>
                <span className={styles.created}>Tarefas criadas</span>
                <span className={styles.done}>Concluidas</span>
            </div>
            
            <div className={styles.empty}>
                <div>
                    <Clipboard size={62}/>
                </div>
                <div className={styles.taskListEmpty}>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                <div className={styles.taskList}>
                    <h1>Ola</h1>
                </div>
            </div>
        </div>
    )
}