import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  backDataAction,
  resetDataAction,
  setDataAction,
  setInputAction,
} from "./store/dataReducer";
import { ReactComponent as Svg } from "./ssvg.svg";

export default function Calculator() {

  console.log(eval('10%+10'));
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, [data]);

  const btnNums = [];
  const btnSigns = [];
  [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, '%'].forEach((num) => {
    btnNums.push(
      <button
        key={num}
        value={num}
        onClick={(e) => dispatch(setDataAction(e.target.value))}
        className="bg-purple-800 text-teal-400  rounded-full
           dark:bg-teal-400 dark:text-purple-800 hover:underline px-4 py-3 md:px-8 md:py-6 lg:px-8 xl:px-12 lg:py-8"
      >
        {num}
      </button>
    );
  });

  ["+", "-", "*", "/"].forEach((sign) => {
    btnSigns.push(
      <button
        key={sign}
        className="bg-purple-800 text-teal-400 rounded-full lg:px-8 xl:px-12 lg:py-8
dark:bg-teal-400 dark:text-purple-800 hover:underline px-3 py-1 xl:py-0"
        value={sign}
        onClick={(e) => dispatch(setDataAction(e.target.value))}
      >
        {sign === "*" ? "x" : sign}
      </button>
    );
  });

  return (
    <div className="container mx-auto min-h-screen flex flex-col w-3/4 border rounded-xl border-spancing-2
     border-purple-800 dark:border-teal-400 lg:w-1/2">
      <div>
        <input
          className="bg-transparent 
           outline-none text-right border-b dark:border-teal-400 w-full border-spacing-2 border-purple-800 py-6"
          type="text"
          value={data}
          ref={ref}
          onChange={(e) => dispatch(setInputAction(e.target.value))}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between w-full">
          <button
            onClick={() => dispatch(resetDataAction())}
            className="hover:underline rounded-xl
             dark:bg-teal-400 bg-purple-800 text-teal-400 dark:text-purple-800 px-6 lg:px-10 lg:py-8 xl:px-16"
          >
            AC
          </button>
          <button
            className="bg-purple-800 text-teal-400  rounded-xl
             dark:bg-teal-400 dark:text-purple-800 hover:underline px-3 lg:px-10 lg:py-6 xl:px-16"
            value={"("}
            onClick={(e) => dispatch(setDataAction(e.target.value))}
          >
            ❪
          </button>
          <button
            className="bg-purple-800 text-teal-400 rounded-xl
             dark:bg-teal-400 dark:text-purple-800 hover:underline px-3 lg:px-10 lg:py-6 xl:px-16"
            value={")"}
            onClick={(e) => dispatch(setDataAction(e.target.value))}
          >
            ❫
          </button>
          <button
            className="hover:underline rounded-xl
                 dark:bg-teal-400 bg-purple-800 text-teal-400
                  dark:text-purple-800 flex justify-center items-center px-3 lg:px-10 lg:py-6 xl:px-16"
            onClick={() => dispatch(backDataAction())}
          >
            <Svg className="w-10 h-10 xl:w-16 xl:h-16" />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="grid grid-cols-3 lg:grid-cols-4">{btnNums}</div>
          <div className="flex flex-col justify-between">
            {btnSigns}
            <button
              className="bg-purple-800 text-teal-400 rounded-full lg:px-10 lg:py-8
             dark:bg-teal-400 dark:text-purple-800 hover:underline"
              onClick={() => {
                try {
                  String(eval(data)).length > 3 &&
                  String(eval(data)).includes(".")
                    ? dispatch(setInputAction(String(eval(data))))
                    : dispatch(setInputAction(String(eval(data))));
                } catch (e) {
                  console.error(e);
                }
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
