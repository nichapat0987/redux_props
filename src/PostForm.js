import React, {Component} from 'react'
import {connect} from 'react-redux'

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const firstname = this.getFirstname.value;
        const lastname = this.getLastname.value;
        const data = {
            id: new Date(),
            firstname,
            lastname
        }
        /* console.log(data);*/
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getFirstname="";
        this.getLastname="";
    }
    render() {
        return (
            <div>
                <h1>Fill in</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={(input) => this.getFirstname = input} placeholder="Enter your FirstName" required/>
                    <input type="text" ref={(input) => this.getLastname = input} placeholder="Enter your LastName" required/>
                    <br/><br/>
                    <button>OK</button>
                </form>
            </div>
        )
    }
}

export default connect()(PostForm)