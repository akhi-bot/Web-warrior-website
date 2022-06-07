import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const ProjectDetails = props => {
  const { data } = props
  const { html, frontmatter } = data.markdownRemark
  const { title, stack, featured } = frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={getImage(featured)} alt={title} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
