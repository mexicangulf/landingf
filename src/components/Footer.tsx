const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs md:text-sm text-gray-400">
        <p>
          Crafted with Love and React by @mexicangulf on{" "}
          <a
            href="https://t.me/mexicangulf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
          Telegram
          </a>{" "}
           and{" "}
           <a
           href="https://github.com/mexicangulf"
           target="_blank"
           rel="noopener noreferrer"
           className="text-gray-300 hover:text-white transition-colors"
           >Github</a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
