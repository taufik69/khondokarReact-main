import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { axiosInstance } from "../components/axios/axios.instance";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FallingLines } from "react-loader-spinner";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate(); // Replacing useRouter with useNavigate
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: "",
  });

  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  const onInputHandler = (event) => {
    const { id, value } = event.target;
    setSignInInfo({
      ...signInInfo,
      [id]: value,
    });
  };

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");

    const { email, password } = signInInfo;

    if (!email) {
      setEmailError("Email is missing!");
    }
    if (!password) {
      setPasswordError("Password is missing!");
    }

    if (!email || !password) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data } = await axiosInstance.post("/signin", {
        emailOrMobile: email,
        password: password,
      });

      if (data?.success) {
        toast.success(data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        navigate("/"); // Redirect using useNavigate
      }
    } catch (error) {
      const { response } = error;
      toast.error(response?.data?.errors || "An error occurred", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
      setSignInInfo({ email: "", password: "" });
    }
  };

  return (
    <>
      <ToastContainer className={"w-fit "} />
      <div className="signinZigzag flex h-screen">
        <div className="lg:w-[60%] w-full overflow-y-scroll md:overflow-y-clip  h-full flex flex-col justify-center items-center">
          <div className="w-1/2">
            <div className="flex flex-col items-center justify-normal py-10">
              <h1
                className="text-primary_font_color  text-[50px] mt-10 md:mt-0 md:text-[60px] font-ruda"
                style={{ fontWeight: "bold" }}
              >
                Sign In
              </h1>
            </div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-y-5 text-primary_font_color">
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="email"
                    className="font-sans_serif text-para_font_size"
                  >
                    Email <span className="text-orange_color">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={signInInfo.email}
                    onChange={onInputHandler}
                    placeholder="example@gmail.com"
                    className="py-2 px-3 rounded-lg text-black"
                  />
                  {emailError && (
                    <p className="text-red-600 capitalize font-ruda">
                      {emailError}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-y-2 relative">
                  <label
                    htmlFor="password"
                    className="font-sans_serif text-para_font_size"
                  >
                    Password <span className="text-orange_color">*</span>
                  </label>
                  <input
                    type={eye ? "text" : "password"}
                    id="password"
                    value={signInInfo.password}
                    onChange={onInputHandler}
                    placeholder="********"
                    className="py-2 px-3 rounded-lg text-black "
                  />
                  <span
                    className="absolute bottom-[13%] right-[4%] text-black text-3xl"
                    onClick={() => setEye(!eye)}
                  >
                    {eye ? <FaEyeSlash /> : <FaRegEye />}
                  </span>
                  {passwordError && (
                    <p className="text-red-600 capitalize font-ruda">
                      {passwordError}
                    </p>
                  )}
                </div>

                {loading ? (
                  <span className="flex items-center justify-center">
                    <FallingLines
                      color="#fff"
                      height="50"
                      width="100"
                      visible={true}
                    />
                  </span>
                ) : (
                  <button
                    className="w-full mt-10 bg-orange_color rounded-full py-2 text-primary_font_color font-sans_serif z-10"
                    style={{ fontWeight: "500" }}
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                )}
                <p className="text-primary_font_color font-sans_serif flex justify-between">
                  <div>
                    Don’t have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-orange_color ml-1 hover:underline"
                      style={{ fontWeight: "500" }}
                    >
                      Sign up
                    </Link>{" "}
                  </div>
                  <span className="text-white underline cursor-pointer hover:text-orange_color">
                    Forgot Password
                  </span>
                </p>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start space-x-4 text-primary_font_color">
                <FaFacebookF className="w-12 h-12 rounded-full p-2 sm:bg-blue-700 sm:p-3 animate-bounce duration-75 cursor-pointer" />
                <FaYoutube className="w-12 h-12 rounded-full sm:bg-red-700 sm:p-3 animate-bounce duration-1000 cursor-pointer" />
                <FaInstagram className="w-12 h-12 rounded-full sm:bg-orange-600 sm:p-3 animate-bounce duration-75 cursor-pointer" />
                <FaTwitter className="w-12 h-12 rounded-full sm:bg-blue-500 sm:p-3 animate-bounce duration-1000 cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
