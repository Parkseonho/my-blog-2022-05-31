import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

function testpage_space() {
  return (
    <main>
      <Layout pageTitle="Test-Space Page">
        <p>요건 테스트 space </p>
      </Layout>
      <title>test page space</title>
      <h1>테스트 스페이스 페이지 입니다.</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}

export default testpage_space;
