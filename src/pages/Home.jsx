import Jagadeesh from '../assets/Jagadeesh.png';
import { posts } from '../data/postsData';

export const Home = () => {
  return (
    <div className="bg-gray-200">
      {posts.map((post) => (
        <div className="mb-3 border border-gray-300 p-4 bg-white">
          <div className="flex gap-2">
            <div className="w-12 h-12 border rounded-3xl">
              <img
                src={Jagadeesh}
                alt="Jagadeesh Jetti"
                className="w-12 h-12 rounded-3xl object-cover"
              />
            </div>
            <div className="text-sm">
              <div className="font-semibold"> Jagadeesh Jetti </div>
              <div className="text-gray-500 text-xs">
                {' '}
                Full Stack Developer{' '}
              </div>
            </div>
          </div>
          <div className="m-2">{post.content}</div>
          <div>
            {post?.images?.length > 0 && (
              <div>
                {post?.images?.map((image, idx) => (
                  <img
                    src={image}
                    key={idx}
                    alt="post"
                    className="w-full h-40 object-cover rounded-md"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* <div className="mt-3 mb-1 border border-gray-300 p-4 bg-white">
        <div className="flex gap-2">
          <div className="w-11 h-11 border rounded-3xl"></div>
          <div className="text-sm">
            <div className="font-semibold"> Jagadeesh Jetti </div>
            <div className="text-gray-500 text-xs"> Full Stack Developer </div>
          </div>
        </div>
        <div className="m-2">
          I just dumped my thoughts on AI revolution in to a blog and posted it.
          Check it out in the blogs section
        </div>
        <div>Photos</div>
      </div> */}
    </div>
  );
};
