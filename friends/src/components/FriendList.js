import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';

class FriendList extends React.Component {
    state = {
        friends : []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            
            this.setState({
                friends: res.data                   
            })
        })
    }

    render() {

        const addFriend = (friend) => {
            axiosWithAuth()
            .post('http://localhost:5000/api/friends', friend)
            .then(res => {
                this.setState({
                    friends: [...this.state.friends, friend]
                });
            })
        }
    

       return  <div>
            {this.state.friends.map(friend => {
                return (
                    <div>
                        {friend.id} {friend.name} {friend.age} {friend.email}
                    </div>   
                )

            })}
      <AddFriendForm addFriend={addFriend} />

        </div>
    }
}

export default FriendList;