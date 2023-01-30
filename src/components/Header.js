import React, { useState } from "react"
import {
  HeaderContainer,
  Logo,
  Menu,
  RightMenu,
  SideNav,
} from "../styles/HeaderStyles"
import { Close } from "@mui/icons-material"
import { useSelector } from "react-redux"
const Header = () => {
  const [show, setShow] = useState(false)
  const { cars } = useSelector((state) => state.car)
  return (
    <HeaderContainer>
      <Logo>
        <a href="/">
          <img src="/assets/logo.svg" alt="" />
        </a>
      </Logo>
      <Menu>
        {cars &&
          cars.map((car, i) => (
            <a href="/" key={i}>
              {car}
            </a>
          ))}

        <a href="/">Cybertruck</a>
        <a href="/">Powerwall</a>
      </Menu>

      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <button onClick={() => setShow(true)}>Menu</button>
      </RightMenu>
      {show && (
        <SideNav>
          <Close className="close-icon" onClick={() => setShow(false)} />
          <ul>
            <li>
              <a href="/">Existing Inventory</a>
            </li>
            <li>
              <a href="/">Used Inventory</a>
            </li>
            <li>
              <a href="/">Trade-in</a>
            </li>
            <li>
              <a href="/">Test Drive</a>
            </li>
            <li>
              <a href="/">Company Cars</a>
            </li>
            <li>
              <a href="/">Roadster</a>
            </li>
            <li>
              <a href="/">Commercial Energy</a>
            </li>
            <li>
              <a href="/">Utilities</a>
            </li>
            <li>
              <a href="/">Energy</a>
            </li>
            <li>
              <a href="/">Charging</a>
            </li>
            <li>
              <a href="/">Find Us</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              {" "}
              <a href="/">Investor Relations</a>
            </li>
          </ul>
        </SideNav>
      )}
    </HeaderContainer>
  )
}

export default Header
