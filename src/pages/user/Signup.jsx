import "./user.css";

export const Signup = () => {
  return (
    <>
      <div>
        <div className="logo mx-7 my-5 ">
          {/* <img src="../../../public/logo.jpg" alt="" /> */}
        </div>
        <div className="signup-container flex justify-around">
          <div className="box1">
            <h1 className="text-4xl font-bold text-blue-900 text-center my-3">
              Sign Up
            </h1>
            <p className="text-center my-4">
              Lets get started with Your 30 days free trial
            </p>
            <form>
              <div className="mb-2">
                <input
                  type="radio"
                  id="mentor"
                  name="user"
                  value="mentor"
                  className="mr-1"
                />
                <label htmlFor="mentor" className="mr-1">
                  Mentor
                </label>
                <input
                  type="radio"
                  id="mentee"
                  name="user"
                  value="mentee"
                  className="mr-1"
                />
                <label htmlFor="mentee" className="mr-1">
                  Mentee
                </label>
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="mt-1 px-3 py-2 border shadow-sm border-blue-500 placeholder-blue-200 focus:outline-none focus:border-blue-900 focus:ring-blue-200 block w-full rounded-md sm:text-sm focus:ring-1  mb-3"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="mt-1 px-3 py-2 border shadow-sm border-blue-500 placeholder-blue-200 focus:outline-none focus:border-blue-900 focus:ring-blue-200 block w-full rounded-md sm:text-sm focus:ring-1 mb-5"
                />
                <input
                  type="submit"
                  value="Sign Up"
                  className="border border-blue-900 bg-blue-900 text-white rounded-md px-3 py-2 font-bold"
                />
              </div>
            </form>
            {/* form end */}
            <p className="text-center my-3">
              Already have an account?{" "}
              <a href="#" className="font-bold text-blue-900">
                Log in
              </a>
            </p>
            <hr className="hr-text" data-content="Or" />
            <div className="flex flex-col my-5">
              <button className="border border-blue-900  text-blue-900 rounded-md px-3 py-2 w-full my-3 font-medium flex items-center justify-center">
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                  alt=""
                  className="w-4 mr-2"
                />
                Sign Up with Google
              </button>
              <button className="border border-blue-900 text-blue-900 rounded-md px-3 py-2 w-full my-3 font-medium flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                  alt=""
                  className="w-4 mr-2"
                />
                Sign Up with Linkedin
              </button>
            </div>
            <p className="text-xs">
              By signing up to create an account I accept Company{" "}
              <a href="#" className="text-blue-900">
                Terms of Use and Privacy Policy
              </a>
            </p>
          </div>
          <div className="box2">
            <img
              src="https://media.istockphoto.com/id/1193287941/photo/business-colleagues-working-together-in-the-office.jpg?s=612x612&w=0&k=20&c=foSMYCMbrBehOUzBLWnyYcj3plBRGM2-rvj0UBUsVUE="
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};
