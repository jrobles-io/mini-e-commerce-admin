// src/pages/ErrorPage.jsx

//Fantasmita GIF
// const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

const imgURL = "../src/images/error.gif";

function ErrorPage() {
  return (
    <div>
      <h1>Error 404</h1>
      <img src={imgURL} alt="404 error gif" className="page-img" />
    </div>
  );
}

export default ErrorPage;

