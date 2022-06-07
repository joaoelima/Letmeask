import firebase from 'firebase/compat/app';
import { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext } from 'react';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { auth } from './services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({}  as  AuthContextType);

function App() {
   const [user, setUser] = useState<User>();

   useEffect(() => {
     auth.onAuthStateChanged(user => {
       if (user) {
        const{ displayName, photoURL, uid} = user

        if (!displayName  || !photoURL) {
          throw new Error(' Missing inofrmation from Google Account')
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
       }
     })
   }, [])

   async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

      if (result.user){
        const{ displayName, photoURL, uid} = result.user

        if (!displayName  || !photoURL) {
          throw new Error(' Missing inofrmation from Google Account')
        }


        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
         
    
   }

  return(
    <BrowserRouter>
     <AuthContext.Provider value={{ user, signInWithGoogle }}>  
       <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />       
       </Routes>
      </AuthContext.Provider>       
    </BrowserRouter>
  );
}

export default App;
