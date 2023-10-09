const AboutEvent = () => {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <section className="hidden md:flex bg-gradient-to-r from-[#7800FF] to-[ #FF03FF] my-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Event Management
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-00 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
              Social event management involves planning and organizing various
              gatherings, from weddings to corporate functions. It encompasses
              tasks like budgeting, vendor coordination, design, and logistics
              to create memorable experiences. Event managers must ensure
              everything runs smoothly, from venue selection to guest
              satisfaction, and adapt to unexpected challenges while embracing
              sustainability and technology.
            </p>
          </div>
          <div className="flex flex-row-reverse lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/aboutEvent.jpg" alt="mockup" />
          </div>
        </div>
      </section>
      <section className=" md:hidden bg-gradient-to-r from-[#FF037C] to-[#7800FF] my-10">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
              Event Management
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-00 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
              Social event management involves planning and organizing various
              gatherings, from weddings to corporate functions. It encompasses
              tasks like budgeting, vendor coordination, design, and logistics
              to create memorable experiences. Event managers must ensure
              everything runs smoothly, from venue selection to guest
              satisfaction, and adapt to unexpected challenges while embracing
              sustainability and technology.
            </p>
          </div>
          <div className="flex flex-row-reverse lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/eventMobile.jpg" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutEvent;
