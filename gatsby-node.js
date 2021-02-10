const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const malmo = graphql(`
      {
        allDatoCmsWork{
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
    result.data.allDatoCmsWork.edges.map(({ node: work }) => {
      createPage({
        path: `works/${work.slug}`,
        component: path.resolve(`./src/templates/work.js`),
        context: {
          slug: work.slug,
        },
      });
    });
  })


const stockholm = graphql(`
{
  allDatoCmsFeatured{
    edges {
      node {
        slug
      }
    }
  }
}
`).then(result => {
  result.data.allDatoCmsFeatured.edges.map(({ node: stockholm }) => {
    createPage({
      path: `featured/${stockholm.slug}`,
      component: path.resolve(`./src/templates/stock.js`),
      context: {
        slug: stockholm.slug,
      },
    });
  });
})

const event = graphql(`
{
  allDatoCmsEvent{
    edges {
      node {
        slug
      }
    }
  }
}
`).then(result => {
  result.data.allDatoCmsEvent.edges.map(({ node: eventlist }) => {
    createPage({
      path: `event/${eventlist.slug}`,
      component: path.resolve(`./src/templates/event.js`),
      context: {
        slug: eventlist.slug,
      },
    });
  });
})

const community = graphql(`
{
  allDatoCmsCommunity{
    edges {
      node {
        slug
      }
    }
  }
}
`).then(result => {
  result.data.allDatoCmsCommunity.edges.map(({ node: commie }) => {
    createPage({
      path: `community/${commie.slug}`,
      component: path.resolve(`./src/templates/commie.js`),
      context: {
        slug: commie.slug,
      },
    });
  });
})

        return Promise.all([malmo, stockholm, event, community])

};

/*
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork{
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}
*/





/*
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsStockholm{
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsStockholm.edges.map(({ node: stockholm }) => {
        createPage({
          path: `stockholm/${stockholm.slug}`,
          component: path.resolve(`./src/templates/stockholm.js`),
          context: {
            slug: stockholm.slug,
          },
        })
      })
      resolve()
    })
  })
}
*/