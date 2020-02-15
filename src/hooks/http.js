import React, { useState, useEffect } from "react";

export const useHttp = defaultValue => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    setIsloading(true);
    new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }]
        });
      }, 1000);
    }).then(res => {
      setIsloading(false);
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    console.log("list has been changed.");
    return () => {
      console.log("cleaning...");
    }
  }, [data]);

  return [isLoading, data, setData];
};
