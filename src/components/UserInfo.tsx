
interface UserInfoProps {
  name: string;
  companyName: string;
}

export const UserInfo = ({ name, companyName }:UserInfoProps) => {
  return (
    <div className="user-info flex items-center mb-4">
      <img 
        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" 
        alt="User" 
        className="h-12 w-12 rounded-full mr-4" 
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{companyName}</p>
      </div>
    </div>
  );
};
