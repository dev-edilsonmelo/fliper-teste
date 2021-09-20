import {
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

export const api = new ApolloClient({
    fetchOptions: {
        credentials: "include"
    },
    headers: {
        'x-hasura-access-key': process.env.REACT_APP_KEY_GRAPHQL
    },
    uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql',
    cache: new InMemoryCache()
});
