import { IconButton } from "@mui/material";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const GithubSocialIcon = ({ backgroundColor, hoverColor }) => {
  return (
    <IconButton
      sx={{
        backgroundColor,
        "&:hover": { backgroundColor: hoverColor },
      }}
      color='white'
      href='https://github.com/pranay1208'
    >
      <GithubIcon fontSize='large' sx={{ color: "#fff" }} />
    </IconButton>
  );
};

export const LinkedinSocialIcon = ({ backgroundColor, hoverColor }) => {
  return (
    <IconButton
      sx={{
        backgroundColor,
        "&:hover": { backgroundColor: hoverColor },
      }}
      color='white'
      href='https://www.linkedin.com/in/pranay-agarwal-5b0652193/'
    >
      <LinkedInIcon fontSize='large' sx={{ color: "#fff" }} />
    </IconButton>
  );
};

export const EmailSocialIcon = ({ backgroundColor, hoverColor }) => {
  return (
    <IconButton
      sx={{
        backgroundColor,
        "&:hover": { backgroundColor: hoverColor },
      }}
      color='white'
      href='mailto:pranayagarwal1208@gmail.com'
    >
      <EmailIcon fontSize='large' sx={{ color: "#fff" }} />
    </IconButton>
  );
};
