import UseFetch from '../hooks/UseFetch';

function CustomFetch() {
  const { data, loading } = UseFetch(
    'https://jsonplaceholder.typicode.com/posts/',
    {}
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}> {post.title} </h3>
      ))}
    </div>
  );
}

export default CustomFetch;
