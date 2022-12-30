import { Box, Grid, Typography } from "@mui/material";
import TopBar from "../Components/AppBar";
import useResponsive from "../hooks/useResponsive";

const pageColor = "#1C1C1C";

const NotFoundPage = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <TopBar backgroundColor={pageColor} />
      <Box paddingX={isMobile ? 3 : 15} paddingTop={15} paddingBottom={5}>
        <Grid
          container
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box textAlign='center'>
            <Typography variant='h3' fontFamily='RobotoCondensedBold'>
              Page not found
            </Typography>
            <Typography variant='h1' fontFamily='RobotoCondensedBold'>
              404
            </Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default NotFoundPage;
