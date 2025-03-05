import React, { useState } from "react";
import { Navbar, Dropdown, Avatar } from "flowbite-react";

function HomeNav({ price }) {
  const [user, setUser] = useState();

  return (
    <Navbar fluid>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Navbar.Collapse>
            <Navbar.Link href="/login">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>
            </Navbar.Link>
            <Navbar.Link href="/register">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600">Register</button>
            </Navbar.Link>
          </Navbar.Collapse>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/" active>Home</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>

        <Dropdown label="Categories"  className="text-white" inline>
          <Dropdown.Item href="/categories/tech">Tech</Dropdown.Item>
          <Dropdown.Item href="/categories/lifestyle">Lifestyle</Dropdown.Item>
          <Dropdown.Item href="/categories/fashion">Fashion</Dropdown.Item>
          <Dropdown.Item href="/categories/food">Food</Dropdown.Item>
        </Dropdown>
        
        <Navbar.Link href="/pricing">Pricing</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HomeNav;
