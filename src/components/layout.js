/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import "../styles/index.sass";
import "../css/overwrite.css";
import "../css/additional.scss";



const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (

<div>

        <div className="maincontainer">

          <img className="centerimg"src="https://www.datocms-assets.com/42515/1612909234-sheedie2.svg"></img>
          <div className="centerdiv">Malmö's smallest co-working and creative space.<br></br>At the heart of Augustenborg Square.
          <br></br>
          
          </div>
          <div className="mainlinksdiv">

          <div className="socialicon">
            {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
      <a
        key={profile.profileType}
        href={profile.url}
        target="blank"
        className={`social social--${profile.profileType.toLowerCase()}`}
      >
        {" "}
      </a>
    ))}
    </div>
    <br></br><br></br>
           <ul className="mainlinks">
              
               <li className="links"><Link to="/">Home</Link></li>

               <li className="links"><a href="http://theshedmalmo.se/" target="_blank">Shop<FontAwesomeIcon icon={faExternalLinkAlt} /></a></li> 

               <li className="links"><Link to="/community">Community</Link></li>

               <li className="links"><Link to="/event">Events</Link></li>

               <li className="links"><Link to="/featured/about-us">About</Link></li>

               

                 
            </ul>
            

          </div>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />

          <div className="container__body">
            <div className="container__mobile-header">
              <div className="mobile-header">
               
              </div>
            </div>
            {children}
          </div>
        <br></br>   <br></br>   <br></br> 
        </div>
         <div className="footer">

         <h3 className="bungee-footer">The Shed</h3>   
         <p class="monospace">Norra Grängesbergsgatan 35, Malmö<br></br>
         <a className="white-link" href="mailto:hej@theshed.se">hej@theshed.se</a>
         </p>
          
         <div className="socialicon">
            {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
      <a
        key={profile.profileType}
        href={profile.url}
        target="blank"
        className={`social social--${profile.profileType.toLowerCase()}`}
        style={{color: `ghostwhite`}}
      >
        {" "}
      </a>
    ))}
    </div>

         </div>
        </div>
        
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
/*
<div className="container__sidebar">
<div className="sidebar">
  <h6 className="sidebar__title">
    <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
  </h6>
  <div
    className="sidebar__intro"
    dangerouslySetInnerHTML={{
      __html:
        data.datoCmsHome.introTextNode.childMarkdownRemark.html
    }}
  />
  <ul className="sidebar__menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
  <p className="sidebar__social">
    {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
      <a
        key={profile.profileType}
        href={profile.url}
        target="blank"
        className={`social social--${profile.profileType.toLowerCase()}`}
      >
        {" "}
      </a>
    ))}
  </p>
  <div className="sidebar__copyright">
    {data.datoCmsHome.copyright}
  </div>
</div>
</div>

 <div className="mobile-header__menu">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setShowMenu(!showMenu);
                    }}
                  />
                </div>
                <div className="mobile-header__logo">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </div>

*/