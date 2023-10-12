import { Button, Flex, Input } from "@chakra-ui/react";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  FC,
  ReactElement,
  FormEvent,
  useState,
} from "react";
import styles from "./Dialog.module.scss";
import { IData } from "../../App";
import { nanoid } from "nanoid";

interface DialogProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
}
export const Dialog: FC<DialogProps> = ({
  isShow,
  setIsShow,
  data,
  setData,
  ...props
}): ReactElement => {
  const switchDialog = isShow ? styles.show : styles.hide;

  const [task, setTask] = useState<string>("");

  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const timeOnly = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  const handleAddTask = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (task) {
      setData([
        ...data,
        {
          id: nanoid(),
          task,
          time: timeOnly,
          completed: false,
        },
      ]);
    }
    setTask("");
    setIsShow(prev => !prev)
  };

  

  return (
    <Flex
      w="100%"
      padding="15px"
      justifyContent="center"
      alignItems="center"
      border="2px solid #D6D6D6"
      position="absolute"
      top={350}
      left={0}
      {...props}
      id={switchDialog}
      boxShadow=" -1px 0px 13px 4px rgba(0,0,0,0.72)"
      bg="rgba(255, 253, 244, 0.96)"
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
        onSubmit={handleAddTask}
      >
        <Input
          type="text"
          w="300px"
          h="40px"
          borderRadius={20}
          border="1px solid rgba(0, 0, 0, 0.40)"
          placeholder="Add task"
          padding="0 0 0 20px"
          _focus={{ outline: "blue" }}
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <Button
          type="submit"
          w="40px"
          h="40px"
          borderRadius="50%"
          cursor="pointer"
          border="none"
          bg="#DFBD43"
          color="white"
          fontSize={20}
        >
          +
        </Button>
      </form>
    </Flex>
  );
};
