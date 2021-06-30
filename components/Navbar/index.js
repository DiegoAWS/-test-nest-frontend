import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  NavbarText,
} from "reactstrap";
import plusIcon from "../../public/img/plus-circle.svg";
import minusIcon from "../../public/img/dash-circle.svg";
import Image from "next/image";

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <Link href="/">Personal</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mx-3">
              <h2>Users Personal</h2>
            </NavItem>
          </Nav>
          <NavbarText className="mx-2">
            <Link href="/users/">Add User</Link>
          </NavbarText>

          <NavbarText className="mx-2">
            <Link href="/users/id-1">User Item 1</Link>
          </NavbarText>
          <Button color="danger" size='sm' className="d-flex align-items-center m-2">
          <Image alt="minus icon" src={minusIcon} />
            <span className="p-2"> Delete</span>
          </Button>
          <Button color="success" size='sm' className="d-flex align-items-center m-2">
            <Image alt="plus icon" src={plusIcon} />
            <span className="p-2"> Add New Employees</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
