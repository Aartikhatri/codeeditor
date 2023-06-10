import React, { useContext } from 'react'
import { styled } from '@mui/material'
import EditorFile from './EditorFile'
import { DataProvider } from './ConextFile'

const Container = styled('div')(({theme})=> ({
    marginTop : "4rem" ,
    display : "flex" , 
    backgroundColor : "black"
}))

const CodeEditor = () => {
     const { html , setHtml , css , setCss , js , setJs } = useContext(DataProvider)

  return (
    <Container>
           <EditorFile heading="HTML" logo="/" LogoColor="red" language="xml" value={html} onChange={setHtml} />
           <EditorFile heading="CSS"  logo="*" LogoColor="cyan" language="css" value={css} onChange={setCss} />
           <EditorFile heading="JS" logo="{}" LogoColor="yellow" language="javascript" value={js} onChange={setJs} />

    </Container>
  )
}

export default CodeEditor
