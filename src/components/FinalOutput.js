import React, { useContext, useEffect, useState } from 'react'
import { Box } from "@mui/material"
import { DataProvider } from './ConextFile'

const FinalOutput = () => {
    const [src, setSrc] = useState('')
    const { js, css, html } = useContext(DataProvider);


    useEffect(() => {
        const timer = setTimeout(() => {
            setSrc(`
        <html>
          <body> ${html} </body>
          <style> ${css} </style>
          <script> ${js} </script>
        </html>
        
      `)}, 250);

        return () => {
            clearTimeout(timer)
        }
    }, [js, css, html])

    return (
        <Box style={{ height: "31vh" }}>
            <iframe
                srcDoc={src}
                title='Output'
                sandbox='allow-scripts'
                frameBorder={0}
                width={"100%"}
                height={"100%"}
            />

        </Box>
    )
}

export default FinalOutput
