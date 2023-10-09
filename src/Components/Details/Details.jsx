import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard/DetailsCard";


const Details = () => {
    const [details, setDetails] =useState({});
    const {id} =useParams();
    const eventData = useLoaderData();

    useEffect(()=>{
        const findData = eventData?.find((data) => data.id === id);
        setDetails(findData)
    },[id,eventData]);

    return (
        <div  className="flex justify-center max-screen-xl mx-auto p-5 md:p-10 my-10">
            <DetailsCard details={details}></DetailsCard>
        </div>
    );
};

export default Details;