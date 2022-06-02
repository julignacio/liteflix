import React from 'react';
import PropTypes from 'prop-types';
import StyledSideMenu from './StyledSideMenu';
import Icon from '../Icon';
import Button from '../Button';
import close01 from '../../assets/close01.svg';
import bell01 from '../../assets/bell01.svg';
import user from '../../assets/user.svg';
import plus from '../../assets/plus.svg';

function SideMenu({
  show, setShow, menuOptions, setViewModal,
}) {
  return (
    <StyledSideMenu show={show}>
      <div className="menu-buttons">
        <Icon
          image={close01}
          alt="Close menu"
          size="xsmall"
          onClick={() => setShow(false)}
        />
        <div className="menu-buttons-right">
          <Icon image={bell01} alt="See notifications" />
          <Icon image={user} alt="Go to profile" size="large" />
        </div>
      </div>
      <ul className="menu-options">
        {menuOptions.map((opt) => (
          <li>
            <Button>{opt}</Button>
          </li>
        ))}
        <li>
          <Button onClick={() => setViewModal(true)} className="add-movie">
            <Icon image={plus} alt="" size="xsmall" element="img" />
            <strong>Agregar película</strong>
          </Button>
        </li>
        <li>
          <Button>Cerrar sesión</Button>
        </li>
      </ul>
    </StyledSideMenu>
  );
}

SideMenu.propTypes = {
  setShow: PropTypes.func,
  show: PropTypes.bool,
  menuOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setViewModal: PropTypes.func,
};

SideMenu.defaultProps = {
  setShow: () => {},
  show: true,
  setViewModal: () => {},
};

export default SideMenu;
