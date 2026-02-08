import { Card, CardContent, Typography, CardActions, Button, Box, CardActionArea } from '@mui/material';

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
            <Card raised>
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
        </>
    );
}