import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSubmit = async(e)=> {
    e.preventDefault();
    const requestData = JSON.stringify({title, content, password});
    const headers = {"content-type": "application/json"};
    
    fetch('http://localhost:3000/blog/create-post', {
      method: 'post',
      body: requestData,
      headers: headers,
    })
    .then((done) => {
      console.log(done);
      if (done.status == 500) {
        alert("Post not created.");
      } else if (done.status == 200) {
        alert("Post created.")
      } else {
        alert("Post with same title exists.");
      }
    });
    // .catch((error) => alert("Post not created."));

    if (error) {
      alert("YO! NO TRIPPIN");
      return <div>Error</div>
    }

    if (done) {
      alert("YO! NO TRIPPIN");
      return (
        <div>
          <Link to="/view">Check out your blog post</Link>
        </div>
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
      </div>
      <input
        required
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button>Post</button>
    </form>
  );
}
