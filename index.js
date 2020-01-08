require("dotenv").config();

const server = require("./server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`\n* Server running on port ${port} *\n`);
})

server.get('/', async (req, res) => {
    try {
      const messageOfTheDay = process.env.MOTD || 'Hello World!';
      res.status(200).json({ motd: messageOfTheDay, shoutouts });
    } catch (error) {
      console.error('\nERROR', error);
      res.status(500).json({ error: 'Cannot retrieve MOTD' });
    }
  });