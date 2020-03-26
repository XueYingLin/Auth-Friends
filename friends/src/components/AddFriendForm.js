import React, { useState } from 'react';

export default function AddFriendForm(props) {
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFriend = {
            name, id, age, email
        };
        console.log("Adding new friend", newFriend);

        props.addFriend(newFriend);
    }
    return (
       <form onSubmit={ handleSubmit }>
           <label> Name: 
                <input type="text" name="name" placeholder="name" onChange={e => setName(e.target.value)} />
           </label>
           <label> ID: 
               <input type="text" name="id" placeholder="Id" onChange={e => setId(e.target.value)} />
           </label>
           <label> Age:
               <input type="text" name="age" placeholder="age" onChange={e => setAge(e.target.value)} />
           </label>
           <label>Email:
               <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
           </label>

           <input type="submit" value="Submit" placeholder="Submit"  />
       </form> 
    )
}