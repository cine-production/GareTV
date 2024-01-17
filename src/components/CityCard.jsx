import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

function CityCard({ city }) {
  return (
    <Link
      to={`${city}`}
      className="city-card"
      style={{
        backgroundImage: `url('https://cine-production.github.io/ServiceTiers/BASEDONNEE/IMG/${city}.jpg')`,
      }}
    >
      <h3 className="city-card__name">{city}</h3>
    </Link>
  )
}

CityCard.propTypes = {
  city: propTypes.string.isRequired,
}

export default CityCard
