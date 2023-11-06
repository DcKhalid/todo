import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiAddToQueue } from "react-icons/bi";
import CreateTodoScreen from "./CreatetaskScreen";
import { createTask, getTask, UpdateTask } from "./api/Api";
const App = () => {
  const [toggle, setToogle] = useState(false);
  const [state, setState]: any = useState();

  useEffect(() => {
    getTask()?.then((res) => {
      setState(res);
    });
  }, [state]);
  return (
    <div>
      <Container>
        <IconAdd
          onClick={() => {
            setToogle(true);
          }}
        >
          <BiAddToQueue />
        </IconAdd>
        <Hold>
          <Start>
            <H1>Start</H1>
            {state
              ?.filter((el: any) => el.done === "start")
              .map((el: any) => (
                <Card>
                  <Tasked>Tasked</Tasked>

                  <Time rr="l">
                    <TimeWrap>
                      <div>Created At: </div>
                    </TimeWrap>
                    Created
                  </Time>

                  <Time>
                    <TimeWrap>
                      <div>Ended At: </div>
                    </TimeWrap>
                    Achieved
                  </Time>
                  <hr />

                  <Text>Todo was Achieved</Text>
                  <Text>Todo wasn't Achieved</Text>

                  <hr />
                  <Space />
                  <br />
                  <But>
                    <Button
                      onClick={() => {
                        console.log(el._id);

                        UpdateTask(el._id);
                      }}
                    >
                      Update Todo
                    </Button>
                  </But>
                </Card>
              ))}
          </Start>
          <Middle>
            <H1>Ongoing</H1>
            {state
              ?.filter((el: any) => el.done === "ongoing")
              .map((el: any) => (
                <Card style={{ position: "relative", left: "100px" }}>
                  <Tasked>Tasked</Tasked>

                  <Time rr="l">
                    <TimeWrap>
                      <div>Created At: </div>
                    </TimeWrap>
                    Created
                  </Time>

                  <Time>
                    <TimeWrap>
                      <div>Ended At: </div>
                    </TimeWrap>
                    Achieved
                  </Time>
                  <hr />

                  <Text>Todo was Achieved</Text>
                  <Text>Todo wasn't Achieved</Text>

                  <hr />
                  <Space />
                  <br />
                  <But>
                    {" "}
                    <Button
                      onClick={() => {
                        UpdateTask(el._id);
                      }}
                    >
                      Update Todo
                    </Button>
                  </But>
                </Card>
              ))}
          </Middle>
          <End>
            <H1>End</H1>
            {state
              ?.filter((el: any) => el.done === "done")
              .map((el: any) => (
                <Card style={{ position: "relative", left: "100px" }}>
                  <Tasked>Tasked</Tasked>

                  <Time rr="l">
                    <TimeWrap>
                      <div>Created At: </div>
                    </TimeWrap>
                    Created
                  </Time>

                  <Time>
                    <TimeWrap>
                      <div>Ended At: </div>
                    </TimeWrap>
                    {el.Achieved}
                  </Time>
                  <hr />

                  {el.done ? (
                    <Text>Todo was Achieved</Text>
                  ) : (
                    <Text>Todo wasn't Achieved</Text>
                  )}
                  <hr />
                  <Space />
                  <br />
                  <But>
                    <Button>Update Todo</Button>
                  </But>
                </Card>
              ))}
          </End>
        </Hold>
        <Holder>
          <Circle></Circle>
        </Holder>
        {toggle && <CreateTodoScreen toggle={toggle} setToggle={setToogle} />}
      </Container>
    </div>
  );
};

export default App;
const IconAdd = styled.div`
  height: 65px;
  width: 65px;
  background: grey;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  position: absolute;
  top: 20px;
  left: 40px;
  transition: all 360ms;
  &:hover {
    cursor: pointer;
    transform: scale1(1.1);
  }
`;
const Space = styled.div`
  flex: 1;
`;
const Text = styled.div`
  text-align: center;
  margin: 10px 0;
  font-size: 12px;
  font-weight: 600;
`;

const But = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  cursor: pointer;
  padding: 10px 18px;
  background-color: #420042;
  color: white;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  /* z-index: 1; */

  &:hover {
    cursor: pointer;
  }
`;

const TimeWrap = styled.div`
  width: 90%;
`;

const Time = styled.div<{ rr?: string }>`
  font-size: 12px;
  margin: 10px 0;
  line-height: 1;

  display: flex;
  flex-direction: column;

  ${TimeWrap} {
    display: flex;
    flex-direction: ${({ rr }) => (rr ? "row" : "row-reverse")};
    div {
      font-size: 10px;
      font-weight: 600;
      margin-bottom: 5px;
    }
  }
`;

const Tasked = styled.div`
  border-radius: 5px;
  border: 1px solid silver;
  padding: 5px;
  font-size: 15px;
  line-height: 1.2;
`;
const Card = styled.div`
  width: 250px;
  min-height: 150px;
  border-radius: 5px;
  border: 1px solid silver;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: rgba(66, 0, 66, 0.103);
`;
const H1 = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  text-align: center;
`;
const Circle = styled.div`
  width: 100px;
  height: 60px;
  border: 1px solid gray;
  margin-right: 30px;
`;
const End = styled.div`
  width: 500px;
  height: 700px;
  border: 1px solid grey;
  border-radius: 10px;
  overflow-x: auto;
  flex-direction: column;
`;
const Middle = styled.div`
  width: 500px;
  height: 700px;
  border: 1px solid grey;
  border-radius: 10px;
  overflow-x: auto;
`;

const Start = styled.div`
  width: 500px;
  height: 700px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Holder = styled.div`
  height: 100px;
  width: 100%;
  /* background: aqua; */
  display: flex;
  justify-content: flex-end;
`;

const Hold = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 90px;
  /* background: orange; */
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  /* background: pink; */
`;
