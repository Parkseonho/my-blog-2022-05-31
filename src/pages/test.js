import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

function testpage() {
  return (
    <main>
      <Layout pageTitle="테스트 Page">
        <p>테스트임</p>
      </Layout>
      <title>test page</title>
      <h1>테스트 페이지 입니다.</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}

export default testpage;
