"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { DrawerFooter, DrawerClose } from "./ui/drawer";
const CreateAccountDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Drawer>
        <DrawerTrigger open={open} onClick={setOpen}>
          {children}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateAccountDrawer;
