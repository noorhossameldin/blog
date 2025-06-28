type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post: Post = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </main>
  );
}
