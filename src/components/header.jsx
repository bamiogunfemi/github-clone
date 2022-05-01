import {
  MarkGithubIcon,
  BellIcon,
  PlusIcon,
  TriangleDownIcon,
} from "@primer/octicons-react";
import { useDispatch, useSelector } from "react-redux";
import { headerNavigation } from "../helper";
import { logOutUser, selectUser } from "../store/userSlice";

export function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="bg-header-bg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <MarkGithubIcon fill="white" size={30} className=" inline pr-1" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {headerNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={`https://github.com/${item.href}`}
                    className={
                      "px-3 py-2 rounded-md text-sm font-medium text-white"
                    }
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="`https://github.com/notifications">
              <button
                type="button"
                className=" p-1 text-gray-400  focus:outline-none  ">
                <span className="sr-only">View notifications</span>
                <BellIcon fill="white" className=" w-6 inline pr-1" />
              </button>
            </a>

            <button
              type="button"
              className=" p-1 text-gray-400  focus:outline-none  ">
              <span className="sr-only">New</span>
              <PlusIcon fill="white" className=" w-6 inline pr-1" />
            </button>
            <button
              type="button"
              className=" p-1 text-gray-400  focus:outline-none  ">
              <span className="sr-only">Profile</span>
              <TriangleDownIcon fill="white" className=" w-6 inline pr-1" />
            </button>

            <img
              className="h-8 w-8 rounded-full"
              src={user.avatar_url}
              alt={user.login}
            />
            <button
              type="button"
              className=" p-1 text-gray-400  focus:outline-none  ">
              <TriangleDownIcon fill="white" className=" w-6 inline pr-1" />
            </button>
            <button
              onClick={() => dispatch(logOutUser())}
              type="button"
              className=" p-1 text-xs text-gray-400 ">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
