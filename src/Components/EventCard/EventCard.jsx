

const EventCard = ({data}) => {

    const {id,event_type,description,vector_url} = data;
    return (
        <div>
            
            <div className="relative flex h-[500px] flex-col rounded-xl bg-gradient-to-r from-[#ffffff] to-[#ebebeb] bg-clip-border text-gray-700 shadow-xl">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={vector_url}
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {event_type}
      </p>
      
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
      {description}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-[#FF037C] text-white"
      type="button"
    >
     Details
    </button>
  </div>
</div>
        </div>
    );
};

export default EventCard;