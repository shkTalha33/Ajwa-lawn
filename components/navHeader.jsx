"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@/components/ui";
import {
  BsMoonStarsFill,
  HiOutlineUser,
  IoMdSunny,
  IoMdSettings,
  MdOutlineLogout,
  FaUser,
} from "@/public/assets/icons/index";
import { setLogout, setUserData } from "@/redux/slices/loginSlice";
import debounce from "debounce";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./api/apiEndpoints";
import ApiFunction from "./api/apiFunction";
import { handleError } from "./api/errorHandler";
import { useMediaQuery } from "react-responsive";
import { FiShoppingCart } from "react-icons/fi";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const user = useSelector((state) => state.auth.userData);

  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state?.auth?.isLogin);
  const { theme, setTheme } = useTheme();
  const [showTranslate, setShowTranslate] = useState(false);
  const translateRef = useRef(null);
  const { get } = ApiFunction();
  const isMobile = useMediaQuery({ maxWidth: 640 });

  console.log("isLogin", isLogin);

  // Custom scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for styling
      setIsScrolled(currentScrollY > 10);

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setShowNavbar(false);
      } else {
        // Scrolling up or at top
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll event for better performance
    const throttledHandleScroll = debounce(handleScroll, 5);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    dispatch(setLogout());
    router.push("/login");
  };

  const getCurrentUser = debounce(async () => {
    await get(currentUser)
      .then((res) => {
        if (res?.success) {
          dispatch(setUserData(res?.data));
        }
      })
      .catch((err) => {
        dispatch(setLogout());
      });
  }, 300);

  // Handle click outside to close translate widget
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        translateRef.current &&
        !translateRef.current.contains(event.target)
      ) {
        const clickedOnGlobeIcon = event.target.closest(
          "button, .goog-te-menu-value"
        );
        if (!clickedOnGlobeIcon) {
          setShowTranslate(false);
        }
      }
    }

    if (showTranslate) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTranslate]);

  useEffect(() => {
    getCurrentUser();
    setIsActive(pathname);
  }, [pathname]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Summer Collection", href: "/summer-collection" },
    { name: "Winter Collection", href: "/winter-collection" },
    { name: "New Arrival", href: "/new-arrival" },
    { name: "Top Seller", href: "/top-seller" },
    { name: "Settings", href: "/settings/account-details" },
    { name: "Logout", href: "/logout" },
    { name: "Login", href: "/login" },
    { name: "Signup", href: "/signup" },
  ];

  return (
    <div className="lg:container lg:mx-auto navheader ">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className={`!w-full bg-brand-white dark:bg-brand-deepdark fixed top-0 z-50 transition-all duration-500 ease-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "backdrop-blur-md bg-brand-white/80 dark:bg-brand-deepdark/80 shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
            : "bg-brand-white dark:bg-brand-deepdark"
        }`}
      >
        <NavbarContent>
          {!isMobile && (
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
          )}
          <NavbarBrand>
            <AcmeLogo />
            <Link
              href={"/"}
              className="poppins_semibold text-inherit cursor-pointer"
            >
              AJWA
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive === "/summer-collection"}>
            <Link aria-current="page" href="/summer-collection">
              Summer Collection
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive === "/winter-collection"}>
            <Link color="foreground" href="/winter-collection">
              Winter Collection
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive === "/new-arrival"}>
            <Link color="foreground" href="/new-arrival">
              New Arrival
            </Link>
          </NavbarItem>
          <NavbarItem isActive={isActive === "/top-seller"}>
            <Link color="foreground" href="/top-seller">
              Top Seller
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="text-default-500 hover:text-foreground"
            >
              {theme === "dark" ? (
                <IoMdSunny size={20} />
              ) : (
                <BsMoonStarsFill size={20} />
              )}
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">
              <FiShoppingCart size={20} />
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Add padding to body to compensate for fixed navbar */}
      <div className="pt-16"></div>
    </div>
  );
}
