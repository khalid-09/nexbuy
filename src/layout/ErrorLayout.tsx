import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <main className="font-poppins flex h-dvh items-center justify-center">
      <div className="flex flex-col flex-wrap items-center justify-center gap-5 p-4 text-center">
        <p className="text-3xl">
          Sorry, it seems the page you are looking for does not exists!
        </p>
        <Button asChild variant="secondary">
          <Link to="/" className="space-x-3">
            <span>Go back home </span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default ErrorLayout;
