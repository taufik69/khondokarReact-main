import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router navigation
import { Link } from "react-router-dom"; // React Router Link
import { toast, ToastContainer, Bounce } from "react-toastify";
import axios from "axios"; // Axios for HTTP requests
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FallingLines } from "react-loader-spinner";

const SignUP = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
  });

  const [firstNameErr, setFirstNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const onSignupHandler = (event) => {
    const { id, value } = event.target;
    setSignUpInfo({
      ...signUpInfo,
      [id]: value,
    });
  };

  // handleRegistration function
  const handleRegistration = async () => {
    try {
      setLoading(true);

      const { firstName, email, mobile, password } = signUpInfo;

      if (!firstName) {
        setFirstNameErr("FirstName Missing !!");
      } else if (!email) {
        setEmailErr("Email Missing !!");
        setFirstNameErr("");
      } else if (!mobile) {
        setMobileErr("Mobile Missing !!");
        setEmailErr("");
        setFirstNameErr("");
      } else if (!password) {
        setPasswordErr("Password Missing !!");
        setMobileErr("");
        setEmailErr("");
        setFirstNameErr("");
      } else {
        setPasswordErr("");
        const { data } = await axios.post("/signup", signUpInfo);

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

          navigate("/signin"); // Redirect to Sign In page after successful registration
        }
      }
    } catch (error) {
      const { response } = error;
      toast.error(response?.data?.errors || "Registration failed", {
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
      setSignUpInfo({
        firstName: "",
        email: "",
        mobile: "",
        address: "",
        password: "",
      });
    }
  };

  return (
    <>
      <ToastContainer className="w-fit" />
      <div className="signupZigzag flex h-screen overflow-y-scroll">
        <div className="lg:w-[60%] w-full overflow-y-scroll md:overflow-y-scroll lg:overflow-y-auto h-full flex flex-col justify-center items-center">
          <div className="w-full px-4 md:px-0 md:w-1/2">
            <div className="flex flex-col items-center justify-normal py-10">
              <h1
                className="text-primary_font_color text-[50px] mt-10 md:mt-0 md:text-[60px] font-ruda"
                style={{ fontWeight: "bold" }}
              >
                Registration
              </h1>
            </div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-y-5 text-primary_font_color">
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="firstName"
                    className="font-sans_serif text-para_font_size"
                  >
                    First Name <span className="text-orange_color">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={signUpInfo.firstName}
                    onChange={onSignupHandler}
                    placeholder="John Doe"
                    className="py-2 px-3 rounded-lg text-black"
                  />
                  {firstNameErr && (
                    <p className="text-red-600 capitalize font-ruda">
                      {firstNameErr}
                    </p>
                  )}
                </div>

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
                    value={signUpInfo.email}
                    onChange={onSignupHandler}
                    placeholder="example@gmail.com"
                    className="py-2 px-3 rounded-lg text-black"
                  />
                  {emailErr && (
                    <p className="text-red-600 capitalize font-ruda">
                      {emailErr}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="mobile"
                    className="font-sans_serif text-para_font_size"
                  >
                    Mobile <span className="text-orange_color">*</span>
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    value={signUpInfo.mobile}
                    placeholder="01875933259"
                    onChange={onSignupHandler}
                    className="py-2 px-3 rounded-lg text-black"
                  />
                  {mobileErr && (
                    <p className="text-red-600 capitalize font-ruda">
                      {mobileErr}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="address"
                    className="font-sans_serif text-para_font_size"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={signUpInfo.address}
                    placeholder="City, State"
                    onChange={onSignupHandler}
                    className="py-2 px-3 rounded-lg text-black"
                  />
                  {addressErr && (
                    <p className="text-red-600 capitalize font-ruda">
                      {addressErr}
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
                    value={signUpInfo.password}
                    onChange={onSignupHandler}
                    placeholder="********"
                    className="py-2 px-3 rounded-lg text-black"
                  />
                  <span
                    className="absolute bottom-[13%] right-[4%] text-black text-3xl cursor-pointer"
                    onClick={() => setEye(!eye)}
                  >
                    {eye ? <FaEyeSlash /> : <FaRegEye />}
                  </span>
                  {passwordErr && (
                    <p className="text-red-600 capitalize font-ruda">
                      {passwordErr}
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
                    className="w-full mt-10 bg-orange_color signUp rounded-full py-2 text-primary_font_color font-sans_serif z-10"
                    style={{ fontWeight: "500" }}
                    onClick={handleRegistration}
                  >
                    Sign Up
                  </button>
                )}

                <p className="text-primary_font_color font-sans_serif">
                  Already have an Account?{" "}
                  <Link
                    to="/signin"
                    className="text-orange_color ml-1 hover:underline"
                    style={{ fontWeight: "500" }}
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUP;
