import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrow01 from '../../assets/arrow01.svg';
import mark from '../../assets/mark.svg';
import Button from '../Button';
import StyledSelect from './StyledSelect';

function Select({ options, selected, handleChange }) {
  const defaultStyles = {
    open: false,
    dropdownHeight: 0,
    listOpacity: 0,
    arrowRotation: 0,
  };
  const openStyles = {
    open: true,
    dropdownHeight: '15rem',
    listOpacity: '100%',
    arrowRotation: '180deg',
  };
  const [dropdownStyles, setDropdownStyles] = useState(defaultStyles);
  const handleClick = () => {
    setDropdownStyles(dropdownStyles.open ? defaultStyles : openStyles);
  };
  const beforeChange = (value) => {
    handleClick();
    handleChange(value);
  };

  return (
    <StyledSelect dropdownStyles={dropdownStyles} className="custom-select">
      {/* semantic select for accesibility */}
      <select
        value={selected}
        onChange={({ target: { value } }) => handleChange(value)}
        aria-label="Select a movie list"
        style={{ display: 'none' }}
      >
        <option value="Populares">Populares</option>
        <option value="Mis peliculas">Mis peliculas</option>
      </select>
      {/* fancy display hidden for screen readers */}
      <div aria-hidden="true" className="dropdown">
        <span>Ver: </span>
        <Button onClick={handleClick}>
          <span>
            <strong>{selected}</strong>
          </span>
          <img src={arrow01} alt="" className="dropdown-arrow" />
        </Button>
        <div className="dropdown-list-container">
          <div className="dropdown-list-wrapper">
            <ul className="dropdown-list">
              {options?.map((o) => (
                <li
                  aria-selected={selected === o}
                  role="option"
                  key={o}
                  onClick={() => beforeChange(o)}
                  className="dropdown-list-item"
                  onKeyPress={({ key }) => key === 'Enter' && beforeChange(o)}
                >
                  {o}
                  {o === selected ? <img src={mark} alt="" /> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledSelect>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
