import React, {Component} from 'react'
import { Query } from 'react-apollo';
import { FEED_QUERY } from './Queries';

export class Links extends Component{
  render(){
      return (
        <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if(loading) return <div>Fetching...</div>
          if(error) return <div>Error {error}</div>
          const linksList = data.feed;
          return <ul>{linksList.map(link => <li key={link.id}><a href={link.url}>{link.description}</a></li>)}</ul>
        }}
        </Query>
      )
  }
}

