import './style.css'
import Voo from './voo'
import Render from './ImageList'
import LittleDiv from './littleDiv';

function App() {
  return (
    <div className="App">
      <Button content="clica em mim por favor"/>
      <h1>Hello World!</h1>
      <h1>Hello World!</h1>
      <List />
      <ListaImg/>
      <Voo/>
      <Receptor/>
      <Render />
      <LittleDiv />
    </div>
  );
}

function Button(props) {
  const handleClick = () => {
    const btn = document.querySelector('button')
    const body = document.querySelector('body')
    if(body.style.background === 'lightcoral'){
      body.style.background = '#fff'
      btn.style.background = 'lightcoral'
    } else {
      body.style.background = 'lightcoral'
      btn.style.background = '#fff'
    }
  }

  return(
    <button 
      style={{padding: ".5rem 2rem"}}
      type='submite' 
      onClick={handleClick}
    >
      {props.content}
    </button>
  )
}

const ListItem = (props) => {
  return(
    <li>{props.conteudo}</li>
  )
}

const List = () => {
  const lista = [
    "Hello World",
    "Hello",
    "World",
    "!!!!"
  ]
  
  return (
    <ul>
      {lista.map(valor => {
        return <ListItem key={valor} conteudo={valor}/>
      })}
    </ul>
  )
}

function ListaImg(){
  const imgs = [
    'https://images.unsplash.com/photo-1564934304050-e9bb87a29c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1559251606-c623743a6d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  ]
  
  return(
    <div className='imgs'>
      {imgs.map(valor => {
        return <ListImages key={valor} conteudo={valor}/>
      } )}
    </div>
  )
}

const ListImages = (props) => {
  return(
    <img src={props.conteudo} alt=''/>
  )
}

const exemploDeCoisas = [
  {
    id: '1',
    nome:'string',
    details:[
      {
        idDetails:"11",
        nome:'details from id-1',
        local:"Inside id 1 archived in the details sections"
      }
    ]
  },
  {
    id: '2',
    nome:'string',
    details:[
      {
        idDetails:"21",
        nome:'details from id-2',
        local:"Inside id 2 archived in the details sections"
      }
    ]
  },
  {
    id: '3',
    nome:'string',
    details:[
      {
        idDetails:"31",
        nome:'details from id-3',
        local:"Inside id 3 archived in the details sections"
      }
    ]
  },
  {
    id: '4',
    nome:'string',
    details:[
      {
        idDetails:"41",
        nome:'details from id-4',
        local:"Inside id 4 archived in the details sections"
      }
    ]
  },
  {
    id: '5',
    nome:'string',
    details:[
      {
        idDetails:"51",
        nome:'details from id-5',
        local:"Inside id 5 archived in the details sections"
      }
    ]
  }
]

function Receptor(itens) {
  return(
    <div className='stringTest'>
      {exemploDeCoisas.map((itens) => (
        <FuncaoTrue key={itens.id} id={itens.id} nome={itens.nome} details={itens.details} />
      ))}
    </div>  
  )
}

function FuncaoTrue(props) {
  return(
      <div >
        <h1>{props.id}</h1>
        <h2>{props.nome}</h2>
        <ListDetails details={props.details}/>
      </div>
  )
}

function ListDetails({details}) {
  return(
   <ul>
     {details.map(lista => (
      <li>
        {lista.idDetails}
      </li>        
    ))}
     {details.map(lista => (
      <li>
        {lista.nome}
      </li>        
    ))}
     {details.map(lista => (
      <li>
        {lista.local}
      </li>        
    ))}

   </ul>
  )
}
export default App;
