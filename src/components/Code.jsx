import React, { useContext } from "react";
import Editor from "./Editor";
import { DataContext } from "../context/DataProvider";

import { Box, styled } from "@mui/material";

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
`

const Code = () => {
    
    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext)

    return (
        <Container>
            <Editor 
                language="HTML"
                icon="/"
                color="#FF3C41"
                value={html}
                onChange={setHtml}
            />
            <Editor 
                language="CSS"
                icon="*"
                color="#0EBEFF"
                value={css}
                onChange={(setCss)}
            />
            <Editor 
                language="JavaScript"
                icon="()"
                color="#FCD000"
                value={js}
                onChange={setJs}
            />
        </Container>
    )
}

export default Code