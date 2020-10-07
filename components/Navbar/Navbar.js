import React, { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItems,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon /> TechStart
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItems>
              <NavLinks to="/">Home</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="/services">Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="/products">Products</NavLinks>
            </NavItems>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/signup">
                  <Button primary>Sign Up</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/signup">
                  <Button fontBig primary>
                    Sign Up
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
