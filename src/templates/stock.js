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
            <HelmetDatoCms seo={data.datoCmsFeatured.seoMetaTags} />
            <div className="sheet__inner">

                <h1 className="bungee">{data.datoCmsFeatured.title}</h1>
                <p className="monospace">{data.datoCmsFeatured.excerpt}</p>
                <div className="sheet__slider">
                    <Slider infinite={true} slidesToShow={2} arrows>
                        {data.datoCmsFeatured.gallery.map(({ fluid }) => (
                            <img alt={data.datoCmsFeatured.title} key={fluid.src} src={fluid.src} />
                        ))}
                    </Slider>
                </div>
                <div
                    className="gorgonzola"
                    dangerouslySetInnerHTML={{
                        __html: data.datoCmsFeatured.descriptionNode.childMarkdownRemark.html,
                    }}
                />

            </div>
        </article>

    </Layout>
)

export const query = graphql`
  query childstockQuery($slug: String!) {
    datoCmsFeatured(slug: { eq: $slug }) {
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
