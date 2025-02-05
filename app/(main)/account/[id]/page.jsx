import { getAccountwithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import React from "react";

const AccountsPage = async ({ params }) => {
  const accountData = await getAccountwithTransactions(params.id);
  if (!accountData) {
    notFound();
  }

  return <div>{params.id}</div>;
};

export default AccountsPage;
