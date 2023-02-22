import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

const IconWrapper: any = styled(IconButton)`
    & > svg {
        font-size: 20px;
        color: ${(props) => "var(--text_comum)"};
    }
`;

export { IconWrapper };
