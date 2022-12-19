const Button = ({ className, children }) => {
  return (
    <button
      className={`${className} bg-tum_blue px-5 py-4 uppercase bg-noise text-base text-white font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
