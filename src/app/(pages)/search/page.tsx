import SearchShoe from "@/app/components/SearchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";

import React, { useState } from "react";

const SearchPage = async ({ searchParams }) => {
  const { tenGiay } = searchParams;
  console.log("tenGiay : ", tenGiay);

  const listInitShoe = await getListProductByKeyWord(tenGiay);
  console.log("listInitShoe: ", listInitShoe);

  return <SearchShoe initDataListShoe={listInitShoe} />;
};

export default SearchPage;
