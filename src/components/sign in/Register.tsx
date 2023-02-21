import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buyer from "./Buyer";
import Seller from "./Seller";

type Login = {
  login?: boolean;
};

const Register: React.FC<Login> = ({ login }) => {
  const [seller, setSeller] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <section className="flex h-screen justify-between w-screen bg-primary slg:justify-center login">
      <article className="p-[5%] basis-3/5 overflow-scroll hide slg:max-w-[700px] slg:basis-full z-20">
        <h1 className="font-secondary font-normal text-white text-5xl">
          Welcome to Artsy{" "}
        </h1>
        {login ? (
          <p className="font-primary text-2xl font-medium text-white py-4">
            Log In or{" "}
            <a href="/signup" className="text-[#0094FF]">
              create an account
            </a>
          </p>
        ) : (
          <p className="font-primary text-2xl font-medium text-white py-4">
            Create an account or{" "}
            <a href="/login" className="text-[#0094FF]">
              log in
            </a>
          </p>
        )}

        <form action="" className="mt-[5%]">
          {seller ? <Seller /> : login ? <Buyer login /> : <Buyer />}
          {!login && (
            <p className="text-white font-primary font-medium text-base mt-4">
              By clicking the “Sign Up” button, you are creating an Artsy
              account, and you agree to Artsy’s{" "}
              <span className="text-[#0094FF] underline">Terms of Use</span> and
              <span className="text-[#0094FF] underline"> Privacy Policy</span>
            </p>
          )}
          <div className="flex items-center mt-12">
            <button
              className="px-6 py-4 font-primary text-xl font-bold text-white border-solid border-white border-2"
              onClick={() => navigate("/main")}
            >
              {login ? "Login" : "Sign Up"}
            </button>
            {!seller && (
              <p className="text-white font-primary text-xl font-medium ml-12">
                Are you a
                <span
                  className="text-[#0094ff]"
                  onClick={() => setSeller(true)}
                >
                  {" "}
                  Seller?
                </span>
              </p>
            )}
          </div>
        </form>
      </article>
      <img
        src="/Group 3.png"
        alt="side pics"
        className="basis-2/5 slg:hidden"
      />
    </section>
  );
};

export default Register;
