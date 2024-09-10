import React from "react";
import { Container, Navbar } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Auth0 App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isAuthenticated ? (
            <>
              <Navbar.Text className="mx-4">
                Signed in as: <a href="/profile">{user?.name}</a>
              </Navbar.Text>
              <LogoutButton />
            </>
          ) : (
            <>
              <Navbar.Text className="mx-4">Sign In:</Navbar.Text>
              <LoginButton />
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
