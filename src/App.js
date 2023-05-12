import './App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as fromCounterActions from './actions/counter';
import * as fromTodosActions from './actions/todo';




function App(props) {

// const [counter,setCounter] = useState(0)
// const [values, setValues] = useState({description:"1ere description", details:''})
// const [isSubmit, setIsSubmit] = useState(false)

// const[first,isFirst] = useState(false)
// const[seconde,isSeconde] = useState(false)
// const[third,isThird] = useState(false)



// const handleChange = (event) =>{
//   const {name, value} = event.target
//   setValues({...values, [name]: value })
// }


  return (
    <div className="App">


    <h1>{props.counter.value}</h1>
    <button onClick={() => props.increment()}>+</button>
    <button onClick={() => props.decrement()}>-</button>
    <br></br>
    <Link to="/page2">Allez sur page 2</Link>
    <br></br>
    <br></br>
    <h1>TODOS</h1>
    <br></br>
    <button onClick={() => props.getTodos()}>GET TODOS</button>
    
  
    </div>

    
  );
}
const mapStateToProps = state => ({
  counter: state.counterReducer,
  todos: state.todoReducer
})


const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(fromCounterActions.increment()),
  decrement: () => dispatch(fromCounterActions.decrement()),
  getTodos: () => dispatch(fromTodosActions.getTodo())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
