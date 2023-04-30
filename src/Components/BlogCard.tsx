import CircleArrowIcon, { ArrowDirecton } from "./CircleArrowIcon";

interface BlogCardProps {
  blogTitle: string;
  blogSubTitle: string | undefined;
  dateOfPublication: string;
}

const BlogCard = (props: BlogCardProps): JSX.Element => {
  return (
    <div className="blog-card">
      <h4>{props.dateOfPublication}</h4>
      <h2>{props.blogTitle}</h2>
      <h3>{props.blogSubTitle}</h3>
      <div className="read-more">
        <p>Read more</p>
        <CircleArrowIcon arrowDirection={ArrowDirecton.RIGHT} />
      </div>
    </div>
  );
};

export default BlogCard;
