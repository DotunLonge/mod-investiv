import React from "react";
import { withRouteData, NavLink } from "react-static";
import BlogStyle from "../styles/blog.style";

import right_arrow from "../assets/right-arrow.svg";

import { truncate } from "../helpers/utils";

export default withRouteData(({ posts }) => (
  <BlogStyle className="xs-12">
    <div className="xs-12 withBackground">
      <div className="c-w relative">
        <div className="c t-c">
          <h3> Nos actualités </h3>
        </div>
      </div>
    </div>

    <section className="xs-12" id="blog">
      <div className="xs-10 xs-off-1">
        {posts.map(post => (
          <div className="xs-12 sm-4 post-card" key={post.data.slug}>
            <div className="xs-12 sm-11 inner">
              <img className="image" src={post.data.thumbnail} alt="" />
              <div className="inner-inner">
                <h3>{post.data.title}</h3>
                <p>{truncate(post.content)}</p>

                <NavLink to={`/nos-actualités/post/${post.data.slug}`}>
                  Lire la suite <img src={right_arrow} className="arrow" />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </BlogStyle>
));
