import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sng90n2aj001wg4qy4gprn/master', 
    cache: new InMemoryCache(),
})