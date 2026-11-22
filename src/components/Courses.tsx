import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useModal } from "./ModalContext";

const Courses = () => {

  const [index, setIndex] = useState(4);
  const slides = 5;

  const {openModal} = useModal();

  const images = Array.from({length: 5}, (v, k) => {
    return `./TALK_poster${k + 1}.jpg`
  });

  // mutates
  images.reverse();

  const increment = () => setIndex((i) => (i >= slides - 1 ? i : i + 1));
  const decrement = () => setIndex((i) => (i <= 0 ? i : i - 1));

  const text =
    "انجمن همواره در تلاش است تا دانشجویان را با حوزه‌های متنوع دنیای کامپیوتر آشنا کند. " +
    "نشست‌های انجمن با حضور اساتید و متخصصان برگزار می‌شوند و فرصتی کم‌نظیر برای یادگیری مباحث روز دنیای AI و CS هستند.";

  return (
    <section id="Courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            رویدادهای علمی و تخصصی
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 text-justify text-gray-800">
            <p className="mb-8 text-base sm:text-lg md:text-2xl leading-relaxed">
              {text}
            </p>
            <p className="mb-3 text-sm sm:text-base md:text-lg">
              سلسله جلسات NCS Talks با موضوعاتی مانند:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-6 text-sm sm:text-base md:text-lg">
              <li>DeepSeek vs ChatGPT</li>
              <li>Diffusion Models</li>
              <li>LLM Hallucinations</li>
              <li>Vision-Language Models</li>
            </ul>

            <p className="text-sm sm:text-base md:text-lg">
              دوره GNN: From Zero to Hero با حضور استادان و پژوهشگران
              دانشگاه‌های خواجه نصیر و امیرکبیر برگزار می‌شود.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[450px] overflow-hidden rounded-xl shadow-lg bg-blue-200">
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                {images.map((image, index) => 
                <div key={index} onClick={e => openModal(image)} 
                 style={{backgroundImage: `url(${image})`}}
                 className="bg-cover w-full shrink-0" ></div>)}
              </div>

              <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none">
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

export default Courses;
