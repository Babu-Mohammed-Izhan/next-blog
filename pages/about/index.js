import Container from "../../components/container";
import Navbar from "../../components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex-col flex items-start md:justify-between mt-16 mb-16 md:mb-12 ">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 ">
            About
          </h1>
          <div className="my-7">
            <h2 className="lg:text-5xl my-5 text-3xl">
              This is a blog website created using
              <ul className="py-3">
                <li>Javascript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </h2>
            <h2 className="lg:text-5xl my-5 text-3xl">
              The blog is maintained using:
              <br /> <br />
              Sanity.io Content Management System.
            </h2>
          </div>
          <h3 className="lg:text-4xl my-10 text-md">
            Website created by Babu Mohammed Izhan
          </h3>
        </div>
      </Container>
    </>
  );
};

export default About;
