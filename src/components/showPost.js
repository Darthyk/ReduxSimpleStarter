import React, {Component} from 'react';
import {getPost, deletePost} from "../actions";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPost(id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        });
    }

    render() {
        const {post} = this.props;

        if(!post) {
            return <div>Loading...</div>;
        }

        return(
          <div>
              <Link className="btn" to="/">Back to index</Link>
              <button
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
              >
                  Delete post
              </button>

              <h3>{post.title}</h3>
              <h6>Categories: {post.categories}</h6>
              <p>{post.content}</p>
              <Link className="btn" to="/">Delete</Link>
          </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {getPost, deletePost})(ShowPost);