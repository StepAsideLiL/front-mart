"use server";

import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { getUser, lucia } from "./auth";
import { cookies } from "next/headers";

/**
 * Validate username, email and password to create and login a user.
 * @param data Object Containing the username, email, and password of the user to be created.
 * @returns Object Containing a success boolean and a message string.
 */
export async function createUser(data: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const { username, email, password } = data;

    if (
      typeof username !== "string" ||
      username.length < 3 ||
      username.length > 31 ||
      !/^[a-z0-9_-]+$/.test(username)
    ) {
      return {
        success: false,
        message: "Invalid username!",
      };
    }

    if (
      typeof password !== "string" ||
      password.length < 6 ||
      password.length > 255
    ) {
      return {
        success: false,
        message: "Invalid password!",
      };
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return {
        success: false,
        message: "Invalid email!",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        passwordHash: hashedPassword,
      },
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return {
      success: true,
      message: "Successfully!",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to perform createUser server action");
  }
}

/**
 * Validate username or email and password to login a user.
 * @param data Object Containing the username or email and password of the user to be created.
 * @returns Object Containing a success boolean and a message string.
 */
export async function loginUser(data: {
  usernameOrEmail: string;
  password: string;
}) {
  try {
    const { usernameOrEmail, password } = data;

    const existingUser = await prisma.user.findMany({
      where: {
        OR: [
          {
            username: usernameOrEmail,
          },
          {
            email: usernameOrEmail,
          },
        ],
      },
    });

    const user = existingUser[0];

    if (!user && existingUser.length > 1) {
      return {
        success: false,
        message: "Invalid username or password",
      };
    }

    const hashedPassword = await bcrypt.compare(password, user?.passwordHash);

    if (!hashedPassword) {
      return {
        success: false,
        message: "Invalid username or password",
      };
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return {
      success: true,
      message: "You are now logged in!",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to perform loginUser server action");
  }
}

/**
 * Logout the user and invalidate the session.
 */
export async function logoutUser() {
  try {
    const user = await getUser();

    if (!user?.session) {
      return {
        error: "Unauthorized",
      };
    }

    await lucia.invalidateSession(user.session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return {
      success: true,
      message: "You are now logged out!",
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to perform logoutUser server action");
  }
}
