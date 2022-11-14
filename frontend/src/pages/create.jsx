import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);
  
  const handleSubmit = async(e)=> {
    e.preventDefault();
    const requestData = JSON.stringify({title, content});
    const headers = {"content-type": "application/json"};
    
    console.log(requestData);
    fetch('http://localhost:3000/blog/create-post', {
      method: 'post',
      body: requestData,
      headers: headers,
    });
    
  }
  if (error) {
    return <div>Error</div>
  }
  if (done) {
    return (
      <div>
        <Link to="/view">Check out your blog post</Link>
      </div>
    );
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
      <button>Post</button>
    </form>
  );
}
