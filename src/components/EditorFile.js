import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"


const Tag = styled(Box)(({ theme }) => ({
    height: "2px",
    width: "2px",
    placeContent: "center",
    display: "flex",
    borderRadius: "5px",
    padding: "10px",
    color: "black",
    fontWeight: "650",
    alignItems: "center",
    marginRight: "4px"
}))

const Heading = styled(Box)(({ theme }) => ({
    display: "flex",
    backgroundColor: '#1d1e22',
    color: "#aaaebc",
    padding: "1rem"
}))

const Header = styled(Box)(({ theme }) => ({
    display: "flex",
    backgroundColor: '#444857',
    color: "white",
    justifyContent: "space-between",

}))

const ContainerB = styled(Box)(({ theme }) => ({
    display: "flex",
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: "column",
    padding: " 0 1rem 0 0"

}))

const EditorFile = (props) => {

    const [ open , setOpen] = useState(true)

    const { heading, logo, LogoColor, value, onChange , language } = props

    function handleChange(editor, data, value) {
            onChange(value)
    }

    return (
        <ContainerB style={ open ? null : { flexGrow : "0" }}  >
            <Header>
                <Heading >
                    <Tag style={{ backgroundColor: LogoColor }} component={"span"} >
                        {logo}
                    </Tag>
                    {heading}
                </Heading>
                <CloseFullscreenIcon style={{ alignSelf : "center" }}  onClick={()=> setOpen(!open)} />
            </Header>

            <Box>
                <ControlledEditor
                    value={value}
                    className='controlled-editor'
                    options={{
                        readOnly: false,
                         mode : language ,
                        lineNumbers: true,
                        theme: "material",

                    }}
                    onBeforeChange={handleChange}

                />

            </Box>
        </ContainerB>
    )
}

export default EditorFile
