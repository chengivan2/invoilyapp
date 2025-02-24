import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Hr,
} from "@react-email/components";

interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

export const EmailLayout = ({ preview, children }: EmailLayoutProps) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>Invoily</Text>
          </Section>

          <Section style={content}>{children}</Section>

          <Section style={footer}>
            <Hr style={hr} />
            <Text style={footerText}>
              © {new Date().getFullYear()} Invoily. All rights reserved.
            </Text>
            <Text style={footerText}>
              This email was sent from a notification-only address that cannot
              accept incoming email. Please do not reply to this message.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const header = {
  padding: "32px",
};

const logo = {
  color: "#2563eb",
  fontSize: "32px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
};

const content = {
  padding: "0 32px",
};

const footer = {
  padding: "0 32px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footerText = {
  fontSize: "12px",
  color: "#6b7280",
  textAlign: "center" as const,
};

interface InvoiceEmailProps {
  clientName: string;
  invoiceNumber: string;
  amount: string;
  dueDate: string;
  downloadLink: string;
}

export const InvoiceEmail = ({
  clientName,
  invoiceNumber,
  amount,
  dueDate,
  downloadLink,
}: InvoiceEmailProps) => {
  return (
    <EmailLayout preview={`Invoice ${invoiceNumber} for ${clientName}`}>
      <Text style={heading}>New Invoice from Your Company</Text>

      <Text style={paragraph}>Dear {clientName},</Text>

      <Text style={paragraph}>
        Please find attached invoice {invoiceNumber} for {amount}, due on{" "}
        {dueDate}.
      </Text>

      <Section style={buttonContainer}>
        <Link href={downloadLink} style={button}>
          View Invoice
        </Link>
      </Section>

      <Text style={paragraph}>
        If you have any questions, please don't hesitate to contact us.
      </Text>

      <Text style={paragraph}>Thank you for your business!</Text>
    </EmailLayout>
  );
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#374151",
  marginBottom: "16px",
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "32px",
};

const button = {
  backgroundColor: "#2563eb",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 24px",
};
