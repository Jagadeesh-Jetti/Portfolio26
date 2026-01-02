const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Node.js',
  'Tailwind',
  'Express.js',
  'MongoDB',
];

export const Skills = () => {
  return (
    <div className="flex flex-wrap">
      {skills.map((skill) => (
        <div className="w-max h-10 m-1 p-2 bg-black text-white"> {skill} </div>
      ))}
    </div>
  );
};
