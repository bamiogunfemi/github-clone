import React, { useEffect } from "react";
import axios from "axios";
import { LawIcon, StarIcon } from "@primer/octicons-react";
import { formatDistance } from "date-fns";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { GITHUB_API_URL } from "../helper";

export const Repositories = () => {
  const [repos, setRepos] = React.useState([]);
  const user = useSelector(selectUser);
  const [loading, setLoading] = React.useState(true);
  const getRepos = async () => {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/users/${user.login}/repos?per_page=20`
    );
    setLoading(false);
    setRepos(data);
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="flex w-full pt-3 md:px-3 py-3">
      <div className="w-full col">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          repos.map((repo, index) => (
            <div
              key={index}
              className="w-full container mx-auto justify-center px-3 py-3 border-b border-gray-300 ">
              <div class="flex mb-3 h-1/4 justify-between align-items-center" >
                <div class="mr-3 w-9/12 ">
                  <p>
                    <span className="inline text-blue-600 font-bold mr-3 md:w-auto w-1/8">
                      {repo.name}
                    </span>
                    <span className="border p-1 px-2 rounded-full capitalize text-xs">
                      {repo.visibility}
                    </span>
                  </p>

                  {repo.description && (
                    <p className=" mb-3 w-auto text-sm w-9/12 mt-2">
                      <span className="text-sm ">{repo.description}</span>
                    </p>
                  )}
                  <div class="flex h-1/4 flex-nowrap items-center mt-3">
                    {repo.language && (
                      <div className="inline-flex items-center">
                        <div className="rounded-full flex p-1 relative bg-yellow-600 h-px w-px mr-2 h-px "></div>
                        <p className="mr-2 text-xs ">
                          {repo.language}
                        </p>
                      </div>
                    )}
                    {repo.license && (
                      <p className="mr-2 flex">
                        <LawIcon size={14} className="inline pt-0.5 pr-1 ml-1" />
                        <span className="text-xs ">
                          {" "}
                          {repo?.license?.name}
                        </span>
                      </p>
                    )}

                    <p className="text-xs">
                      Updated{" "}
                      {formatDistance(
                        new Date(repo?.updated_at),
                        new Date(),
                        { addSuffix: true }
                      )}
                    </p>

                  </div>
                </div>
                <div class="w-1/4">
                  <button
                    type="submit"
                    className="inine button col w-auto px-3 h-8 float-right rounded border  bg-gray-100 border-zinc-300 font-semibold text-sm">
                    <StarIcon className="w-6 inline" /> Star
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Repositories;
