import { Box, Typography, Grid } from "@mui/material";
import TopBar from "../Components/AppBar";
import useResponsive from "../hooks/useResponsive";
import avatar from "../images/thumbs-up-avatar.png";

const pageColor = "#077187";
const pageColorSecondary = "rgba(7,113,135,0.7)";

const AboutMePage = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <TopBar backgroundColor={pageColor} />
      <Box paddingX={isMobile ? 3 : 15} paddingTop={15} paddingBottom={5}>
        <Grid container spacing={5}>
          <Grid container item lg={8} xs>
            <Box>
              <Typography
                variant='h2'
                color={pageColor}
                fontFamily='RobotoCondensedBold'
                component='div'
              >
                About Me
              </Typography>
              Text here
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            sx={{
              display: { lg: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={avatar}
              alt='Avatar'
              sx={{ objectFit: "fill" }}
              color='#fff'
              height='85%'
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMePage;
