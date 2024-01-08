import { ReactElement, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container }  from './style/'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { TaskForm } from './components/TaskForm'
import { useContext } from 'react'
import Task from './interfaces/TaskInterface'
import { TaskList } from './components/TaskList'
function App() : ReactElement {
  //vou ter um objeto que contem o tiyulo e a dificuldade da task
  const [taskList, setTaskList] = useState<Task[]>([])  
  
  const handleDeleteTask = (id : number) => {
    setTaskList(taskList.filter(task => task.id !== id))//retorna todos os valores que forem diferentes
  }

  return (
      <Container>
        <Header taskList={taskList}/>
          <TaskForm 
          setTaskList={setTaskList}
          taskList={taskList}/>
          <TaskList 
          handleDeleteTask = {handleDeleteTask}
          taskList={taskList}/>
        <Footer />
      </Container>
    
  )
}

export default App
