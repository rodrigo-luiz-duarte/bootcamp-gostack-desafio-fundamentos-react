import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  menuItemSelected?: 'dashboard' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  menuItemSelected = 'dashboard',
}: HeaderProps) => (
  <Container size={size} menuItemSelected={menuItemSelected}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {
          <>
            <Link
              to="/"
              className={
                menuItemSelected === 'dashboard'
                  ? 'itemMenuSelected'
                  : 'menuItemUnselected'
              }
            >
              Listagem
              {menuItemSelected === 'dashboard' && <hr />}
            </Link>

            <Link
              to="/import"
              className={
                menuItemSelected === 'import'
                  ? 'itemMenuSelected'
                  : 'menuItemUnselected'
              }
            >
              Importar
              {menuItemSelected === 'import' && <hr />}
            </Link>
          </>
        }
      </nav>
    </header>
  </Container>
);

export default Header;
