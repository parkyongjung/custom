import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    isLink?: boolean;
    text?: React.ReactNode;
    marginTop?: string;
}

const ButtonStyle = styled.button<ButtonProps>`
    display: flex;
    width: 100%;
    height: 60px;
    color: #fff;
    background: #638cff;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    border-radius: 8px;
`;

const LinkStyle = styled.a<ButtonProps>``;

const Button = (props: ButtonProps) => {
    return <>{props.isLink ? <LinkStyle>{props.text}</LinkStyle> : <ButtonStyle>{props.text}</ButtonStyle>}</>;
};

export default Button;
