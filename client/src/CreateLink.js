import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { CREATE_LINK } from './Mutations';
import { FEED_QUERY } from './Queries';

export class CreateLink extends Component{
  state = {
    description: '',
    url: ''
  }
  render(){
    const {description, url} = this.state;
    return (
      <div>
        <input type="text" value={description} onChange={e => this.setState({description: e.target.value})} placeholder="Description"/>
        <input type="text" value={url} onChange={e => this.setState({url: e.target.value})} placeholder="URL"/>
        <Mutation mutation={CREATE_LINK} variables={{description, url}} update={(store, { data: { post } }) => {
          const state = store.readQuery({ query: FEED_QUERY });
          const newState = [...state.feed, post];
          store.writeQuery({
            query: FEED_QUERY,
            data: {feed: newState}
          });
        }}>
          {createLink => <button onClick={createLink}>Publish</button>} 
        </Mutation>
      </div>
    )
  }
}