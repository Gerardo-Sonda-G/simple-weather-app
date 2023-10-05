"use client";

import { IconCurrentLocation } from "@tabler/icons-react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import React, { useState } from "react";

const SearchMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className="flex w-full">
        <div className="flex w-full justify-between px-12 mt-11">
          <button
            type="button"
            onClick={() => {
              setOpen(true);
            }}
            className="bg-[#6E707A] h-[40px] w-[161px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          >
            Search for places
          </button>
          <button className="bg-[#6E707A] h-[40px] w-[40px] rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <IconCurrentLocation className="m-auto" />
          </button>
        </div>
        <div
          className={`absolute top-0 w-1/3 h-full bg-[#1e213a] transition-all duration-300 ${
            open ? "translate-x-0" : "translate-x-[-150%]"
          }`}
        >
          hi
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default SearchMenu;
