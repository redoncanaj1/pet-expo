import React from 'react';

function formatKey(key) {
  return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

function formatValue(value) {
  if (Array.isArray(value)) {
      return value.join(', ');
  }
  return value;
}


const Card = ({ id, image, name, description, search, ...dynamicPetProps }) => {
  return !!(name?.toLowerCase?.()?.includes?.(search) || description?.toLowerCase?.()?.includes?.(search)) && (
    <div onClick={()=>document.getElementById(`modal-${id}`).showModal()} className="m-5 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <dialog id={`modal-${id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-4">{name}</h3>
          <div>
            {Object.entries(dynamicPetProps).map(([key,value])=>{
              return <div>
                <span className='font-bold'>{formatKey(key)}: </span>
                <span>{formatValue(value)}</span>
              </div>
            })}
          </div>
          <p className="py-4"></p>
        </div>
      </dialog>
      <a href="#">
        <img className="p-8 rounded-t-lg h-52 w-60 object-cover" src={image} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="w-52 text-gray-700 dark:text-gray-400 line-clamp-3 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
