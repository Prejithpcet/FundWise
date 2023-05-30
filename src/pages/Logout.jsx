import React from "react";
import { CustomButton } from "../components";
import { useStateContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { disconnect, address } = useStateContext();
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div>
          <p className="mt-[20px] font-epilogue font-bold text-[28px] text-white text-center">
            Confirm Logout
          </p>
        </div>
        <div>
          <CustomButton
            btnType="button"
            title={address ? "Logout" : "Login First"}
            styles={address ? "bg-[#8c6dfd]" : "bg-[#1dc071]"}
            handleClick={() => {
              if (!address) navigate("/");
              else {
                disconnect();
                navigate("/");
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
