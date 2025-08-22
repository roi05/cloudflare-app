'use client';

import { useQuery } from '@tanstack/react-query';

// Type for a post
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Fetch function returning typed posts
async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default function PostsPage() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Posts</h1>
      <ul className='space-y-2'>
        {posts?.map(post => (
          <li key={post.id} className='border p-2 rounded'>
            <h2 className='font-semibold'>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
