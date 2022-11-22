import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState('');

  axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
    setProfileData(res.data);
    console.log(res.data);
  });

  return <div></div>;
};

export default Profile;
