import { useState } from "react"
import Calculo from "./Calculo";
import "./Inputs.css"

const Inputs = () => {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [showcalculo, setShowcalculo] = useState(false);
    const [erro, setErro] = useState(false);
    const handleClean = () =>{
        setAltura("")
        setPeso("")
    }
    const validDigits = (text) => {
        return text.replace (/[^0-9,]/g, "")
    }
    const handleAltura = (e) => {
        setErro(false)
        const uptdatedValue = validDigits(e.target.value)
        setAltura(uptdatedValue)
    }
    const handlePeso = (e) => {
        setErro(false)
        const uptdatedValue = validDigits(e.target.value)
        setPeso(uptdatedValue)
    }
    const handleShow = () => {
        if (peso == ""|| altura == ""){
            setErro(true)
            setShowcalculo(false)
        } else {
            setShowcalculo(!showcalculo)
        }
    }
    const floatAltura = altura.replace(",", ".")
    const floatPeso = peso.replace(",", ".")
    //formula IMC = peso / (altura * altura)
    //peso em kg e altura em metros
    //exemplo 70kg / (1,75 * 1,75) = 22,86
  return (
    <>
        {!showcalculo && (
            <div>
                <h2>Caluladora de IMC</h2>
                <div className="inputs">
                    <label>
                        <p>Altura:</p>
                        <input type="text" name="altura" placeholder="Exemplo 1,75"
                        value={altura}
                        onChange={(e)=>{handleAltura(e)}}
                        />
                    </label>
                    <label>
                        <p>Peso:</p>
                        <input type="text" name="peso" placeholder="Exemplo 70,5"
                        value={peso}
                        onChange={(e)=>{handlePeso(e)}}
                        />
                    </label>
                </div>
                {erro && <p style={{color: "#FD0133", margin: "20px 0 0 0"}}>Preencha os campos vazios</p>}  
                <div className="but">
                    <button onClick={handleShow}>Calcular</button>
                    <button onClick={handleClean} className="cleanBut">Limpar</button>
                </div>
            </div>
        )}
        {showcalculo && <Calculo request={() => {setShowcalculo(false); handleClean()}} altura={floatAltura} peso={floatPeso}/>}
    </>
  )
}

export default Inputs
