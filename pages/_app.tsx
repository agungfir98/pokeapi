import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./components/layout";
import Head from "next/head";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache(),
});
// client.refetchQueries()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Head>
          <title>Pokemon API</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
