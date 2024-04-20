
const Accordion=({ examName, links })=>{
    return(
        <div>
            <h1 className=" py-3 bg-[#F38181] hover:bg-red-400 text-center font-semibold mb-3">
                {examName}
            </h1>
            <div className="grid grid-cols-3 gap-4">
                {links && links.map((link, index) => (
                    <button key={index} className="px-4 py-1 border border-green-500 rounded-lg bg-gray-100 hover:border-[#FCE38A]">
                        <a target="_blank" href={link.url}>{link.name}</a>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default Accordion;