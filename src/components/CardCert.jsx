import React from "../assests/images/testmonial/React.jpg";
import JavaScript from "../assests/images/testmonial/Javascript.jpg";
import Typescript from "../assests/images/testmonial/Typescript.jpg";
import Webdesigner from "../assests/images/testmonial/Webdesigner.jpg";

const CardCert = () => {
  return (
    <>
     {
        imgData.map((item)=><div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <a href={item.src} target="_blank" rel="noopener noreferrer">
            <img
              className="object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={item.src}
              alt="src"
            />
          </a>
        </div>
      </div>)
    }
    </>
   
    
  );
};

export default CardCert;

const imgData = [
  { id: 1, src: React },
  { id: 2, src: Typescript },
  { id: 3, src: JavaScript },
  { id: 4, src: Webdesigner },
];
