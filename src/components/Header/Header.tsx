import { FC, useContext } from "react";
import { Theme } from "@/store/theme";
import { useRouter } from "next/router";

import {Button, Icon, IconButton} from '@chakra-ui/react'

import { TiAdjustBrightness } from "react-icons/ti";

import { Heading } from '@chakra-ui/react'

interface HeaderProps {
  withArrow: boolean;
  withNavigation: boolean;
}


export const Header: FC<HeaderProps> = ({ withArrow, withNavigation }) => {
  const { currentTheme, toggleTheme } = useContext(Theme);
  const router = useRouter();

  const onArrowClick = () => {
    router.push("/");
  };

  return (
    <header size
      className={`flex items-center py-5 w-full   justify-center items-center  top-0 left-0 px-5 border-b-2 border-gray-700 ${
        currentTheme == "black" ? "text-white" : "text-black"
      }`}
      style={{ zIndex: 6 }}>
      <div className="container flex justify-between flex-wrap">
        <div className="flex max-lg:flex-col items-center ">
          <Button
              colorScheme='teal'
              variant='ghost'
              onClick={onArrowClick}
              size='md'
              height='48px'
              width='200px'
              border='2px'
              >
            <h1
                className={`text-5xl  font-extrabold max-sm:mb-3  max-lg:mb-5 ${
                    currentTheme == "black" ? "text-white" : "text-black"
                }`}>
              Crab Films
            </h1>
          </Button>
          {/*<div*/}
          {/*    className={`border px-4 py-2 text-2xl cursor-pointer rounded-lg ${*/}
          {/*        currentTheme == "black"*/}
          {/*            ? "bg-white text-black"*/}
          {/*            : "bg-black text-white"*/}
          {/*    }`}*/}
          {/*    onClick={onArrowClick}>*/}
          {/*  /!*<span>{"<"}</span>*!/*/}
          {/*  <span className="font-bold ml-4 ">Crab Films</span>*/}
          {/*</div>*/}

          {/*{withNavigation && (*/}
          {/*  <div className="flex max-lg:flex-col max-md:mb-5">*/}
          {/*    <button*/}
          {/*      onClick={() => router.push("./sortBy/date_added")}*/}
          {/*      className="mr-20  w-60 border-1 px-20 py-5 bg-gray-700 cursor-default text-white rounded-md text-xl border-1 p-5 rounded-md cursor-pointer bg-stone-600 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">*/}
          {/*      Sort by date*/}
          {/*    </button>*/}
          {/*    <button*/}
          {/*      onClick={() => router.push("./sortBy/likes")}*/}
          {/*      className="border-1 w-60  px-20 py-5  bg-gray-700 cursor-default text-white rounded-md text-xl border-1 p-5 rounded-md cursor-pointer bg-stone-600 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">*/}
          {/*      Likes Sort*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
        <div className="flex items-center">
          {/*{withArrow && (*/}
          {/*  <div*/}
          {/*    className={`border px-4 py-2 text-2xl cursor-pointer rounded-lg ${*/}
          {/*      currentTheme == "black"*/}
          {/*        ? "bg-white text-black"*/}
          {/*        : "bg-black text-white"*/}
          {/*    }`}*/}
          {/*    onClick={onArrowClick}>*/}
          {/*    /!*<span>{"<"}</span>*!/*/}
          {/*    <span className="font-bold ml-4 ">Home</span>*/}
          {/*  </div>*/}
          {/*)}*/}
          <IconButton
              variant='outline'
              colorScheme='teal'
              aria-label='Call Sage'
              fontSize='40px'
              icon={<TiAdjustBrightness />}
              onClick={toggleTheme}
          />

          {/*<Icon viewBox='0 0 200 200' color='red.500'>*/}
          {/*  <path*/}
          {/*      fill='currentColor'*/}
          {/*      d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'*/}
          {/*  />*/}
          {/*</Icon>*/}
          {/*<Image*/}
          {/*  width={40}*/}
          {/*  height={40}*/}
          {/*  src={changeTheme}*/}
          {/*  className={`cursor-pointer ml-4 hover:invert`}*/}
          {/*  alt="theme switch p-2"*/}
          {/*  onClick={toggleTheme}*/}
          {/*/>*/}
        </div>
      </div>
    </header>
  );
};
