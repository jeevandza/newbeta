"use client";

import { useState } from "react";

type DrawerT = {
  isOpen: boolean;
  handleControlDrawer: () => void;
  children: React.ReactNode;
};

export function Drawer({ isOpen, handleControlDrawer, children }: DrawerT) {
  return (
    <div className="flex">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="relative sr-only peer"
        checked={isOpen}
        onChange={handleControlDrawer}
      />

      {isOpen ? (
        <label
          htmlFor="drawer-toggle"
          onClick={handleControlDrawer}
          className={`absolute top-0 right-0  inline-block p-2 transition-transform duration-500 ease-in-out bg-indigo-500 rounded-lg cursor-pointer  hover:animate-pulse  ${
            isOpen ? "rotate-180 right-80" : ""
          }`}
        >
          <div className="w-6 h-1 mb-3 transform transition-transform duration-300 ease-in-out -rotate-45 bg-white rounded-lg"></div>
          <div className="w-6 h-1 transform transition-transform duration-300 ease-in-out rotate-45 bg-white rounded-lg"></div>
        </label>
      ) : null}
      <div
        className={`fixed top-0 right-0 z-20 w-80 h-full transition-transform duration-500 ease-in-out transform bg-white shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
}
