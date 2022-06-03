import React from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

const TagPage = ({ data }) => {
  return (
    <Layout pageTitle="태그페이지">
      <p>태크 페이지 입니다.</p>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.tags}</h2>
        </article>
      ))}
      ;
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___tags, order: ASC }) {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;

export default TagPage;
