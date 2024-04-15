interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <div>
      From <strong>{name}</strong> at {email}
    </div>
    <h2>Message:</h2>
    <div>{message}</div>
  </div>
);
