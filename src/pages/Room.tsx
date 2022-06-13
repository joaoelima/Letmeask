import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/button';

export function Room() {
    return (
        <div id="page-room">
           <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>codigo</div>
                </div>
           </header>

           <main className="content">
                <div className="room-tittle">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>
                    <textarea 
                        placeholder="O que voce quer perguntar?"                    
                    />
                <form>
                    <div className="form-footer">
                        <span>Para enviar uma pergunta, <button>faça seu login</button>,</span>
                        <Button></Button>
                    </div>
                </form>
           </main>
        </div>
    );
}