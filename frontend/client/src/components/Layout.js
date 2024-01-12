import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, content }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Helmet>
      <Navbar />
      <div className="container mt-5">{children}</div>
    </div>
  );
};

export default Layout;
