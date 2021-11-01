
import './App.css';
import Routes from './Routes'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Componentes/Navbar';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseApp } from './firebase'
import { actionTypes } from './estadoGlobal/DefinicionFunciones';
import { UsarContext } from './estadoGlobal/UsarContexto'
function App() {


  const [{ user }, dispatch] = UsarContext()
  
  
  const auth = getAuth()
  
  useEffect(() => {
    onAuthStateChanged(auth ,(authUser) => {
      if(authUser){
        dispatch({
          type:actionTypes.USER_FIREBASE,
          user:authUser,
        })
      }

    })

  }, [])
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}
export default App;
