import Head from "next/head";

import Layout from "../components/Layout";
import Project from "../components/Project";

import { Box, Flex, Heading } from "@chakra-ui/react";

export default function About() {
  8675309;
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Box
        p={{ base: 2, sm: 4, md: 8, lg: 16 }}
        maxW={{ base: "100%", sm: "90%", md: "80%" }}
      >
        <Flex direction="column" gap="6">
          <Heading size="lg" color="#731C62">
            Projects
          </Heading>
          <Project
            src="/images/fml.png"
            heading="FindMyLine"
            description="FindMyLine is a fast, easy way to find the information you need on
            MTA subway arrival times, service alerts, and station accessibility.
            Combining multiple real time MTA data feeds into a single map view,
            you can quickly find your nearest station and then drill down to a
            single train, direction, and relevant outages."
            href="https://www.youtube.com/watch?v=su92iSFLy_o&list=LL&index=6"
          />
          <Project
            src="/images/magicspell.png"
            heading="Magic Spell"
            description="I built Magic Spell for my 5 year old daughter who was learning to read. The app allows kids to play around with different letter combinations
            by dragging and dropping the letters. Built using Google’s Cloud Text-To-Speech API to implement realistic sounding synthesized text and React-Beautiful-DND."
            href="https://www.youtube.com/watch?v=x3W7vZzE3CY"
          />
          <Project
            src="/images/kiln.png"
            heading="Kiln Me Softly"
            description="An e-commerce site to selling pottery and manage inventory. The site allows users to shop and allows administrators to manage user and product data. Completed as part of a group project during the Grace Hopper program.
            I focused on developing the database models and associations, the checkout flow, search and filter functionality, and front-end design."
            href="https://www.youtube.com/watch?v=HSwKpd8c-ik"
          />
          <Project
            src="/images/stalactite.png"
            heading="Stalactite"
            description="A fun music visualization app allowing users to play piano with their computer keyboard and see a trippy visualization corresponding to the notes.
            Built using React along with tone.js for the music and paper.js for the visualization."
            href="https://www.youtube.com/watch?v=x0kH1khjk9w"
          />
          <Project
            src="/images/hamilton.png"
            heading="Margaret Hamilton Academy of Javascript"
            description="A CRUD app to create and edit students and campuses at the fictional Margaret Hamilton Academy of Javascript. Built as a final project for the Junior Phase
            of the Grace Hopper Program at Full Stack Academy."
            href="https://www.youtube.com/watch?v=GmWtTvS3Hoo"
          />
          <Project
            src="/images/wordbyword.png"
            heading="Word by Word"
            description="Built as a final project for Harvard's CS50 course,
            Word by Word is a collaborative storytelling app inspired by an improv game in which a group of people
            take turns adding one word at a time to a story. The story develops unpredictably through the creativity of the entire group."
            href="https://www.youtube.com/watch?v=-nwS44wn3hQ"
          />
          <Project
            src="/images/stopwatch.png"
            heading="Stopwatch"
            description="This project is a simple stopwatch I built as one of my first projects when I was learning to code. It was built using raw HTML, CSS, and JavaScript."
            href="https://www.youtube.com/watch?v=ky_GCtuLfSU"
          />
        </Flex>
      </Box>
    </Layout>
  );
}
