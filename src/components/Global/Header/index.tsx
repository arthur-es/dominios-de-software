import { Wrapper, Container, LogoutButton } from "./styles";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <img src="wptrack.svg" />
        <LogoutButton>Sair</LogoutButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
