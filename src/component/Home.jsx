import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import DemoBlog from "./DemoBlog";

const Home = () => {
  return (
    <>
      <h1 className="mx-20 font-semibold ">Trending On SimplyBlog</h1>
      <div className="flex flex-wrap justify-center">
        {Blog.map((b) => {
          return (
            <div className="mx-4 my-4 w-96 h-32">
              <Link to="/demoblog">
                <h1 className="font-semibold">{b.author}</h1>
                <h1 className="text-xl font-bold">{b.name}</h1>
                <div className="flex">
                  <h1 className="text-gray-400">{b.date}</h1>
                  <h1>.</h1>
                  <h1 className="mx-2 text-gray-400">{b.time}</h1>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <DemoBlog/>
    </>
  );
};

export default Home;
