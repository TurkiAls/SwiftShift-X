import React from "react";
const Footer2 = () => {
  return (
    <div className="container mt-10 pt-10 font-['Inter']">
      <div className="mx-auto">
        <div className="grid grid-cols-4 pb-8">
          <div className="col-span-4 flex items-center">
            <img
              className="my-5 h-[60px] w-[200px] "
              src="/images/Logo/lox.png"
              alt="logo"
            />
          </div>
          <div className="col-span-4 pb-6 md:col-span-2">
          </div>
          <div className="col-span-4 flex flex-row gap-x-8 md:col-span-2">
            <div className="flex md:w-1/2 ">
              <div className="flex flex-col ">
                <div className="my-2 font-semibold">العنوان</div>
                <div className="font-normal text-[#6B7280]">الرياض, المملكه العربية السعوية</div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="my-2 font-semibold">تواصل معنا</p>
              <p className="font-normal text-[#6B7280]">
              swiftshiftai@gmail.com :البريد الألكتروني
                <br />
                +رقم الجوال: 966544774779
              </p>
            </div>
          </div>
        </div>
        <hr className="col-span-2"></hr>
        <div className="grid grid-cols-2 items-center justify-between gap-y-3 py-8 text-sm">
          <div className="col-span-2 text-[#4D5761] md:col-span-1">
           @SwiftShift AI
          </div>
          <div className="col-span-2 flex flex-row justify-end gap-x-6 text-main-color md:col-span-1">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookie Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
