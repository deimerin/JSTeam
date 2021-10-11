import React, { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import './App.css';
import db from './firebase/firebaseConfig'
import { Login } from './components/Login'


function App() {

  useEffect(()=>{
    const obtenerDatos = async()=>{
      const datos = await getDocs(collection(db,'ventas'));
      datos.forEach((documento)=>{
        console.log(documento.data());
      })
      // console.log(datos.docs[0].data());
    }

    obtenerDatos();
    
  }, [])


  return (
        <Login />   
  );
}

export default App;