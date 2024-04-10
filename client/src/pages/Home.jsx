import lastResource from "../assets/lastResource.jpg";
const Home = () => {
  return (
    <div className=" h-screen pt-20 flex justify-center items-center">
      <div className="flex flex-col gap-3 max-w-5xl items-center">
        {/* paragraph heading */}

        <div className="font-extrabold text-6xl text-center ">
          Your reliable source for all your exams preparations
        </div>

        {/* Some bug here on width of container because of image */}
        <img
          src={lastResource}
          alt="Banner Image"
          className="w-3/4 "
        />
        
        <div className="w-1/2 font-light text-2xl text-center">
          Website bana rahe hai pata nahi kyu but bna rahe hai. Main aur mera ek
          dost. Lorem Ipsum blah blah blah blah.
        </div>
      </div>
    </div>
  );
};
export default Home;
