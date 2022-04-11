import { Wrapper, Container, LogoutButton } from "./styles";

import { useUser } from "../Providers/user";

const Header: React.FC = () => {
  const { signOut } = useUser();

  return (
    <Wrapper>
      <Container>
        <img src="wptrack.svg" />
        <LogoutButton onClick={() => signOut()}>Sair</LogoutButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
