/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FilterDiv = styled.div`
    background: #EDE7F6;
    border-radius: 15px 15px 0 0;
    padding: 2.5%;
    label {
        display: inline-block;
        width: 10%;
    }
    div {
        display: inline-block;
    }
    .deadline {
        width: 37.5%;
        padding: 0 20px;
        line-height: 100%;
        .deadlineList {
            width: 100%;
            span {
            display: none;
            }
            .css-yk16xz-control {
                width: 100%;
                border-radius: 8px;
            }
            path {
                color: #702c8a;
            }
        }
    }
`;

export { FilterDiv };