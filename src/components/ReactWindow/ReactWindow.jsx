import React, { useEffect, useState, useRef, useCallback } from "react";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";
import { FixedSizeList } from "react-window";
function ReactWindow() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(1);
  const Row = useCallback(({ index, style }) => {
    const comment = data[index];
    return (
      <div style={style}>
        <h2>{comment.name}</h2>
      </div>
    );
  });
  const arr = useMemo(
    () =>
      [...Array(1000).keys()].map((key) => {
        console.log("red");
        return {
          id: faker.datatype.uuid(),
          name: `Jack ${faker.internet.userName()}`,
          bio: `${Math.random() * 100}`,
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
        };
      }),
    [data]
  );
  console.log(time);

  useEffect(() => {
    setData(arr);
    console.log(arr);
  }, []);

  useEffect(() => {
    const timmer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timmer);
    };
  }, [time]);
  return (
    <div>
      <h2>React window</h2>
      <h2 style={{ color: "red", fontSize: "30px" }}> {time}</h2>
      <div style={{ width: "100%", height: "100vh" }}>
        <FixedSizeList
          height={600}
          width="100%"
          itemSize={150}
          itemCount={data.length}
        >
          {Row}
        </FixedSizeList>
      </div>
    </div>
  );
}

export default ReactWindow;
