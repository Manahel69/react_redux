import './App.css';
import { useState } from 'react';
import {  connect } from 'react-redux';



function App(props) {
//const [data, setData] = useState({id:'2',title:"test"})
    const [isOpen, setIsOpen] = useState(false);
    
    
  return (
   <div> 


<nav className="flex items-center justify-between flex-wrap p-6">
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
         <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Page 1 
         </a>
         <a href="/page2" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Page 2 
         </a>
         <a href="page3" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Page 3 
         </a>
       </div>
       
     </div>
   </nav>

<p> Bienvenue sur la  Page 2 </p>
<br></br>
<h1>{props.counter.value}</h1>

  
</div>

    
);
}
const mapStateToProps = state => ({
  counter: state.counterReducer
})

export default connect(mapStateToProps,null)(App);
