import styles from './TaskItem.module.css'
import {useState} from 'react';
import { Circle } from 'phosphor-react';
import {Trash} from 'phosphor-react'

export function TaskItem({content, deleteTask}, ...props){
    function handleDeleteTask(){
        deleteTask(content)
    }

    return(
        <div className={styles.task}>
            <div className={styles.taskBox}>
                <div className={styles.taskContent}>
                    <Circle className={styles.circleCss}/>
                    <span className={styles.taskText}>Exemplo de task</span>
                    <button className={styles.transparent} onClick={handleDeleteTask}>
                        <Trash size={30} className={styles.trashCss}/>
                    </button>
                </div>

            </div>
        </div>
    )
}