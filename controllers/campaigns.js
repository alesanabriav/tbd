const api = 'SG.Xin7sekSQYGgsLsih7K6Xg.iW-wxNe0GKaQngnpM5nYWnn_tgkh0v0qJU4S5Jo3tSg';
const sg = require('sendgrid')(api);

function getRequest(to, subject,  content) {
  var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: {
		template_id: "21c7415b-f033-4cfb-b8b6-5d857e17c417",
    personalizations: [
      {
        to: [
          {
            email: to,
          },
        ],
        subject: subject,
      },
    ],
    from: {
      name: 'Taller84',
      email: 'oficina@taller84.com',
    },
    content: [
      {
        type: 'text/html',
        value: content,
      },
    ],
  },
});

return request;
}

export default function() {
  
  return {
     sendMail(to, subject,  content) {
      let request = getRequest(to, subject,  content);
      return sg.API(request);
    }
  }
}

