import { Link } from "react-router-dom";
const Header2 = () => {

  return (
    <div className="absolute top-0 left-0 w-full h-[100px] z-[2]">
      <div className="container flex items-center justify-between">
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <a href="/">
              <img
                src="/images/logo/mark.png"
                className="w-[60px] h-[60px]"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row font-['Inter'] text-base">
          <a className = "btn" href="#services">
            خدماتنا
          </a>
          <Link className = "btn orange-btn" to="/">
            English
          </Link>
          {/* <Link to = "/Signup">
          Signup
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header2;
