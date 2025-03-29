import { auth } from "@/auth/auth";
import Logo from "@/components/Logo";
import GithubButton from "@/ui/auth/github-button";
import LoginForm from "@/ui/auth/login-form";
import RegisterForm from "@/ui/auth/register-form";
import { SwichButton } from "@/ui/auth/swich-button";

export default async function AuthPage(props: {
  searchParams?: Promise<{
    tab?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const tab = searchParams?.tab || "login";
  const swich = tab == "register";
  return (
    <div className="flex flex-col min-h-screen bg-bej-100 pb-5">
      <div className="flex flex-col pt-6 px-[25px] pb-16  bg-spring-white">
        <Logo size="md" />
        <h2 className="text-xl mt-3 font-jost">Log in your Account</h2>
        {!swich ? (
          <div className="flex flex-col mt-5">
            <GithubButton />
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t-[1.5px] border-tuatara-400" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-spring-white px-3 font-inter text-charade-950 text-sm">
                  Or continue with email
                </span>
              </div>
            </div>
            <LoginForm />
          </div>
        ) : (
          <SwichButton tab="login" text="LOG IN" />
        )}
      </div>
      <span className="border-b-2 border-charade-950 mx-4"></span>
      <div className="flex flex-col py-6 px-[25px]  ">
        <h2 className="text-xl mt-3 font-jost">Create a new Account</h2>
        {!swich ? (
          <SwichButton tab="register" text="CREATE ACCOUNT" />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
}
