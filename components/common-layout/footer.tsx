import Link from "next/link";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-center px-6 py-10 text-sm">
        <span className="dark:text-gray-400">
          © Copyright {year}. All Rights Reserved{" "}
          <Link
            href={"https://github.com/stepasidelil"}
            target="_blank"
            className="underline"
          >
            Rifat Khan
          </Link>
        </span>
      </div>
    </footer>
  );
}
