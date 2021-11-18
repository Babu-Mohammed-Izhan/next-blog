import Alert from "../components/alert";
import Meta from "../components/meta";
import Navbar from "./navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
