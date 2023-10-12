import { Avatar, VStack, Text, Flex } from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes, FC, ReactElement } from "react";
import { Switch } from "@chakra-ui/react";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  handleChangeMode: () => void;
  mode:boolean
}

export const Header: FC<HeaderProps> = ({ handleChangeMode,mode,...props }): ReactElement => {
  return (
    <Flex w="100%" justifyContent="space-between" alignItems="flex-start">
      <VStack
        {...props}
        spacing="5px"
        w="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          width="70px"
          height="70px"
          borderRadius="50%"
        />

        <Text color="#444" fontSize="16px" fontWeight={400}>
          Good evening, Dan
        </Text>
      </VStack>
      <Switch size="lg" colorScheme="orange" isChecked={mode} onChange={handleChangeMode}/>
    </Flex>
  );
};
