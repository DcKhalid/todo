import { useState } from "react";
import styled from "styled-components";

const HomeSceen = () => {
  const [taskState, setTaskState]: any = useState("start");

  const handleStartClick: any = () => {
    setTaskState("ongoing");

    setTimeout(() => {
      setTaskState("finish");
    }, 5000);
  };

  return (
    <Container>
      <Button onClick={handleStartClick} disabled={taskState !== "start"}>
        Start Task
      </Button>

      <Holder>
        {taskState === "start" && <Start>Start Box</Start>}
        {taskState === "ongoing" && <Ongoing>Ongoing Box</Ongoing>}
        {taskState === "finish" && <End>Finish Box</End>}
      </Holder>
    </Container>
  );
};

export default HomeSceen;
const End = styled.div`
  height: 400px;
  width: 200px;
  background: wheat;
`;
const Ongoing = styled.div`
  height: 400px;
  width: 200px;
  background: red;
`;
const Start = styled.div`
  height: 200px;
  width: 200px;
  background: yellow;
`;

const Button = styled.button`
  padding: 10px 18px;
  background: pink;
  border: none;
`;
const Holder = styled.div`
  width: 60%;
  height: 550px;
  background: aquamarine;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;
