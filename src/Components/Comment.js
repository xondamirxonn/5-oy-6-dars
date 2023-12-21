import "../Components/Comment.css";
import comment_1 from "../images/comment-1.png";
import comment_2 from "../images/comment-2.png";
import comment_3 from "../images/comment-3.png";
import comment_4 from "../images/comment-4.png";
import comment_5 from "../images/comment-5.png";
import comment_6 from "../images/comment-6.png";
import person_women from "../images/comment-women.png";
function Comment() {
  return (
    <div className="container">
      <div className="comment-text">
        <p>TESTIMONIAL</p>
        <h2>
          See what they’re saying <br /> about us
        </h2>
      </div>
      <div className="comment-imgs">
        <img src={comment_1} alt="" />
        <img src={comment_2} alt="" />
        <img src={comment_3} alt="" />
        <img src={comment_4} alt="" />
        <img src={comment_5} alt="" />
        <img src={comment_6} alt="" />
      </div>
      <div className="bg-primary">
        <div>
          <img src={person_women} alt="" />
        </div>
        <div className="bg-primart-text">
          <h3 className="primary-h3">WHAT ARE YOU WAITING FOR?</h3>
          <h2 className="primary-h2">Find the talent to get <br /> your business growing</h2>
          <a className="primary-a" href="#">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default Comment;
