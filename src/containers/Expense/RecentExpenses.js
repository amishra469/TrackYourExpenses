import React from 'react'
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { tokens } from '../../context/Theme';

const useStyles = makeStyles((theme) => ({
    card: {
        position: 'relative',
        '&::before': {
            content: "''",
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px', // Adjust the thickness of the top border
            backgroundColor: 'blue', // Change the color of the top border
        },
        '&::after': {
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: '50%', // Adjust the horizontal position for the curved line
            transform: 'translateX(-50%)',
            borderBottom: '2px solid blue', // Change the color and thickness of the curved line
            width: '50px', // Adjust the width of the curved line
            borderRadius: '50%', // Create a circular shape for the curved line
        },
    },
    content: {
        padding: theme.spacing(2), // Add some padding to the card content
    },
}));

const RecentExpenses = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = useStyles();

    return (
        <Box>
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                Recently Updated
            </Typography>
            <Box>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        {/* Your card content goes here */}
                        <h2>Card Title</h2>
                        <p>Card content goes here.</p>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default RecentExpenses
