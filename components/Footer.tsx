const Footer = () => {
    return (
      <footer className="bg-black">
        <div className="flex flex-row justify-between mx-auto px-4 py-6">
          <div className="w-full md:w-1/3">
            <p className="text-white text-lg">© 2024 OpenCV University All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex items-center justify-around">
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-white text-lg">
              <a href="https://opencv.org/university/100-day-ai-career-challenge/">Terms And Conditions</a> | <a href="https://opencv.org/university/100-day-ai-career-challenge/">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  