import Image from 'next/image';

const ReviewCard = ({ comment, name, title }) => {
    return (
      <div className="relative h-52 m-3 flex flex-col justify-center gap-2 px-5 rounded-xl bg-[#F6F8F7]">
          <Image
            className="absolute top-0 right-10 opacity-50"
            src="/mark.svg"
            alt="Star Icon"
            width={72}
            height={72}
          />

        <div className="flex items-center gap-2 border-b pb-1">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <div className="flex flex-col">
            <div className="font-bold text-sm">{name}</div>
            <div className="text-sm opacity-80">{title}</div>
          </div>
        </div>
        <p className="text-sm text-gray-500">&quot;{comment}&quot;</p>
        <div className="flex gap-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 36 36"
            >
              <path
                fill="#ffac33"
                d="M28.84 17.638c-.987 1.044-1.633 3.067-1.438 4.493l.892 6.441c.197 1.427-.701 2.087-1.996 1.469l-5.851-2.796c-1.295-.62-3.408-.611-4.7.018l-5.826 2.842c-1.291.629-2.193-.026-2.007-1.452l.843-6.449c.186-1.427-.475-3.444-1.47-4.481l-4.494-4.688c-.996-1.037-.655-2.102.755-2.365l6.37-1.188c1.41-.263 3.116-1.518 3.793-2.789L16.762.956c.675-1.271 1.789-1.274 2.473-.009L22.33 6.66c.686 1.265 2.4 2.507 3.814 2.758l6.378 1.141c1.412.252 1.761 1.314.774 2.359z"
              />
              <path
                fill="#ffd983"
                d="M9.783 2.181c1.023 1.413 2.446 4.917 1.717 5.447c-.728.531-3.607-1.91-4.63-3.323s-.935-2.668-.131-3.254c.804-.587 2.02-.282 3.044 1.13m19.348 2.124C28.109 5.718 25.23 8.16 24.5 7.627c-.729-.53.695-4.033 1.719-5.445C27.242.768 28.457.463 29.262 1.051c.803.586.89 1.841-.131 3.254M16.625 33.291c-.001-1.746.898-5.421 1.801-5.421c.897 0 1.798 3.675 1.797 5.42c0 1.747-.804 2.712-1.8 2.71c-.994.002-1.798-.962-1.798-2.709m16.179-9.262c-1.655-.539-4.858-2.533-4.579-3.395c.277-.858 4.037-.581 5.69-.041c1.655.54 2.321 1.605 2.013 2.556c-.308.95-1.469 1.42-3.124.88M2.083 20.594c1.655-.54 5.414-.817 5.694.044c.276.857-2.928 2.854-4.581 3.392c-1.654.54-2.818.07-3.123-.88c-.308-.95.354-2.015 2.01-2.556"
              />
            </svg>
          ))}
        </div>
      </div>
    );
  };
  
  export default ReviewCard;
