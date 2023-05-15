import { useState, useEffect, useRef } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(value);
  const isControlled = useRef(!!onChange); // !!onChange === Boolean(onChange)

  useEffect(() => setCounter(value), [value]);

  const increaseBy = (value: number) => {
    if (isControlled.current) return onChange!({ count: value, product });

    const newValue = Math.max(0, counter + value);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    increaseBy,
  };
};
