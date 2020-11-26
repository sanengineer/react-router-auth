import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #dd00ff, #c603ff);
  border-color: #dd00ff08;
  border-radius: 3px;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const ButtonLogoutNav = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding: 1rem;
  color: red;
  margin-bottom: 1rem;
  font-size: auto;
  text-decoration: underline;
  font-size: 16px;
  cursor: pointer;
`;

const Error = styled.div`
  background-color: red;
  padding: 20px;
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  text-transform: capitalize;
  font-size: 14px;
  text-align: center;
  font-weight: bolder;
`;

export { Form, Input, Button, ButtonLogoutNav, Card, Error };
