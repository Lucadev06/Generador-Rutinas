import Header from "./components/Header";
import Footer from "./components/Footer";
import MensajeCentral from "./components/MensajeCentral";
import { Box } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const isExtremeLargeScreen = useMediaQuery('(min-width: 1500px) and (max-width: 2000px)');
  const isLargeMenu = useMediaQuery('(max-width: 1499px) and (min-width: 1300px)');
  const isSmallMenu = useMediaQuery('(max-width: 1299px) and (min-width: 930px)');
  const isExtraSmallMenu = useMediaQuery('(max-width: 929px) and (min-width: 850px)');
  const isExtraExtraSmallMenu = useMediaQuery('(max-width: 849px) and (min-width: 750px)');
  const isExtraExtraExtraSmallMenu = useMediaQuery('(max-width: 749px) and (min-width: 600px)');
  const isExtraExtraExtraExtraSmallMenu = useMediaQuery('(max-width: 599px) and (min-width: 499px)');


  let marginLeft;
  if (isExtremeLargeScreen) {
    marginLeft = "25rem";
  }/*else if(isLargeScreen) {
        marginLeft = "30rem";
    }*/ else if (isLargeMenu) {
    marginLeft = "16rem";
  } else if (isSmallMenu) {
    marginLeft = "5rem";
  } else if (isExtraSmallMenu) {
    marginLeft = "4rem";
  } else if (isExtraExtraSmallMenu) {
    marginLeft = "2.5rem";
  } else if (isExtraExtraExtraSmallMenu) {
    marginLeft = "3rem";
  } else if (isExtraExtraExtraExtraSmallMenu) {
    marginLeft = "1rem";
  } else {
    marginLeft = "0rem";
  }

  return (
    <>
      <Box>{/* Imagen de fondo */}
        <Box
          sx={{
            position: "absolute",
            top: 0,

            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: "url(/images/foto-fondo.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2, // opcional para que no tape el contenido
          }}
        />

        {/* Contenido centrado */}
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: marginLeft,
            marginTop: "-13rem",
          }}
        >
          <Header />
        </Box>
      </Box>

        <Box
          sx={{
            marginLeft: marginLeft,
            
          }}
        >
          <MensajeCentral />
        </Box>
        
      <Box
        sx={{
          marginTop: "14rem"
          
        }}
      >
        <Footer />
      </Box>

    </>
  );
}

export default App;
