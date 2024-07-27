import React from "react";

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
        <img
          src={src}
          alt={title}
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
