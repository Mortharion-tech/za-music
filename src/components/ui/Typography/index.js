import { device } from "@/styles/BreakPoints";
import { styled } from "styled-components";

export const MainTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 60px;
  line-height: 90px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${device.md} {
    font-size: 30px;
    line-height: 45px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: ${({ theme }) => theme.fontWeights.bold};
  font-size: 35px;
  line-height: 52.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${device.md} {
    font-size: 22px;
    line-height: 33px;
  }
`;

export const SectionSubtitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: ${({ theme }) => theme.fontWeights.bold};
  font-size: 25px;
  font-weight: 600;
  line-height: 37.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${device.md} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Text = styled.span`
  font-family: Inter, sans-serif;
  font-size: ${({ theme }) => theme.fontWeights.bold};
  font-size: 22px;
  font-weight: 500;
  line-height: 26.63px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const SubText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: ${({ theme }) => theme.fontWeights.bold};
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${device.md} {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const SmallText = styled.span`
  font-family: ${({ theme }) => theme.fonts.inter}, sans-serif;
  font-size: ${({ theme }) => theme.fontWeights.bold};
  font-size: 18px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${device.md} {
    line-height: 22px;
  }
`;

export const ButtonText = styled.span`
  font-family: Inter, sans-serif;
  font-size: ${({ theme }) => theme.fontWeights.bold};
  font-size: 23px;
  font-weight: 600;
  line-height: 27.84px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;
