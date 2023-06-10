import React from 'react'
import { AppBar , Toolbar , styled } from '@mui/material'

  const Container = styled(AppBar)(({theme})=> ({
    backgroundColor : 'black' ,
    color : "white"  ,
  })) 

  
  const Image = styled("img")(({theme})=> ({
   height : "4rem" ,
   width : "4rem"
  })) 


const Header = () => {
    const logo = "https://icon-library.com/images/codepen-icon/codepen-icon-26.jpg"
  return (
    <div>
        <Container  >
            <Toolbar >
         <Image src={logo} alt="imageLogo" />

            </Toolbar>
        </Container>
    </div>
  )
}

export default Header
