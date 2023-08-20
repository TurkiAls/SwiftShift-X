import { useEffect } from "react";
const About2 = () => {
  useEffect(() => {
    // Create the observer
    const squares = document.querySelectorAll(".square");
    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          squares[0].classList.add("fade", "fade-out-0");
          squares[1].classList.add("fade", "fade-out-1");
          squares[2].classList.add("fade", "fade-out-2");
          squares[3].classList.add("fade", "fade-out-3");
          squares[4].classList.add("fade", "fade-out-4");
          squares[5].classList.add("fade", "fade-out-5");
          squares[6].classList.add("fade", "fade-out-6");
          squares[7].classList.add("fade", "fade-out-7");
          squares[8].classList.add("fade", "fade-out-8");
          squares[9].classList.add("fade", "fade-out-9");
          squares[10].classList.add("fade", "fade-out-10");
        } else {
          squares[0].classList.remove("fade", "fade-out-0");
          squares[1].classList.remove("fade", "fade-out-1");
          squares[2].classList.remove("fade", "fade-out-2");
          squares[3].classList.remove("fade", "fade-out-3");
          squares[4].classList.remove("fade", "fade-out-4");
          squares[5].classList.remove("fade", "fade-out-5");
          squares[6].classList.remove("fade", "fade-out-6");
          squares[7].classList.remove("fade", "fade-out-7");
          squares[8].classList.remove("fade", "fade-out-8");
          squares[9].classList.remove("fade", "fade-out-9");
          squares[10].classList.remove("fade", "fade-out-10");
        }
      });
    });
    observer.observe(squares[0]);
  }, []);

  return (
    <div className="py-10 flex items-center justify-center bg-[#090A11]">
      <div className="mx-auto">
        <div className="text-xl md:text-[40px] text-white font-bold py-8">
          <article className="text-center space-y-3 md:space-y-10">
            <div className="">
              <span className="square "> استفد من </span>
              <span className="square "> خبرة </span>
            </div>
            <div className=" ">
              <span className="square ">سويفت شيفت في  </span>
              <span className="square "> تطوير </span>
              <span className="square ">الذكاء الاصطناعي </span>
            </div>
            <div className="">
              <span className="square ">لتحسين </span>
              <span className="square ">إمكانيات </span>
              <span className="square "> عملك </span>
              <span className="square "> </span>
            </div>
            <div className="">
              <span className="square "> </span>
              <span className="square "> </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About2;
