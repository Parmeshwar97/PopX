import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-[700px] border-[#E6E6E6] my-3 w-11/12 md:w-1/4 border-2 p-2 md:p-5 bg-[#F7F8F9] ">
        <button onClick={()=> navigate('/')} className="text-center py-1 mb-5 font-bold w-fit px- rounded-md">
          <MdArrowBackIos fontSize={'1.3rem'}/>
        </button>
        <h2 className="font-bold text-2xl mb-8">
          Create Your <br />
          PopX account
        </h2>

        <form onSubmit={event=> event.preventDefault()} className="flex flex-col gap-8">
          <div className="relative">
            <label
              htmlFor="fullName"
              className="absolute text-[#6C25FF] bg-[#F7F8F9] left-2 px-2 -top-[13px]"
            >
              Full Name<span className="text-[#DE5043]">*</span>
            </label>
            <input
            required
            placeholder="Enter full name"
              type="text"
              id="fullName"
              className="rounded-sm px-3 py-2 border-1 border-[#D3D3D3] "
            />
          </div>

          <div className="relative">
            <label
              htmlFor="phoneNumber"
              className="absolute text-[#6C25FF] bg-[#F7F8F9] left-2 px-2 -top-[13px]"
            >
              Phone number<span className="text-[#DE5043]">*</span>
            </label>
            <input
            required
            placeholder="Enter phone number"
              type="number"
              id="phoneNumber"
              className="rounded-sm px-3 py-2 border-1 border-[#D3D3D3] "
            />
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute text-[#6C25FF] bg-[#F7F8F9] left-2 px-2 -top-[13px]"
            >
              Email address<span className="text-[#DE5043]">*</span>
            </label>
            <input
            required
            placeholder="Enter email address"
              type="email"
              id="email"
              className="rounded-sm px-3 py-2 border-1 border-[#D3D3D3] "
            />
          </div>
          <div className="relative">
            <label
              htmlFor="Password"
              className="absolute text-[#6C25FF] bg-[#F7F8F9] left-2 px-2 -top-[13px]"
            >
              Password<span className="text-[#DE5043]">*</span>
            </label>
            <input
            required
            placeholder="Enter password"
              type="password"
              id="Password"
              className="rounded-sm px-3 py-2 border-1 border-[#D3D3D3] "
            />
          </div>
          <div className="relative">
            <label
              htmlFor="companyName"
              className="absolute text-[#6C25FF] bg-[#F7F8F9] left-2 px-2 -top-[13px]"
            >
              Company name<span className="text-[#DE5043]">*</span>
            </label>
            <input
            required
              type="text"
              placeholder="Enter company name"
              id="companyName"
              className="rounded-sm px-3 py-2 border-1 border-[#D3D3D3] "
            />
          </div>
          <div>
            <label htmlFor="agency" className="">
              Are you an Agency?<span className="text-[#DE5043]">*</span>
            </label>
            <div className="flex gap-8 mt-2">
              <div className="w-fit flex gap-2">
                <input
                required name="agency" id="yes" type="radio" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="w-fit flex gap-2">
                <input
                required name="agency" id="no" type="radio" />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("/register")}
            className="w-full text-white py-3 px-12 bg-[#6C25FF] rounded-md"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
