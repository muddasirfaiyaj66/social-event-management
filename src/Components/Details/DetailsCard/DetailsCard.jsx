

const DetailsCard = ({details}) => {
    const {id ,event_type, description,image_url,organizer,contact_email,price} = details || {};
    return (
        <div className="space-y-8 shadow-xl p-10 rounded-lg">
            <div>
              
<img className="h-auto  transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={image_url} alt="image description" />

            </div>

            <div className=" text-3xl md:text-5xl font-bold text-[#FF037C]  ">
                {event_type}
            </div>
            <p className="text-3xl font-medium">{description}</p>

            <div className="md:flex justify-between  ">
                <div><p className="md:text-2xl font-medium flex"><span className="font-bold ">Organizer: </span>  {organizer}</p></div>
                <div><p className="md:text-2xl font-medium flex text-[#7800FF]"><span className="font-bold ">Contact: </span> {contact_email}</p></div>
            </div>


        <div className="text-center ">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none w-full  focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-3 text-center text-xl mr-2 mb-2">Price: ${price}</button>
        </div>
        </div>
    );
};

export default DetailsCard;