import { removeFromCart, updateCart } from "@/store/cartSlice";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const product = data.attributes;
  const dispatch = useDispatch();

  const updateCartItem = (event, key) => {
    let payload = {
      key,
      val:
        key === "quantity" ? parseInt(event.target.value) : event.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image Start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={product.thumbnail.data.attributes.url}
          alt={product.name}
          height={120}
          width={120}
        />
      </div>
      {/* Image End */}

      {/* Details */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product Title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {product.name}
          </div>

          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {product.subtitle}
          </div>

          <div className="text-sm md:text-md font-medium text-black/[0.5] mt-2">
            MRP: &#8377;{product.price}
          </div>
        </div>

        <div className="text-sm md:text-md font-medium text-black/[0.5] mt-2">
          {product.subtitle}
        </div>

        {/* Size Selector */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(event) => updateCartItem(event, "selectedSize")}
              >
                {product.size.data.map((item, index) => (
                  <option
                    key={index}
                    disabled={!item.enabled ? true : false}
                    value={item.size}
                    selected={data.selectedSize === item.size}
                  >
                    {item.size}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>

              <select
                className="hover:text-black"
                onChange={(event) => updateCartItem(event, "quantity")}
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (quantity, index) => {
                    return (
                      <option
                        key={index}
                        selected={data.quantity === quantity}
                        value={quantity}
                      >
                        {quantity}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
          </div>

          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
          />
        </div>
        {/* Size Selector */}
      </div>
      {/* Details */}
    </div>
  );
};

export default CartItem;
