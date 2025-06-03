export enum NAVIGATION_MODE {
  LIGHT = "light",
  DARK = "dark",
}

export type NavigationMode = {
  isScrolled: boolean;
  hidden: boolean;
  navMode: NAVIGATION_MODE;
  showNav: () => void;
  hideNav: () => void;
};
