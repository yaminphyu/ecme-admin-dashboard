import Layout from "@/components/Layout";
import { AuthProvider } from "@/contexts/AuthContext";
import { AuthGuard } from "@/modules/auth/AuthGuard";
import "@/styles/globals.css";
import { NextPageWithAuth } from "@/types";
import type { AppProps } from "next/app";

type AppPropsWithAuth = AppProps & {
  Component: NextPageWithAuth;
};

export default function App({ Component, pageProps }: AppPropsWithAuth) {
  const requiresAuth = Component.requiresAuth ?? false;
  
  return (
    <AuthProvider>
      <Layout>
        {requiresAuth ? (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </AuthProvider>
  )
}
