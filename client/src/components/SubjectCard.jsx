import { Link } from "react-router-dom";


const SubjectCard = ({ subject }) => {
  const subjectID = subject.name.split(' ').map(word => word.toLowerCase()).join('-');
  return (
    <main className="group flex flex-col">
      <Link to={`/subjects/${subjectID}`} className="relative h-40 flex flex-col overflow-hidden gap-5 p-7 rounded-lg border-4 group-hover:border-[#F38181] border-[#FCE38A] transition-all duration-300">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20"
        >
          <img src={subject.bgImg} className="group-hover:scale-[115%] rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7] transition-all transform-gpu duration-700" />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-l from-neutral-950/40 to-neutral-950 dark:bg-neutral-900/10"
          ></span>
          <section className="absolute w-2/5 h-full p-2">
            <div className="flex flex-col mx-2">
              <img src={subject.iconRef} className="p-4 w-16 text-start" />
              <div className="text-base font-bold text-[#F38181] leading-5">{subject.name}</div>
            </div>
          </section>
        </span>
      </Link>
      <h1 className="text-base pl-2 font-semibold group-hover:underline cursor-pointer transition-all duration-300">{subject.name}</h1>
    </main>
  )
}

export default SubjectCard;
