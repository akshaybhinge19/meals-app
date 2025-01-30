"use client";
const Error = ({ error }) => {
  //   console.log("error", error);
  return (
    <main className="error">
      <h1>An error occured! </h1>
      {/* <p>{error.message}</p> */}
      <p>Failed to fetch meals data. please try again later!</p>
    </main>
  );
};

export default Error;
