import Sidenav from "../components/layout/Sidenav";
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from "react";
import { Container, Grid, Paper, Toolbar } from "@mui/material";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));


function Home() {

    return (
    <>
        <Box sx={{ display: 'flex' }}>
            <Sidenav />
            <Box component="main" sx={{ backgroundColor: (theme) => theme.palette.mode === 'light'
                                                                    ? theme.palette.grey[100]
                                                                    : theme.palette.grey[900],
                                                                    flexGrow: 1,
                                                                    height: '100vh',
                                                                    overflow: 'auto',
                                        }}>
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        
                        <Grid item xs={12} md={8} lg={15}>
                            <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 'auto',
                            }}
                            >
                            {/* <Chart /> */}
                            <h1>Home</h1>
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* <Copyright sx={{ pt: 4 }} /> */}
                </Container>
            </Box>
        </Box>
    </>
    );
}

export default Home;