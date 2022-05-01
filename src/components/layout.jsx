
import { Header } from "./index";

import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { classNames, navigation } from "../helper";



export function Layout({ children }) {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Header />
      <div className=" mt-6">
        <div className="border-b ">
          <div className="flex justify-center">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-end justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={`https://github.com/${user.login}?tab=${item.href}`}
                          className={classNames(
                            item.current
                              ? "border-b-2 border-orange-600 "
                              : "text-black-300",
                            " py-2  text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}>
                          {item.icon} {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
