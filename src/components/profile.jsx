import React from 'react';
import { OrganizationIcon, LocationIcon, MailIcon, LinkIcon, PeopleIcon } from '@primer/octicons-react'
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';

export const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="h-full overflow-hidden ">
      <div>
        <img src={user.avatar_url} alt="profile" srcSet="" className="rounded-full h-50 w-50" />
        <div >
          <div className="col mt-4 font-bold text-2xl ">
            {user.name}
          </div>
          <div className=" pt-0 mt-0 font-light text-sm text-gray-700">
            {user.login}
          </div>
          <div className="w-full  pt-3 pb-5">
            <a href={`https://github.com/${user.login}`}>
              <button className="button col w-full h-8 rounded border bg-gray-100 border-zinc-300 font-semibold text-sm " >
                Edit Profile
              </button>
            </a>


          </div>
          <div className=" mb-5 text-sm">
            <PeopleIcon className=" w-6 inline pr-1" />
            <span className='font-semibold mr-1' > {user.followers}</span>
            <span className="mr-1">followers </span>
            ·  <span className='mr-1 font-semibold'> {user.following}</span>

            following
          </div>
          <div className="w-4/5 text-sm mb-1">{user?.bio}</div>
          {user.company && <div className="">
            <OrganizationIcon className=" w-6 inline pr-1" />
            <a href={user.company}>{user.company}</a>
          </div>}
          {user.email && <div className="text-sm mb-1">
            <MailIcon className=" w-6 inline pr-1" />
            <a href={user.email}>{user.email}</a>
          </div>}
          {
            user.blog && <div className="text-sm mb-1">
              <LinkIcon className="w-6 inline pr-1" />
              <a href={user.blog}>{user.blog}</a>
            </div>
          }
          {
            user.location && <div className="text-sm col">
              <LocationIcon className=" w-6 inline pr-1" />  <span>{user.location}</span>
            </div>
          }



        </div>
      </div>

    </div>
  );
}

