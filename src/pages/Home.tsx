import {useNavigate } from 'react-router-dom';

import {AuthContext}  from '../App';
import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/button';

import '../styles/auth.scss';
import { useContext } from 'react';


//useHistory mudou para useNavigate na biblioteca do React-router
export function Home(){
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useContext(AuthContext)
    

    async function handleCreateRoom() {
        if (!user) {
          await  signInWithGoogle()
        }

        navigate('/rooms/new');
               
    } 
    return(
        <div id="page-auth">
            <aside>
               <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
               <strong>Crie salas de Q&amp;A ao-vivo</strong>
               <p>Tire duvidas da sua audiencia em tempo real.</p> 
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do google"/>
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}