import Head from "next/head";
import { Navbar } from "../components/Navbar";
import layout from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className={layout.children}>{children}</div>
    </div>
  );
};

export default Layout;
