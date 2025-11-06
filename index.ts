{
  "object": "list",
  "has_more": false,
  "data": [
    {
      "id": "91f3200a-df72-4654-b0cd-f202395f5354",
      "name": "Production",
      "created_at": "2023-04-08T00:11:13.110779+00:00"
    }
  ]
}
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
