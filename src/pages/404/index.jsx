import React from "react";

const Page404 = () => {
  return (
    <div id="page_404">
      <div className="page_404_content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
      </div>

      <style jsx>{`
        #page_404 {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f5f5f5;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .page_404_content h1 {
          font-size: 6rem;
          margin: 0;
          color: #000000c2;
        }

        .page_404_content h2 {
          font-size: 2rem;
          margin: 0.5rem 0;
          color: #00000080;
        }

        .page_404_content p {
          font-size: 1rem;
          color: #00000080;
        }
      `}</style>
    </div>
  );
};

export default Page404;
