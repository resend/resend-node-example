import { Resend } from 'resend';
const resend = new Resend('re_123456789');

(async function() {
  try {
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });

    if (response.error) {
      console.error(response.error)
      return;
    }

    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
