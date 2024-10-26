import Head from "next/head";

const UnderConstructionPage = () => {
  return (
    <>
      <Head>
        <title>Under Construction | Coming Soon</title>
        <meta
          name="description"
          content="We are working hard to launch our website!"
        />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-700 text-white text-center p-4 sm:p-6">
        <div className="max-w-xl w-full mx-auto p-6 sm:p-8 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-sm">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 animate-pulse">
            Coming Soon
          </h1>

          <p className="text-md sm:text-lg mb-2">
            Welcome to my personal website!
          </p>
          <p className="text-sm sm:text-md mb-4 sm:mb-6">
            This website is currently under construction and will be available
            soon. Stay tuned for updates!
          </p>

          <div className="relative w-full h-1 bg-gray-700 rounded-full mb-4 sm:mb-6">
            <div className="absolute left-0 top-0 h-full bg-green-500 animate-progress rounded-full"></div>
          </div>

          {/* Tombol WhatsApp */}
          <a
            href="https://wa.me/6288293378351?text=Hello%20Dzikri%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20business%20opportunity%20or%20hiring%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 sm:mt-6 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white text-sm sm:text-base font-medium px-6 py-3 rounded-md"
          >
            Contact Me on WhatsApp
          </a>
        </div>

        <footer className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold">Dzikri Nur Akbar</span>. All rights
            reserved.
          </p>
          <p className="text-xs mt-2 sm:mt-3">
            Professional Solutions for Your Business Needs
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress 5s infinite alternate;
        }
      `}</style>
    </>
  );
};

export default UnderConstructionPage;
