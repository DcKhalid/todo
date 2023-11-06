import React from "react";
import styled from "styled-components";
import { CiMenuBurger } from "react-icons/ci";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import pix from "../Assets/lo0.png";
const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Right>
            <Icon bg1="l">
              <CiMenuBurger />
            </Icon>
            <Logo src={pix} />
          </Right>

          <Middle>
            <SearchBar>
              <Input />
              <Search>
                <CiSearch />
              </Search>
            </SearchBar>

            <Icon bg="#eae9e9">
              <BsFillMicFill />
            </Icon>
          </Middle>
          <Left>
            <Icon bg1="#fff">
              <BiVideoPlus />
            </Icon>
            <Icon bg1="l">
              <IoIosNotificationsOutline />
            </Icon>

            <Avatar>A</Avatar>
          </Left>
        </Main>
      </Container>
    </div>
  );
};

export default Header;
const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: darkorange;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const Left = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.div`
  width: 60px;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eae9e9;
  border-radius: 0px 30px 30px 0px;
  font-size: 26px;
  margin-right: 15px;
`;

const Input = styled.input`
  height: 90%;
  flex: 1;
  border: 0;
  outline: 0;
  padding-left: 10px;
  border-radius: 30px 0px 0px 30px;
  font-size: 15px;
  color: grey;
  font-weight: 500;
`;

const SearchBar = styled.div`
  display: flex;
  width: 700px;
  height: 45px;
  border-radius: 30px;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 78px;
  width: 97px;
  margin-left: 20px;
`;

const Icon = styled.div<{ bg?: string; bg1?: string }>`
  font-size: 23px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 360ms;
  background-color: ${({ bg1 }) => (bg1 ? "#ececec" : "#cfcccc")};

  &:hover {
    background-color: ${({ bg1 }) => (bg1 ? "#ececec" : "#cfcccc")};

    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  align-items: center;
`;
