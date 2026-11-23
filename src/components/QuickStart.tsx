import { Map, FileSignature, PartyPopper, Calendar, Sigma } from "lucide-react";

const QuickStart = () => {
  const quickStartItems = [
    {
      icon: Map,
      title: "نقشه دانشکده",
      description:
        "برای گم نشدن در روز اول! ",
      color: "#3B82F6",
      link: "/map.jpg",
    },
    {
      icon: Calendar,
      title: "مشاهده برنامه درسی",
      description:
        "با رجوع به سایت گلستان برنامه هفتگی خود را مشاهده کنید",
      color: "#F59E0B"
    },
    {
      icon: FileSignature,
      title: "تکمیل ثبت نام",
      description:
        "برای تکمیل ثبت نام در دانشگاه به آموزش دانشکده ریاضی مراجه کنید",
      date: "شنبه 26 مهر تا یکشنبه 27 مهر",
      color: "#10B981"
    },
    {
      icon: PartyPopper,
      title: "جشن نوورود ها",
      description:
        "برج میلاد",
      date: "به زودی",
      color: "#EC4899"
    },
    {
      icon: Sigma,
      title: "استقبال دانشکده ریاضی",
      description: "استقبال ویژه از ورودی های علوم کامپیوتر در دانشکده ریاضی",
      date: "یکشنبه 2 آذر",
      color: "#9132A8"
    }
  ];

  return (
    <section
      id="quick-start"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 "></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            راهنمای شروع دانشگاه
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            تمام راهنمایی که برای شروع دانشگاه به آن نیاز دارید
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {quickStartItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-white/70 border border-gray-200/60 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden transform hover:-translate-y-2"
              >

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-justify mb-6 leading-relaxed">
                  {item.description}
                </p>

                {"date" in item && <div
                  className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-tight"
                  style={{
                    backgroundColor: item.color + "15",
                    color: item.color,
                  }}
                >
                  {item.date}
                </div>}
                {"link" in item && <a href={item.link} ><div
                  className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-tight"
                  style={{
                    backgroundColor: item.color + "15",
                    color: item.color,
                  }}
                >
                  دانلود
                </div></a>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
