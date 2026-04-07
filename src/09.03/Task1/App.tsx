import { useEffect, useState } from "react";
import "./App.css";

type Post = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await res.json();
      setPosts(data.slice(0, 6));
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {posts.map((post, index) => (
        <div className={`card ${index % 2 === 0 ? "blue" : "green"}`} key={post.id}>
          
          <div className="card-header">
            <h3> {post.title} </h3>
          </div>

          <div className="card-body">
            <p>{post.body}</p>

            <button className="btn">
              Перейти
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default App;