import React from 'react'
import {Navbar, Dropdown, Avatar} from 'flowbite-react'
import avatarDefault from '../assets/avatardefault.png'
import Logo from '../assets/pokelogo.png'
import { useDispatch } from 'react-redux'
import { actionLogoutAsyn } from '../redux/actions/actionLogin'

const NavbarC = ({isActive}) => {

    const dispatch = useDispatch();

    const logout = () =>{
      dispatch(actionLogoutAsyn())
    }

  return (
    <>
    <Navbar
  fluid={true}
>
  <Navbar.Brand>
    <img
      src={Logo}
      className="mr-3 h-6 sm:h-9"
      alt="Pokedex Logo"
      style={{maxWidth:'100%'}}
    />
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings"
      img={isActive.photoURL || avatarDefault }
      rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {isActive.displayName}
        </span>
        <span className="block truncate text-sm font-medium">
          {isActive.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/home"
      >
      Home
    </Navbar.Link>

    <Navbar.Link
    href="/favorites"
    >
      Favourites
    </Navbar.Link>

  </Navbar.Collapse>
</Navbar>
    </>
  )
}

export default NavbarC