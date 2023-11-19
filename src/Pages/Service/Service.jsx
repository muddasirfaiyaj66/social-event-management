
import { useLoaderData } from 'react-router-dom';
import EventCard from '../../Components/EventCard/EventCard';
import HelmetTitle from '../../Components/HelmetTitle';

const Service = () => {
    const allData = useLoaderData();
    return (
        <div  data-aos="flip-left">
            <HelmetTitle title={"Services"}></HelmetTitle>
            <div className='text-3xl md:text-5xl text-center font-bold my-8'><span className='text-[#FF037C]'>OUR</span> SERVICES</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto p-5 md:p-10 my-10">
                {
                    allData.map(data => <EventCard key={data.id} data={data}> </EventCard> )
                }
            </div>
        </div>
    );
};

export default Service;