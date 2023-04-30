import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogPostsMetadata } from "../../BlogMetadata/BlogPostsMetadata";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import CircleArrowIcon, { ArrowDirecton } from "../CircleArrowIcon";

const BlogContentPage = (): JSX.Element => {
  const { slug, id } = useParams();
  const navigate = useNavigate();
  const [blogContent, setBlogContent] = React.useState<string>("");

  const blogPostMetadata = blogPostsMetadata.find(
    (blogPostMetadata) => blogPostMetadata.blogId === Number(id)
  );

  React.useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/BlogContent/${slug}.md`
      );
      const text = await response.text();
      setBlogContent(text);
    };

    fetchContent();
  }, [slug]);

  return (
    <main>
      <div className="layout">
        <div className="blog-content">
          <div className="blog-content-section">
            <Link
              to={".."}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
              className="blog-content-back-link"
            >
              <h3>
                <CircleArrowIcon arrowDirection={ArrowDirecton.LEFT} /> Back
              </h3>
            </Link>
            <h1>{blogPostMetadata?.blogTitle}</h1>
            <h3>{blogPostMetadata?.dateOfPublication}</h3>
            <ReactMarkdown>{blogContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogContentPage;
