import React from 'react'
import { Box, Button, Divider, Typography, useTheme } from '@mui/material';
import { tokens } from '../../context/Theme';
import PostAddIcon from '@mui/icons-material/PostAdd';


const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Expenses
                </Typography>

                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                    }}
                >
                    <PostAddIcon sx={{ mr: "10px" }} />
                    Add New Expense
                </Button>
            </Box>
            <Divider />
        </Box>
    )
}

export default Header
