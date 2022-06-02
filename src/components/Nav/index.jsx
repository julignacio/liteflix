import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledNav from './StyledNav';
import logo from '../../assets/logo.svg';
import plus from '../../assets/plus.svg';
import menu from '../../assets/menu.svg';
import bell01 from '../../assets/bell01.svg';
import user from '../../assets/user.svg';
import Button from '../Button';
import Icon from '../Icon';

function Nav({ setViewModal, setShowMenu }) {
  const [notification, setNotification] = useState(true);

  const handleClick = () => setNotification(!notification);
  return (
    <StyledNav>
      <img src={logo} alt="Liteflix" className="logo" />
      <Button className="add" onClick={() => setViewModal(true)}>
        <img src={plus} alt="" />
        <span>Agregar película</span>
      </Button>
      <div className="utils">
        <Icon image={menu} size="medium" alt="Open menu" className="menu" onClick={() => setShowMenu(true)} />
        <Icon
          onClick={handleClick}
          image={bell01}
          size="medium"
          alt="See notifications"
          className={`notification ${notification ? 'active' : ''}`}
        />
        <Icon image={user} size="large" alt="Go to profile" className="user" />
      </div>
    </StyledNav>
  );
}

Nav.propTypes = {
  setViewModal: PropTypes.func.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default Nav;
