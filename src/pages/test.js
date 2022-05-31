import React from "react";
import { Link } from "gatsby";

function testpage() {
  return (
    <main>
      <title>test page</title>
      <h1>테스트 페이지 입니다.</h1>
      <Link to="/layout">Layout_ _ _</Link>
      <Link to="/">Back to home</Link>
      <Link to="/about">About_ _ _</Link>
      <Link to="/test-space">Test-space_ _ _</Link>
    </main>
  );
}

export default testpage;
