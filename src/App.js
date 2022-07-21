import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addTask: "",
      toDoItems: [
        {task: "Clean the house", completed:true, editting: false}, 
        {task: "Buy groceries", completed:false, editting: false},  
      ]
    }
    this.handleChange = this.handleChange.bind(this) //have to bind it so that it can be used globally
    this.addToList = this.addToList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.changeToEditMode = this.changeToEditMode.bind(this)
  }
  //EVERY EVEN HAS A LOT ON IT-YOU WILL ALWAYS HAVE TARGET -IT'S WHERE THE
  //EVENT TOOK PLACE
  handleChange(event) {
    this.setState({ addTask: event.target.value})
  }

  addToList(event) {   //THIS IS REGULAR OLD JAVASCRIPT - ALMOST EVERYTHING IN JS IS AN OBJECT
    event.preventDefault()
    let currentTasks = this.state.toDoItems
    currentTasks.push({
      task: this.state.addTask,  //THIS IS GOING TO REFER TO MY COMPONENT-NO NEED FOR CURLY BRACES
      completed: false,
      editting: false
    })
    //OUR INPUT IS: this.state.addTask
    //this.state.addTask = ""
    this.setState({ toDoItems: currentTasks, addTask: ""})
  }
  //IN THIS FUNCITON, WE WANT TO CLEAR OUR INPUT
  
  //WHEN DOES IT HAPPEN, WHAT'S THE FUNCTION-WHAT DO I NEED TO DO
  deleteItem(id) {
    // console.log(id)

    let remainingTasks = this.state.toDoItems
    remainingTasks.splice(id, 1)
    this.setState({ toDoItems: remainingTasks})    
    
  }

  changeToEditMode(id) {
    let ourTasks = this.state.toDoItems
    ourTasks[id].editting = true
    this.setState({ toDoItems: ourTasks})
  }

  
  
  
  render() {   ///THIS IS JSX - COMBINING HTML AND JAVASCRIPT - THE RETURN SECTION SHOULD BE FOR THE HTML PORTION
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do:</h1>
          <ul>
            {
             this.state.toDoItems
                .map((item, index) => 
                  <ToDoItem toDoItem={item.task} 
                  id = {index}
                  key={"task" + index}
                  editting = {item.editting}
                  completed={item.completed}
                  deleteItem={this.deleteItem} //THIS IS HOW THE CHILD TALKS BACK TO THE PARENT-BUT THIS FUNCTION TELLS IT WHAT IT CAN SAY
                  editItem={this.changeToEditMode}
                  />
                )
            }
          </ul>
          <form onSubmit={(e) => this.addToList(e)}>
            <input type="text" value={this.state.addTask} onChange={this.handleChange} />
            <button>Add to List</button>
          </form>
        </header>
      </div>
    );

  }
  
}

export default App;
