import { Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  FC,
  ReactElement,
  useState,
  FormEvent,
} from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IData } from "../../App";
import { MdDone } from "react-icons/md";
import styles from "./TaskCard.module.scss";

interface TaskCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: IData[];
  setData: React.Dispatch<React.SetStateAction<IData[]>>;
  text: string;
}

export const TaskCard: FC<TaskCardProps> = ({
  data,
  setData,
  text,
  ...props
}): ReactElement => {
  const handleDeleteTask = (id: string) => {
    setData(data.filter((item) => item.id !== id));
  };

  const editData = data.find((item) => item.id);
  const [task, setTask] = useState<string>(editData?.task || "");
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const timeOnly = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  const [editItemId, setEditItemId] = useState<string | null>(null);

  const handleChangeTask = (e: FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    const updatedData: IData = {
      id,
      task,
      time: timeOnly,
      completed: false,
    };
    setTask("");
    setData((prevData: IData[]) =>
      prevData.map((p: IData) => (p.id === id ? updatedData : p))
    );
  };

  const handleEditClick = (id: string) => {
    setEditItemId(id);
  };

  const handleSaveClick = (id: string) => {
    setEditItemId(null);
    console.log(id);
  };

  const handleChecked = (id: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      {data &&
        data
          .filter((item) => item.task.toLowerCase().includes(text))
          .map((item) => (
            <Flex
              w="100%"
              h="72px"
              border="2px solid #D6D6D6"
              borderRadius="20px"
              padding="15px 5px 15px 20px"
              justifyContent="space-between"
              alignItems="center"
              key={item.id}
              gap="20px"
              className={item.completed ? styles.checked : ""}
              {...props}
            >
              <Checkbox
                color="#DFBD43"
                border="1px solid #DFBD43"
                colorScheme="orange"
                isChecked={item.completed}
                onChange={() => handleChecked(item.id)}
              />
              <Flex w="100%" justifyContent="center" alignItems="center">
                <form
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onSubmit={(e) => handleChangeTask(e, item.id)}
                >
                  {editItemId === item.id ? (
                    <Input
                      size="sm"
                      w={60}
                      value={task}
                      type="text"
                      onChange={(e) => setTask((item.task = e.target.value))}
                    />
                  ) : (
                    <Flex
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      gap="15px"
                    >
                      <Text>{item.time}</Text>
                      <Text>{item.task}</Text>
                    </Flex>
                  )}
                  <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    {editItemId === item.id ? (
                      <Button
                        variant="unstyled"
                        fontSize={20}
                        color="#DFBD43"
                        bg="transparent"
                        border="none"
                        cursor="pointer"
                        onClick={() => handleSaveClick(item.id)}
                        type="submit"
                      >
                        <MdDone />
                      </Button>
                    ) : (
                      <Button
                        variant="unstyled"
                        fontSize={20}
                        color="#DFBD43"
                        bg="transparent"
                        border="none"
                        cursor="pointer"
                        onClick={() => handleEditClick(item.id)}
                      >
                        <AiFillEdit />
                      </Button>
                    )}
                    <Button
                      variant="unstyled"
                      fontSize={20}
                      color="#DFBD43"
                      onClick={() => handleDeleteTask(item.id)}
                      bg="transparent"
                      border="none"
                      cursor="pointer"
                    >
                      <MdDelete />
                    </Button>
                  </Flex>
                </form>
              </Flex>
            </Flex>
          ))}
    </>
  );
};
