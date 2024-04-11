import { Link } from "react-router-dom";


const SubjectCard =({subject})=>{
    return(
        <Link href className="flex flex-col gap-5 p-7 rounded-lg bg-[#F38181] hover:bg-red-500 cursor-pointer ">
        <img src={subject.iconRef} className="w-16" />
        <div className="text-lg font-bold ">{subject.name}</div>
        </Link>
    )
}

export default SubjectCard;