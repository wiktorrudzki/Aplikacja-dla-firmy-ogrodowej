import { useLocation } from "@reach/router";
import { ROUTES } from "@src/constants";
import { NAVIGATION_MODE, NavigationMode } from "@src/types/navigation";
import React, {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

const useNavigationMode = (ref: RefObject<HTMLDivElement>): NavigationMode => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = ref.current?.offsetHeight ?? 0;
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > navHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showNav = useCallback(() => setHidden(false), [setHidden]);
  const hideNav = useCallback(() => setHidden(true), [setHidden]);

  const navMode: NAVIGATION_MODE = useMemo(
    () =>
      (location.pathname.includes(ROUTES.O_NAS) ||
        location.pathname === ROUTES.HOME) &&
      !isScrolled
        ? NAVIGATION_MODE.LIGHT
        : NAVIGATION_MODE.DARK,
    [location.pathname, isScrolled],
  );

  return { isScrolled, hidden, navMode, showNav, hideNav };
};

export default useNavigationMode;
