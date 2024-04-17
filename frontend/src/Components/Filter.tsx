import React, { useContext, useState } from "react";
import { Select } from "@chakra-ui/react";
import { useCategory } from "../hooks/useCategory";

const Filter = () => {
  const { data, error, isLoading } = useCategory();
  const [ct, setct] = useState("all");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;



  return (
    <>
      <Select >
        <option defaultValue={"all"} value={"all"}>All</option>
        {data &&
          data.map((ct:any) => (
            <option key={ct.id} >
              {ct.attributes.categoryName}
            </option>
          ))}
      </Select>
    </>
  );
};

export default Filter;
