import React from 'react';
import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
  const { planName, duration } = option;

  return (
    <div>
      <h2>{planName}</h2>
      <ul>
        {duration.map((durate) => (
          <li key={durate.id}>
            {durate.timePeriod}: ${durate.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.shape({
    planName: PropTypes.string.isRequired,
    duration: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        timePeriod: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PriceOption;
