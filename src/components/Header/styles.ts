import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  menuItemSelected?: 'dashboard' | 'import';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }

        &.menuItemSelected {
          opacity: 0;
        }

        &.menuItemUnselected {
          opacity: 0.8;
        }

        hr {
          border-bottom: 2px solid #ff872c;
          border-top: none;
          border-left: none;
          border-right: none;
          padding-top: 10px;
        }
      }
    }
  }
`;
