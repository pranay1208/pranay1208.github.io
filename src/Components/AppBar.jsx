import { Box, Button, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function TopBar({ backgroundColor }) {
  const navBarComponents = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/work-experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AppBar sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            sx={{
              backgroundColor: "#FEFEFE",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#FEFEFE",
              },
            }}
            variant='outlined'
            href='/'
          >
            <Typography
              variant='h6'
              component='div'
              color={backgroundColor}
              fontFamily='RobotoCondensedBold'
            >
              Portfolio
            </Typography>
          </Button>
        </Box>
        {navBarComponents.map((i) => {
          return (
            <Button
              color='inherit'
              sx={{
                textTransform: "none",
                paddingX: 3,
              }}
              href={i.href}
            >
              <Typography
                variant='h6'
                component='div'
                fontFamily='RobotoFlex'
                fontWeight='bold'
              >
                {i.name}
              </Typography>
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
