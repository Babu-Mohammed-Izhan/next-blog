import Container from "../../components/container";
import Navbar from "../../components/navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 pt-16 ">
          Contact
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 py-4 ">
          Babu Mohammed Izhan
        </h2>
        <h3 className="lg:text-3xl py-5 text-xl">
          Website created by Babu Mohammed Izhan
        </h3>
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <a
              href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"
              target="_blank"
              className="lg:text-4xl m-5 text-xl text-purple-700 hover:text-purple-500 cursor-pointer"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <a
              target="_blank"
              href="https://github.com/Babu-Mohammed-Izhan"
              className="lg:text-4xl m-5 text-xl text-purple-700 hover:text-purple-500 cursor-pointer"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <a
              href="https://twitter.com/babu_izhan"
              target="_blank"
              className="lg:text-4xl m-5 text-xl text-purple-700  hover:text-purple-500 cursor-pointer"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
            <a
              href="mailto:babuizhan1234@gmail.com"
              target="_blank"
              className="lg:text-4xl m-5 text-xl text-purple-700 hover:text-purple-500 cursor-pointer"
              rel="noreferrer"
            >
              Gmail
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
