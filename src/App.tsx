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
import Modal from './components/Modal'

function App() : ReactElement {
  //vou ter um objeto que contem o tiyulo e a dificuldade da task
  const [taskList, setTaskList] = useState<Task[]>([])  
  
  const handleDeleteTask = (id : number) => {
    setTaskList(taskList.filter(task => task.id !== id))//retorna todos os valores que forem diferentes
  }

  const showOrHideModal = (display : boolean) : void => {
    //consigo pegar elementos html independente do arquivo...
    const modal = document.querySelector('#modal')
    if(display){
      modal?.classList.remove('hide')
    } else {
      modal?.classList.add('hide')
    }
  }
  const handleEdit = () : void => {
    showOrHideModal(true)

  }

  return (
      <Container>
        <Modal children = {<TaskForm 
        btnTitle='Salvar alterações'
        taskList={taskList}
        />}/>
        
        <Header taskList={taskList}/>
          <TaskForm 
          btnTitle='Criar task'
          setTaskList={setTaskList}
          taskList={taskList}/>
          <TaskList 
          handleDeleteTask = {handleDeleteTask}
          taskList={taskList}
          handleEdit = {handleEdit}
          />
          
        <Footer />
      </Container>
    
  )
}

export default App
