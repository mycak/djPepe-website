import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../assets/images/favicon.ico'

const SEO = () => (
  <Helmet titleTemplate="Dj Pepe">
    <html lang="en" />
    <link rel="icon" href={favicon} />
    <title>Dj Pepe</title>
  </Helmet>
)

export default SEO
