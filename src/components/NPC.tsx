import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {useModal} from "./ModalContext";

const NPC = () => {
  const text = "برای علاقه مندان به برنامه نویسی و رقابت مسابقات کدزنی NPC به صورت منظم در پلتفرم کوئرا برگزار میشود."
  
    const properties = [
    "برگزاری آنلاین با جوایز نقدی",
    "امکان شرکت در گروه‌های ۱ تا ۳ نفره",
    "این مسابقات فرصتی عالی برای تمرین الگوریتم، رقابت سالم و یادگیری در کنار دیگر دانشجویان است.",
  ];

  const {openModal} = useModal();

  const images = Array.from({length: 6}, (v, k) => {
    return `./NPC_poster${6 - k}.jpg`
  });

  // mutates
  images.reverse();

  const [index, setIndex] = useState(5);
  const slides = 6;

  const increment = () => setIndex((i) => (i >= slides - 1 ? i : i + 1));
  const decrement = () => setIndex((i) => (i <= 0 ? i : i - 1));

  return (
    <section id="NPC" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-bold text-gray-900 mb-8">
            NPC
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div
            className="md:col-span-2 text-justify text-gray-800"
          >
            <p className="mb-8 text-justify text-base sm:text-lg md:text-2xl leading-relaxed">
              {text}
            </p>
            <ul className="list-disc text-right list-inside space-y-3 text-sm sm:text-base md:text-lg">
              {properties.map((prop, i) => (
                <li key={i}>{prop}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <div
            className="relative w-[300px] h-[450px] overflow-hidden rounded-xl shadow-lg bg-blue-200">
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                {images.map((image, index) => 
                <div key={index} onClick={e => openModal(image)}
                 style={{backgroundImage: `url(${image})`}}
                 className="bg-cover w-full shrink-0" ></div>)}
              </div>
              <div 
              className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
                <button
                  onClick={decrement}
                  className="p-2 bg-white/70 hover:bg-white rounded-full shadow pointer-events-auto"
                >
                  <ChevronRight size={24} />
                </button>
                <button
                  onClick={increment}
                  className="p-2 bg-white/70 hover:bg-white rounded-full shadow pointer-events-auto"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NPC;
