import { styled } from "styled-components"
//import search from './search.png'


const ContainerEstilizado = styled.div`
    display: flex;
    justify-content: center;
    align-items:center
`
const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    margin: 20px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    outline: none;
`

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado type="text" placeholder="Busca una foto" {...props} />
        </ContainerEstilizado>
    )
}
export default CampoTexto