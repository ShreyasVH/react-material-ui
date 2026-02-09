import { Card, CardContent, Typography, CardActions, Button, Box, Grid } from '@mui/material';

export default function MyCard () {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <>
            <Card raised sx={{minWidth: 275, maxWidth: 275}}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            <br />

            <Card raised sx={{maxWidth: 300, textAlign: 'center'}}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Jack Kallis
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>South Africa</Typography>
                    <img src={'https://res.cloudinary.com/dyoxubvbg/image/upload/v1577106216/artists/default_m.jpg'} />
                    <Grid container sx={{textAlign: 'left'}}>
                        <Grid size={{xs: 6}}>
                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Innings:</strong>
                                25
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Runs:</strong>
                                25786
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Balls:</strong>
                                25786
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Average:</strong>
                                45.46
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Not Outs:</strong>
                                72
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Highest:</strong>
                                172
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>50/100:</strong>
                                25/10
                            </Typography>
                        </Grid>

                        <Grid size={{xs: 6}}>
                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Catches:</strong>
                                123
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Wickets:</strong>
                                123
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Balls:</strong>
                                12302
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Runs:</strong>
                                12302
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Fifers:</strong>
                                12
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>Economy:</strong>
                                7.85
                            </Typography>

                            <Typography variant={'h7'} sx={{display: 'block'}}>
                                <strong>DOB:</strong>
                                24/01/1967
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}