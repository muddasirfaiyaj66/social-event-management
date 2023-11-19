import { Helmet} from 'react-helmet-async';



const HelmetTitle = ({title}) => {
   return(
    <div>
         <Helmet>
        <title>Social Event | {title}</title>
    </Helmet>
    </div>
   )
    
};

export default HelmetTitle;