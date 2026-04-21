"use client"
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { FaHouse, FaCircleInfo } from "react-icons/fa6";

export function HomeToggle() {

    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/";
    const handleToggle = () => {
        router.push(isHome ? "/about" : "/");
    }

    return (
        <Button
            title="about page"
            variant="outline"
            size="icon"
            className="rounded-full mt-4 absolute top-4 right-16 z-20 transition-all duration-300 cursor-pointer"
            onClick={handleToggle}
        >
            {isHome ? (
                <FaCircleInfo className="h-5 w-5" />
            ) : (
                <FaHouse className="h-5 w-5" />
            )}
        </Button>
    );
}
