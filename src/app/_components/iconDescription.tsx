
interface IconDescripcionProps {
  icon: string;
  text: string;
}

const IconDescripcion = ({ icon, text }: IconDescripcionProps) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-5xl">{icon}</span>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
};

export default IconDescripcion;