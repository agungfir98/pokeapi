import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache(),
});

export const details = async (req: { body: any }, res: any) => {
  const name: number = req.body;
  try {
    const data = await client.query({
      query: gql`
      query getName($name: String!){
        pokemon(name: "${name}"){
          id
          name
          types{
            type{
              name
            }
          }
          abilities{
            ability{
              name
            }
          }
          moves{
            move{
              name
            }
          }
        }
      }`,
    });
    res.status(200).json({
      data: data,
    });
  } catch (e) {
    if (e) {
      res.status(404).json({
        error: "something not right",
        e,
      });
    }
  } finally {
    console.log("ayoo");
  }
};
