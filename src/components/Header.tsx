import { Typography, Box, Button } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


function Header() {
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 2,
          
          p: 1,
          bgcolor: 'background.paper',
          boxShadow: 6,
          width: '100%',
          borderRadius: "2rem" // Asegura que el contenedor ocupe todo el ancho disponible
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Armador de Rutinas
        </Typography>
        <Button>
          <FitnessCenterIcon fontSize="large" />
        </Button>
      </Box>
    );
  }

  export default Header;
