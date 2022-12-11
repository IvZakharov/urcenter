import sendEmail from "../../lib/mail";

export default async function handler(req, res) {
  const message = {
    to: "izaxarov90@gmail.com",
    subject: `Заявка с сайта urcentr от ${req.body.userName}`,
    text: `
			Имя: ${req.body.userName},
        	Телефон: ${req.body.userTel},
        `,
  };

  sendEmail(message);
  console.log(message);
  res.send(`Спасибо за заявку, ${req.body.userName}!`);
}
