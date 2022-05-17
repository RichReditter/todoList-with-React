import React,{useState} from 'react'
import './Task.css'
function Task(props) {
    const click = () =>{
        props.onUpdateTasks(props.number)
    }
    const [ifFinished,setIfFinished] = useState(false)
    return (
        <tr>
            <th scope="row">{props.number}</th>
            <td>{ifFinished ? <s>{props.task}</s>: props.task}</td>
            <td>{ifFinished? <span className="finished">Finished</span> : <span className="inProgress">In progress</span>}</td>
            <td>
                <button type="submit" className="btn btn-danger" onClick={click}>Delete</button>
                <button type="submit" className="btn btn-success ms-1" onClick={()=>setIfFinished(true)}>Finished</button>
            </td>
        </tr>
    )
}

export default Task;