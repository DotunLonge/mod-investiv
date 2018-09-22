import React from "react";
import { withRouteData, NavLink } from "react-static";
import Moment from "react-moment";
import Markdown from "react-markdown";

import { Head } from "react-static";

import PostStyle from "../styles/post.style";
import BlogStyle from "../styles/blog.style";

import { truncate } from "../helpers/utils";
import right_arrow from "../assets/right-arrow.svg";

const Post = ({ post, similar }) => (
  <PostStyle>
    <Head>
      <title>Investiv Group | Blog - {post.data.title}</title>
    </Head>

    {/*
    <div className="xs-12 withBackground">
      <div className="c-w relative">
        <div className="c t-c">
          <h3> {post.data.title} </h3>
        </div>
      </div>
    </div>
*/}

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

        <BlogStyle className="xs-12 top">
          <div className="xs-12">
            <h3 className="t-c black">Articles similaires</h3>
          </div>

          <section className="xs-12" id="blog">
            <div className="xs-10 xs-off-1">
              {similar.map(post => (
                <div className="xs-12 sm-6 post-card" key={post.data.slug}>
                  <div className="xs-12 sm-11 inner">
                    <img className="image" src={post.data.thumbnail} alt="" />
                    <div className="inner-inner">
                      <h3>{post.data.title}</h3>
                      <p>{truncate(post.content)}</p>

                      <NavLink to={`/nos-actualités/post/${post.data.slug}`}>
                        Lire la suite
                        <img src={right_arrow} className="arrow" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </BlogStyle>
      </div>
    </div>
  </PostStyle>
);

let PostPage = withRouteData(Post);
export default PostPage;
