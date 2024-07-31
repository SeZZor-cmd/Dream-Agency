import React from 'react';


interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className=" bg-[#fff] p-[20px] rounded-[10px] [box-shadow:0_0_10px_rgba(0,_0,_0,_0.1)] w-[250px] text-left">
      <div className="text-[2rem] mb-4">{icon}</div>
      <h3 className='text-[1.25rem] mb-4'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
