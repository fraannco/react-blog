import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        doloremque error beatae omnis, similique earum corporis fuga pariatur
        explicabo iure sint vitae, numquam facere repellat, quae velit nobis
        inventore atque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        doloremque error beatae omnis, similique earum corporis fuga pariatur
        explicabo iure sint vitae, numquam facere repellat, quae velit nobis
        inventore atque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        doloremque error beatae omnis, similique earum corporis fuga pariatur
        explicabo iure sint vitae, numquam facere repellat, quae velit nobis
        inventore atque.
      </p>
    </div>
  );
};

export default Post;
