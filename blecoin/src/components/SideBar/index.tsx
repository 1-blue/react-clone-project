import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// atom
import { isDarkAtom } from "@src/atoms";

// styled-components
import { Wrapper } from "./style";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const setIsDarkAtom = useSetRecoilState(isDarkAtom);
  const [isTop, setIsTop] = useState<boolean>(true);
  const { pathname } = useLocation();

  // 스크롤 맨위로 이동
  const moveScrollTop = useCallback(() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }), []);

  // 스크롤이 최상단이 아닐경우를 확인
  const rename = useCallback(() => setIsTop(document.documentElement.scrollTop === 0), []);

  // 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener("scroll", rename);

    return () => window.removeEventListener("scroll", rename);
  }, []);

  // 테마 변경
  const toggleTheme = useCallback(() => setIsDarkAtom(prev => !prev), []);

  return (
    <Wrapper>
      {isTop || (
        <button type="button" className="side-button move-top-button" onClick={moveScrollTop}>
          👆
        </button>
      )}
      {pathname !== "/" && (
        <button type="button" className="side-button">
          <Link to="/">🔙</Link>
        </button>
      )}
      <button type="button" className="side-button" onClick={toggleTheme}>
        {isDark ? "☀️" : "🌙"}
      </button>
    </Wrapper>
  );
};

export default SideBar;
