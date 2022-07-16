
export const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={onToggle(task.id)}>
        <h3 >{task.text} <a href="" onClick={onDelete}>Delete</a></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task