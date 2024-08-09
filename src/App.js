import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textforms from './component/Textforms';
import { useState } from 'react';
import Alert from './component/Alert';
import Contact from './component/Contact';

function App() {
  const [Mode, setMode] = useState("light")
  let ModeClick = () => {
    if (Mode == "light") {
      setMode("dark")
      document.body.style.backgroundColor = "black";
      showAlerts("this is darkMode","danger")
      document.title="Darkmode Enable"
      setInterval(() => {
      document.title="TextUtils App"

      }, 2000);      
    }
    else {
      setMode("light")
      // document.body.style.backgroundColor = "white";
      showAlerts("this is lightMode ","success")   
         document.title="LightMode Enable"
      setInterval(() => {
      document.title="TextUtils App"

      }, 2000);  
    }
  }

  // alert
  const [alert,setMyalerts]=useState(null);
  let showAlerts=(msg,type)=>{
    setMyalerts({
      msg:msg,
      type:type
    })
  }
  return (
    <>
      <Navbar title="TextUtils" Mode={Mode} ModeClick={ModeClick} />
      <Alert alert={alert}/>
      <Textforms />
  
    </>
  );
}

export default App;
