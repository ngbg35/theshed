import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"



const event = ({ data }) => (
  <Layout>
 


 <Masonry className="showcase">
      {data.allDatoCmsEvent.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/event/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/event/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="monospacesmall">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
   

  </Layout>
)

export default event

export const query = graphql`
  query eventQuery {
    allDatoCmsEvent(sort: { fields: [position], order: ASC }, limit: 10) {
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