import styled from "styled-components"
import GlobalStyles from "./Componentes/GlobalStyles/index"
import Cabecera from "./Componentes/Cabecera"
import CampoTexto from "./Componentes/CampoTexto"

const FondoGradiente = styled.div `
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height: 100vh;

`

function App() {

  return (
    <>
    <FondoGradiente>
    <GlobalStyles/>
    <CampoTexto/>
    <Cabecera/>
    </FondoGradiente>
    </>
  )
}

export default App
