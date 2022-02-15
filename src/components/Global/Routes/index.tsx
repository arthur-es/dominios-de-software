import { useRouter } from "next/router";
import { useEffect } from "react";

import { useUser, STATUS } from "@/components/Global/Providers/user";

import Spinner from "@/utils/Spinner";

interface IProps {
  authenticated?: boolean;
}

const Routes: React.FC<IProps> = ({ authenticated, children }) => {
  const { status, currentUser, setStatus } = useUser();
  const { push } = useRouter();

  // if (status === STATUS.IDLE) return <Spinner />;

  if (!authenticated) {
    switch (status) {
      case STATUS.DISCONNECTED:
        return <>{children}</>;
      case STATUS.CONNECTED:
        push("/dashboard");
        return null;
      default:
        return <Spinner />;
    }
  }

  switch (status) {
    case STATUS.CONNECTED:
      return <>{children}</>;
    case STATUS.DISCONNECTED:
      push("/login");
      return <></>;
    default:
      return <Spinner />;
  }
};

export default Routes;
