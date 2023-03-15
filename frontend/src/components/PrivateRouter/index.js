import Home from "../Home/Home.jsx";

function PrivateRouter({ children, auth }) {
  if (auth) {
    return children;
  } else {
    return <Home />;
  }
}

export default PrivateRouter;
