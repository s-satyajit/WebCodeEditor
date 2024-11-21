import React, {useContext, useState, useEffect} from "react";
import { DataContext } from "../context/DataProvider";
import { Box, styled } from "@mui/material";

const Result = () => {

    const Container = styled(Box)`
        height: 50vh;
    `

    const [src, setSrc] = useState('')

    const {html, css, js} = useContext(DataContext)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrc(srcCode)
        }, [1000])

        return () => clearTimeout(timeOut)
    }, [html, css, js])

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    return (
        <Container>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                width='100%'
                height='100%'
                frameBorder={0}
            />
        </Container>
    )
}

export default Result;