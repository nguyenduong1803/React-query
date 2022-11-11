import React, { useEffect, useState, useRef } from "react";
import { faker } from "@faker-js/faker";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { useMemo } from "react";
function ReactWindow() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(1);
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  const arr = useMemo(
    () =>
      [...Array(1000000).keys()].map((key) => {
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
      {/* {data.map((comment, index) => {
        return (
          <div key={index}>
            <img src={comment.avatar} alt="" />
            <h2>{comment.name}</h2>
          </div>
        );
      })} */}
      <div style={{ width: "100%", height: "100vh" }}>
        {/* AutoSizer return height width */}
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                rowCount={data.length}
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                height={height}
                width={width}
                rowRenderer={({ key, index, style, parent }) => {
                  const comment = data[index];
                  return (
                    <CellMeasurer
                      key={key}
                      columnIndex={0}
                      rowIndex={index}
                      parent={parent}
                      cache={cache.current}
                    >
                      <div style={style}>
                        <img
                          style={{ height: "100px", width: "100px" }}
                          src={comment?.avatar}
                          alt=""
                        />
                        <h2>
                          {index}: {comment?.name}
                        </h2>
                      </div>
                    </CellMeasurer>
                  );
                }}
              />
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}

export default ReactWindow;
