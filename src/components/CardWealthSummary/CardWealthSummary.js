import './CardWealthSummary.css';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import MoreVert from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider, Divider, Button } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';
import { getWealthSummary } from '../../redux/thunks/wealthSummaryThunks'

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 25,
            color: '#3B5CB8',
            fontFamily: 'Montserrat',
            fontWeight: 700,

        },
        h2: {
            fontSize: 16,
            color: '#606377',
            fontFamily: 'Montserrat',
            fontWeight: 500,
        },
        h3: {
            fontSize: 22,
            color: '#3B5CB8',
            fontWeight: 700,
            fontFamily: 'Montserrat',
        },
        h4: {
            fontSize: 18,
            color: '#3B5CB8',
            textAlign: 'right',
            fontWeight: 700,
            fontFamily: 'Montserrat',
        },
        h5: {
            fontSize: 15,
            color: '#3B5CB8',
            textAlign: 'right',
            fontWeight: 700,
            fontFamily: 'Montserrat',
        },
    },
});

function teste() {

}

function CardWealthSummary() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getWealthSummary)
    }, []);

    const { id, cdi, gain, hasHistory, profitability, total } = useSelector(state => state.wealthSummary)


    return (
        <ThemeProvider theme={theme}>
            <div className="CardWealthSummary">
                <Grid container spacing={1}>
                    <Grid item xs={10}>
                        <Box ml={3} mt={2}>
                            <Typography variant='h1'>
                                Seu resumo
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box mt={1}>
                            <IconButton aria-label="delete">
                                <MoreVert />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} >
                        <Box mt={5}>
                            <Typography variant='h2'>
                                Valor investido
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <Box mt={1}>
                            <Typography variant='h3'>
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={8} >
                        <Box mt={4} ml={2}>
                            <Typography variant='h2'>
                                Rentabilidade/mês
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}
                    >
                        <Box mt={4} mr={2}>
                            <Typography variant='h4'>
                                {new Intl.NumberFormat('pt-BR').format(profitability)}%
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={8} >
                        <Box mt={1} ml={2}>
                            <Typography variant='h2'>
                                CDI
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}
                    >
                        <Box mr={2} mt={1}>
                            <Typography variant='h4'>
                                {new Intl.NumberFormat('pt-BR').format(cdi)}%
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={7} >
                        <Box ml={2} mt={1}>
                            <Typography variant='h2'>
                                Ganho/mês
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5}
                    >
                        <Box mr={2} mt={1}>
                            <Typography variant='h4'>
                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(gain)}

                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Grid
                    container
                    direction="row"
                >
                    <Grid item xs={12} >
                        <Box mr={2} ml={2} mt={3}>
                            <Divider></Divider>
                        </Box>
                    </Grid>

                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Grid item xs={5} >
                        <Box mr={2} ml={2} mt={2}>
                            <Button onClick={() => {
                                teste()
                            }} variant="outlined" style={{ borderRadius: 20 }}><Typography variant='h5'>
                                    VER MAIS
                                </Typography></Button>
                        </Box>
                    </Grid>

                </Grid>
            </div>
        </ThemeProvider>

    );
}

export default CardWealthSummary;