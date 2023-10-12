import { Flex, Input, WrapItem } from "@chakra-ui/react";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  FC,
  ReactElement,
  ChangeEvent,
} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IData } from "../../App";

interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IData[];
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: FC<SearchProps> = ({ data,setText, ...props }): ReactElement => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
      mt={5}
      {...props}
    >
      <Input
        type="text"
        borderRadius={20}
        w="100%"
        placeholder="Search..."
        padding="0 50px"
        onChange={handleSearch}
      />
      <WrapItem position="absolute" left={25} fontSize={20} color="#DFBD43">
        <AiOutlineSearch />
      </WrapItem>
    </Flex>
  );
};
