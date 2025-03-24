import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-end pb-8 h-[720px] gap-1 border-[#E6E6E6] my-2 w-11/12 md:w-1/4 border-2 p-4 bg-[#F7F8F9] ">
      <h1 className="font-bold text-2xl">Welcome to PopX</h1>
      <div className="text-[#74777B]">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>consectetur adipiscig elit.</p>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <button
          onClick={() => navigate('/register')}
          className="w-full text-white py-3 px-12 bg-purple-700 rounded-md"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full py-3 bg-[#CEBAFB] px-8 md:px-12 rounded-md"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
