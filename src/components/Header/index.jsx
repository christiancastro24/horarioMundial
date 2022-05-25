import { Container } from "./style"
import OnOff from "../../assets/images/themes/onoff.png"

export const Header = ({ toggleTheme }) => {
     
    return (
        <Container>
            <h1>Relógio Online</h1>
            <img src={OnOff} onClick={toggleTheme} alt="Apagada" />
        </Container>
    )
}