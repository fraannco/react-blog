import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Franco</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quas
          voluptate, ullam ipsum veritatis aperiam soluta et in. Quas esse
          officiis veniam laborum neque pariatur dolorem dicta incidunt sint
          porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          qui a sint labore id aspernatur, corporis odio dolorum recusandae
          alias quasi temporibus omnis, fuga vero cumque eveniet possimus amet
          reprehenderit. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Adipisci ullam assumenda fugit quo nostrum quisquam, earum
          deleniti? Veritatis, ipsam. Ut, placeat a? Libero consectetur
          doloribus fugit eos quasi voluptates dolorem. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Distinctio qui, molestias
          accusantium veniam recusandae nemo saepe quam natus iusto consequuntur
          fuga cumque laboriosam quia voluptate quos ad incidunt voluptatibus
          earum? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Blanditiis, temporibus nisi, possimus ipsum iusto hic autem alias
          deleniti similique provident dolorem maiores cumque corrupti vitae
          fugiat neque quos repudiandae voluptate!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
