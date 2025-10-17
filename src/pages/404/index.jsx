import React from "react";
import Link from "next/link";

const Page404 = () => {
  return (
    <div id="page_404">
      <div className="page_404_content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>

      <style jsx>{`
        #page_404 {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f5f5f5;
        }

        .page_404_content {
          text-align: center;
          font-family: "para-regular", sans-serif;
          color: #000;
        }

        .page_404_content h1 {
          font-size: 8rem;
          font-weight: 700;
          color: #004dff;
          margin-bottom: 0.5rem;
        }

        .page_404_content h2 {
          font-size: 2rem;
          font-weight: 500;
          color: #000000cc;
          margin-bottom: 0.5rem;
        }

        .page_404_content p {
          font-size: 0.95rem;
          color: #00000080;
          margin-bottom: 1.5rem;
        }

        .back_home_btn {
          display: inline-block;
          background-color: #004dff;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .back_home_btn:hover {
          background-color: #003bcc;
        }
      `}</style>
    </div>
  );
};

export default Page404;
