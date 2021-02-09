import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import { Link } from "gatsby";

const About = ({ data: { about } }) => (
  <Layout>
    <article className="centerdivArticle">
      <HelmetDatoCms seo={about.seoMetaTags} />
      <div className="bungee">
        <h1 className="sheet__title">{about.title}</h1>
        <p className="monospace">{about.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <div
          className="monospace"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`


