import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function StyledButton({ buttonColor, href, buttonText }) {
  return (
    <Link to={href} style={{ textDecoration: "none" }}>
      <Button
        variant='outlined'
        sx={{
          borderRadius: 2,
          marginY: 3,
          paddingY: 1,
          paddingX: 3,
          borderColor: buttonColor,
          borderWidth: 2,
          textTransform: "none",
        }}
        size='large'
      >
        <Typography color={buttonColor} fontWeight='bold'>
          {buttonText}
        </Typography>
      </Button>
    </Link>
  );
}
