import Sidenav from "../components/layout/Sidenav";
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Paper, Toolbar } from "@mui/material";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

function Settings() {
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
                                <Paper sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 'auto',
                                        }}
                                >
                                {/* <Chart /> */}
                                <h1>Setttings</h1>
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

export default Settings;