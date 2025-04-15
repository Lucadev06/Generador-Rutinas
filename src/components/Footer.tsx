import { Typography, Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function Footer() {
    const isExtremeLargeScreen = useMediaQuery('(min-width: 1470px) and (max-width: 2000px)');
    const isLargeScreen = useMediaQuery('(max-width: 1469px) and (min-width: 1300px)');
    const isLargeMenu = useMediaQuery('(max-width: 1299px) and (min-width: 1150px)');
    const isSmallMenu = useMediaQuery('(max-width: 849px) and (min-width: 700px)');
    const isExtraSmallMenu = useMediaQuery('(max-width: 799px) and (min-width: 550px)');
    const isExtraExtraSmallMenu = useMediaQuery('(max-width: 549px) and (min-width: 450px)');
    const isExtraExtraExtraSmallMenu = useMediaQuery('(max-width: 449px) and (min-width: 320px)');

    let marginLeft; 
    if(isExtremeLargeScreen) {
        marginLeft = "40rem";
    }else if(isLargeScreen) {
        marginLeft = "20rem";
    } else if(isLargeMenu) {
        marginLeft = "15rem";
    } else if(isSmallMenu) {
        marginLeft = "10rem";
    } else if(isExtraSmallMenu) {
        marginLeft = "5rem";
    } else if(isExtraExtraSmallMenu) {
        marginLeft = "4rem";
    } else if(isExtraExtraExtraSmallMenu) {
        marginLeft = "3rem";
    }
  return (
   <>
    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            marginLeft: marginLeft
        }}
    >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            © 2025 hecho por Luca Simonazzi
        </Typography>
    </Box>
   </>
  );
}
export default Footer;