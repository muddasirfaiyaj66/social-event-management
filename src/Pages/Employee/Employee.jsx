import { useLoaderData } from "react-router-dom";
import EmployeeCard from "./EmployeeCard";

const Employee = () => {

    const employee = useLoaderData();
   

  return (
    <div data-aos="zoom-in">
         <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Social Event Management: Your key to unforgettable experiences</p>
      </div>
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        employee.map((em,idx )=> <EmployeeCard key={idx} em={em}></EmployeeCard> ) 
      } </div>
   

    </div>
    </section>
    </div>
    
  )
};

export default Employee;
