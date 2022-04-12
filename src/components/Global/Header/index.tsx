import { Wrapper, Container, LogoutButton } from "./styles";

import { useUser } from "../Providers/user";
import Link from "next/link";

const Header: React.FC = () => {
  const { signOut } = useUser();

  return (
    <Wrapper>
      <Container>
        <Link href="/dashboard" passHref>
          <a>
            <img src="/wptrack.svg" />
          </a>
        </Link>
        <LogoutButton onClick={() => signOut()}>Sair</LogoutButton>
      </Container>
    </Wrapper>
  );
};

export default Header;
