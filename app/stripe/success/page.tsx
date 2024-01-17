import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[50vh]">
      <div className="md:max-w-[50vw] mx-auto text-center">
        <CheckCheck className="text-primary mx-auto my-3" size={100} />
        <div>
          <h3 className="text-2xl font-semibold">Payment Successful!</h3>
          <p className="my-1 text-gray-500">
            Thank you for your purchase. We hope you had a wonderful experience
          </p>
          <p>NexaMarket wishes you a great day!</p>

          <Button className="my-2" asChild>
            <Link href="/">BACK TO SHOP</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
