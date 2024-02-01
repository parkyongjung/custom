import React, { ReactNode, MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
    link?: string;
    text?: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: 'primary' | 'outline' | 'disabled';
}

const getButtonStyle = (type: 'primary' | 'outline' | 'disabled') => {
    switch (type) {
        case 'primary':
            return css`
                background-color: #3498db;
                color: #fff;
            `;
        case 'outline':
            return css`
                background-color: #fff;
                border: 1px solid #ddd;
                color: #000;
            `;
        default:
            return '';
    }
};

const ButtonStyle = styled.button<ButtonProps>`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    border-radius: 8px;

    ${(props) => getButtonStyle(props.type || 'primary')}
`;

const LinkStyle = styled(Link)<ButtonProps>`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
    border-radius: 8px;

    ${(props) => getButtonStyle(props.type || 'primary')}
`;

const Button = (props: ButtonProps) => {
    return (
        <>
            {props.link ? (
                <LinkStyle to={props.link} type={props.type} onClick={props.onClick}>
                    {props.text}
                </LinkStyle>
            ) : (
                <ButtonStyle type={props.type} onClick={props.onClick}>
                    {props.text}
                </ButtonStyle>
            )}
        </>
    );
};

export default Button;
