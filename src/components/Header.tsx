
interface HeaderProps {
    title: string;
    text: string;
  }
  
  export const Header = ({ title, text }:HeaderProps) => {
    return (
      <section className="bg-primary text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold my-6">{title}</h1>
          <p className="text-sm mb-5">{text}</p>
        </div>
      </section>
    );
  };
  