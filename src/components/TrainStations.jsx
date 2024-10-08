import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'
import React from 'react'

function TrainStations({ stations }) {
  return (
    <div className="train-stations">
      {Object.keys(stations).map((stationName) => (
        <NavLink
          className={({ isActive }) =>
            `train-stations__link ${
              isActive ? 'train-stations__link--active' : ''
            }`
          }
          key={stationName}
          to={`${stations[stationName]}`}
        >
          <span>{stationName}</span>
        </NavLink>
      ))}
      <NavLink
        className={({ isActive }) =>
          `retour__link ${isActive ? 'retour__link--active' : ''}`
        }
        to="https://cine-production.github.io/GareTV"
      >
        <span>
          Retour menu Pricipale
          <p
            style={{ color: `grey`, fontSize: `x-small`, textAlign: `center` }}
          >
            (rafraichissement obligatoire)
          </p>
        </span>
      </NavLink>
    </div>
  )
}

TrainStations.propTypes = {
  stations: propTypes.string.isRequired,
}

export default TrainStations
