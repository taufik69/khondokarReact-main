
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { axiosInstance } from "../components/axios/axios.instance";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FallingLines } from "react-loader-spinner";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
const SignIn = () => {
  const router = useRouter();
  const [eye, seteye] = useState(false);
  const [loading, setloading] = useState(false);
  const [signIninfo, setsignIninfo] = useState({
    email: "",
    password: "",
  });

  let [emailerror, setEmailerror] = useState("");
  let [passworderror, setPassworderror] = useState("");

  const onsinguphandaler = (event) => {
    const { id, value } = event.target;
    setsignIninfo({
      ...signIninfo,
      [id]: value,
    });
  };

  
  const handlelogin = async () => {
    // Clear previous errors
    setEmailerror("");
    setPassworderror("");

    const { email, password } = signIninfo;

    // Validate email and password fields
    if (!email) {
      setEmailerror("Email is missing!");
    }
    if (!password) {
      setPassworderror("Password is missing!");
    }

    // If either email or password is missing, stop execution here
    if (!email || !password) {
      setloading(false);
      return;
    }

    try {
      setloading(true);

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

        router.push("/");
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
      setloading(false);
      setsignIninfo({ email: "", password: "" });
    }
  };



  return (
    <>
      <ToastContainer className={"w-fit "} />
      <div className=" signinZigzag flex h-screen">
        <div className="lg:w-[60%] w-full overflow-y-scroll md:overflow-y-clip  h-full flex flex-col  justify-center items-center ">
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
                    value={signIninfo.email}
                    onChange={onsinguphandaler}
                    placeholder="example@gmail.com"
                    className="py-2 px-3 rounded-lg text-black"
                  />
                  {emailerror && (
                    <p className="text-red-600 capitalize font-ruda">
                      {emailerror}
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
                    value={signIninfo.password}
                    onChange={onsinguphandaler}
                    placeholder="********"
                    className="py-2 px-3 rounded-lg text-black "
                  />
                  <span
                    className="absolute bottom-[13%] right-[4%] text-black text-3xl"
                    onClick={() => seteye(!eye)}
                  >
                    {eye ? <FaEyeSlash /> : <FaRegEye />}
                  </span>
                  {passworderror && (
                    <p className="text-red-600 capitalize font-ruda">
                      {passworderror}
                    </p>
                  )}
                </div>
                {loading ? (
                  <span className=" flex items-center justify-center ">
                    <FallingLines
                      color="#fff"
                      height="50"
                      width="100"
                      visible={true}
                    />
                  </span>
                ) : (
                  <button
                    className="w-full mt-10 bg-orange_color  rounded-full py-2 text-primary_font_color font-sans_serif z-10"
                    style={{ fontWeight: "500" }}
                    onClick={handlelogin}
                  >
                    Sign In
                  </button>
                )}
                <p className="text-primary_font_color font-sans_serif flex justify-between">
                  <div>
                    Don’t have an account?{" "}
                    <Link
                      href={"/signup"}
                      className="text-orange_color ml-1 hover:underline"
                      style={{ fontWeight: "500" }}
                    >
                      Sign up
                    </Link>{" "}
                  </div>
                  <span className="text-white underline cursor-pointer hover:text-orange_color">
                    ForgotPassword
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
