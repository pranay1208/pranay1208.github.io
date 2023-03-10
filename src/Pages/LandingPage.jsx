import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TopBar from "../Components/AppBar";
import {
  EmailSocialIcon,
  GithubSocialIcon,
  LinkedinSocialIcon,
} from "../Components/SocialsIcon";
import StyledButton from "../Components/StyledButton";
import useResponsive from "../hooks/useResponsive";
import avatar from "../images/thumbs-up-avatar.png";
import routes from "../routes";

const pageColor = "#2A9D8F";
const pageColorSecondary = "rgba(42, 157, 143, 0.6)";

const LandingPage = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <TopBar backgroundColor={pageColor} />
      <Box paddingX={isMobile ? 3 : 15} paddingTop={15} paddingBottom={5}>
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
                I am a software engineer based out of{" "}
                <span
                  style={{
                    fontFamily: "RobotoCondensedBold",
                    color: pageColor,
                  }}
                >
                  Hong Kong
                </span>
                . I make projects full stack and love building and designing
                user-facing products.
              </Typography>
              <Link to={routes.About} style={{ textDecoration: "none" }}>
                <StyledButton buttonColor={pageColor}>
                  <Typography color={pageColor} fontWeight='bold'>
                    Learn more about me
                  </Typography>
                </StyledButton>
              </Link>
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
          spacing={isMobile ? 2 : 5}
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
    </>
  );
};

export default LandingPage;
