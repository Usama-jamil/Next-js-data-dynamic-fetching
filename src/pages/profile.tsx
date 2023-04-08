import React from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  allPosts: string[];
};

export const getServerSideProps = async (ctx: any) => {
  // ctx is the context object which contains the request,
  // response and props passed to the page.

  // fetching data from jsonplaceholder.
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const allPosts: Post[] = await res.json();

  // Sending fetched data to the page component via props.
  return {
    props: {
      allPosts: allPosts.map((post: Post) => post.title),
    },
  };
};

const Profile: React.FC<Props> = ({ allPosts }) => {
  return (
    <div>
      <h1>All Posts</h1>
      {allPosts.map((post, idx) => (
        <div key={idx}>{post}</div>
      ))}
    </div>
  );
};

export default Profile;
