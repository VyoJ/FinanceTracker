import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 h-28">
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <ul className="flex justify-between mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <Link to="/" className="text-lg font-semibold dark:text-white">
              Finance Tracker
            </Link>
          </li>
          <li className="text-base align-baseline">
            <Link to="/About" className="mr-4 hover:underline md:mr-6">
              About
            </Link>
            <Link to="#" className="hover:underline md:mr-6">
              Contact Us
            </Link>
          </li>
        </ul>
        <hr className="my-4 border-gray-200 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 text-center mb-4 dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Finance Tracker™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
