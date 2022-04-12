import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import UserProvider from "@/components/Global/Providers/user";
import Routes from "@/components/Global/Routes";
import GlobalStyles from "@/styles/GlobalStyles";
import { Toast } from "@/utils/Toaster";

import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <UserProvider>
      <GlobalStyles />
      <Toast />

      <Routes
        authenticated={
          !router.pathname.includes("/login") &&
          !router.pathname.includes("/registro") &&
          !router.pathname.includes("/password-recover") &&
          !router.pathname.includes("/password-update") &&
          !(router.pathname === "/")
        }
        any={router.pathname.includes("/feedback")}
      >
        <Component {...pageProps} />
      </Routes>
    </UserProvider>
  );
}

export default MyApp;
