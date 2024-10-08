
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { axiosInstance } from "../components/axios/axios.instance";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FallingLines } from "react-loader-spinner";
const SignUP = () => {
  const router = useRouter();
  const [eye, seteye] = useState(false);
  const [loading, setloading] = useState(false);
  const [signUpinfo, setsignUpinfo] = useState({
    firstName: "",
    email: "",
    mobile: "",
    adress: "",
    password: "",
  });

  const [firstNameErr, setFirstNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [mobileErr, setMobileErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const onsinguphandaler = (event) => {
    const { id, value } = event.target;
    setsignUpinfo({
      ...signUpinfo,
      [id]: value,
    });
  };

  // handleRegistration function
  const handleRegistration = async () => {
    try {
      setloading(true);

      const { firstName, email, mobile, password } = signUpinfo;

      if (!firstName) {
        setFirstNameErr("FirstName Missing !!");
      } else if (!email) {
        setEmailErr("email Missing !!");
        setFirstNameErr("");
      } else if (!mobile) {
        setMobileErr("mobile Missing !!");
        setEmailErr("");
        setFirstNameErr("");
      } else if (!password) {
        setPasswordErr("Password  Missing !!");
        setMobileErr("");
        setEmailErr("");
        setFirstNameErr("");
      } else {
        setPasswordErr("Password  Missing !!");
        const { data } = await axiosInstance.post("/signup", signUpinfo);

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

          router.push("/signin");
        }
      }
    } catch (error) {
      const { response } = error;
      toast.error(response?.data?.errors, {
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
      setsignUpinfo({
        firstName: "",
        email: "",
        mobile: "",
        adress: "",
        password: "",
      });
    }
  };
  return (
    <>
      <ToastContainer className={"w-fit "} />
      <div className=" signupZigzag flex h-screen">
        <div className="lg:w-[60%] w-full overflow-y-scroll md:overflow-y-clip  h-full flex flex-col  justify-center items-center ">
          <div className="w-1/2">
            <div className="flex flex-col items-center justify-normal py-10">
              <h1
                className="text-primary_font_color  text-[50px] mt-10 md:mt-0 md:text-[60px] font-ruda"
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
                    FirstName <span className="text-orange_color">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={signUpinfo.firstName}
                    onChange={onsinguphandaler}
                    placeholder="Kader Khondokar"
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
                    value={signUpinfo.email}
                    onChange={onsinguphandaler}
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
                    type="number"
                    id="mobile"
                    value={signUpinfo.mobile}
                    placeholder="01875933259"
                    onChange={onsinguphandaler}
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
                    htmlFor="adress"
                    className="font-sans_serif text-para_font_size"
                  >
                    adress
                  </label>
                  <input
                    type="text"
                    id="adress"
                    value={signUpinfo.adress}
                    placeholder="Faridpur "
                    onChange={onsinguphandaler}
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
                    value={signUpinfo.password}
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
                  {passwordErr && (
                    <p className="text-red-600 capitalize font-ruda">
                      {passwordErr}
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
                    href={"/signin"}
                    className="text-orange_color ml-1 hover:underline"
                    style={{ fontWeight: "500" }}
                  >
                    Log In
                  </Link>{" "}
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
