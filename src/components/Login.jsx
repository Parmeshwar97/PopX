import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-[700px] border-[#E6E6E6] my-3 w-11/12 md:w-1/4 border-2 p-2 md:p-5 bg-[#F7F8F9] ">
        <button
          onClick={() => navigate("/")}
          className="text-center py-1 mb-5 font-bold w-fit px- rounded-md"
        >
          <MdArrowBackIos fontSize={"1.3rem"} />
        </button>
        <h2 className="font-bold text-2xl mb-2">
          Signin to your <br />
          PopX account
        </h2>
        <div className="text-[#74777B] mb-9">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>consectetur adipiscig elit.</p>
        </div>
        <form className="flex flex-col gap-10">
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute text-[#6C25FF] bg-[#F7F8F9] left-2 px-2 -top-[14px]"
            >
              Email Address
            </label>
            <input
              required
              placeholder="Enter email address"
              type="text"
              id="email"
              className="rounded-sm py-2 px-3 border-1 border-[#D3D3D3] "
            />
          </div>

          <div className="relative">
            <label
              htmlFor="phoneNumber"
              className="absolute text-[#6C25FF] bg-[#F7F8F9] left-2 px-2 -top-[14px]"
            >
              Password
            </label>
            <input
              required
              type="password"
              placeholder="Enter password"
              id="phoneNumber"
              className="rounded-sm py-2 px-3 border-1 border-[#D3D3D3] "
            />
          </div>
          <button className="w-full text-white py-3 px-12 bg-purple-700 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
