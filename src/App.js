import React, { useState, useEffect } from "react";
import "./App.css";
import { useHttp } from "./hooks/http";

const App = () => {
  // const [isLoading, setIsloading] = useState(false);
  // const [list, setList] = useState([]);

  const [isLoading, list, setList] = useHttp([]);

  // useEffect(() => {
  //   setIsloading(true);
  //   new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve({
  //         data: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }]
  //       });
  //     }, 1000);
  //   }).then(res => {
  //     setIsloading(false);
  //     setList(res.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log("list has been changed.");
  //   return () => {
  //     console.log("list cleaning...");
  //   }
  // }, [list]);

  // useEffect(() => {
  //   return () => {
  //     console.log("component will unmount.");
  //   };
  // }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {list.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })}
        </ul>
      )}
      <button onClick={() => setList([...list, { name: "new" }])}>+</button>
    </div>
  );
};

export default React.memo(App, (prevProps, nextProps) => {
  console.log(prevProps, nextProps);
  return false;
});

/*componentDidmount, shouldComponentUpdate, componentDidUpdate, componentWillUnmount*/
