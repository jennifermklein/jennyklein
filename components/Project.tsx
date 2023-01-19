import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

interface ProjectProps {
  src: string;
  heading: string;
  description: string;
  href: string;
}

export default function Project({
  src,
  heading,
  description,
  href,
}: ProjectProps) {
  return (
    <Card
      direction={{ base: "column", lg: "row" }}
      overflow="hidden"
      variant="outline"
      size={"sm"}
      minH={{ lg: "350px" }}
    >
      <Image
        objectFit={{ base: "contain", lg: "cover" }}
        maxW={{ base: "100%", lg: "375px" }}
        src={src}
        alt={heading}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{heading}</Heading>

          <Text py="2" fontSize={{ sm: "sm", md: "md" }}>
            {description}
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="teal"
            as="a"
            target="_blank"
            href={href}
          >
            Video Demo
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
