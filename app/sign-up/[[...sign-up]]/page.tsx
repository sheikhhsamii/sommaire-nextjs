import MainLayout from "@/layout/main";
import { SignUp } from "@clerk/nextjs";
import BgGradient from "@/components/common/BgGradient";

export default function SignedUp() {
  return (
    <MainLayout>
      <section className="flex justify-center items-center w-full my-12 md:my-24">
        <BgGradient className="w-full item-center flex justify-center">
          <SignUp />
        </BgGradient>
      </section>
    </MainLayout>
  );
}
