import React from 'react'

class Todolist extends React.Component{

  constructor(){
    super();

  }

render(){
  return(
    <div className="text-center">
       <h1>Lets do ToDo App</h1>
        <input type="text"/>
        <button>Add Task</button>
    </div>)
}

}

export default Todolist;