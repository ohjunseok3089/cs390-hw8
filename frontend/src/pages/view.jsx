import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export function View() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async function () {
      const req = await fetch("http://localhost:3000/blog/");
      const json = await req.json();
      setPosts(json);
    })();
  }, []);
  
  return (
    <div>
      <Link to="/"> Home</Link>
      <div style={{
        boxShadow: "1px 2px 3px 4px rgba(20,20,20,0.4)",
        padding: "1vw",
        margin: "1vw",
      }}>
        {posts.map((post) => (
          <div
            style={{
              border: "2px solid",
              width: "29.8%",
              margin: "auto",
              textAlign: "center",
              padding: "1vw",
              marginBottom: "1vw",
              marginLeft: ".5vw",
              marginRight: ".5vw",
              display: "inline-block"
            }}
          >
            <div
              
            >
              <h2 style={{margin: "0.2rem"}}>{post.title}</h2>
              <div>{post.content}</div>
              <button>DELETE</button>
            </div>

          </div>
          
        ))}
      </div>
    </div>
  );
}
