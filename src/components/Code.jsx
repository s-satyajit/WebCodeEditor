import React from "react";
import Editor from "./Editor";

import { Box, styled } from "@mui/material";

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    // height: 50vh;
`

const Code = () => {
    return (
        <Container>
            <Editor 
                language="HTML"
                icon="/"
                color="#FF3C41"
            />
            <Editor 
                language="CSS"
                icon="*"
                color="#0EBEFF"
            />
            <Editor 
                language="JavaScript"
                icon="()"
                color="#FCD000"
            />
        </Container>
    )
}

export default Code