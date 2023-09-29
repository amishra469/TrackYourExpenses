import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import RecentExpenses from './RecentExpenses'


const Expenses = () => {
  return (
    <Box>
        <Header />
        <RecentExpenses />   
    </Box>
  )
}

export default Expenses
