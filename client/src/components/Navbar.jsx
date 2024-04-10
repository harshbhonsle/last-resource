import { Link } from "react-router-dom";

 const Navbar=() =>{
  return (
    <div className="absolute top-0 left-0 flex w-full justify-between px-32 py-5 bg-[#F38181] ">
    <div >
      <h1 className="text-3xl font-bold ">Last Resource</h1>
    </div>
    <ul className="list-style-none  flex gap-10 text-lg font-semibold">
        <li className="underline-offset-2 cursor-pointer hover:underline hover:text-[#FCE38A]"><Link to="/">Home</Link></li>
        <li className="underline-offset-2 cursor-pointer hover:underline hover:text-[#FCE38A]"><Link to="/subjects">Subjects</Link></li>
        <li className="underline-offset-2 cursor-pointer hover:underline hover:text-[#FCE38A]"><Link to="/about">About Us</Link></li>
        
    </ul>
    </div>
  )
}


export default Navbar;