import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import User from './User';
import Student from './Student';

function App() {
  /*function Apple()
  {
    return <h4>ComponentFunction apple called within another functional component</h4>
  }*/
  
  /*function Apple()
  {
    alert("Hello from apple function")
  }*/
  //let data = "om";

  //const [data,setData]=useState("om");
  /*const [data,setData]=useState(0);
  function UpdateData()
  { 
    //setData("Rushi")
    setData(data+1)
  }*/

  const [name, setName] = useState("Anil");
  return (
    <div className="App">
    <h1>Hello World! from app</h1>
    <h2>States in React</h2>

    <h1>Props in React</h1>

    <Student 
      name={name} 
      email="shreya@gmail.com"
      other={{address:"jaysingpur",mobile:"1234567890"}}
    />

    <button onClick={() => setName("Sidhu")}>
      Update Name
    </button>
  </div>
  );
}

/*function User()
{
  return(
    <div>
      <h1>User Same File</h1>
      <h2>Hello from h2</h2>
    </div>
    
  )
}*/

export default App;
