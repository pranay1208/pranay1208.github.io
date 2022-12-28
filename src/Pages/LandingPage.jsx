import { Box, Grid, Typography } from "@mui/material";
import TopBar from "../Components/AppBar";
import {
  EmailSocialIcon,
  GithubSocialIcon,
  LinkedinSocialIcon,
} from "../Components/SocialsIcon";
import StyledButton from "../Components/StyledButton";
import avatar from "../images/thumbs-up-avatar.png";
import routes from "../routes";

const pageColor = "#2A9D8F";
const pageColorSecondary = "rgba(42, 157, 143, 0.6)";

const LandingPage = () => {
  return (
    <Box paddingX={15} paddingY={15}>
      <TopBar backgroundColor={pageColor} />
      <Grid container spacing={5}>
        <Grid container item lg={8} xs>
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
              maxWidth='80%'
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
      <Grid
        container
        display='flex'
        justifyContent='center'
        alignItems='center'
        marginY={5}
      >
        <Typography
          variant='h4'
          component='div'
          fontFamily='RobotoCondensedBold'
          color={pageColorSecondary}
        >
          Find me online
        </Typography>
      </Grid>
      <Grid
        container
        display='flex'
        alignItems='center'
        justifyContent='center'
        spacing={5}
      >
        <Grid item>
          <GithubSocialIcon
            backgroundColor={pageColor}
            hoverColor={pageColorSecondary}
          />
        </Grid>
        <Grid item>
          <LinkedinSocialIcon
            backgroundColor={pageColor}
            hoverColor={pageColorSecondary}
          />
        </Grid>
        <Grid item>
          <EmailSocialIcon
            backgroundColor={pageColor}
            hoverColor={pageColorSecondary}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
