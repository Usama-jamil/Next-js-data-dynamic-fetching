import React from 'react';

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Props = {
  allAlbums: string[];
};

export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const allAlbums: Album[] = await res.json();

  // Sending fetched data to the page component via props.
  return {
    props: {
      allAlbums: allAlbums.map((album: Album) => album.title),
    },
  };
};

const Posts: React.FC<Props> = ({ allAlbums }) => {
  return (
    <div>
      <h1>All Albums</h1>
      {allAlbums.map((album, idx) => (
        <div key={idx}>{album}</div>
      ))}
    </div>
  );
};

export default Posts;
