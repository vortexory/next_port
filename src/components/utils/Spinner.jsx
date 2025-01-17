const Spinner = () => {
  return (
    <div className="spinner relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white border-opacity-20">
      <span className="relative z-20 text-sm uppercase tracking-wider">
        Loading
      </span>
      <span className="absolute z-10 h-full w-full animate-spin rounded-full border-l-2 border-t-2 border-white border-opacity-50 bg-grey-lighten"></span>
    </div>
  );
};

export default Spinner;
