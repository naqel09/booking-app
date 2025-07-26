import Link from "next/link";
import Image from "next/image";
import NavLink from "@/app/components/navbar/navlink";

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full bg-white shadow-sm z-20">
            <div className="max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between p-4">
                <Link href="/">
                    <Image
                        src="/logo-hotel.jpg"
                        alt="logo"
                        width={49}
                        height={49}
                        priority
                    />
                </Link>
                <NavLink />
            </div>
        </div>
    );
};

export default Navbar;
