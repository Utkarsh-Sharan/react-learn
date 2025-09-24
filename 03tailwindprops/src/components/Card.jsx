import React from "react";

function Card({userName = "Default Name", userPost = "Default Post"}) {
  //console.log(props);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://th.bing.com/th/id/OIP.2zeA0-oWupGEXqYX8pJc4gHaLH?w=125&h=187&c=7&r=0&o=7&pid=1.7&rm=3"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              "Tailwind CSS is the only framework that I've seen scale on large
              teams. It's easy to customize, adapts to any design, and the build
              size is tiny."
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400 text-left">
              {userName}
            </div>
            <div className="text-slate-700 dark:text-slate-500 text-left">
              {userPost}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
