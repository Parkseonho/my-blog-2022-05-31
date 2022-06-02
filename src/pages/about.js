import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function AboutPage() {
  return (
    <Layout pageTitle="꼬솜소개">
      <p>꼬솜이 페이지 입니다.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ggosom2.jpg"
      />
      <br />
      <br />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ggosom3.jpg"
      />
    </Layout>
  );
}
export default AboutPage;
