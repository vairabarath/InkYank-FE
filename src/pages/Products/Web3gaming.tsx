import { ProductCard } from "../../components/ui/expandable-cards";

const Web3gaming = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-100 to-white">
        <div className="flex flex-col gap-6 px-6 items-center justify-center mx-auto max-w-[1140px] h-auto py-8 ">
          <h1 className="text-3xl md:text-3xl lg:text-4xl text-blue font-bold text-center max-w-3xl">
            Web3 Gaming and Entertainment
          </h1>{" "}
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center max-w-2xl lg:max-w-3xl">
            Explore innovative gaming experiences and entertainment powered by
            Web3 technology, offering decentralized and immersive solutions.
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-[1140px] mx-auto px-6 h-[400px]  ">
        <div className="p-6 bg-white rounded-lg shadow-lg shadow-blue-200 max-w-2xl min-h-72">
          <div className="flex flex-col gap-6">
            <h2 className="text-blue text-2xl font-semibold">Heading</h2>
            <p className="text-gray-700 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              alias facere molestias iste, omnis in, nostrum accusamus molestiae
              quam labore, earum est delectus iusto cumque quibusdam a id optio
              ipsa?
            </p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg shadow-blue-200 max-w-2xl min-h-72">
          <div className="flex flex-col gap-6">
            <h2 className="text-blue text-2xl font-semibold">Heading</h2>
            <p className="text-gray-700 my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              alias facere molestias iste, omnis in, nostrum accusamus molestiae
              quam labore, earum est delectus iusto cumque quibusdam a id optio
              ipsa?
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 mt-12 py-4">
        <div className=" max-w-[1140px] mx-auto px-6 h-auto ">
          <h1 className="text-lg md:text-3xl text-blue font-bold text-center mb-5 ">
            Our Web3 Gaming and Entertainment Products
          </h1>
          <div>
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3gaming;
