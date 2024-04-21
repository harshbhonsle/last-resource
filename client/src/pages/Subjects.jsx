import {
  SubjectCard,
  computerNetwork,
  differentialEquations,
  calculus,
  electronics,
  cyberSecurity,
  ai,
  toc,
  database,
  coa,
  study_cat,
  computer_networks,
  calculus_and_statistica_analysis,
  basics_of_electronics_engineering,
  cyber_security,
  artificial_intelligence,
  computer_organization_architecture,
  theory_of_computation,
  database_management_system,
} from "../assets/assets";

const subjects = [
  {
    name: 'Differenital Equations',
    iconRef: differentialEquations,
    bgImg: study_cat,



  },
  {
    name: 'Computer Network',
    iconRef: computerNetwork,
    bgImg: computer_networks,

  },
  {
    name: 'Calculus & Statistical Analysis',
    iconRef: calculus,
    bgImg: calculus_and_statistica_analysis,


  },
  {
    name: 'Basics of Electronics Engineering',
    iconRef: electronics,
    bgImg: basics_of_electronics_engineering,

  },
  {
    name: 'Cyber Security',
    iconRef: cyberSecurity,
    bgImg: cyber_security,

  },
  {
    name: 'Artificial Intelligence',
    iconRef: ai,
    bgImg: artificial_intelligence,

  },
  {
    name: 'Computer Organization & Architecture',
    iconRef: coa,
    bgImg: computer_organization_architecture,

  },
  {
    name: 'Theory Of Computation',
    iconRef: toc,
    bgImg: theory_of_computation,

  },
  {
    name: 'Database Management System',
    iconRef: database,
    bgImg: database_management_system,

  },

]



const Subjects = () => {
  return (
    <div className=" h-screen pt-20 ">
      <h1 className="text-center font-semibold pt-5 text-6xl mt-3 underline decoration-[#FCE38A]">Subjects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-10 mt-20">
        {subjects.map((subject, index) => (
          <SubjectCard subject={subject} key={index} />
        ))}
      </div>
    </div>

  )
}
export default Subjects;


// {/* <div className=" border-4 border-blue-400 text-center font-semibold pt-5  text-5xl">Subjects
//             </div>
//             <div className="border border-3 border-red-600">
//             {/* subjects div */}
//             <div className="">Modern And Computational Physics </div>
//             <div>Differenital Equations </div>
//             <div>Calculus and Statistical Analysis</div>
//             <div>Basics of Electronics Engineering </div>
//             <div>DBMS </div>
//             <div>TOC </div>
//             <div>Cyber Security </div>
//             <div>Artificial Intelligence </div>
//             <div>Computer Networks </div>
//             <div>COA </div>
//             </div> */}
