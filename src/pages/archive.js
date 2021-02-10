import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"



const sthml = ({ data: { home } }) => (
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

export default sthml

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