import { Button } from "@mui/material";

export default function StyledButton({
  buttonColor,
  onClick,
  children,
  style,
}) {
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
        ...style,
      }}
      size='large'
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
