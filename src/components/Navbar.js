import {
  CustomToolbar,
  AppContainer,
  Title,
  NavLink,
  NavButton,
  ButtonWrapper,
} from "./styles";
import { Button } from "@mui/material";
import NavConfig from "./NavConfig";

export default function NavBar() {
  const logoutHandler = () => {
    // localStorage.removeItem(storageKey.token);
    // navigate("/user/login");
    alert("logout");
  };
  return (
    <AppContainer position="fixed">
      <CustomToolbar>
        <NavLink href="/">
          <Title variant="h6">IQAC EMEA</Title>
        </NavLink>
        <ButtonWrapper>
          {NavConfig.map((nav, index) => (
            <NavLink href={nav.route}>
              <NavButton
                key={index}
                sx={{
                  background: "rgba(56, 142, 60, 0)"}}
              >
                {nav.label}
              </NavButton>
            </NavLink>
          ))}
          <Button
            color="error"
            variant="contained"
            onClick={logoutHandler}
            size="small"
          >
            Logout
          </Button>
        </ButtonWrapper>
      </CustomToolbar>
    </AppContainer>
  );
}
