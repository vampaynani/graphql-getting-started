import gql from "graphql-tag";

export const FEED_QUERY = gql`{
  feed{
    id
    description
    url
  }
}`;