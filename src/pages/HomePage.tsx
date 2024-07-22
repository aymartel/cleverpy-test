import { useEffect, useState } from 'react';
import { Card, Header, Loading } from '../components';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const HomePage = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePost, setVisiblePost] = useState<number>(5);

  const loadMorePosts = () => {
    setVisiblePost(prevVisiblePosts => prevVisiblePosts + 5);
  };

  const currentPosts: Post[] = posts.slice(0, visiblePost);

  const handleDelete = (id: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(p => setPosts(p));
  }, []);


  return (
    <>
      <Header
        title='Prueba desarrollador frontend'
        text='La prueba consiste en diseñar, implementar y conectar un plataforma con “cards” para la
              visualización de posts o comentarios realizados por un usuario. Para ello, utilizaremos como ejemplo
              el contenido gratuito ofrecido por jsonplaceholder.typicode.com, y más en concreto, los resultados
              ofrecidos por la llamada GET de https://jsonplaceholder.typicode.com/posts.'
      />
      {
        posts.length === 0 ? <Loading /> : <main className="p-4">
          <div className="cards-container">
            {currentPosts.map((post) => (
              <div key={post.id} className="card-wrapper">
                <Card
                  title={post.title}
                  content={`${post.body}`}
                  url={`post/${post.id}`}
                  onDelete={() => handleDelete(post.id)}
                />
              </div>
            ))}
          </div>
          {visiblePost < posts.length && (
            <div className="flex justify-center mt-4">
              <button className="load-more-button" onClick={loadMorePosts}>
                Cargar Más
              </button>
            </div>
          )}
        </main>
      }
    </>
  );
};
