import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/flo-3/web3rsvpsubgraph",
  cache: new InMemoryCache(),
});

export default client;