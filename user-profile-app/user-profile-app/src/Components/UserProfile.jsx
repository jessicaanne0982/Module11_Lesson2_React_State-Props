import { Component } from "react";
import './userProfileStyles.css'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this)  // Ensures method is bound to the component
    }

    // Corrected function using setState
    changeName() {
        this.setState({name: 'Charlie'})
    }

    render() {
        const name = this.state.name

        return (
            <div className="profile-box">
                <h1>User Profile</h1>
                <p >Name: {name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile