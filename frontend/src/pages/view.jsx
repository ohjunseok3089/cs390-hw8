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
  const onDelete = () => {
    delete
  }
  return (
    <div>
      <Link to="/"> Home</Link>
      <div>
        {posts.map((post) => (
          <div
            style={{
              border: "2px solid",
              width: "35%",
              margin: "auto",
              textAlign: "center",
              padding: "1vw",
              marginBottom: "1vw",
            }}
          >
            <div>
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
