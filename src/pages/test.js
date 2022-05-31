import React from "react";
import { Link } from "gatsby";

function testpage() {
  return (
    <main>
      <title>test page</title>
      <h1>테스트 페이지 입니다.</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}

export default testpage;
