import { useState } from "react";

export function Alo(){
    return (<div>
        <h1>Olá, React!</h1>
        <p>Estou alterando meu primeiro componente</p>
      </div>);

}

export function PlacarFutebol({nomeTimeA, nomeTimeB}){
    const [golsA, setGolsA] = useState(0);
    const [golsB, setGolsB] = useState(0);
 const botaoEstilo = {
    color: "white",
    fontWeight: "900",
    fontSize: "1.5rem",
    textTransform: "uppercase",
    padding: "10px 20px",
    backgroundColor: "red",
    border: "5px solid black",
    borderRadius: "15px",
    cursor: "pointer",
    textAlign: "center",
    display: "inline-block",
    animation: 'botao .3s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    transformOrigin: "bottom center"
};
    return(
        <div style={{
            border: '3px solid #2e7d32',
            borderRadius: '15px',
            padding: '20px',
            textAlign: 'center',
            backgroundColor: '#f1f8e9',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '400px',margin: '20px auto'
        }}>
            <h2 style={{color: '#1b5e20'}}>Placar do Jogo</h2>
            <div style={{display: "flex",  justifyContent: 'space-around', alignContent: 'center'}}>
                <div>
                    <h3>{nomeTimeA}</h3>
                    <h1 style={{fontSize: '48px', margin: '10px 0'}}>{golsA}</h1>
                    <button onClick={()=>setGolsA(golsA +1)} style={botaoEstilo}>GOL</button>
                </div>
                <h1 style={{margin: '0 20px'}}>X</h1>
                                <div>
                    <h3>{nomeTimeA}</h3>
                    <h1 style={{fontSize: '48px', margin: '10px 0'}}>{golsB}</h1>
                    <button onClick={()=>setGolsB(golsB +1)} style={botaoEstilo}>GOL</button>
                </div>
            </div>
        </div>
    )

}

export function Saudacao(){
    return (
        <div style={{
            backgroundColor: '#ff00ff',
            padding:'10px',
            borderRadius: '8px',
            marginBottom: '10px'
        }}>
            <h2 style={{
                color: '#00ffff'
            }}>Olá alunos :D</h2>
            <p style={{
                color: '#f2cabb'
            }}>Este componente foi criado separadamente.</p>
        </div>
    )

}


export function Perfil({nome, cargo}){
    return (
       <div style={{
            border: '2px solid #2e7d32',
            borderRadius: '12px',
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#f1f8e9',
            boxShadow: '2px 2px 5px rgba(0,0,0,.1)'
       }}>
            <h3 style={{margin:'0 0 5px 0', color:'#1b5e20'}}>Nome: {nome}</h3>
            <p style={{margin: 0, color: '#444'}}>Cargo: {cargo}</p>
       </div>

    )

}
export function Painel(){
    const [texto, setTexto] = useState('');
    return (
        <div style={{background: '#f9f9f9', padding:'15px', border: '1px dashed #666', marginTop: '20px'}}>
            <h4>Escreva uma mensgem:</h4>
            <input type="text" placeholder='Digite algo' onChange={(e)=>setTexto(e.target.value)} style={{
                padding: '8px',
                width: '80%'
            }} />

            <p>O que você digitou: <span style={{color:"red"}}>{texto}</span></p>
        </div>
    )
}

export function Componente({nome,hobby, idade, animName, cor}){
    return(<div style={{backgroundColor: cor, animation: `alternate-reverse ease-in infinite .2s ${animName} `}}>
            <h1>Informações</h1>
            <p>Nome: {nome}</p>
            <p>Hobby: {hobby}</p>
            <p>Idade: {idade}</p>
            

        </div>
    )
}
