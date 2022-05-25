import { Header } from "../../components/Header"
import { Relogio } from "../../components/Relogio"

export const Home = ({ toggleTheme, theme }) => {
    return (
        <>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Relogio theme={theme} /> 
        </>
    )
}