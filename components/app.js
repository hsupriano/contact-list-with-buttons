import React, { Component } from "react";
import UserCard from "./user-card";
import Service from "./userservice";
import UserForm from "./userform";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isEditing: false
    };
    
  

  };


  componentDidMount() {

    Service.getUser().then(r => {
      const users = r.data.data;
      this.setState({ users: users });
    });
  }

  onAdd = user => {
      const users=
      this.state.users.concat(user);
      this.setState({ users: users });
      this.setState({isEditing: false});
    
  }
  onCancel = user => {
    const user =
    this.setState({
      avatar: '',
      email: '',
      first_name: '',
      last_name: '',


    });
  }


  toggleEdit = (isEditing) => {
    this.setState({isEditing})
  };




    render(props) {
    return (
      <div>
        { this.state.isEditing &&
          <UserForm onAdd={this.onAdd} 
          onCancel={this.onCancel} />
        }

        { !this.state.isEditing && 
          <div>
            <h1>Contact List</h1>
            <button type='button' onClick={() => {this.setState({isEditing:true})}} >
              Add
            </button>
            <h3>Users</h3>
            {this.state.users.map(user => (
              <UserCard user={user} />
            ))}
          </div>
        }
      </div>
    );
  }

}

export default App;