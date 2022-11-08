import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = useState({
    title: 'Static',
    body: 'Text'
  });

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  
  return (
    <main>
      <div>React ⚛️ + Vite ⚡ + Replit 🌀</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </main>
  )
}
