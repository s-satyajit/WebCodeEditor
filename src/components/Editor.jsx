import React from "react";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`
const Header = styled(Box)`
    background: #060606;
    display: flex;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Editor = () => {
    return (
        <Box>
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: 'red',
                            height: '20px',
                            width: '20px',
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2
                        }}
                    >/</Box>
                    HTML
                </Heading>
                <CloseFullscreenIcon />
            </Header>
        </Box>
    )
}

export default Editor