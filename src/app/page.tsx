import AuthInput from "@/components/AuthInput";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function MainPage() {
  const myerors = ["Eroarea nr 1", "Eroarea nr 2"];
  return (
    <div className=" flex flex-col min-h-screen bg-black justify-center items-center ">
      <div className="flex flex-col w-[320px] px-5 py-6 bg-white gap-3">
        <h1>Ceva</h1>
        <Logo type="full" size="md" />

        <Button type="secondary" showIcon={false} />
        <form>
          <AuthInput
            type="email"
            name="name"
            label="Name"
            icon="at"
            placeholder="User name"
            required={true}
            errors={myerors}
          ></AuthInput>
          <Button className=" w-50" />
        </form>
      </div>
    </div>
  );
}
