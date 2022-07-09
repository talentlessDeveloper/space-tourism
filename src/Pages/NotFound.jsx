import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <section>
      <div className="container  mx-auto px-[1.5rem] pt-[5.5rem] pb-[3.25rem] text-center md:pt-[8.5rem] md:px-[2.40625rem] lg:px-[6.313rem] lg:pt-[13.25rem]">
        <div className="text-center flex justify-center mt-[6rem]">
          <div className="max-w-lg">
            <h1 className="text-8xl font-bold mb-8">Oops!</h1>
            <p className="text-5xl mb-8">404 - Page Not Found!</p>
            <Link
              className="bg-clrWhite py-2 px-6 inline-flex items-center w-fit rounded-md"
              to="/"
            >
              <FaHome className="mr-2" />
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
