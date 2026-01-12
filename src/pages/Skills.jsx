export const Skills = () => {
  return (
    <section className="bg-gray-100 px-4 py-12">
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-3xl font-semibold mb-2">Skills</h1>
        <p className="text-gray-600">
          My toolbox for building scalable, maintainable, full-stack web
          applications.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'JavaScript (ES6+)',
              // 'TypeScript',
              'React',
              // 'Next.js',
              'Tailwind CSS',
              // 'Responsive UI',
              // 'Accessibility (a11y)',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 px-3 py-1 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Backend</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Node.js',
              'Express.js',
              'REST APIs',
              'Authentication & Authorization',
              'JWT & Sessions',
              // 'Web Security Basics',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 px-3 py-1 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Database</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'MongoDB',
              // 'PostgreSQL',
              // 'Schema Design',
              // 'Indexing',
              // 'ORM (Prisma / Mongoose)',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 px-3 py-1 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Tools & Practices</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'Git & GitHub',
              'Vercel',
              'Netlify',
              'Environment Variables',
              'Clean Code',
              'Project Architecture',
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 px-3 py-1 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
