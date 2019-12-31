import React, {Component} from 'react';
import User from './models/User';


class UserForm extends Component {
  state = {user: new User()}
  constructor(props){
      super(props)
      const user = props.user || new User();
      
      console.log(user);

      

  }



clearForm = () => {
    this.setState(User());
}  
  
editUser = () => {
    this.props.isEditing(true)
};


    render() {

       
        return (
            <form className='form'>
                <h4> User Form</h4>
                <p>Enter avatar link</p>
                <input 
                    type = 'text'
                    value = {this.state.avatar}
                    onChange={e => this.setState({ avatar: e.target.value })}
                />
                

                <p>Enter you email address</p>

                <input
                    type='email'
                    value = {this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                />
                

                <p>Enter your first name</p>

                <input
                    type='text'
                    value = {this.state.first_name}
                    onChange={e => this.setState({ first_name: e.target.value })}
                />
                


                
                <p>Enter your last name</p>
                <input
                    type='text'
                    value = {this.state.last_name}
                    onChange={e => this.setState({ last_name: e.target.value })}
                />
                <br />
                <br />
                <button onSubmit={this.props.saveUser, editUser()} >
                    Save
                </button>
                
                <button onSubmit={this.clearForm}>
                    Cancel
                </button>
                

                
                
         
            </form>
        )
    }


export default UserForm