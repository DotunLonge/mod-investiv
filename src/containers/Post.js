import React from "react";
import { withRouteData, Link } from "react-static";
import Moment from "react-moment";
import Markdown from "react-markdown";

import { Head } from "react-static";

import PostStyle from "../styles/post.style";

const Post = ({ post }) => (
  <PostStyle>
    <Head>
      <title>Investiv Group | Blog - {post.data.title}</title>
    </Head>

    <div className="xs-12 withBackground">
      <div className="c-w relative">
        <div className="c t-c">
          <h3> {post.data.title} </h3>
        </div>
      </div>
    </div>

    <div className="xs-12 content">
      <div className="xs-10 xs-off-1 sm-8 sm-off-2">
        <div className="xs-12 t-c">
          <img className="image" src={post.data.thumbnail} alt="" />
        </div>
        <div className="xs-12 ">
          <h3 id="post-title">{post.data.title}</h3>
          <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
          <Markdown source={post.content} escapeHtml={false} />
        </div>
      </div>
    </div>
  </PostStyle>
);

let PostPage = withRouteData(Post);
export default PostPage;
