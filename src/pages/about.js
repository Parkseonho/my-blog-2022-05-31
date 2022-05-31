import React from "react";
import { Link } from "gatsby";

function aboutpage() {
  return (
    <main>
      <title>자기소개</title>
      <h1>자기소개 페이지 입니다.</h1>
      <Link to="/layout">Layout_ _ _</Link>
      <Link to="/">Back to home</Link>
      <Link to="/test">Test_ _ _</Link>
      <Link to="/test-space">Test-space</Link>
    </main>
  );
}

export default aboutpage;
