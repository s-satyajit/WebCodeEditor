import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';

const Container = styled(AppBar)`
        background: #060606;
        height: 9vh;
    `

const Header = () => {

    const logo = {TerminalIcon};


    return (
        <Container position="static">
            <Toolbar>
                {/* <img src={logo} alt="logo" style={{width: 40}} /> */}
                <TerminalIcon 
                fontSize="large"
                style={{alignSelf: 'center'}}
                />
            </Toolbar>
        </Container>
    )
}

export default Header;