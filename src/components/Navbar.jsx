import React from 'react'
import {Navbar, Dropdown, Avatar} from 'flowbite-react'
import {useSelector} from 'react-redux'
import avatarDefault from '../assets/avatardefault.png'
import Logo from '../assets/pokelogo.png'

const NavbarC = () => {

    const user = useSelector(store => store.storeLogin)
  return (
    <>
    <Navbar
  fluid={true}
>
  <Navbar.Brand href="#">
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
      img={user.photoURL || avatarDefault }
      rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {user.displayName}
        </span>
        <span className="block truncate text-sm font-medium">
          {user.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Settings
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>

    <Navbar.Link
      href="/#"
    >
      Favourites
    </Navbar.Link>

  </Navbar.Collapse>
</Navbar>
    </>
  )
}

export default NavbarC