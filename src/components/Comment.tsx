
interface CommentProps {
    id: number;
    name: string;
    email: string;
    body: string;
}

export const Comment = ({ id, name, email, body }: CommentProps) => {
    return (
        <div key={id} className="comment mb-4">
            <p className="font-bold">{name}</p>
            <p
                className="cursor-pointer font-bold text-gray-500"
                onClick={() => {
                    window.location.href = `mailto:${email}`;
                }}
            >
                <i className="fa-regular fa-envelope mr-1"></i>{email}
            </p>
            <p>{body}</p>
        </div>
    );
};
