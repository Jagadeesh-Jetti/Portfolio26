import jaggu from '../assets/jaggu.jpg';

export const Bio = () => {
  return (
    <section className="px-3 py-6 max-w-xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
          <img
            src={jaggu}
            alt="Jagadeesh Jetti"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-xl font-semibold leading-tight">
            Jagadeesh Jetti
          </h1>
          <p className="text-gray-600 text-sm">Full Stack Developer</p>
        </div>
      </div>

      <p className="text-sm text-gray-800 leading-relaxed mb-6">
        I build clean, thoughtful web applications. Currently focused on
        <span className="font-medium"> React</span> and
        <span className="font-medium"> backend systems</span>.
      </p>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Currently working on</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Rebuilding my portfolio</li>
          <li>Learning proper design fundamentals</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">What I care about</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Thoughtful, clean UI</li>
          <li>Performance and speed</li>
          <li>Learning & sharing as I build</li>
        </ul>
      </div>
    </section>
  );
};
