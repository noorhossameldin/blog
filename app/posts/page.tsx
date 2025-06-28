
import React from 'react';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
};
export const metadata = {
  title: 'All Posts',
  description: 'Browse a list of blog posts fetched from JSONPlaceholder.',
};

export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Blog Posts</h1>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post) => (
          <li key={post.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '0.5rem' }}>
            <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
             <h2 style={{ fontSize: '1.2rem' }}>{post.title}</h2>
             <p>{post.body.substring(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
