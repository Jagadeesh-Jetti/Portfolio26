import { blogs } from '../data/blogsData';

export const Blogs = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {blogs.map((blog) => (
          <div key={blog.id} className=" bg-white h-116 mb-4 rounded-2xl">
            <div className="h-[40%] bg-yellow-500">
              <img src={blog?.image} />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <div className="text-xl font-medium">{blog?.title}</div>
              <div className="text-gray-500 text-sm">{blog?.description}</div>
              <div className="flex gap-8 text-xs font-medium">
                {blog.tags.map((tag) => (
                  <div className="border-none bg-gray-100 rounded-md p-1">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-gray-500">
                <div>{blog.publishedDate}</div>
                <div>Read more</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
