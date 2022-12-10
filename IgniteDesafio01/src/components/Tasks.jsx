import styles from './Tasks.module.css'
import { Clipboard } from 'phosphor-react'
import { useState } from 'react'
import {TaskItem} from './TaskItem'

export function Tasks(...props){
    const [tasks, setTasks] = useState([
        'Exemplo de task','task 2','task 3'
    ])

    const [newTaskText, setNewTaskText] = useState('');

    function deleteTask(taskToDelete){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne)
    }

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
                    {tasks.map(task => {
                        return(
                            <TaskItem
                                key={task}
                                content={task}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}