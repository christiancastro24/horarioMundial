import { useState, useEffect } from "react"
import { Cidade, Container, DataAtual } from "./style"
import axios from "axios"
import { diasDaSemana, meses } from "../../utils/diasEmeses"
import { HorariosMundialAmsterdam, HorariosMundialBudapest, HorariosMundialJohannesburg, HorariosMundialKiev, HorariosMundialLisbon, HorariosMundialNewYork, HorariosMundialPanama } from "../HorariosMundiais"

export const Relogio = ({ theme }) => {

    const [hora, setHora] = useState("")
    const [dataCity, setDataCity] = useState("")
    const [temperatura, setTemperatura] = useState("")
    
    /**
     * Traz o horário atual do brasil
     * @return horário de brasília
    */
    const mostrarHora = () =>  new Date().toLocaleTimeString('pt-BR')

    const funcInterval = () => {
        setHora(mostrarHora())
    }

    setInterval(funcInterval, 1000)

    useEffect(() => funcInterval())

    // Troca o títle da página, inserindo hora e temperatura
    useEffect(() => {
        document.title = `${hora} ~ ${temperatura}`
    }, [hora, temperatura])
    

    /**
     * Traz a cidade da pessoa (buscando pelo ip)
     * @return cidade
    */
    useEffect(() => {
        const handleSeeData = async () => {
            const { data } = await axios.get('http://ip-api.com/json')
            setDataCity(data.city)
        }

        handleSeeData()
    }, [])
    

    /**
   * Traz a temperatura da cidade
   * @return temperatura
   */
    useEffect(() => {
        const dadosTempo = async () => {
            const { data } = await axios.get(`https://goweather.herokuapp.com/weather/${dataCity}`)
            setTemperatura(data.temperature)
        }

        dadosTempo();
    }, [dataCity])
    

    const getYear = new Date().getFullYear();
    const dataAtual = new Date()
    const diaAtual = new Date().getDate()
    
    return (
        <>
        <Container>
            <DataAtual>
            <h1>{hora}</h1>
            <Cidade>
                <span>{dataCity},</span>
                <span>{diasDaSemana[dataAtual.getDay()]} {diaAtual} de {meses[dataAtual.getMonth()]} de {getYear},</span>  
                <span>{temperatura}</span>
            </Cidade>
            </DataAtual>
            <br />
        </Container>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <HorariosMundialBudapest theme={theme} />
                <HorariosMundialAmsterdam theme={theme} />
                <HorariosMundialKiev theme={theme} />
                <HorariosMundialLisbon theme={theme} />
                <HorariosMundialJohannesburg theme={theme} />
                <HorariosMundialNewYork theme={theme} />
                <HorariosMundialPanama theme={theme} />
            </div>
        </>
    )
}