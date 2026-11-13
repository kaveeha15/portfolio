import DesignCursor from "react-design-cursor";
import { IoMailOutline } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import { RiWhatsappLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import StackIcon from "tech-stack-icons";
import { techStack } from "../../constants/techStack";

const Home = () => {
  return (

    <div className="grid-container w-full bg-black">
      <DesignCursor>
      <div className="bento-grid grid grid-cols-6 grid-rows-6 sm:grid-cols-6 sm:grid-rows-4 max-w-100xl mx-10">
        <div className="grid-card flex flex-col justify-end col-span-6 row-span-1 sm:col-span-3 sm:row-span-2  bg-[url('/bg.png')] bg-cover  ">
          <p className="text-lg  p-1 text-center  sm:text-xl font-bold text-black bg-gray-300 rounded-xl opacity-80 "> Hi, I'm Kavisha Nimanshi</p>
          <p className=" text-sm mt-1 text-black font-bold text-justify bg-gray-300 opacity-40 p-2 rounded-xl">I'm a Full Stack Developer passionate about building modern, responsive, and user-friendly web applications.
            I enjoy turning creative ideas into functional digital experiences using React, Next.js, Node.js & Firebase.
            With hands-on industry experience, I love exploring new technologies, solving problems,
            & creating meaningful solutions through code.</p>
        </div>
        <div className="grid-card  col-span-6 row-span-1 sm:col-span-3 sm:row-span-1 bg-amber-50 ">
          <p className="text-lg sm:text-xl font-bold text-black">Building with purpose</p>
          <p className="text-sm  mt-2 text-gray-600 text-justify">I create modern web experiences with clean designs, smooth interactions, and powerful functionality.</p>
          <p className="text-xs mt-2 text-gray-300">Web Development · UI/UX · Full Stack Solutions.</p>
        </div>
        <div className="grid-card flex flex-col justify-center items-center col-span-6 row-span-1  sm:col-span-1 sm:row-span-1 ">
          <p className="text-lg sm:text-xl font-bold">My resume</p>
          <p className="text-xs sm:text-sm  mt-2 text-white w-30 h-8 text-center pt-1.5 cursor-pointer hover:bg-blue-400 bg-gray-600 rounded-2xl ">Download CV</p>
        </div>

        <div className="grid-card col-span-6 row-span-1 sm:col-span-2 sm:row-span-1 bg-amber-50 ">
          <p className="text-lg sm:text-xl font-bold text-black"> Based in Sri Lanka </p>
          <p className="text-sm mt-2 text-gray-600">Working across time zones, collaborating with people worldwide, and always open to exciting opportunities.</p>
          <p className="text-xs mt-2 text-gray-300 ">Available for Remote & On-site Opportunities.</p>
        </div>
        <div className="grid-card flex flex-col col-span-6 row-span-1  sm:col-span-4 sm:row-span-2 ">
          <p className="text-xl font-bold px-8">My territory</p>
          <div className="stack-icons flex flex-wrap p-4 w-100 sm:w-180">
            {techStack.map((tech) => (
              <div className="icons"><StackIcon key={tech} className="icon" name={tech} /></div>
            ))}
          </div>
        </div>

        <div className="grid-card flex flex-col items-center col-span-6 row-span-1 sm:col-span-2 sm:row-span-2  ">
          <p className="text-lg sm:text-xl  font-semibold">Have a good idea?</p>
          <p className="text-xs sm:text-sm mt-2 text-gray-600">Typically responds in under 1 hour</p>

          <div className="flex flex-col pt-5 justify-around ">
            <div className="flex items-center cursor-pointer bg-gray-600 rounded-2xl justify-around p-2 m-3 w-80 border-1 border-transparent hover:border-blue-500">
              <div className="px-2 flex items-center justify-center"><IoMailOutline /></div>
              <div className="w-60 flex items-center justify-center"><p className="text-center"> nimanshikavisha@gmail.com</p></div>
              <div className="px-2 flex items-center justify-center"><LuCopy /></div>
            </div>
            <div className="flex items-center cursor-pointer bg-gray-600 rounded-2xl justify-around p-2 m-3 w-80 border-1 border-transparent hover:border-blue-500">
              <div className="px-2 flex items-center justify-center gap-2"><IoCall /><RiWhatsappLine /> </div>
              <div className="w-60 flex items-center justify-center"><p className="text-center">+94 78 488 1144</p></div>
              <div className="px-2 flex items-center justify-center"><LuCopy /></div>
            </div>
            <div className="flex gap-5 justify-around mx-2 m-3">
              <div className="flex items-center justify-center cursor-pointer  bg-gray-600 rounded-2xl w-35 p-2 border-1  border-transparent hover:border-blue-500 gap-2"><IoLogoGithub /> GitHub</div>
              <div className="flex items-center justify-center cursor-pointer border-1 border-transparent  hover:border-amber-50 bg-blue-400 rounded-2xl w-35 gap-2 p-2"><IoLogoLinkedin /> LinkedIn</div></div>
          </div>
        </div>
      </div>
      </DesignCursor>
    </div>

  );
}

export default Home;