import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"






const IndexPage = ({ data: { home } }) => (



<Layout>

<article className="centerdivArticleHome">
      
      <div className="sheet__inner">
        <h1 className="bungee">{home.title}</h1>
        <p className="monospace">{home.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={home.photo.fluid} />
        </div>
        <div
          className="monospace-smaller"
          dangerouslySetInnerHTML={{
            __html: home.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query homeQuery {
    home: datoCmsHome {
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



/*

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }, limit: 3) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }




    allDatoCmsFeatured(sort: { fields: [position], order: ASC }, limit: 1){
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 3000, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }`


    {data.allDatoCmsFeatured.edges.map(({ node: heroTest }) => (
      <div key={heroTest.id} className="featured">
        <Link to={`/featured/${heroTest.slug}`} className="card__image">
          <Img fluid={heroTest.coverImage.fluid} />

          <div className="textoverdiv">
            <p className="maintext">{heroTest.title}</p>
            <p className="subtext">{heroTest.excerpt}</p>
          </div>

        </Link>

      </div>
    ))}


    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>

        */