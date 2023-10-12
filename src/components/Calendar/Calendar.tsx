import { HStack, VStack, Text, Flex } from "@chakra-ui/react";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  FC,
  ReactElement,
} from "react";
// import styles from "./Calendar.module.scss";

interface CalendarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

interface ICalendarData {
  day: number;
  weekDay: string;
}

const calendarData: ICalendarData[] = [
  {
    day: 1,
    weekDay: "Mon",
  },
  {
    day: 2,
    weekDay: "Tue",
  },
  {
    day: 3,
    weekDay: "Wed",
  },
  {
    day: 4,
    weekDay: "Thu",
  },
  {
    day: 5,
    weekDay: "Fri",
  },
  {
    day: 6,
    weekDay: "Sat",
  },
  {
    day: 7,
    weekDay: "Sun",
  },
];

export const Calendar: FC<CalendarProps> = (): ReactElement => {
  // const [isActive, setIsActive] = useState<boolean>(false);

  // const activeClassDay = isActive ? styles.activeDay : "";
  // const activeClassWeek = isActive ? styles.activeWeek : "";
  // const handleActiveClass = (): void => {
  //   setIsActive((prev) => !prev);
  // };

  
  return (
    <HStack
      w="100%"
      mt={17}
      spacing={33}
      justifyContent="center"
      alignItems="center"
    >
      {calendarData &&
        calendarData.map((item, i) => (
          <VStack
            key={i}
            
            cursor="pointer"
  
          >
            <Flex
              w="25px"
              h="25px"
              borderRadius="50px"
              bg="#4D4117"
              justifyContent="center"
              alignItems="center"
              color="#FFFFFF"
              
            >
              {item.day}
            </Flex>
            <Text
              color="#4D4117"
              fontSize="12px"
              fontWeight={400}
      
              
            >
              {item.weekDay}
            </Text>
          </VStack>
        ))}
    </HStack>
  );
};
