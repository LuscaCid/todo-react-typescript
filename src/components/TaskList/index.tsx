import Task from "../../interfaces/TaskInterface";
import { Container } from "./style";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
    taskList : Task[]
    handleDeleteTask(id : number) : void
}

export const TaskList = ({taskList, handleDeleteTask} : Props) => {
    return (
        <Container>
            {taskList.length > 0 ? (<h1>Suas Tasks</h1>): (<h1>Não há tarefas cadastradas. O/</h1>)}
            <div className="tasks">
                {taskList.length > 0 && taskList.map(element => {
                    return <div 
                    key={element.id}
                    className="task">
                        <div>
                            <h2>{element.title}</h2>
                            <span>Dificuldade: {element.difficult}</span>
                        </div>
                        <div className="icons">
                            <FaPencilAlt />
                                <div onClick={() => {handleDeleteTask(element.id)}}>
                            <FaRegTrashAlt />
                            </div>
                        </div>   
                    </div>
                })}
            </div>   
        </Container>
    )
}