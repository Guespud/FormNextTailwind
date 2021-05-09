import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/navbar/Navbar";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-200 w-full lg:h-screen md:h-screen sm:h-full">  
          {/* <Navbar/>    */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
