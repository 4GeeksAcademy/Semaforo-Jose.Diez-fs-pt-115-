import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [encendido, setEncendido ] = useState("amarilla")

	return (

		<div className="semaforo">
			<div
			onClick={()=> setEncendido("roja")} 
			className={"luz roja " + (encendido === "roja" ? "glow" : " ")}></div>
			<div 
			onClick={()=> setEncendido("amarilla")} 
			className={"luz amarilla " + (encendido === "amarilla" ? "glow" : " ")}></div>
			<div 
			onClick={()=> setEncendido("verde")} 
			className={"luz verde " + (encendido === "verde" ? "glow" : " ")}></div>

			<button 

			
			onClick={()=> {
              const colores = ["roja","amarilla", "verde"];
              const colorAleatorio = colores[Math.floor(Math.random()*colores.length)];
              setEncendido(colorAleatorio);
			}
			}
			className="btn btn-danger"></button>
		</div>




	);
};

export default Home;