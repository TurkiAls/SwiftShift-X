import { useEffect } from "react";const About2 = () => {
  const leftImage = "/images/avatar.png";

  // useEffect(() => {
  //   const image = document.getElementById("image");
  //   const paragraph = document.getElementById("paragraph");

  //   // Set initial height of image to match paragraph
  //   image.style.height = `${paragraph.offsetHeight}px`;

  // });
  return (
    <div className="text-mainf container flex flex-col items-center justify-center md:flex-row py-20 lg:py-32">
      <div id="paragraph" className="w-full">
        <div className="my-0">
          <p className="title">من نحن</p>

          <p class="mx-auto max-w-[790px] text-center text-base text-[#4D5761] md:text-xl md:line-h">
           سويفت شيفت هو شريكك في تطوير دورة كاملة للذكاء الاصطناعي ، من المفهوم إلى الإنتاج وما بعده. لسنا متخصصين في التعلم الآلي فحسب ، بل نحن الفريق الذي يساعد الشركات الناشئة والمؤسسات على إنشاء منتجات ذكاء اصطناعي متطورة تعمل على تحسين الكفاءة وتسريع النمو. بقيادة المؤسس تركي السحيم ، نوجهك خلال العملية برمتها ونشكل أفكارك في حلول جاهزة. من خلال خبرتنا في العديد من الصناعات ، سنساعدك في بناء منتج مبتكر يعزز نجاح شركتك.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
