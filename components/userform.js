import React from 'react';
import User from './models/User';


class UserForm extends React.Component {

    constructor(props) {
        super(props)
        const user = props.user || new User();
        this.state = { user: new User() }


    };

    submit = e => {
        e.preventDefault();
        this.props.onAdd(this.state);
        
    }

    cancel = e => {
        this.props.onCancel(this.state);
    }  
      
    editUser = () => {
       return this.props.isEditing(true)
    };





    render() {


        return (
            <form className='form' onSubmit={this.submit}>
                <h4> User Form</h4>
                <p>Enter avatar link</p>
                <input
                    type='text'
                    name='avatar'
                    onChange={e => this.setState({ avatar: e.target.value })}
                    value={this.state.avatar}
                />


                <p>Enter you email address</p>

                <input
                    type='email'
                    name='email'
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}


                />


                <p>Enter your first name</p>

                <input
                    type='text'
                    name='first_name'
                    onChange={e => this.setState({ first_name: e.target.value })}
                    value={this.state.first_name}

                />




                <p>Enter your last name</p>
                <input
                    type='text'
                    name='last_name'
                    onChange={e => this.setState({ last_name: e.target.value })}
                    value={this.state.last_name}


                />
                <br />
                <br />
                <button onSubmit={this.props.saveUser} >
                    Save
                </button>
                
                <button onCancel={this.cancel}>
                    Cancel
                </button>

            </form>
        )
    }
}

export default UserForm