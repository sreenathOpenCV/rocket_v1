const Footer = () => {
    return (
      <footer className="bg-[#171717] w-full">
        <div className="flex flex-col md:flex-row justify-between mx-auto px-4 py-6 3xl:w-[1600px] 2xl:w-[1200px] xl:w-[1140px] lg:w-[1024px] md:w-[767px] sm:min-w-screen max-sm:min-w-screen">
          <div className="w-full md:w-1/3 mb-2 md:mb-0 md:text-left">
            <p className="text-white text-md">© 2024 OpenCV University All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/3 md:text-right">
            <p className="text-white text-md">
              <a href="https://opencv.org/university/100-day-ai-career-challenge/">Terms And Conditions</a> | <a href="https://opencv.org/university/100-day-ai-career-challenge/">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  