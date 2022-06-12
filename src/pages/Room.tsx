import logoImg from '../assets/images/logo.svg'

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
           </main>
        </div>
    );
}