import {
  ClerkIcon,
  CockroachDBIcon,
  NextjsIcon,
  PrismaIcon,
  ShadcnIcon,
} from "@/components/uis/icons";
import Link from "next/link";

const TechnologiesUsed = () => {
  const technologies = [
    {
      title: "Nextjs",
      description:
        "Next.js is a React framework that allows you to build server-side rendered (SSR) and statically generated (SSG) web applications with ease. It provides a streamlined development experience with features like automatic code splitting, file-based routing, and built-in support for CSS modules. Next.js simplifies complex tasks such as data fetching, routing, and server-side rendering, making it an ideal choice for building modern web applications and websites.",
      href: "https://nextjs.org/",
      icon: <NextjsIcon className="size-10 md:size-14" />,
    },
    {
      title: "Shadcn/ui",
      description:
        "Shadcn/ui offers a curated collection of beautifully designed, accessible, and customizable components that you can freely copy and paste into the projects. Unlike traditional component libraries, it's not distributed via npm; instead, it manually integrates the components into the project's codebase.",
      href: "https://ui.shadcn.com/",
      icon: <ShadcnIcon className="size-10 md:size-14" />,
    },
    {
      title: "Clerk",
      description:
        "Clerk is a modern authentication and user management platform that provides developers with a simple yet powerful way to add authentication, identity management, and user data storage to their applications. With Clerk, developers can easily implement secure authentication flows, manage user accounts, and access user data via a robust API. Clerk offers features such as multi-factor authentication, social login integrations, and customizable user interfaces, making it an ideal choice for building secure and user-friendly applications.",
      href: "https://clerk.com/",
      icon: <ClerkIcon className="size-10 md:size-14" />,
    },
    {
      title: "Prisma ORM",
      description:
        "Prisma is a modern database toolkit that simplifies database access and management for developers. It provides an intuitive and type-safe way to interact with databases, offering features like automatic schema migrations, query building, and data modeling. With Prisma, developers can focus on building their applications without worrying about the complexities of database operations, leading to faster development cycles and more robust applications.",
      href: "https://www.prisma.io/",
      icon: <PrismaIcon className="size-10 md:size-14" />,
    },
    {
      title: "Cockroach DB",
      description:
        "CockroachDB is a scalable, distributed SQL database built for cloud-native applications. It combines the familiarity of SQL with the resilience of NoSQL, offering strong consistency, horizontal scalability, and fault tolerance. CockroachDB is designed to handle large-scale deployments and high availability requirements, with features such as automatic sharding, multi-active availability, and transactional consistency across multiple nodes. It's an ideal choice for modern, data-intensive applications that demand high performance, resilience, and scalability.",
      href: "https://www.cockroachlabs.com/",
      icon: <CockroachDBIcon className="size-10 md:size-14" />,
    },
    {
      title: "Zustand",
      description:
        "Zustand is a minimalistic state management library for React applications. It provides a simple and lightweight solution for managing state in your components, offering a centralized store with easy-to-use hooks. Zustand promotes a functional and declarative approach to state management, allowing developers to efficiently manage complex application state with minimal boilerplate code. With its focus on simplicity and performance, Zustand is a popular choice for building React applications.",
      href: "https://zustand-demo.pmnd.rs/",
      icon: <span className="text-3xl md:text-5xl">🐻</span>,
    },
  ];

  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-semibold text-center">Technologies</h1>

      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {technologies.map((list, i) => (
          <Card key={i}>
            <Link
              href={list.href}
              className="flex justify-center items-center aspect-video"
              target="_blank"
            >
              {list.icon}
            </Link>

            <CardHeader>
              <CardTitle className="text-center text-lg md:text-2xl">
                <Link
                  href={list.href}
                  className="hover:underline"
                  target="_blank"
                >
                  {list.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-justify">
                {list.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div> */}

      <div className="flex flex-wrap justify-center items-center gap-10">
        {technologies.map((list, i) => (
          <Link
            key={i}
            href={list.href}
            className="flex flex-col items-center gap-5"
          >
            <div>{list.icon}</div>
            <h1 className="text-lg md:text-2xl font-medium text-center">
              {list.title}
            </h1>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesUsed;
