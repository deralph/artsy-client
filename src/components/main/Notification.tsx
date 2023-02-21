import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { viewNotification } from "../../store/side.slice";
import { notification } from "../database";

const Notification: React.FC = () => {
  const dispatch = useDispatch;
  return (
    <section className=" w-full h-full z-40 absolute flex justify-center items-center bg-[#00000080]">
      <article className="bg-white w-[50%]">
        <p className="py-4 relative text-center text-primary font-black font-primary text-xl">
          Notifications
          <span className="absolute right-3 translate-y-1/2 bottom-1/2">
            <FaTimes
              className="font-extralight"
              //   onClick={() => dispatch(viewNotification(false))}
            />
          </span>
        </p>
        <section className=" h-[60vh] overflow-scroll hide">
          {notification.map(({ profileDp, message, time }, index) => {
            return (
              <div
                key={index}
                className="relative flex p-3 items-center border-t border-solid border-[#00000040]"
              >
                <img
                  src={profileDp}
                  alt="profile pics"
                  className="h-10 w-10 rounded-[50%] mr-4"
                />
                <p className="font-primary font-bold text-sm text-primary">
                  {message}
                </p>
                <p className="font-primary font-bold text-xs text-primary opacity-50 absolute right-1 bottom-1">
                  {time}
                </p>
              </div>
            );
          })}
        </section>
      </article>
    </section>
  );
};

export default Notification;
