import styled from "styled-components"


const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
padding: 60px 0;
img{
    width: 212px;
    align-items: center;
}
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo" />
    </HeaderEstilizado>
}

export default Cabecera