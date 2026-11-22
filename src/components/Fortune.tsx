import { useRef, useState, useEffect } from "react";

type TimeTable = number[][];
type ColorTable = string[][];
type VisTable = boolean[][];

const Fortune = () => {
  const pallet = [
    "#1B262C",
    "#0F4C75",
    "#3282B8",
    "#3AB0FF",
    "#00B7C2",
    "#4C669F",
    "#6A4C93",
    "#9B5DE5",
    "#5BC0EB",
    "#8AC6D1",
  ];

  const randInt = (max: number) => Math.floor(max * Math.random());
  const choice = () => pallet[randInt(pallet.length)];

  const generateColorTable = (rows: number, cols: number): ColorTable =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => choice())
    );

  const generateVisTable = (rows: number, cols: number): VisTable =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => true)
    );

  const generateTimeTable = (rows: number, cols: number): TimeTable =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => randInt(10) * 100)
    );

  const [gridSize, setGridSize] = useState({ rows: 10, cols: 10 });
  
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) setGridSize({ rows: 10, cols: 10 });
      else setGridSize({ rows: 10, cols: 10 });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const [colorTable, setColorTable] = useState<ColorTable>(
    generateColorTable(gridSize.rows, gridSize.cols)
  );
  const [visTable, setVisTable] = useState<VisTable>(
    generateVisTable(gridSize.rows, gridSize.cols)
  );

  const [scrambling, setScrambling] = useState(false);

const jobs = [
  ["مهندس بک اند", 
  "مهندس بک‌اند با تکیه بر مهارت‌های خود در برنامه‌نویسی و مدیریت داده‌ها، بخش سرور یک برنامه را طراحی و توسعه می‌دهد. بهینه‌سازی کدهای سمت سرور و لایه داده برای مدیریت ترافیک بالا، طراحی امن، یکپارچه‌سازی سیستم‌ها، مدیریت پایگاه‌های داده و ایجاد ساختار مقیاس‌پذیر از مهم‌ترین مسئولیت‌های یک مهندس بک‌اند حرفه‌ای به شمار می‌روند."],
    ["مهندس فرانت اند", 
    "برخلاف باور عمومی، مهندسی فرانت‌اند کار ساده‌ای نیست. از یادگیری فریم‌ورک‌های گوناگون گرفته تا ساعت‌ها کدنویسی برای بالا آوردن سایت روی دستگاه‌هایی که شاید هیچ کاربری از آن‌ها استفاده نکند، وظایف یک مهندس فرانت‌اند آسان نیست. این کار به صبر، دقت و مهارت‌های ویژه‌ای در بهینه‌سازی نیاز دارد تا در نهایت اپلیکیشنی زیبا، سریع و روان روی مرورگر کاربر اجرا شود."],
  ["توسعه‌دهنده فول‌استک", 
    "مهندس فول‌استک ترکیبی از مهارت‌های فرانت‌اند و بک‌اند را در خود دارد. او هم ظاهر و تجربه کاربری را می‌سازد و هم منطق و داده‌های پشت آن را مدیریت می‌کند. از طراحی رابط‌های زیبا و سریع گرفته تا توسعه سرورهای امن و مقیاس‌پذیر، مهندس فول‌استک باید میان دنیای مرورگر و سرور تعادل برقرار کند. این کار نیازمند صبر، دقت، تسلط بر فریم‌ورک‌ها و درک عمیق از چرخه کامل توسعه نرم‌افزار است تا محصولی یکپارچه و کارآمد خلق شود."],
  ["مهندس هوش مصنوعی", "این روزها هوش مصنوعی یکی از بحث‌برانگیزترین موضوعات در علوم کامپیوتر و حتی خارج از آن است. بسیاری آن را تهدیدی بزرگ برای جامعه برنامه‌نویسی می‌دانند، اما شما به کار خود در بهبود هوش مصنوعی ادامه می‌دهید، چون آن را تهدیدی برای خود نمی‌بینید. مطالعه‌ی هوش مصنوعی چالش الگو‌یابی را در کامپیوترها حل می‌کند و به آن‌ها اجازه می‌دهد بدون دستور مستقیم انسان در داده‌های ورودی الگو پیدا کنند، ایده‌های انتزاعی را تشخیص دهند و گروه‌بندی کنند، ساختارهای جدید ابداع کنند و بدون نیاز به دخالت انسان تصمیم بگیرند."],
  ["مهندس امنیت سایبری", 
    "هرچه برنامه بزرگ‌تر باشد، آسیب‌پذیری‌های آن بیشتر است و هر برنامه به یک نگهبان نیاز دارد که این آسیب‌پذیری‌ها را پیدا کند و به توسعه‌دهنده‌ها کمک کند آن‌ها را رفع کنند. شما به‌عنوان مهندس امنیت باید از داده‌های کاربران و منابع اساسی در برابر تهدیدهای خارجی محافظت کنید. کار شما بسیار حساس است؛ زیرا دسترسی‌های اضافه به افراد اشتباه و مفترقه  ممکن است تلفات زیادی به‌بار آورد. برای انجام این کار به دانش بالایی نیاز دارید، زیرا برای تخریب باید بتوانید بسازید."],
  ["توسعه‌دهنده بازی", 
    "    همه‌ی ما از کودکی با بازی‌های کامپیوتری بزرگ شده‌ایم. بازی‌ها مرکز تجمعات دوران کودکی و موضوع بسیاری از گفت‌وگوهای ما بودند. بعضی از ما از همان دوران آرزو داشتیم جرقه‌ای را که بازی‌ها در وجودمان ایجاد کردند، در دیگران نیز روشن کنیم. بازی‌های کامپیوتری اوج تلفیق هنر و فناوری‌اند؛ زیرا سرگرمی را با هنرهایی چون نقاشی و موسیقی ترکیب می‌کنند تا تجربه‌ای بی‌همتا خلق شود. البته صنعت بازی آنچنان هم آسان نیست شما ساعت‌های کار طولانی، استرس زیاد، پروژه های طولانی مدت و دستمزد پایین کم از چالش های کار در این صنعت هستد."],
    ["DevOps", 
    "مهندس DevOps پلی بین تیم‌های توسعه و عملیات است که با خودکارسازی فرآیندها و مدیریت زیرساخت، توسعه، تست و استقرار نرم‌افزار را سریع‌تر، پایدارتر و امن‌تر می‌کند. او ابزارها و سیستم‌هایی طراحی می‌کند که امکان انتشار مداوم نرم‌افزار را فراهم می‌کنند، سلامت سرورها و پایگاه‌های داده را نظارت می‌کند و عملکرد سیستم‌ها را بهینه می‌سازد. موفقیت در این نقش نیازمند دانش فنی گسترده، حل سریع مشکلات و هماهنگی موثر بین تیم‌ها برای حفظ جریان کاری بدون وقفه است."],
  ["توسعه‌دهنده موبایل", 
    "توسعه‌دهنده موبایل دنیاهای دیجیتال را در دستان کاربران زنده می‌کند. شما با کدنویسی و طراحی رابط‌های زیبا و روان، تجربه‌ای سریع و دلنشین روی گوشی‌ها و تبلت‌ها ایجاد می‌کنید. هر اپلیکیشن که می‌سازید باید روی دستگاه‌های مختلف و سیستم عامل های اندروید و ios و در شرایط متنوع به‌خوبی کار کند، مصرف باتری و منابع را مدیریت کند و با سرویس‌های دیگر به‌سادگی ارتباط برقرار کند. کار شما نیازمند صبر، دقت و خلاقیت است، زیرا کوچک‌ترین جزئیات می‌تواند تجربه کاربر را به کل تغییر دهد."],
  ["برنامه‌نویس سیستم و سیستم های امبد شده", 
    "    برنامه‌نویسان سیستم با تسلط بر زبان‌های سطح پایین مانند C و Rust، برنامه‌هایی با تمرکز بر عملکرد بالا توسعه می‌دهند تا خدمات مورد نیاز نرم‌افزارهای دیگر را فراهم کنند. این نوع برنامه‌ها اغلب با مدیریت منابع و داده‌های خام سروکار دارند، مانند پایگاه‌های داده، وب‌سرورها و سایر زیرساخت‌ها. برنامه‌نویسان امبد در سطحی عمیق تر با سخت افزار ها تعامل می‌کنند. آن ها نرم افزار ها را مستقیما روی میکروکنترولر ها و دستگاه های کوچک و سخت افزار می‌نویسند برنامه هایی که در محیط‌های محدود خام وظایف پیچیده را اجرا می‌کنند"],
    ["توسعه‌دهنده بلاک‌چین", 
    "بلاک‌چین یکی از جذاب‌ترین اختراعات قرن بیست‌ویکم است. بلاک‌چین بیت‌کوین در سال ۲۰۰۹ پدید آمد؛ سیستمی پیچیده، یکپارچه و گسسته که بدون هیچ‌یک از اجزایش کار نمی‌کند. این فناوری پول را به‌صورت آنلاین و غیرمتمرکز فراهم می‌کند بدون آن‌ که آزادی کاربران را فدا سازد. شما به‌عنوان توسعه‌دهندهٔ بلاک‌چین موظفید برنامه‌هایی بنویسید که روی بلاک‌چین اجرا می‌شوند و تراکنش‌ها و دارایی‌ها را هوشمند می‌کنند. این حوزه به دانش مالی نیز نیاز دارد هم برای طراحی برنامه‌ها و هم برای مدیریت ثروتی که ممکن است از این مسیر به‌دست آورید."],
  ["پژوهشگر علوم کامپیوتر", 
    "تبریک می‌گویم! شما به اندازه‌ای باهوش هستید که بتوانید کارهای اداری و شرکتی را کنار بگذارید و در عوض در مباحث ریاضی عمیق شوید. اما کار شما آسان نیست؛ فضای آکادمیا بسیار رقابتی و گاهی بی‌رحم است. در دانشگاه‌ها همه باهوش هستند و رقابت برای رسیدن به جایگاه استاد تمام بسیار شدید است. فشار بالای دانشگاه‌ها برای تولید علم و انتشار مقالات، بسیاری را دچار چالش و خستگی می‌کند، اما نگران نباشید شما از پس این مسیر برخواهید آمد."],
  ["راننده اسنپ", 
    "نرخ بیکاری دانشجویان جدید کامپیوتر در دنیا حدود ۷ درصد است که تقریباً دو برابر نرخ بیکاری فارغ‌التحصیلان رشته‌های زیست‌شناسی و هنر است، با توجه به شرایط بازار کار، شما یکی از محتمل‌ترین گزینه‌ها را انتخاب کرده‌اید: رانندگی اسنپ. ولی جای نگرانی نیست چون مشکل از شما نیست بلکه از بازار کار است. حداقل شما یک ماشین دارید که هم نان سر سفره میاورد و هم در مسیر زندگی همراهتان است :) "
  ] 
];
  const [job, setJob] = useState(0);

  const refreshCountRef = useRef(0);
  const dtRef = useRef(0);
  const timeTableRef = useRef<TimeTable>(
    generateTimeTable(gridSize.rows, gridSize.cols)
  );

  const clearScreen = () => {
    if (dtRef.current > 1000) {
      dtRef.current = 0;
      setScrambling(false);
      return;
    }

    dtRef.current += 100;

    for (let i = 0; i < gridSize.rows; i++) {
      for (let j = 0; j < gridSize.cols; j++) {
        if (dtRef.current > timeTableRef.current[i][j]) {
          setVisTable((vis) => {
            const newVis = vis.map((row) => [...row]);
            newVis[i][j] = false;
            return newVis;
          });
        }
      }
    }

    setTimeout(clearScreen, 100);

  };

  const refresh = () => {
    setColorTable(generateColorTable(gridSize.rows, gridSize.cols));
    refreshCountRef.current += 1;

    if (refreshCountRef.current < 10)
      return setTimeout(refresh, 100);

    refreshCountRef.current = 0;
    timeTableRef.current = generateTimeTable(gridSize.rows, gridSize.cols);
    setTimeout(clearScreen, 100);

  };

  const handleRefresh = () => {
    if(scrambling) return;
    setScrambling(true);
    setVisTable(generateVisTable(gridSize.rows, gridSize.cols));
    setJob(randInt(jobs.length));
    refresh();
  };

  const text = ` دانشجویان در قالب سلسله‌ رویدادهای «مسیر»، فرصت گفتگو با اساتید گروه‌های مختلف مانند ریاضی کاربردی، آمار و علوم کامپیوتر را دارند تا مسیر تحصیلی و شغلی خود را بهتر بشناسند.
در این جلسات درباره انتخاب واحد، زیرگرایش‌ها، مهارت‌های لازم برای بازار کار و آینده شغلی صحبت می‌شود.`;

  return (
    <section id="Fortune" className="w-full px-4 py-10 md:py-28 md:pt-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
        <div className="md:w-1/3 text-center md:text-right text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold mb-4">آینده خود را پیش‌بینی کن</h2>
          <p className="text-justify" >{text}</p>
        </div>

        <div
          className="relative flex-shrink w-full md:w-2/3 aspect-[1/1]
                     max-w-[600px] md:max-w-[600px] rounded-2xl shadow-lg overflow-hidden"
          style={{
            height: window.innerWidth < 768 ? 450 : 600,
            backgroundColor: job == jobs.length - 1 ? "#09d66c" : "#f3f4f6"
          }}
        >
          <div id='fortune_content' className="absolute w-[90%] h-full" >
            <strong><p style={{color: job == jobs.length - 1 ? "whitesmoke" : "black"}}
             className="text-lg md:text-3xl mr-5 mt-5">
              {jobs[job][0]}
              {job == jobs.length - 1 && 
              <img className="inline w-2 h-5 md:w-4 md:h-10 mr-1" src="./snapp.png"></img>}
              </p></strong>
            <p style={{color: job == jobs.length - 1 ? "#f9fafb" : "#6b7280"}}
            className="text-base text-justify md:text-2xl mr-5 mt-5 text-gray-500">{jobs[job][1]}</p>
          </div>
          <div className="absolute grid w-full h-full"
               style={{
                 gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                 gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
               }}>
            {colorTable.flat().map((color, i) => (
              <div
                key={i}
                style={{
                  opacity: visTable.flat()[i] ? 1 : 0,
                  backgroundColor: color,
                //   transition: "opacity 0.2s",
                }}
              ></div>
            ))}
          </div>

          <button
            className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 mb-2"
            onClick={handleRefresh}
          >
            محاسبه کن
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fortune;
