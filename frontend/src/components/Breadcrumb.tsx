

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = ({ title }: { title?: string }) => {
  const pathname = usePathname();

  const generateBreadcrumbItems = () => {
    if (!pathname || pathname === "/") {
      return [{ label: "Home", path: "/" }];
    }

    const segments = pathname.split("/").filter((segment) => segment);

    const items = segments.reduce(
      (acc, segment, index) => {
        const path = `/${segments.slice(0, index + 1).join("/")}`;
        const label =
          segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
        acc.push({ label, path });
        return acc;
      },
      [{ label: "Home", path: "/" }]
    );

    return items;
  };

  const items = generateBreadcrumbItems();

  return (
    <div className="flex flex-col items-center justify-center">
      {title && (
        <h1 className="gloock font-bold text-white text-xl md:text-3xl lg:text-5xl mb-4">
          {title}
        </h1>
      )}
      <nav
        className="flex items-center space-x-2 text-xl jakarta text-white"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index < items.length - 1 ? (
                <>
                  <Link
                    href={item.path}
                    className={` hover:text-blue-300 lg:text-base md:text-sm text-xs transition-colors duration-200 ${pathname === item.path
                        ? "font-semibold text-blue-300"
                        : ""
                      }`}
                  >
                    {item.label}
                  </Link>
                  <FiChevronRight
                    className="lg:h-4 lg:w-4 md:h-3 md:w-3 h-3 w-3 md:ml-3 md:mr-2 ml-2 mr-1 text-white"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <span
                  className="lg:text-base md:text-sm text-xs text-white"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
