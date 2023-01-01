import { Box, Typography, Grid } from "@mui/material";
import TopBar from "../Components/AppBar";
import useResponsive from "../hooks/useResponsive";
import avatar from "../images/hi-avatar.png";

const pageColor = "#077187";
const pageColorSecondary = "rgba(7,113,135,0.7)";

const Hlspan = ({ children }) => {
  return (
    <span
      style={{ color: pageColorSecondary, fontFamily: "RobotoCondensedBold" }}
    >
      {children}
    </span>
  );
};

const AboutMePage = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      <TopBar backgroundColor={pageColor} />
      <Box paddingX={isMobile ? 3 : 15} paddingTop={15} paddingBottom={5}>
        <Grid container spacing={5}>
          <Grid container item lg={8} xs>
            <Box maxWidth='80%'>
              <Typography
                variant='h2'
                color={pageColor}
                fontFamily='RobotoCondensedBold'
                component='div'
                marginBottom={2}
              >
                About Me
              </Typography>
              <Typography
                variant='h6'
                component='p'
                fontFamily='RobotoCondensed'
                marginBottom={2}
              >
                I was introduced to software development when I was 12; I built
                my own version of Facebook with HTML and CSS. While Fakebook
                <sup style={{ fontSize: 10 }}>TM</sup> never took off, I
                discovered my interest in technology and formally learnt how to
                code through high school.
              </Typography>
              <Typography
                variant='h6'
                component='p'
                fontFamily='RobotoCondensed'
                marginBottom={2}
              >
                At the University of Hong Kong (HKU), I majored in Computer
                Science with a minor in Finance. I had the opportunity to work
                in various fields, from <Hlspan>IoT</Hlspan> to{" "}
                <Hlspan>HealthTech</Hlspan>, <Hlspan>EduTech</Hlspan> and{" "}
                <Hlspan>FinTech</Hlspan>. I am currently working in{" "}
                <Hlspan>Open Banking and Payments </Hlspan> at{" "}
                <a
                  href='https://www.finverse.com/'
                  style={{ textDecoration: `underline ${pageColorSecondary}` }}
                >
                  <Hlspan>Finverse Technologies</Hlspan>
                </a>
              </Typography>
              <Typography
                variant='h6'
                component='p'
                fontFamily='RobotoCondensed'
              >
                I love playing basketball, video games and building fun stuff
                both online and IRL.
              </Typography>
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
