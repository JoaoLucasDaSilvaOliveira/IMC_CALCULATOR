import "./Inputs.css"
import "./Calculo.css"
import { useEffect, useState } from "react";
/* eslint-disable react/prop-types */
const Calculo = ({request, altura, peso}) => {
    const imc = (peso / (altura * altura)).toFixed(1)
    const [estado, setEstado] = useState("");
    const [situacao, setSituacao] = useState("");
    const [infoClass, setInfoClass] = useState("");
    useEffect(()=>{
        const verifica = (imc) =>{
            setEstado(imc)
            if (imc < 18.5){
                setSituacao("Magreza")
                setInfoClass("magreza")
            } else if (imc >= 18.5 && imc <= 24.9){
                setSituacao("Normal")
                setInfoClass("normal")
            } else if (imc >= 25 && imc <= 29.9){
                setSituacao("SobrePeso")
                setInfoClass("obes")
            } else if (imc >= 30 && imc <= 39.9){
                setSituacao("Obesidade")
                setInfoClass("obes")
            } else {
                setSituacao("Obesidade Grave")
                setInfoClass("obes")
            }
        };
        verifica(imc)
    }, [imc, altura, peso]);
    const handleCleanThis = () =>{
        setEstado("")
        setSituacao("")
        setInfoClass("")
    }
    return (
        <div>
            <h1>Seu IMC: <span className={infoClass}>{estado}</span></h1>
            <p>Situação atual: <span className={infoClass}>{situacao}</span></p>
            <h5>Confira as classificações</h5>
            <table>
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Obesidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>18,5 a 24,9</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>25,0 a 29,9</td>
                        <td>Sobrepeso</td>
                        <td>I</td>
                    </tr>
                    <tr>
                        <td>30,0 a 39,9</td>
                        <td>Obesidade</td>
                        <td>II</td>
                    </tr>
                    <tr>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                        <td>III</td>
                    </tr>
                </tbody>
            </table>
            <button className="backBut" onClick={() =>{request(); handleCleanThis()}}>Voltar</button>
        </div>
    )
}

export default Calculo
