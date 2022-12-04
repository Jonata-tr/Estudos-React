import anime1 from "./img/anime1.jpg";
import anime2 from "./img/anime2.jpg";
import anime3 from "./img/anime3.jpg";
import anime4 from "./img/anime4.jpg";

const list = [
  {
    id: "anime1",
    src: anime1,
    details: "Wallpaper: 1",
    number: 1,
  },
  {
    id: "anime2",
    src: anime2,
    details: "Wallpaper: 2",
    number: 2,
  },
  {
    id: "anime3",
    src: anime3,
    details: "Wallpaper: 3",
    number: 3,
  },
  {
    id: "anime4",
    src: anime4,
    details: "Wallpaper: 4",
    number: 4,
  },
];

function LittleDiv(props) {

  return (
      <DivContent name={props.details}/>
  );
}

function DivContent(props) {
  let teste
  const handleClick = (number) => {
    const bgBody = document.querySelector(".littleDiv");
    const nameHolder = document.querySelector("nome")
    console.log(list)
    switch (number) {
      case 1:
        bgBody.style.backgroundImage = `url(${anime1})`;
        teste = 'SoloLeveling'
        break;
      case 2:
        bgBody.style.backgroundImage = `url(${anime2})`;
        break;
      case 3:
        bgBody.style.backgroundImage = `url(${anime3})`;

        break;
      case 4:
        bgBody.style.backgroundImage = `url(${anime4})`;
        break;

      default:
        break;
    }
  };


  return(
    <section className="littleDiv">
        <h1 id='nome'>{teste}</h1>
      <div className="background">
        {list.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.details}
            style={{ width: "150px", height: "88px" }}
            onClick={() => handleClick(img.number)}
          />
        ))}
      </div>
    </section>
  )
}

export default LittleDiv;
