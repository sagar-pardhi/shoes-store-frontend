import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  return (
    <main className="">
      <HeroBanner />
      <Wrapper>
        {/* Heading and Paragraph Start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushoning For Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushoning during extended streches of
            running.
          </div>
        </div>
        {/* Heading and Paragraph End */}

        {/* Products Grid Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        {/* Products Grid End */}
      </Wrapper>
    </main>
  );
}

export const getStaticProps = async () => {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: {
      products,
    },
  };
};
