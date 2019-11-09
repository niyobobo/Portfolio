import React from "react";
import ProfileSide from "../components/leftProfile";
import BioContainer from "../components/rightProfile";

const Profile = () => {
  return (
    <div className="content col-2">
      <ProfileSide />
      <BioContainer />
    </div>
  );
};

export default Profile;
