import React, { useEffect, useState } from 'react'
import axios from 'axios'
import propTypes from 'prop-types'

function Stops({ idDeparture }) {
  const [nextStops, setNextStops] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${idDeparture}`,
        {
          headers: {
            Authorization: `${process.env.REACT_APP_API_KEY}`,
          },
        },
      )
      .then((response) => {
        const stops = response.data.vehicle_journeys[0].stop_times.map(
          (stop) => stop.stop_point.name,
        )
        setNextStops(stops)
      })
  }, [])

  return (
    <div className="departure__stops">
      <ul className="stops">
        {nextStops.map((stop, index) => (
          <li className="stops__station" key={stop}>
            {stop}
            <img
              src="../images/TER.png"
              alt="Err"
              style={{
                display: `${
                  index === nextStops.length - 1 ? 'none' : 'inline'
                }`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

Stops.propTypes = {
  idDeparture: propTypes.string.isRequired,
}

export default Stops
