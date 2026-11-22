import { useEffect, useRef, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useModal } from "./ModalContext";

const addZeroWidth = (text: string, count: number) => {
  return text + "\u200b".repeat(count);
};

const Typer = () => {
  
  const textBoxRef = useRef<null | HTMLHeadingElement>(null);

  const {openModal} = useModal();

  const stages = [
    addZeroWidth("بازدید از شرکت همکاران سیستم", 5),
    addZeroWidth("بازدید از موزه کامپیوتر ایران", 5),
    addZeroWidth("روز مهندس و بزرگداشت خواجه نصیرالدین طوسی", 5),
    addZeroWidth("جشن روز عدد π و بزرگداشت هاوکینگ و اینشتین", 5),
    addZeroWidth("رویداد روز نرم‌افزار آزاد با حضور فعالان حوزه", 5),
  ];

  const [typing, setTyping] = useState(false);
  const [text, setText] = useState(stages[0]);
  const [index, setIndex] = useState(1);
  const [subIndex, setSubIndex] = useState(stages[1].length);
  const [deleting, setDeleting] = useState(true);

  let images: string[] = [];
  images.push("./EVENTS_poster1.jpg");
  images = images.concat(["./SG_photo1.jpg", "./SG_photo2.jpg", "./SG_photo3.jpg"]);
  images.push("./EVENTS_poster2.jpg");
  images = images.concat(["./MC_photo1.jpg", "./MC_photo2.jpg", "./MC_photo3.jpg"]);
  images.push("./EVENTS_poster3.jpg");
  const slides = images.length;
  // mutates
  images.reverse();
  const [slideIndex, setSlideIndex] = useState(images.length - 1);

  const increment = () => setSlideIndex((i) => (i >= slides - 1 ? i : i + 1));
  const decrement = () => setSlideIndex((i) => (i <= 0 ? i : i - 1));

  useEffect(() => {
    const onScroll = () => {
      if (!textBoxRef.current) return;
      const height = window.innerHeight;
      const rect = textBoxRef.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      if (Math.abs(center - height / 2) / height < 0.17) {
        setTyping(true);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!typing) return;

    const current = stages[index];
    const timeout = setTimeout(() => {
      if (deleting) {
        if (subIndex > 0) setSubIndex(subIndex - 1);
        else {
          setIndex((i) => (i + 1 >= stages.length ? 1 : i + 1)); // skip first text
          setDeleting(false);
        }
      } else {
        if (subIndex < current.length) setSubIndex(subIndex + 1);
        else setDeleting(true);
      }
    }, 75);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, typing]);

  useEffect(() => {
    setText(stages[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section id="Courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            ارتباط با صنعت، بازدیدهای علمی، جشن ها و بیشتر
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-right h-full">
            <h3
              ref={textBoxRef}
              className="mb-8 text-base sm:text-lg md:text-2xl font-semibold text-gray-900 leading-relaxed after:content-[''] after:block after:w-full after:h-1 after:bg-blue-500 after:mx-auto md:after:ml-0 after:mt-1"
            >
              {text}
              <span className="inline-block w-[2px] h-[1em] bg-gray-900 animate-blink align-middle ml-1"></span>
            </h3>
            <div className="hidden md:block text-justify text-sm sm:text-base md:text-lg text-gray-800 mt-5" >
                انجمن علمی مهندسی کامپیوتر با هدف تقویت پیوند میان دانش نظری و تجربه‌های عملی، همواره در تلاش است تا زمینه‌های تعامل میان دانشجویان و صنعت فناوری را گسترش دهد.
در همین راستا، بازدیدهای علمی از مراکز پژوهشی و شرکت‌های فناور، برگزاری جشن‌ها و مناسبت‌های علمی و فرهنگی، و اجرای رویدادهای آموزشی و تخصصی با حضور فعالان حوزه نرم‌افزار و فناوری اطلاعات، بخشی از برنامه‌های مستمر این انجمن به شمار می‌رود.
این فعالیت‌ها فرصتی ارزشمند برای آشنایی با روندهای روز صنعت، گسترش مهارت‌های فردی و جمعی، و تقویت روحیه هم‌افزایی میان دانشجویان فراهم می‌سازد
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[450px] overflow-hidden rounded-xl shadow-lg bg-blue-200">
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{ transform: `translateX(${slideIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={e => openModal(image)}
                    className="bg-cover bg-center w-full shrink-0"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                ))}
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

export default Typer;