import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"



const community = ({ data }) => (
  <Layout>
 


 <Masonry className="showcase">
      {data.allDatoCmsCommunity.edges.map(({ node: commie }) => (
        <div key={commie.id} className="showcase__item">
          <figure className="card">
            <Link to={`/community/${commie.slug}`} className="card__image">
              <Img fluid={commie.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link className=""to={`/community/${commie.slug}`}>{commie.title}</Link>
              </h6>
              <div className="monospacesmall">
                <p>{commie.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
   

  </Layout>
)

export default community

export const query = graphql`
  query commieQuery {
    allDatoCmsCommunity(sort: { fields: [position], order: ASC }, limit: 6) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 350, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

/*


*/ 


/*
{data.allDatoCmsFeatured.edges.map(({ node: heroTest }) => (
      <div key={heroTest.id} className="blockSetup">
        <Link to={`/featured/${heroTest.slug}`} className="card__image">
          <Img fluid={heroTest.coverImage.fluid} />

          <div className="textoverdiv">
            <p className="maintext">{heroTest.title}</p>
            <p className="subtext">{heroTest.excerpt}</p>
          </div>

        </Link>

      </div>
    ))}

    */