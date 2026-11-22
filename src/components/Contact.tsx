import { CircleEllipsis, Binary, Clock, School } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Binary,
      title: "انجمن کامپیوتر",
      links: [
        ["http://t.me/KNTU_CSSA", "کانال تلگرام انجمن علوم کامپیوتر"],
        ["https://instagram.com/kntu_cssa", "اینستاگرام انجمن علوم کامپیوتر"],
        ["http://t.me/NPC_KNTU", "اطلاع رسانی مسابقات NPC"],
        [""]
      ],
    },
    {
      icon: School,
      title: "لینک های رسمی",
      links: [["https://www.kntu.ac.ir", "سایت رسمی دانشگاه"],
        ["https://t.me/kntu_sm", "امور دانشجویی خواجه نصیر"],
         ["https://t.me/pr_kntu", "صفحه مجازی دانشگاه خواجه نصیر"]],
    },
    // {
    //   icon: MapPin,
    //   title: "خوابگاه",
    //   links: [["https://t.me/khabgah_danesh", "خوابگاه پسرانه"]],
    // },
    {
      icon: CircleEllipsis,
      title: "دیگر",
      links: [["./map.jpg", "نقشه پردیس رضایی نژاد  "],
        ["https://t.me/+ZTCJiOfrmE5jMTc0", "اطلاع رسانی دانشکده ریاضی"],
        ["https://t.me/kntusport", "انجمن ورزشی خواجه نصیر"],
      ],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            در ارتباط باش
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ما اینجا هستیم تا به شما کمک کنیم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/70 border border-gray-200/60 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden transform hover:-translate-y-2"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-inner"
                  style={{ backgroundColor: "rgba(59, 130, 246, 0.1)", color: "#3B82F6" }}
                >
                  <Icon size={28} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg sm:text-xl">
                  {contact.title}
                </h3>
                <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                  {contact.links.map((link, i) => (
                    <li key={i} className="w-fit">
                      <a
                        className="underline hover:text-blue-500 transition-colors duration-200"
                        href={Array.isArray(link) ? link[0] : link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Array.isArray(link) ? link[1] : link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;