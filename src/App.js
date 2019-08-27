import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    const {friends, picture, name} = this.state
    let newFriends = friends.slice();
    newFriends.push({picture, name})
    this.setState({
      friends: newFriends,
      picture: '', name: ''})
    console.log(this.state)
  }

  render() {
    const friends = this.state.friends.map( ( friend, index ) => (
      <div key={ `friend-${ index }-${ friend.name }` }>
        <img width="100px" src={ friend.picture } />
        <span>{ friend.name }</span>
      </div>
    ));
    return (
      <div>
        Picture: <input onChange={e => this.updatePicture(e.target.value)} value={this.state.picture}/>
        Name: <input onChange={e => this.updateName(e.target.value)} value={this.state.name}/>
        <button onClick={() => this.addFriend(this.state)}>Add Friend</button>
        {friends}
      </div>
    );
  }  
}

export default App;
