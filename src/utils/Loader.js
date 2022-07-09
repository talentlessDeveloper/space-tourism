import { Audio } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
