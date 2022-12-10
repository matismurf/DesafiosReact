import styles from './NewTask.module.css'
import{PlusCircle} from 'phosphor-react'
import{useState} from 'react'

export function NewTask({taskText}){
    const [tasks, setTasks] = useState([
        'Exemplo de tarefa'
    ])

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(){
        event.preventDefault()
        setTasks([...tasks, newTaskText])
        setNewTaskText('')
    }

    function handleNewTaskChange(){
        event.target.setCustomValidity('')
        setNewTaskText(event.target.value)
    }

    function handleNewTaskInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteTask(taskToDelete){
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne)
    }

    const isNewTaskEmpty = newTaskText.length == 0;

    return(
        <div className={styles.newTaskContent}>
            <form>
                <input className={styles.txtTarefa} type="text" placeholder="Adicione uma nova tarefa"></input>
                <button className={styles.btnCriar}>Criar <PlusCircle size={20}/></button>
            </form>
            </div>
    )
}