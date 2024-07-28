import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  src: string;
  title: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  src,
  title,
  description,
}) => {
  return (
    <div className="card bg-base-100 w-full shadow-2xl">
      <figure className="overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={320}
          height={384}
          className="w-full h-96 object-cover object-top"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
