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
            <HelmetDatoCms seo={data.datoCmsCommunity.seoMetaTags} />
            <div className="sheet__inner">

                <h1 className="bungee">{data.datoCmsCommunity.title}</h1>
                <p className="monospace">{data.datoCmsCommunity.excerpt}</p>
                <div className="sheet__slider">
                    <Slider infinite={true} slidesToShow={2} arrows>
                        {data.datoCmsCommunity.gallery.map(({ fluid }) => (
                            <img alt={data.datoCmsCommunity.title} key={fluid.src} src={fluid.src} />
                        ))}
                    </Slider>
                </div>
                <div
                    className="sheet__body"
                    dangerouslySetInnerHTML={{
                        __html: data.datoCmsCommunity.descriptionNode.childMarkdownRemark.html,
                    }}
                />

            </div>
        </article>

    </Layout>
)

export const query = graphql`
  query childstockQuery3($slug: String!) {
    datoCmsCommunity(slug: { eq: $slug }) {
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
