import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import moment from "moment/moment";
import axios from "axios";

export default function Note({ id, title, desctiption, createdAt, onDelete }) {
  async function DeleteNote() {
    await axios({
      method: "delete",
      url: "http://localhost:5003/notes",
      data: {
        id: id,
      },
    });

    await onDelete();
  }

  return (
    <Card variant={"filled"}>
      <CardHeader>
        <Heading size={"md"}>
          {title}
          <Button onClick={DeleteNote} float={"right"} colorScheme="gray">
            Delete
          </Button>
        </Heading>
      </CardHeader>
      <Divider borderColor={"gray"} />
      <CardBody>
        <Text>{desctiption}</Text>
      </CardBody>
      <Divider borderColor={"gray"} />
      <CardFooter>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</CardFooter>
    </Card>
  );
}
