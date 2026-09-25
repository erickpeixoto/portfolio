"use client";

import React, { useState } from "react";
import { Timeline as TimelineMantine, Text, Avatar } from "@mantine/core";
import Link from "next/link";

export function Timeline() {
  const [activeItem, setActiveItem] = useState(6);

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
        bullet={<Avatar size={35} radius="xl" src="/ambush_logo.png" />}
        className="dark:text-white"
        title="Senior Full Stack Engineer at Ambush"
        onClick={() => handleItemClick(5)}
      >
        <Text color="dimmed" size="sm">
          AI products for enterprise clients from an Austin studio: a year
          embedded with PayPal teams, then an AI lending platform for one of
          Australia&apos;s largest banks.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Sep 2023 - Jul 2026
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
          Canadian startup, on contract. Led a team of four on a referral
          marketing and loyalty platform for offline businesses.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Jun 2023 - Jun 2024
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
        title="Tech Lead at Fuerza Studio"
        onClick={() => handleItemClick(3)}
      >
        <Text color="dimmed" size="sm">
          Agency work for US clients, including Veritone SportX. Promoted to
          tech lead of a six-person team.
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
        title="Senior Full Stack Engineer at Appgami"
        onClick={() => handleItemClick(2)}
      >
        <Text color="dimmed" size="sm">
          London team, remote. Led developers across teams and introduced
          GraphQL, AWS and Playwright end-to-end tests.
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
        title="Senior Full Stack Developer at Skill Group"
        onClick={() => handleItemClick(1)}
      >
        <Text color="dimmed" size="sm">
          Built a healthcare platform end to end: 10,000+ appointments in the
          first three months.
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
        title="Full Stack Developer at Accon"
        onClick={() => handleItemClick(0)}
      >
        <Text color="dimmed" size="sm">
          Grew an e-commerce platform to 3,100+ food-brand franchises and led
          the move from PHP to TypeScript, Node.js and React.
        </Text>
        <Text size="xs" mt={4} color="dimmed">
          Dec 2012 - Jan 2019
        </Text>
      </TimelineMantine.Item>
    </TimelineMantine>
  );
}
