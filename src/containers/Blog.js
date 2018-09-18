import React from "react";
import { withRouteData, Link } from "react-static";
//

export default withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.data.slug}>
          <Link to={`/blog/post/${post.data.slug}`}>
            <img className="image" src={post.data.thumbnail} alt="" />
            <h1>{post.data.title}</h1>
          </Link>
        </li>
      ))}
    </ul>
  </div>
));
