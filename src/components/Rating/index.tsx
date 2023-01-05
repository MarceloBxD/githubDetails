import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";

export const Rating = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <Flex>
      <Flex>
        {[...Array(5)].map((index: number) => {
          index += 1;
          return (
            <Button
              key={index}
              onMouseEnter={() => console.log(index)}
              onMouseLeave={() => setHover(rating)}
              backgroundColor="transparent"
              border="none"
              outline="None"
              cursor="pointer"
              onClick={() => setRating(index)}
              color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            >
              <i className="fa-regular fa-star"></i>
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};
