import styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient"

export const Container = styled<any>(LinearGradient)
.attrs(({ theme }) => ({
     
     colors: theme.COLORS.GRADIENT
}))`

flex: 1;
justify-content: center;
`;