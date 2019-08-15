import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rhythm, scale } from "../utils/typography"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      fontFamily: `Montserrat, sans-serif`,
      marginTop: 0,
    }}
  >
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(36),
        padding: `${rhythm(1)} ${rhythm(3/4)}`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration:'none',
            color: 'black',
            boxShadow: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div>
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
