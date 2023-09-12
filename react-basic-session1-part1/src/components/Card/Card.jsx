import Title from "./Title";
import Image from "./Image";
import Views from "./Views";


const Card = () => {
    return (
        <div>
           
           <div className="card w-full mx-auto bg-base-100 shadow-xl">
           <Title></Title>
           <Image></Image>
           <Views></Views>
  
  </div>
</div>
       
    );
};

export default Card;