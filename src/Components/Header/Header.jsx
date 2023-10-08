import { Typography } from "@material-tailwind/react";



const Header = () => {
    return (
        <div >
         <div className="carousel w-full h-[80vh] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="carusol1.jpg" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl font-bold leading-5 md:text-4xl lg:text-6xl"
            >
              Your Event <br />
              Our <span className="text-[#FF037C]">Responsibility.</span>
            </Typography>

        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="carusol2.jpg" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl font-bold leading-5 md:text-4xl lg:text-6xl"
            >
              Your Event <br />
              Our <span className="text-[#FF037C]">Responsibility.</span>
            </Typography>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="carusol3.jpg" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl font-bold leading-5 md:text-4xl lg:text-6xl"
            >
              Your Event <br />
              Our <span className="text-[#FF037C]">Responsibility.</span>
            </Typography>

        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="carusol4.jpg" className="w-full" />
    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
        <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl font-bold leading-5 md:text-4xl lg:text-6xl"
            >
              Your Event <br />
              Our <span className="text-[#FF037C]">Responsibility.</span>
            </Typography>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;