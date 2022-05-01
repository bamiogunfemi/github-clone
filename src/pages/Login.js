import { LogoGithubIcon } from "@primer/octicons-react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  logInUser,
  selectisAuthenticated,
  selectUser,
} from "../store/userSlice";
import LoginGithub from "react-login-github";
import { useState } from "react";
import { GITHUB_API_URL, HEROKU_API_URL } from "../helper";

function Login() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectisAuthenticated);
  const user = useSelector(selectUser);

  const onSuccess = async ({ code }) => {
    setLoading(true);
    const data = await axios.get(`${HEROKU_API_URL}${code}`);
    const response = await axios.get(`${GITHUB_API_URL}/user`, {
      headers: {
        Authorization: `token ${data.data.token}`,
      },
    });
    dispatch(logInUser(response.data));
    setLoading(false);
  };
  if (isAuthenticated) {
    window.location.href = `/${user.login}`;
  }

  const onFailure = (response) => {
    setErrorMessage(response.data?.message || "Something went wrong");
    setLoading(false);
  };

  return (
    <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-5">
      {loading ? (
        "Loading..."
      ) : (
        <div className="max-w-md  w-full space-y-8">
          <p className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            {errorMessage}
          </p>
          <div className="text-center ">
            <LogoGithubIcon />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <LoginGithub
            clientId={process.env.REACT_APP_CLIENT_ID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          />
        </div>
      )}
    </div>
  );
}

export default Login;
