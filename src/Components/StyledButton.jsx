import { Button, Typography } from "@mui/material";

export default function StyledButton({ buttonColor, href, buttonText }) {
  return (
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
      href={href}
    >
      <Typography color={buttonColor} fontWeight='bold'>
        {buttonText}
      </Typography>
    </Button>
  );
}
