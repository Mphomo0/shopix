import React from 'react'
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa'
import PropTypes from 'prop-types'

// Define a functional component called Rating that accepts value, text, and color as props
const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <FaStar style={{ color }} />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt style={{ color }} />
        ) : (
          <FaRegStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar style={{ color }} />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt style={{ color }} />
        ) : (
          <FaRegStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar style={{ color }} />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt style={{ color }} />
        ) : (
          <FaRegStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar style={{ color }} />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt style={{ color }} />
        ) : (
          <FaRegStar style={{ color }} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar style={{ color }} />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt style={{ color }} />
        ) : (
          <FaRegStar style={{ color }} />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  )
}

// Set the default value for the color prop
Rating.defaultProps = {
  color: '#f8e825',
}

// Define the prop types for the Rating component
Rating.propTypes = {
  value: PropTypes.number.isRequired, // value prop is required and must be a number
  text: PropTypes.string.isRequired, // text prop is required and must be a string
  color: PropTypes.string, // color prop is optional and should be a string
}

// Export the Rating component as the default export
export default Rating
