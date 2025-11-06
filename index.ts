import { Resend } from 'resend';
const resend = new Resend('967e4994c124db9d63182338e2644deae676649b226127df12d818a5b96a1b62');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
