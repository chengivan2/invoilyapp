import { Resend } from 'resend';
import { InvoiceEmail } from '../emails/components/EmailLayout';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendInvoiceEmail = async ({
  to,
  clientName,
  invoiceNumber,
  amount,
  dueDate,
  downloadLink,
}: {
  to: string;
  clientName: string;
  invoiceNumber: string;
  amount: string;
  dueDate: string;
  downloadLink: string;
}) => {
  try {
    const data = await resend.emails.send({
      from: 'Invoily <invoices@yourdomain.com>',
      to: [to],
      subject: `Invoice ${invoiceNumber} from Your Company`,
      react: InvoiceEmail({
        clientName,
        invoiceNumber,
        amount,
        dueDate,
        downloadLink,
      }),
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};