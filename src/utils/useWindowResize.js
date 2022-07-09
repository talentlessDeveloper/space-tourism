import { useEffect, useState } from "react";
import { throttle } from "./throttle";

function useWindowResize(bgDesktop, bgTablet, bgMobile) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const imageUrl =
    windowWidth >= 1024 ? bgDesktop : windowWidth >= 768 ? bgTablet : bgMobile;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const throttleResize = throttle(handleResize);

    window.addEventListener("resize", throttleResize);

    return () => window.removeEventListener("resize", throttleResize);
  }, []);

  return imageUrl;
}

export default useWindowResize;
