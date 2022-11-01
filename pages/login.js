import Image from "next/image";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";

import loginImage from "../public/images/undraw_maker_launch_re_rq81.svg";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/router";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { redirect } = router.query;
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="flex bg-primary rounded-2xl shadow-lg max-w-6xl p-5">
          <div className="md:w-1/2 text-secondary px-16">
            <h2 className="font-bold text-2xl">Login</h2>
            <p className="text-sm mt-4">
              If you already a member, easily log in
            </p>

            <form
              action=""
              className="flex flex-col gap-4 border-b pb-3"
              onSubmit={handleSubmit(submitHandler)}
            >
              <input
                className="p-2 mt-8 outline-none text-black rounded-xl border focus:ring-2 ring-indigo-500"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {/* <span>
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </span> */}
              <input
                className="p-2 mt-8 outline-none text-black rounded-xl border  focus:ring-2 ring-indigo-500"
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", {
                  required: "please enter password",
                  minLength: {
                    value: 6,
                    message: "password needs to be at least 6 characters",
                  },
                })}
              />
              <span>
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </span>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 rounded-xl py-2 text-white">
                Log in
              </button>
            </form>

            <div className="text-sm flex flex-col space-y-2 md:flex-row pt-5 justify-between items-center">
              <p>If you do not have an acount ...</p>
              <button className="py-2 px-5 bg-indigo-500 font-semibold hover:bg-indigo-600 rounded-xl">
                Register
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-slate-600 rounded-tr-2xl rounded-tl-2xl rounded-bl-lg rounded-br-lg md:block hidden">
            <Image src={loginImage} alt="login" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default login;
