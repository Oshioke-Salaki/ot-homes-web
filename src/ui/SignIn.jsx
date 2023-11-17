import profileCircle from "../assets/profile-circle.svg";

function SignIn() {
  return (
    <div className="text-textPrimary custom-flex gap-x-2 text-base font-normal">
      <img src={profileCircle} alt="" />
      <h3>Sign In</h3>
    </div>
  );
}

export default SignIn;
