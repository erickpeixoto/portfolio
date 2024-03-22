import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

const baseUrl = process.env.APP_URL
  ? `https://${process.env.APP_URL}`
  : "http://localhost:3000";

interface PortfolioNotificationEmailProps {
  name: string;
  email: string;
  message: string;
}

export const PortfolioNotificationEmail = ({
  name,
  email,
  message,
}: PortfolioNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Portfolio Message from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-base font-sans">
          <Container className="max-w-xl mx-auto text-center">
            <Img
              src={`${baseUrl}/logo.png`}
              width="150"
              height="auto"
              alt="Portfolio Logo"
              className="mx-auto my-8"
            />
            <Heading className="text-xl mb-6">You've Got Mail, Erick!</Heading>
            <Text className="mb-6">
              A new inquiry has been submitted through your portfolio website:
            </Text>
            <Container className="bg-white shadow rounded-lg p-8">
              <Heading className="text-lg mb-4">Message Details</Heading>
              <Row className="mb-4">
                <Column className="text-left flex gap-2">
                  <strong className="pr-2">Name:</strong>
                  {name}
                </Column>
              </Row>
              <Row className="mb-4">
                <Column className="text-left flex gap-2">
                  <strong className="pr-2">Email:</strong>
                  {email}
                </Column>
              </Row>
              <Row className="mb-4">
                <Column className="text-left flex gap-2">
                  <strong className="pr-2">Message:</strong>
                  {message}
                </Column>
              </Row>
              <Button className="bg-identity text-white w-full">
                <Link
                  href={`mailto:${email}?subject=Re: New Portfolio Message&body=Hi ${name},%0D%0A%0D%0A${message}%0D%0A%0D%0A- Erick
                >Reply to this message`}
                  className="text-identity underline"
                >
                  Reply to this message
                </Link>
              </Button>
            </Container>
            <Text className="text-gray-500 mt-12">
              You can reply directly to this email or use the dashboard to
              manage all messages.
            </Text>
          </Container>
          <Text className="text-center text-gray-400 mt-12">
            ©ericksportifolio. All rights reserved.
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};
