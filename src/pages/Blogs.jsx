export const Blogs = () => {
  return (
    <div className="ml-4 mr-4 bg-gray-100">
      <div className="p-2">
        <div className="text-2xl"> Blogs and Insights </div>
        <p className="text-gray-700">
          I write about building products, fixing mistakes, and thinking clearly
          as a developer.
        </p>
      </div>
      <div className="mt-3 p-2  bg-white">
        <div>Featured</div>
        <h2 className="text-xl">
          Redesigning my portfolio to reduce cognitive load for recruiters
        </h2>
        <div>
          <ul>
            <li> Why i changed it </li>
            <li> What didnt work </li>
            <li> What finally clicked</li>
          </ul>
        </div>
      </div>
      <div>
        <div>More writings</div>
        <div></div>
      </div>
    </div>
  );
};
