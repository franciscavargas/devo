import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
    }
  `,
};

export const Col = styled.div`
  flex-direction: column;
  /* col width = (row width / number of cols) * (flex value) */
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display:none`)};
`;
