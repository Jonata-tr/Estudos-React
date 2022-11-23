// import React, {useState} from "react"

// // class Assentos extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       disabled:false
// //     }
// //   }

// //   handleClick() {
// //     this.setState({
// //       disabled:true
// //     })
// //   }

// //   render() {
// //     return(
// //     <button 
// //       className="assento"
// //       type="button"
// //       disabled={this.state.disabled}
// //       onClick={() => this.handleClick()}
// //     >
// //       {this.state.disabled ? "X":this.props.pos}
// //     </button>
// //     )
// //   }
// // }

// function Assentos(props){
//   const [ disabled, setDisabled ] = useState(false);

//   const handleClick = () => {
//    setDisabled(true) 
//   }

//   return(
//     <button 
//       className="assento"
//       type="button"
//       disabled={disabled}
//       onClick={() => handleClick()}
//     >
//       {disabled ? "X" : props.pos}
//     </button>
//   )
// }

// function Fileira(props){
//   return(
//     <div className="fileira">
//       {[0,1,2,3].map((pos, index) => (
//         <Assentos key={index}  pos={props.de + pos}/>
//         ))}
//     </div>
//   )
// }

// function AssentosOnibus() {
//   return(
//     <div className="container">
//       {[1,5,9,13,17].map((pos, index) => (
//         <Fileira key={index} de={pos}/>
//       ))}
//     </div>
//   )
// }

// export default AssentosOnibus