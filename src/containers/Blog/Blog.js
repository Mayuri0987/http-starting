import React, { Component } from "react";
import Posts from "./Posts/Posts";

import { Route, NavLink, Switch,Redirect } from "react-router-dom";

import NewPost from "./NewPost/NewPost";

import "./Blog.css";

class Blog extends Component {
  state={
    auth:true,
  }
  render() {
    return (
      <div>
        <header className="Posts">
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/" exact>
                 Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/newpost",
                    hash: "#submit",
                    search: "?quick-sumbit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* <Route path="/" exact render={()=><h1>Home</h1>}/> */}
       
        <Switch>
         {this.state.auth?<Route path="/newpost" component={NewPost} />:null}
         <Route path="/posts"  component={Posts} />
          <Route render={()=><h1>Not Found</h1>}/>
          {/* <Route path="/posts"  component={Posts} />
          <Redirect from="/" to="posts/"/> */}
          
        </Switch>
      </div>
    );
  }
}

export default Blog;
