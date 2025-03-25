"use client";

import { getListShoeAPI } from "@/app/service/shoeApi";
import { IShoeType } from "@/app/types/shoe";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const About = () => {
  const [listShoe, setListShoe] = useState<IShoeType[]>();

  // const getListShoeAPI = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://apistore.cybersoft.edu.vn/api/Product"
  //     );

  //     const data = await response.json();
  //     const dataListShoe = data.content;
  //     console.log("dataListShoe: ", dataListShoe);

  //     setListShoe(dataListShoe);
  //     // console.log("data: ", data);
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };

  useEffect(() => {
    (async () => {
      const listShoe = await getListShoeAPI();
      setListShoe(listShoe);
    })();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {listShoe?.map((shoe) => (
        <div key={shoe.id}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image className="rounded-t-lg" src={shoe.image} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {shoe.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {shoe.price}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
