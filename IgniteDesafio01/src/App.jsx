import './global.css'
import styles from './App.module.css'

import {Header} from './components/Header'
import {NewTask} from './components/NewTask'
import {Tasks} from './components/Tasks'

export function App(){
  return(
    <div>
      <div>
        <header>
          <Header />
          <NewTask />
        </header>
      </div>
      <div>
        <main>
          <Tasks/>
        </main>
      </div>
    </div>
    
  )
}