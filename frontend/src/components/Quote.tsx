import React from "react";
import { QuoteProps } from "../types/types";

const Quote = ({ background, type }: QuoteProps) => {
  return (
    <>
      <div
        className={`quote-container w-full h-full hidden lg:flex flex-col justify-center ${
          background === "sky" ? "bg-sky-100" : "bg-slate-100"
        } `}
      >
        <div className="main-container flex flex-row justify-center w-full px-28">
          <h2 className="quote-heading text-2xl font-bold">
            {type === "signup" ? (
              <q>
                The customer service I received was exceptional. The support
                team went above and beyond to address my concerns.
              </q>
            ) : (
              <q>
                The product quality exceeded my expectations. The team worked
                diligently to ensure everything was perfect.
              </q>
            )}
          </h2>
        </div>

        {type === "signup" && (
          <div className="author-container mt-4 w-full pl-28 flex flex-col">
            <h4 className="author font-bold">Jules Winnfield</h4>
            <span className="author-designation text-sm text-gray-500 font-medium">
              CEO, Acme Inc.
            </span>
          </div>
        )}

        {type === "signin" && (
          <div className="author-container mt-4 w-full pl-28 flex flex-col">
            <h4 className="author font-bold">Ethan Stone</h4>
            <span className="author-designation text-sm text-gray-500 font-medium">
              CTO, Linear Inc.
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Quote;
