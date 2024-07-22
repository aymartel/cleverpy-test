import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

interface CardProps {
    title: string;
    content: string;
    url: string;
    onDelete: () => void;
}

export const Card = ({ title, content, url, onDelete }: CardProps) => {
    const handleDeleteClick = () => {
        Swal.fire({
          title: 'Esta Seguro que desea eliminar',
          text: `Post: ${title}`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#e6007e',
          cancelButtonColor: '#555555',
          confirmButtonText: 'Si, eliminalo!',
          cancelButtonText: 'Cancelar',
          
        }).then((result) => {
          if (result.isConfirmed) {
            onDelete();
          }
        });
      };

    return (
        <div className="card card-highlight">
            <h2 className="text-xl font-bold mb-4 text-primary">{title}</h2>
            <p className="text-primary mb-4">{content}</p>
            <Link className="text-highlight font-bold mb-4" to={url}>Ver Detalles » </Link>
            <br></br>
            <button onClick={handleDeleteClick} className="delete-button">Eliminar</button>
        </div>
    );
};

