import React, {Component} from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

class AllPost extends Component {

    render(){
        return(
            <div>
                <h1> All Posts</h1>
                    {console.log(this.props.posts)}
                    {this.props.posts.map((post) => <Post key={post.id} post={post}/>)}
                    <button><Link to="/">Back</Link></button>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);