import React from "react";

const AboutAfricaSection = () => {
  return (
    <section className="bg-[#f4d4b8] py-16 px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
      
      {/* TOP HEADING */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-[28px] md:text-3xl font-extrabold text-[#111] leading-snug">
          Being in Africa makes me feel more alive – the people, the
          landscapes, the wildlife: it’s all very real and immediate.
        </h2>

        <p className="text-[16px] text-[#333] mt-4 leading-relaxed">
          Because for us, inclusivity isn’t a season or a slogan. It’s the engine that keeps every journey 
          moving forward: today, tomorrow and for generations to come.
        </p>

        <p className="text-[16px] text-[#333] mt-4 leading-relaxed">
          Out, proud and wanna celebrate with us? Check out our Pride trips below. Wanna learn more 
          about our work to support the LGBTQIA+ community worldwide? Just keep readin’.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 max-w-5xl mx-auto  ">
        
        {/* LEFT SIDE TEXT BLOCK */}
        <div className="text-left md:col-span-4">
          <h3 className="text-xl  text-[#222] mb-2">
            Chris is in the UK and usually available:
          </h3>

          <p className="text-[16px] text-[#444] mb-1">
            <span className="font-semibold">UK time:</span> 10:00–18:30 Mon–Fri.
          </p>

          <p className="text-[16px] text-[#444] mb-4">
            See our <a href="#" className="underline">office hours and locations.</a>
          </p>

          <h3 className="text-xl  text-[#222] mb-4">
            More about Chris…
          </h3>

          <p className="text-[16px] text-[#444] leading-relaxed mb-4">
            I first went to Africa in 1987, after reading physics at Queen's College, Oxford.
            I taught for almost three years in a rural school in Zimbabwe (with VSO), and during 
            this time had the chance to travel extensively. In 1990 I co-authored the <i>Guide to Namibia 
            and Botswana</i> for Bradt Publications: the first English guidebook to these countries.
            Then shortly after I returned to the UK, I spent the following three years as a business 
            analyst and shipbroker for P&O in London.
          </p>

          <p className="text-[16px] text-[#444] leading-relaxed mb-4">
            Leaving the city, I joined <i>Sunvil Holidays</i> in 1994 to concentrate on what I enjoy most: Africa.
            The passionate and pioneering company that is <i>Expert Africa</i> grew out of this and remains a 
            proud member of the <i>Sunvil</i> family of travel companies.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:col-span-2">
          <img
            src="https://alphauniverseglobal.media.zestyio.com/Alpha-Universe-Matthew-Hahnel---Kenya-Last-2-Northern-White-Rhinos.jpg" 
            alt="Chris Portrait"
            className="w-full h-[400px] rounded-md shadow-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutAfricaSection;
