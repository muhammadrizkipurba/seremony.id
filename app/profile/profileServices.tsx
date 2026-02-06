export type UserProfileData = {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

type GetUserProfilePayload = {
  email: string;
  token: string;
};

const getUserProfile = async(payload: GetUserProfilePayload) => {
  const { token } = payload;

  const apiURL = process.env.NEXT_PUBLIC_API_URL+"/user/details";

  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
  
    if(!response.ok) {
      console.log(`HTTP Error! Status : ${response.status}`);
      return;
    };
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
};

export {
  getUserProfile
}