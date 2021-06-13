import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title }) => {
  return (
    <>
      <header>
        <title>{title ? title : "Test App"}</title>
        <meta
          name="description"
          key="description"
          content="This is a test app"
        />
        <meta
          property="og:title"
          content={title ? title : "Test App"}
          key="og:title"
        />
      </header>
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    </>
  );
};

export default Layout;
