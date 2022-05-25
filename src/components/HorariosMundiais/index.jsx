import axios from "axios"
import { useState, useEffect } from "react"
import { Container, Content } from "./style"

// Imagens
import hungria from "../../assets/images/países/hungary.png"
import paisesBaixos from "../../assets/images/países/paises-baixos.png"
import ucrania from "../../assets/images/países/ucrania.png"
import portugal from "../../assets/images/países/portugal.png"
import africa from "../../assets/images/países/africa-do-sul.png"
import estadosUnidos from "../../assets/images/países/estados-unidos.png"
import panama from "../../assets/images/países/panama.png"

// Estilos externos
import { estilo1, estilo2 } from "../../utils/estilos"

export const HorariosMundialBudapest = ({ theme }) => {
    
    const [horarioBudapeste, setHorarioBudapeste] = useState("")
    /**
     * Traz o horário de outros países (neste caso Budapest)
     * @return horário
    */
    useEffect(() => {
        const horarioBudapeste = async () => {
            const { data } = await axios.get('https://worldtimeapi.org/api/timezone/Europe/Budapest')
            setHorarioBudapeste(data.datetime.substring(11, 19))
        }
        
        setInterval(() => {
            horarioBudapeste();
        }, 1000)
        
        }, [])


    return (
        <>
        <Container style={theme === 'dark' ? estilo1 : estilo2}>
            <Content >
            <h2>Budapeste</h2>
            <img src={hungria} alt="Hungria" />
            </Content>
            <hr style={{borderTop: "2px solid #555", width: "254px"}}/>
            <h1>{horarioBudapeste}</h1>
        </Container>
        </>
    )
}


export const HorariosMundialAmsterdam = ({ theme }) => {
    
    const [horarioAmsterdam, setHorarioAmsterdam] = useState("")
    /**
     * Traz o horário de outros países
     * @return horário
    */
    useEffect(() => {
        const horarioBudapeste = async () => {
            const { data } = await axios.get('https://worldtimeapi.org/api/timezone/Europe/Amsterdam')
            setHorarioAmsterdam(data.datetime.substring(11, 19))
        }
        
        setInterval(() => {
            horarioBudapeste();
        }, 1000)
        
        }, [])


    return (
        <>
        <Container style={theme === 'dark' ? estilo1 : estilo2}>
            <Content >
            <h2>Amsterdam</h2>
            <img src={paisesBaixos} alt="Holanda" />
            </Content>
            <hr style={{borderTop: "2px solid #555", width: "254px"}}/>
            <h1>{horarioAmsterdam}</h1>
        </Container>
        </>
    )
}


export const HorariosMundialKiev = ({ theme }) => {
    
    const [horarioKiev, setHorarioKiev] = useState("")
    /**
     * Traz o horário de outros países
     * @return horário
    */
    useEffect(() => {
        const horarioBudapeste = async () => {
            const { data } = await axios.get('https://worldtimeapi.org/api/timezone/Europe/Kiev')
            setHorarioKiev(data.datetime.substring(11, 19))
        }
        
        setInterval(() => {
            horarioBudapeste();
        }, 1000)
        
        }, [])


    return (
        <>
        <Container style={theme === 'dark' ? estilo1 : estilo2}>
            <Content >
            <h2>Kiev</h2>
            <img src={ucrania} alt="Kiev" />
            </Content>
            <hr style={{borderTop: "2px solid #555", width: "254px"}}/>
            <h1>{horarioKiev}</h1>
        </Container>
        </>
    )
}


export const HorariosMundialLisbon = ({ theme }) => {
    
    const [horarioLisbon, setHorarioLisbon] = useState("")
    /**
     * Traz o horário de outros países
     * @return horário
    */
    useEffect(() => {
        const horarioBudapeste = async () => {
            const { data } = await axios.get('https://worldtimeapi.org/api/timezone/Europe/Lisbon')
            setHorarioLisbon(data.datetime.substring(11, 19))
        }
        
        setInterval(() => {
            horarioBudapeste();
        }, 1000)
        
        }, [])


    return (
        <>
        <Container style={theme === 'dark' ? estilo1 : estilo2}>
            <Content >
            <h2>Lisboa</h2>
            <img src={portugal} alt="Lisbon" />
            </Content>
            <hr style={{borderTop: "2px solid #555", width: "254px"}}/>
            <h1>{horarioLisbon}</h1>
        </Container>
        </>
    )
}

export const HorariosMundialJohannesburg = ({ theme }) => {
    
    const [horarioJohannesburg, setHorarioJohannesburg] = useState("")
    /**
     * Traz o horário de outros países
     * @return horário
    */
    useEffect(() => {
        const horarioBudapeste = async () => {
            const { data } = await axios.get('https://worldtimeapi.org/api/timezone/Africa/Johannesburg')
            setHorarioJohannesburg(data.datetime.substring(11, 19))
        }
        
        setInterval(() => {
            horarioBudapeste();
        }, 1000)
        
        }, [])


    return (
        <>
        <Container style={theme === 'dark' ? estilo1 : estilo2}>
            <Content >
            <h2>Johannesburg</h2>
            <img src={africa} alt="Johannesburg" />
            </Content>
            <hr style={{borderTop: "2px solid #555", width: "254px"}}/>
            <h1>{horarioJohannesburg}</h1>
        </Container>
        </>
    )
}

export const HorariosMundialNewYork = ({ theme }) => {
    
    const [horarioNewYork, setHorarioNewYork] = useState("")
    /**
     * Traz o horário de outros países
     * @return horário
    */
    useEffect(() => {
        const horarioBudapeste = async () => {
            const { data } = await axios.get('https://worldtimeapi.org/api/timezone/America/New_York')
            setHorarioNewYork(data.datetime.substring(11, 19))
        }
        
        setInterval(() => {
            horarioBudapeste();
        }, 1000)
        
        }, [])


    return (
        <>
        <Container style={theme === 'dark' ? estilo1 : estilo2}>
            <Content >
            <h2>NewYork</h2>
            <img src={estadosUnidos} alt="NewYork" />
            </Content>
            <hr style={{borderTop: "2px solid #555", width: "254px"}}/>
            <h1>{horarioNewYork}</h1>
        </Container>
        </>
    )
}


export const HorariosMundialPanama = ({ theme }) => {
    
    const [horarioPanama, setHorarioPanama] = useState("")
    /**
     * Traz o horário de outros países
     * @return horário
    */
    useEffect(() => {
        const horarioBudapeste = async () => {
            const { data } = await axios.get('https://worldtimeapi.org/api/timezone/America/Panama')
            setHorarioPanama(data.datetime.substring(11, 19))
        }
        
        setInterval(() => {
            horarioBudapeste();
        }, 1000)
        
        }, [])


    return (
        <>
        <Container style={theme === 'dark' ? estilo1 : estilo2}>
            <Content >
            <h2>Panama</h2>
            <img src={panama} alt="Panama" />
            </Content>
            <hr style={{borderTop: "2px solid #555", width: "254px"}}/>
            <h1>{horarioPanama}</h1>
        </Container>
        </>
    )
}
