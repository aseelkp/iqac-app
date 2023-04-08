

export default function CardComponent({title}) {
  return (
    <div className='relative w-64 h-48'>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg"></div>
    <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-md rounded-lg shadow-lg p-4 h-full flex flex-col justify-around items-center">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  </div>
  );
}
