import React,{Component} from 'react'

export default class Post extends Component {
    render(){
        return(
            <div>
                <p>{this.props.post.firstname}</p>
                <p>{this.props.post.lastname}</p>
            </div>
        )
    }
}