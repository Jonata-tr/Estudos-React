const images = [
  {
    categoria:'Anime',
    details:[
      {
        id:1,
        src1: 'https://images4.alphacoders.com/640/640956.jpg',
        src2: 'https://wallpapercave.com/wp/wp5810767.jpg',
        src3: 'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        src4: 'https://wallake.org/uploads/posts/2022-06/1656399841_1749-1.webp',
      }
    ]
  },
  {
    categoria:'Jogos',
    details:[
      {
        id:2,
        src: 'https://img3.gelbooru.com//samples/d4/b2/sample_d4b26f3b43637a08f9d9a890ed229ba1.jpg',
        src1: 'https://img3.gelbooru.com//samples/d4/b2/sample_d4b26f3b43637a08f9d9a890ed229ba1.jpg',
        src2: 'https://img3.gelbooru.com//samples/d4/b2/sample_d4b26f3b43637a08f9d9a890ed229ba1.jpg',
        src3: 'https://img3.gelbooru.com//samples/d4/b2/sample_d4b26f3b43637a08f9d9a890ed229ba1.jpg',
        src4: 'https://img3.gelbooru.com//samples/d4/b2/sample_d4b26f3b43637a08f9d9a890ed229ba1.jpg',
      }
    ]
  },
  {
    categoria:'Filmes',
    details:[
      {
        id:3,
        src1: 'https://images7.alphacoders.com/550/thumb-1920-550739.jpg',
        src2: 'https://img.elo7.com.br/product/original/36B4045/painel-festa-200x100cm-bee-movie-festalinda.jpg',
        src3: 'https://images7.alphacoders.com/116/thumb-1920-1165584.jpg',
        src4: 'https://i.pinimg.com/originals/d6/11/ec/d611ec500a3c282377031f6e87663186.jpg'
      }
    ]
  },
  {
    categoria:'Paisagem',
   details:[
      {
        id:4,
        src1: 'https://wallpaperaccess.com/full/109691.jpg',
        src2: 'https://p4.wallpaperbetter.com/wallpaper/610/123/769/lofoten-islands-norway-for-desktop-2880-x-1800-wallpaper-preview.jpg',
        src3: 'https://wallpaperaccess.com/full/2344342.jpg',
        src4: 'https://img3.gelbooru.com//images/28/f2/28f2621fd7f13e61e94e7992d99ee394.jpeg'
      }
    ]
  }
]

console.log(images)

function ListRender() {
  
  return(
    <div className="categorias">
      {images.map(imgs => (
        <ShowList categoria={imgs.categoria} key={imgs.categoria}>
          <ListOptions details={imgs.details}/>
        </ShowList>
      ))}
    </div>
  )
}


const ShowList = ({categoria, children}) => {
  const display = document.querySelector(".img");
  

  
  const mouseHandle2 = () => {
    let body = document.querySelector("body").style.backgroundImage = "url('https://img3.gelbooru.com//samples/52/8c/sample_528c4fcdde6d77d98992f77da47f0855.jpg')"
  }
  
  return(
    <div className="options">
      <div>
        <h3 id="container">{categoria}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

function  ListOptions({details}) {
  const body = document.querySelector('body')
  const mouseHandle = (valor) => {
    switch (valor) {
      case 1:
        body.style.backgroundImage = `url(${details.src1})`
        break;
    
      default:
        break;
    }
  }

  return(
    <div className="aa">
      {details.map(selection => (
        <div className="img display">
          <img 
            key={selection.src1} 
            src={selection.src1} alt='' 
            onClick={()  => {
              body.style.backgroundImage = `url(${selection.src1})`
             
            }}/>
          <img key={selection.src2} src={selection.src2} alt='' onClick={()  => {
            body.style.backgroundImage = `url(${selection.src2})`
          }}/>
          <img key={selection.src3} src={selection.src3} alt='' onClick={()  => {
            body.style.backgroundImage = `url(${selection.src3})`
          }}/>
          <img key={selection.src4} src={selection.src4} alt='' onClick={()  => {
            body.style.backgroundImage = `url(${selection.src4})`
          }}/>
        </div>
      ))}
    </div>
    
  )
}

export default ListRender