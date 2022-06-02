import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/ggosom1.jpg"
      />
    </Layout>
  );
};
export default HomePage;
