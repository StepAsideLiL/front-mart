"use server";

// Delay the server action by 5 seconds for observing delaying effect.
export const serverActionDelay = async () => {
  try {
    console.log("Server action is running...");

    await new Promise((resolve) => setTimeout(resolve, 5000));

    console.log("Server action complete after 5 seconds");

    return null;
  } catch (err) {
    console.log(err);
    throw new Error("Could not complete the server action.");
  }
};
