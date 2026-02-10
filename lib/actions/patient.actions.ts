"use server";

import { users } from "@/lib/appwrite.config";
import { ID } from "node-appwrite";

export const createUser = async (user: CreateUserParams) => {
  console.log("createUser called with:", { name: user.name, email: user.email, phone: user.phone });

  try {
    const userId = ID.unique();
    console.log("Generated user ID:", userId);

    const newUser = await users.create(
      userId,
      user.email,
      user.phone,
      undefined,
      user.name,
    );
    console.log("User created successfully:", newUser);
    return newUser;
  } catch (error: any) {
    console.error("Error creating user:", error);
    console.error("Error message:", error?.message);
    console.error("Error code:", error?.code);
    console.error("Error type:", error?.type);
    throw error;
  }
};
