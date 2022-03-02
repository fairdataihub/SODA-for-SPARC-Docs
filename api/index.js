const express = require('express');
// const ua = require('universal-analytics');
const { v4: uuidv4 } = require('uuid');
var axios = require('axios');

const app = express();

app.use(express.json());

app.post('/api/feedback', (req, res) => {
  const { body } = req;

  // eslint-disable-next-line no-console
  console.log(`Feedback received: ${JSON.stringify(body)}`);

  // const visitor = ua('UA-215309627-2', uuidv4());
  const clientID = uuidv4();

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  if (body === undefined) {
    res.status(400).json({ message: `Invalid Request ${req.body}` });
  } else if (body.category === undefined) {
    res.status(400).json({ message: `Category Missing ${body}` });
  } else if (body.action === undefined) {
    res.status(400).json({ message: `Action Missing ${body}` });
  } else {
    const { category, action } = body;

    // eslint-disable-next-line no-console
    console.log(`Feedback submitted for Category '${category}' with Action '${action}'`);

    // visitor.event(category, action).send();

    var config = {
      method: 'post',
      url: `https://www.google-analytics.com/collect?v=1&t=event&tid=UA-215309627-2&cid=${clientID}&ec=${category}&ea=${action}`,
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // res.json({ success: true, message: `Feedback Sent` });
  }
});

module.exports = app;

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
