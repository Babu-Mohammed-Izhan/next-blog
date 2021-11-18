const Contact = () => {
  return (
    <div className="flex items-start justify-start">
      <div className="pt-10">
        <h1 className="lg:text-8xl text-6xl">Contact</h1>
        <h2 className="lg:text-5xl my-5 text-3xl">Babu Mohammed Izhan</h2>
        <h3 className="lg:text-3xl my-5 text-xl">
          Website created by Babu Mohammed Izhan
        </h3>
        <div className="flex flex-col items-start">
          <a
            href="https://www.linkedin.com/in/babu-mohammed-izhan-3a327720b/"
            target="_blank"
            className="lg:text-4xl my-5 text-xl text-purple-700 hover:text-purple-500 cursor-pointer"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://github.com/Babu-Mohammed-Izhan"
            className="lg:text-4xl my-5 text-xl text-purple-700 hover:text-purple-500 cursor-pointer"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://twitter.com/babu_izhan"
            target="_blank"
            className="lg:text-4xl my-5 text-xl text-purple-700  hover:text-purple-500 cursor-pointer"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href="mailto:babuizhan1234@gmail.com"
            target="_blank"
            className="lg:text-4xl my-5 text-xl text-purple-700 hover:text-purple-500 cursor-pointer"
            rel="noreferrer"
          >
            Gmail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
