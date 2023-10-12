import { Heading, VStack } from "@chakra-ui/react";
import { DetailedHTMLProps, HTMLAttributes, FC, ReactElement } from "react";
import { TaskCard } from "../TaskCard/TaskCard";
import { IData } from "../../App";
import styles from './Tasks.module.scss'

interface TasksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  text: string
}

export const Tasks: FC<TasksProps> = ({ data, setData, text }): ReactElement => {
  return (
    <VStack spacing={19} mt={15} justifyContent="flex-start" alignItems="flex-start" w="100%">
      <Heading size="md" color="#444444">
        Today’s tasks
      </Heading>
      <VStack className={styles.taskContainer} spacing={13} w="100%" overflow="auto" h={412}>
        <TaskCard data={data} setData={setData} text={text}/>
      </VStack>
    </VStack>
  );
};
