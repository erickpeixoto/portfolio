"use client";

import React, { useState } from "react";
import { Timeline as TimelineMantine, Text, Avatar } from "@mantine/core";
import Link from "next/link";

export function Timeline() {
  const [activeItem, setActiveItem] = useState(4);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <TimelineMantine
      color="violet"
      active={activeItem}
      bulletSize={40}
      reverseActive
      className="p-5"
    >
      <TimelineMantine.Item
        bullet={
          <Link
            target="_blank"
            href={
              "https://calendly.com/erickepeixoto/discover-opportunities-with-erick-eduardo"
            }
            title="Click to book a time with me"
          >
            <Avatar
              className="cursor-pointer"
              size={35}
              radius="xl"
              color="violet"
              src="/calendar.png"
            />
          </Link>
        }
        className="dark:text-white"
        title="Be Part of This Story"
      >
        <Text color="dimmed" size="sm">
          If you're interested in working together or want to chat about
          technology, feel free to reach out!
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Present and Beyond
        </Text>
      </TimelineMantine.Item>
      <TimelineMantine.Item
        bullet={
          <Avatar
            className="cursor-pointer"
            size={35}
            radius="xl"
            src="/locorumca_logo.png"
          />
        }
        className="dark:text-white"
        title="Senior Full Stack Engineer at Locorum"
        onClick={() => handleItemClick(4)}
      >
        <Text color="dimmed" size="sm">
          Focused on enhancing digital referral marketing platforms using
          Next.js, ReactJS, and Node.js.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Jun 2023 - Dec 2023
        </Text>
      </TimelineMantine.Item>

      <TimelineMantine.Item
        bullet={
          <Avatar
            className="cursor-pointer"
            size={35}
            radius="xl"
            src="/fuerza.png"
          />
        }
        className="dark:text-white"
        title="Tech Lead | Senior Developer at Fuerza Studio"
        onClick={() => handleItemClick(3)}
      >
        <Text color="dimmed" size="sm">
          Promoted for implementing best practices leading to significant system
          and productivity improvements. Deployed Storybook for efficiency, led
          Lighthouse metrics strategy.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Apr 2021 - Jun 2023
        </Text>
      </TimelineMantine.Item>

      <TimelineMantine.Item
        bullet={
          <Avatar
            className="cursor-pointer"
            size={35}
            radius="xl"
            src="/appgami.png"
          />
        }
        className="dark:text-white"
        title="Senior Full Stack Developer at Appgami"
        onClick={() => handleItemClick(2)}
      >
        <Text color="dimmed" size="sm">
          Led developer and manager groups, emphasizing innovation and
          technological integration, including Node.js, TypeScript, and AWS.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Apr 2020 - Apr 2021
        </Text>
      </TimelineMantine.Item>

      <TimelineMantine.Item
        bullet={
          <Avatar
            className="cursor-pointer"
            size={35}
            radius="xl"
            src="/skill.png"
          />
        }
        className="dark:text-white"
        title="Senior Full Stack Developer at Grupo Skill"
        onClick={() => handleItemClick(1)}
      >
        <Text color="dimmed" size="sm">
          Headed development of a medical application, significantly improving
          patient appointment management and scalability.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Apr 2019 - Apr 2020
        </Text>
      </TimelineMantine.Item>

      <TimelineMantine.Item
        bullet={
          <Avatar
            className="cursor-pointer"
            size={35}
            radius="xl"
            src="/accon.png"
          />
        }
        className="dark:text-white"
        title="Full Stack Developer at Accon Delivery"
        onClick={() => handleItemClick(0)}
      >
        <Text color="dimmed" size="sm">
          Initiated and evolved the platform, significantly improving
          performance and user engagement through strategic technological
          upgrades.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Dec 2012 - Jan 2019
        </Text>
      </TimelineMantine.Item>
    </TimelineMantine>
  );
}
