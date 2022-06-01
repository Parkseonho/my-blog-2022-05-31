import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function AboutPage() {
  return (
    <Layout pageTitle="자기소개">
      <p>자기소개 페이지 입니다.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/cat.jpg"
      />
    </Layout>
  );
}
export default AboutPage;
