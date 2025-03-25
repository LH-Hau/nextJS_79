import SearchShoe from "@/app/components/SearchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";
type SearchProp = {
  searchParams: Promise<{ tenGiay: string }>;
};
const SearchPage = async ({ searchParams }: SearchProp) => {
  const { tenGiay } = await searchParams;
  console.log("tenGiay : ", tenGiay);

  const listInitShoe = await getListProductByKeyWord(tenGiay);
  console.log("listInitShoe: ", listInitShoe);

  return <SearchShoe initDataListShoe={listInitShoe} />;
};

export default SearchPage;
