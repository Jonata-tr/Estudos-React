import { Children } from 'react'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'

const lista = [
    {
    id:'image1',
    name:"White Controler",
    details:[
        {   nome:'image1',
            contexto:'não sei',
            img: image1
        }
    ]},
    {
    id:'image2',
    name:"Cunstom Controler",
    details:[
        {   nome:'image1',
            contexto:'não sei',
            img: image2
        }
    ]},
    {
    id:'image3',
    name:"Red Ligth Controler",
    details:[
        {   nome:'image1',
            contexto:'não sei',
            img: image3
        }
    ]}
]

// Primeiro fazer a function que renderiza tudo
// Depois fazer a function que leva o conteudo que vai ser renderizado

function Render() {
    return(
        <main className='aaa'>
            {lista.map(images => (
                <ShowImages key={images.id} name={images.name}>
                    <ShowImagesDetails details={images.details}/>
                {/*
                    Por padrão ao parsamos valores para as functions
                    o react cria uma lista, então o que ta aqui em cima
                    na verdade é isso:
                    images = {
                        name = "exemplo"
                        children = <ShowImagesDetaols>
                    }
                    Então para renderizar o elemento children, basta chamar
                    o props.children. Ou usar a desestruturação e chamar
                    apenas o children.
                */}
                </ShowImages>
            ))}
        </main>
    )
}

function  ShowImages({name, children}) {
    return(
        <section className='ImageList'>
            <div>
                <h3>{name}</h3>
            </div>
            <div>
                <ul>
                    {children}
                </ul>
            </div>
        </section>
    )
}

function ShowImagesDetails({details}) {
    return(
        <li>
        {details.map(detail => (
            <img src={detail.img} alt=''/>
            ))}
        </li> 
    )
}

export default Render;
