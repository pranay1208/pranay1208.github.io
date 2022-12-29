import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";

export default function useResponsive() {
  const theme = useTheme();
  console.log(theme);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));

  return {
    isDesktop,
    isTabletOrDesktop,
    isMobile,
  };
}
