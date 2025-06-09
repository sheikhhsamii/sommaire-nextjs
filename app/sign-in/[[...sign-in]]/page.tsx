import BgGradient from "@/components/common/BgGradient";
import MainLayout from "@/layout/main";
import { SignIn } from "@clerk/nextjs";

export default function SignedIn() {
  return (
    <MainLayout>
      <section className="flex justify-center items-center w-full my-12 md:my-24">
        <BgGradient className="w-full item-center flex justify-center">
          <SignIn />
        </BgGradient>
      </section>
    </MainLayout>
  );
}
