import { Flex } from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes, FC, ReactElement, MouseEventHandler } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  handleOpenDialog: MouseEventHandler<HTMLDivElement>;
}

export const Footer: FC<FooterProps> = ({ handleOpenDialog }): ReactElement => {
  return (
    <Flex
      w="100%"
      h={67}
      position="relative"
      justifyContent="center"
      alignItems="center"
      fontSize="25px"
      bg="#EDEAEA"
      borderRadius="30px"
      padding="0 20px"
    >
      <Flex
        position="absolute"
        w="55px"
        h="55px"
        bg="#DFBD43"
        borderRadius="50%"
        top={-30}
        justifyContent="center"
        alignItems="center"
        color="white"
        fontSize="30px"
        fontWeight="bold"
        cursor="pointer"
        onClick={handleOpenDialog}
      >
        +
      </Flex>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <AiFillHome />
        <BsFillBriefcaseFill />
        <BsFillBellFill />
        <CgMenuGridR />
      </Flex>
    </Flex>
  );
};
