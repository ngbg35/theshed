import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Link } from "gatsby";

export default ({ data }) => (
    <Layout>
        <article className="centerdivArticle">
            <HelmetDatoCms seo={data.datoCmsEvent.seoMetaTags} />
            <div className="mozarella">

                <h1 className="bungee">{data.datoCmsEvent.title}</h1>
                <p className="monospace">{data.datoCmsEvent.excerpt}</p>
                <div className="sheet__slider">
                    <Slider infinite={true} slidesToShow={2} arrows>
                        {data.datoCmsEvent.gallery.map(({ fluid }) => (
                            <img alt={data.datoCmsEvent.title} key={fluid.src} src={fluid.src} />
                        ))}
                    </Slider>
                </div>
                <div
                    className="sheet__body"
                    dangerouslySetInnerHTML={{
                        __html: data.datoCmsEvent.descriptionNode.childMarkdownRemark.html,
                    }}
                />

            </div>
        </article>

    </Layout>
)

export const query = graphql`
  query childstockQuery2($slug: String!) {
    datoCmsEvent(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
