import { useRouter } from "next/router";

import UserProvider from "@/components/Global/Providers/user";
import Routes from "@/components/Global/Routes";
import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <UserProvider>
      <GlobalStyles />

      {/* <Routes
        authenticated={
          !router.pathname.includes("/login") ||
          !router.pathname.includes("/registro")
        }
      > */}
      <Component {...pageProps} />
      {/* </Routes> */}
    </UserProvider>
  );
}

export default MyApp;
