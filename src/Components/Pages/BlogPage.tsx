import React from "react";
import Typewriter from "typewriter-effect";
import BlogCard from "../BlogCard";
import { blogPostsMetadata } from "../../BlogMetadata/BlogPostsMetadata";
import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";

const BlogPage = (): JSX.Element => {
  const location = useLocation();
  return (
    <main>
      <div className="layout">
        <div className="blog">
          <section className="blog-section">
            <h1>Welcome To My Digital Garden</h1>
            <h3>
              I share my learnings and experiences in form of blogs on{" "}
              <span style={{ display: "inline-block" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Distributed Systems",
                      "Interview Experiences",
                      "Data Structures",
                      "Low Level Design",
                      "Miscellaneous Topics",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    skipAddStyles: true,
                    wrapperClassName: "typewriter-text",
                    cursor: ".",
                  }}
                />
              </span>
            </h3>
          </section>
          <section className="blog-list">
            {blogPostsMetadata.map((postMetadata) => (
              <Link
                className="blog-post-link"
                to={`${location.pathname}/${slugify(postMetadata.blogTitle, {
                  lower: true,
                })}/${postMetadata.blogId}`}
                key={postMetadata.blogId}
              >
                <BlogCard
                  dateOfPublication={postMetadata.dateOfPublication}
                  blogTitle={postMetadata.blogTitle}
                  blogSubTitle={postMetadata.blogSubTitle}
                />
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
