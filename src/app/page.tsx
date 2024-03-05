import { AuthModal } from "@/components/auth-modal/AuthModal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8">
        <AuthModal />
      </div>
    </main>
  );
}
