export default function CardComponent({ title }) {
  return (
    <div className="w-80 h-48 bg-titleBg  backdrop-filter backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col justify-around items-start">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}
