import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../assets/images/favicon.ico'

const SEO = () => (
  <Helmet titleTemplate="El Toro - artysta, muzyk - wesela, eventy">
    <html lang="en" />
    <link rel="icon" href={favicon} />
    <title>El Toro - artysta, muzyk - wesela, eventy</title>
  </Helmet>
)

export default SEO
