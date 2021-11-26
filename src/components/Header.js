import styled from 'styled-components'

function Header() {
    return(
        <Home>
            <a href = "#">Israel Musa</a>
        </Home>
    )
}
export default Header


const Home = styled.div`
    position: relative;
    justify-content: Left;
    a {
        text-align: start;
        font-family: 'Geo';
        font-size: 4em;
        font-weight: normal;
        color: #C7CCDB;
    }
`