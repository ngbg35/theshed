import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const sthml = ({ data }) => (
  <Layout>
   
    <Masonry className="showcase">
      {data.allDatoCmsFeatured.edges.map(({ node: stock }) => (
        <div key={stock.id} className="showcase__item">
          <figure className="card">
            <Link to={`/featured/${stock.slug}`} className="card__image">
              <Img fluid={stock.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/work/${stock.slug}`}>{stock.title}</Link>
              </h6>
              <div className="card__description">
                <p>{stock.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>

     

  </Layout>
)

export default sthml

export const query = graphql`
  query StockholmQuery {
    allDatoCmsFeatured(sort: { fields: [position], order: ASC }) {
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
  }
`
