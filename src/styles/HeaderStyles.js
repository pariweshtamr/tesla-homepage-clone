import styled from "styled-components"

export const HeaderContainer = styled.div`
  min-height: 65px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const Logo = styled.div`
  a img {
    width: 130px;
    height: 20px;
  }
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    letter-spacing: 1.5px;
    padding: 8px 15px;
    border-radius: 5px;
    flex-wrap: no-wrap;
    &:hover {
      background: #b1b1b174;
    }
  }
  @media (width < 1200px) {
    display: none;
  }
`

export const RightMenu = styled.div`
  a,
  button {
    font-weight: 600;
    letter-spacing: 1.5px;
    padding: 8px 15px;
    flex-wrap: no-wrap;
    background: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background: #c8c8c874;
    }
  }
`

export const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  text-align: left;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  padding: 2rem;
  width: 350px;
  z-index: 999;
  gap: 3rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  ul li {
    padding-left: 1rem;
    list-style: none;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;

    &:hover {
      background: #ebeaea84;
    }
  }

  .close-icon {
    align-self: flex-end;
    cursor: pointer;
  }
`
