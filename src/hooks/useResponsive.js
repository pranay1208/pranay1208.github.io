import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 990px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 990px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return {
    isDesktop: isDesktopOrLaptop,
    isTablet: isTabletOrMobile && !isMobile,
    isMobile: isMobile,
  };
}
