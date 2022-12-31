import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TopBar from "../Components/AppBar";
import {
  EmailSocialIcon,
  GithubSocialIcon,
  LinkedinSocialIcon,
} from "../Components/SocialsIcon";
import StyledButton from "../Components/StyledButton";
import useResponsive from "../hooks/useResponsive";

const pageColor = "#329F5B";
const pageColorSecondary = "rgba(50, 159, 91, 0.6)";

const ContactMePage = () => {
  const { isMobile, isDesktop, isTablet } = useResponsive();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <TopBar backgroundColor={pageColor} />
      <Box paddingX={isMobile ? 3 : 15} paddingTop={15} paddingBottom={5}>
        <Grid
          container
          display='flex'
          justifyContent='start'
          alignItems='center'
        >
          <Box flex={1}>
            <Typography
              variant='h3'
              component='div'
              fontFamily='RobotoCondensedBold'
              color={pageColor}
            >
              Contact Me
            </Typography>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant='outlined'
              fullWidth
              label='Email'
              placeholder='contact_me@example.com'
              sx={{
                marginY: 3,
                "& label.Mui-focused": {
                  color: pageColor,
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: pageColor,
                  },
                  "& fieldset": {
                    borderColor: pageColor,
                  },
                  "&:hover fieldset": {
                    borderColor: pageColorSecondary,
                  },
                },
                borderWidth: 1.5,
              }}
            />
            <TextField
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              variant='outlined'
              fullWidth
              label='Message'
              sx={{
                "& label.Mui-focused": {
                  color: pageColor,
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: pageColor,
                  },
                  "& fieldset": {
                    borderColor: pageColor,
                  },
                  "&:hover fieldset": {
                    borderColor: pageColorSecondary,
                  },
                },
                borderWidth: 1.5,
              }}
            />
            <Box display='flex' justifyContent='center' alignItems='center'>
              <StyledButton
                buttonColor={pageColor}
                style={{ paddingX: isDesktop || isTablet ? 10 : 5 }}
                onClick={() =>
                  alert(
                    "Your message was not delivered. This feature is not ready yet"
                  )
                }
              >
                <Typography
                  fontFamily='RobotoCondensedBold'
                  variant='h5'
                  component='div'
                  color={pageColor}
                >
                  Submit
                </Typography>
              </StyledButton>
            </Box>
          </Box>
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

export default ContactMePage;
