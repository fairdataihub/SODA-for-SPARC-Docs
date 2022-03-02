const express = require('express');
let ua = require('universal-analytics');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

app.post('/api/feedback', (req, res) => {
  const visitor = ua(process.env.UNIVERSAL_ANALYTICS_ID, uuidv4());

  const { body } = req;

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

    visitor.event(category, action).send();
    res.json({ success: true, message: `Feedback Sent` });
  }
});

module.exports = app;

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
