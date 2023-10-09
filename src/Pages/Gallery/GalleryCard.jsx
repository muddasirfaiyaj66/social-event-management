

const GalleryCard = ({gallery}) => {
    const {image} = gallery || {};
    return (
        <div>
            
            <div data-aos="zoom-in-up"> 
        <img className="h-auto  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 max-w-full rounded-lg" src={image} alt="" />
    </div>
        </div>
    );
};

export default GalleryCard;