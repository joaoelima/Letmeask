import firebase from 'firebase/compat/app';
import { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext } from 'react';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext';

//Função onde são feitas as chamadas de tela.
function App() {
  return(
    <BrowserRouter>
    <AuthContextProvider>       
       <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />       
       </Routes>
    </AuthContextProvider>             
    </BrowserRouter>
  );
}
export default App;
