import { useLoaderData } from "react-router-dom";
import AboutEvent from "../../Components/AboutEvent/AboutEvent";
import Header from "../../Components/Header/Header";
import EventCard from "../../Components/EventCard/EventCard";

const Home = () => {
    const allData = useLoaderData();

    return (
        <div>
            <Header></Header>
            <AboutEvent></AboutEvent>
            <div data-aos="fade-up"
     data-aos-duration="3000" className="my-10">
            <div className="text-center space-y-5 ">
                <h1 className="text-4xl font-bold text-[#FF037C]">Our Services </h1>
                <p className="text-2xl font-medium ">We provide our best services to make your function more delightful</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto p-5 md:p-10 my-10">
                {
                    allData.map(data => <EventCard key={data.id} data={data}> </EventCard> )
                }
            </div>

            <div data-aos="zoom-out-left" className="max-w-screen-xl mx-auto py-5 px-5">
                <img src="/public/bannerlow.jpg" alt="" />
            </div>
            </div>

            

        </div>
    );
};

export default Home;