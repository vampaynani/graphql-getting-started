import gql from "graphql-tag";

export const CREATE_LINK = gql`
mutation PostMutation($description: String!, $url: String!){
  post(description: $description, url: $url) {
    id
    description
    url
  }
}`;