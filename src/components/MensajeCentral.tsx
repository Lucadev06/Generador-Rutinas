import React from 'react'
import { Box, Typography } from '@mui/material'


export default function MensajeCentral() {
   
  return (
    <>
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-4rem",
                borderColor: "white",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "2rem",
                padding: "1rem",
                
            }}
            >
                <Typography variant='h3'>Diseña tu rutina con un simple click 💪</Typography>
        </Box>
    </>
  )
}
