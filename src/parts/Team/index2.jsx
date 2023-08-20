import React from "react";
import MemberCard from "./MemberCard";
import { team2 } from "../../constants/team2";

const Team2 = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="flex items-center justify-center pt-32">
        <div className="title">
          <div>تعرف على الفريق</div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 items-center justify-between gap-x-24 gap-y-24">
        {team2.map((member, index) => (
          <MemberCard
            key={index}
            index={index}
            name={member.name}
            photo={member.photo}
            role={member.role}
            description={member.description}
            links={member.links}
            style={index % 2}
            mphoto={member.mphoto}
          />
        ))}
      </div>
    </div>
  );
};

export default Team2;
