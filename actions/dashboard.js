"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj) => {
  const serialize = { ...obj };

  if (obj.balance) {
    serialize.balance = obj.balance.toNumber();
  }
};

export async function createAccount(data) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({ where: { clerkUserId: userId } });

    if (!user) {
      throw new Error("User not found");
    }

    // chaging the balance into floating value
    const balanceFloat = parseFloat(data.balance);

    if (isNaN(balanceFloat)) {
      throw new Error("Invalid balance Amount");
    }

    // check if this is the first account user is creating
    const userAccounts = await db.account.findMany({
      where: { userId: user.id },
    });

    const shouldBeDefault = userAccounts.length === 0 ? true : data.isDefault;

    // if the account is default then make all other accounts non default
    if (shouldBeDefault) {
      await db.account.updateMany({
        where: { userId: user.id, isDefault: true },
        data: { isDefault: false },
      });
    }

    const account = await db.account.create({
      data: {
        ...data,
        balance: balanceFloat,
        userId: user.id,
        isDefault: shouldBeDefault,
      },
    });

    const serializedAcc = serializeTransaction(account);

    revalidatePath("/dashboard");
    return { success: true, data: serializedAcc };
  } catch (error) {
    throw new Error(error.message);
  }
}
