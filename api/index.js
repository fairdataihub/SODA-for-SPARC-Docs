const express = require("express");
var ua = require("universal-analytics");

const app = express();
app.use(express.json());

app.get("/feedback", (req, res) => {
  const visitor = ua("UA-215309627-1");

  const body = req.body;

  console.log("request", req);
  console.log("request body", req.body);

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  if (body === undefined) {
    res.status(400).json({ message: `Invalid Request ${req.body}` });
  } else {
    if (body.category === undefined) {
      res.status(400).json({ message: `Category Missing ${body}` });
    } else if (body.action === undefined) {
      res.status(400).json({ message: `Action Missing ${body}` });
    } else {
      const category = body.category;
      const action = body.action;

      visitor.event(category, action).send();
      res.status(200).json({ message: `Feedback Sent` });
    }
  }
});

module.exports = app;
