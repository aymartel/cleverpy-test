import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IComment, IPost, IUser } from '../interfaces/interfaces';
import { useEffect } from 'react';
import { Loading } from '../components/Loading ';
import { Comment, UserInfo } from '../components';




export const PostDetailPage = () => {

  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(p => {
        setPost(p)
        fetch(`https://jsonplaceholder.typicode.com/users/${p.userId}`)
          .then(response => response.json())
          .then(u => setUser(u));
      }
      );

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json())
      .then(с => setComments(с));

  }, [id]);

  if (!post || !user) {
    return <Loading />;
  }

  return (
    <main className="p-4">
      <div className="card-detail">
        <button className="delete-button" onClick={() => navigate(-1)}> <i className="fa-regular fa-hand-point-left mr-1" />
          Regresar a la Lista</button>
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        {user && <UserInfo name={user.name} companyName={user.company.name} />}
        <p className="mb-4">{post.body}</p>
        <section className="comments">
          <h2 className="text-xl font-bold mb-4">Comments</h2>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
        </section>
      </div>
    </main>
  );
};
