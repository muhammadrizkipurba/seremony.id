"use client"

import TextInput from "@/components/form/TextInput"
import { getCookie } from "cookies-next/client";
import { useCallback, useEffect, useState } from "react";
import { getUserProfile, UserProfileData } from "./profileServices";
import Alert, { AlertPropsType } from "@/components/ui/alert";
import Loading from "@/components/Loading";

const ProfileTabContent = ({ }) => {
  const authCookie = getCookie("auth");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertPropsType | null>(null);

  const [userData, setUserData] = useState<UserProfileData>({
    _id: "",
    email: "",
    name: "",
    phone: ""
  });

  const fetchUserProfile = useCallback(async (email: string, token: string) => {
    setIsLoading(true);
    const payload = {
      email,
      token
    };

    const successRequest = await getUserProfile(payload);
    if (!successRequest) return;

    const { status, message, data } = successRequest;

    if (status === 200) {
      setUserData(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        variant: "error",
        message: message || "Mohon maaf sedang terjadi gangguan. Mohon coba beberapa saat lagi"
      });
    };
  }, []);

  useEffect(() => {
    if (authCookie) {
      const { user, authToken } = JSON.parse(authCookie);
      fetchUserProfile(user.email, authToken);
    };
  }, [authCookie]);

  return (
    <>
      {alert &&
        <div className="mb-5">
          <Alert options={alert} />
        </div>
      }
      <div className='bg-soft-gray p-4 rounded-xl'>
        <h1 className='text-xl font-bold'>Profile Pengguna</h1>
        <hr className="my-4" />
        {isLoading ?
          <div className="min-h-36 flex items-center justify-center">
            <Loading show={isLoading} labelClassName="text-primary-orange" spinnerClassName="text-primary-orange" />
          </div>
          : <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <TextInput
              id="name"
              name="name"
              label="Nama"
              placeholder="Masukkan name"
              value={userData?.name}
              disabled
              onChange={() => { }}
            />
            <TextInput
              id="email"
              name="email"
              label="Email"
              placeholder="Masukkan email"
              value={userData?.email}
              disabled
              onChange={() => { }}
            />
            <TextInput
              id="phone"
              name="phone"
              label="No. Whatsapp"
              placeholder="Masukkan phone"
              value={userData?.phone}
              disabled
              onChange={() => { }}
            />
          </div>
        }
        <div className="mt-4" />
      </div>
      {/* <div className='bg-soft-gray p-4 rounded-xl mt-5'>
        <h1 className='text-xl font-bold'>Ubah Password</h1>
        <hr className="my-4" /> 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TextInput
            id="oldPassword"
            name="oldPassword"
            label="Password lama"
            placeholder="Masukkan password lama"
            value={""}
            disabled
            onChange={() => { }}
          />
          <TextInput
            id="newPassword"
            name="newPassword"
            label="Password baru"
            placeholder="Masukkan password baru"
            value={""}
            disabled
            onChange={() => { }}
          />
          <TextInput
            id="confirmNewPassword"
            name="confirmNewPassword"
            label="Konfirmasi Password Baru"
            placeholder="Ketik ulang password baru"
            value={""}
            disabled
            onChange={() => { }}
          />
        </div>
      </div> */}
    </>
  )
}

export default ProfileTabContent