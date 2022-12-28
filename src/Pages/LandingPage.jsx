import { Box, Grid, Typography } from "@mui/material";
import TopBar from "../Components/AppBar";
import StyledButton from "../Components/StyledButton";
import avatar from "../images/thumbs-up-avatar.png";
import routes from "../routes";

const pageColor = "#2A9D8F";
const pageColorSecondary = "rgba(42, 157, 143, 0.6)";

const LandingPage = () => {
  return (
    <Box height='100vh' paddingX={15} paddingY={15}>
      <TopBar backgroundColor={pageColor} />
      <Grid container spacing={5}>
        <Grid container item md={8} xs>
          <Box>
            <Typography variant='body1' fontSize={18}>
              Hi, my name is
            </Typography>
            <Typography
              variant='h1'
              component='div'
              fontFamily='RobotoCondensedBold'
              color={pageColor}
            >
              Pranay Agarwal.
            </Typography>
            <Typography
              variant='h2'
              component='div'
              fontFamily='RobotoCondensedBold'
              color={pageColorSecondary}
            >
              I love building things.
            </Typography>
            <Typography
              variant='h5'
              component='div'
              fontFamily='RobotoCondensed'
              paddingTop={1}
            >
              I am a software engineer based out of Hong Kong. I make projects
              full stack and love building and designing user-facing products.
            </Typography>
            <StyledButton
              buttonColor={pageColor}
              buttonText='Learn more about me'
              href={routes.About}
            />
          </Box>
        </Grid>
        <Grid
          md={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={avatar}
            alt='Avatar'
            sx={{ objectFit: "fill" }}
            color='#fff'
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
