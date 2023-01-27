import React, { Component } from "react";

class Userdetails extends Component {
    user = this.props.user;
    render() {
        return (
            <div>
                <h3>
                    {this.user.name}
                </h3>
                <h5>Email: {this.user.email}
                <br />
                phoneNumber: {this.user.phoneNumber}
                </h5>
            </div>
        )
    }
}