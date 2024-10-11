import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { toast, ToastContainer, Bounce } from "react-toastify";
import { axiosInstance } from "../components/axios/axios.instance";

const ResetPassword = () => {
  const [eye, setEye] = useState(false);
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confrimpassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confrimpassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    setFormErrors({
      ...formErrors,
      [id]: "",
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }

    if (!formData.oldPassword.trim()) {
      errors.oldPassword = "Old newPassword is required.";
    }

    if (!formData.newPassword.trim()) {
      errors.newPassword = "New newPassword is required.";
    } else if (formData.newPassword.length < 6) {
      errors.newPassword = "New newPassword must be at least 6 characters.";
    }

    if (formData.newPassword !== formData.confrimpassword) {
      errors.confrimpassword = "newPasswords do not match.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      if (validateForm()) {
        const { data } = await axiosInstance.patch("/reset-password", formData);

        toast.success(`${data?.data?.firstName} ${data?.message}`, {
          position: "top-left",
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
      setFormData({
        email: "",
        oldPassword: "",
        newPassword: "",
        confrimpassword: "",
      });
    }
  };

  return (
    <div className="signinZigzag min-h-screen flex items-center justify-center px-6 py-8 ">
      <ToastContainer className={"w-fit "} />
      <div className="flex flex-col items-center w-full max-w-md bg-header_footer_background_color">
        <div className="w-full bg-white rounded-lg shadow p-6 ">
          <h2
            className="text-[30px]  my-7 text-gray-900 text-center"
            style={{ fontWeight: "500" }}
          >
            Change newPassword
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-ruda text-sm font-medium text-gray-900"
              >
                Your email <span className="text-orange_color">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`bg-gray-50 border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="oldPassword"
                className="block mb-2 text-sm font-ruda font-medium text-gray-900"
              >
                Old newPassword <span className="text-orange_color">*</span>
              </label>
              <input
                type={eye ? "text" : "newPassword"}
                id="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`bg-gray-50 border ${
                  formErrors.oldPassword ? "border-red-500" : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              />
              <span
                className="absolute bottom-[13%] right-[4%] text-black text-3xl"
                onClick={() => setEye(!eye)}
              >
                {eye ? <FaEyeSlash /> : <FaRegEye />}
              </span>
              {formErrors.oldPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.oldPassword}
                </p>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="newPassword"
                className="block mb-2 text-sm font-medium font-ruda text-gray-900"
              >
                New newPassword <span className="text-orange_color">*</span>
              </label>
              <input
                type={eye ? "text" : "newPassword"}
                id="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`bg-gray-50 border ${
                  formErrors.newPassword ? "border-red-500" : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
              />

              {formErrors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.newPassword}
                </p>
              )}
            </div>
            <div className="">
              <label
                htmlFor="confrimpassword"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm newPassword <span className="text-orange_color">*</span>
              </label>

              <input
                type={eye ? "text" : "newPassword"}
                id="confrimpassword"
                value={formData.confrimpassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`bg-gray-50 border ${
                  formErrors.confrimpassword
                    ? "border-red-500"
                    : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-primary-600 mb-5  focus:border-primary-600 block w-full p-2.5`}
              />

              {formErrors.confrimpassword && (
                <p className="text-red-500 text-xs mt-1 mb-2 ">
                  {formErrors.confrimpassword}
                </p>
              )}
            </div>
            {loading ? (
              <button className="w-full  bg-orange-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                loading..
              </button>
            ) : (
              <button
                type="submit"
                className="w-full  bg-orange-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Reset Password
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
