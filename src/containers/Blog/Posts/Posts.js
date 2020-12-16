import React,{Component} from "react";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import {Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost"



import axios from "../../../axios";
class Posts extends Component{
    state = {
        posts: [],
       
      };
      componentDidMount() {
        console.log(this.props);
        axios
          .get("/posts")
          .then((response) => {
            const posts = response.data.slice(0, 4);
            const updatedData = posts.map((post) => {
              return {
                ...post,
                author: "Mayuri",
              };
            });
    
            this.setState({ posts: updatedData });
            // console.log(response);
          })
          .catch((error) => {
            console.log(error)
          });
      }
      postSelectedHandler = (id) => {
      this.props.history.push({pathname:"/posts/"+id})
        //this.props.history.push("/posts/"+id);
        
      };
    render(){
        let posts = <p style={{ textAlign: "center" }}>Somthing went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
         // <Link to={'/posts/'+ post.id} key={post.id}>
          <Post  
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
         // </Link>
        );
      });
    }
        return(<div>
             <section className="Posts">{posts}</section>
             <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
        </div>);
    }
}

export default Posts;

