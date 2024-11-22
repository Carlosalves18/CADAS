import {Link} from 'react-router-dom'
import {HeaderP,PHOME,Img} from "./header.js"


const Header = () => {
    return(

        <HeaderP>
            <Img src="./public/LOG-removebg-preview.png"/>
            
            <Link to='tabela'><PHOME>TABELA DE REGISTRO</PHOME></Link>
           
            <Link to='cadastro'><PHOME>CADASTRO DE ATENDIMENTO</PHOME> </Link>
            
            <Link to='grafico'><PHOME>GRÁFICOS DE ATENDIMENTOS</PHOME></Link>
        </HeaderP>
    
    
    )
}
export default Header;