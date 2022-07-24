// return 'express' function & store it in a const express
const express = require('express');

// allow others to fetch data or connect front-end & back-end data
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


require('dotenv').config();


const app = express();

// middleware
app.use(cors());
// front-end thk pathano data receive krte problem hy, to solve it, we use express.json as middleware (req.body er mddhe data pawa jabe na eita use na krle)
app.use(express.json());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0qtxh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
  try {
    await client.connect();
    const serviceCollection = client.db('geniusCar').collection('service');

    // load all services
    app.get('/service', async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const services = await cursor.toArray();
      res.send(services);
    });

    // create single API
    app.get('/service/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const service = await serviceCollection.findOne(query);
      res.send(service);
    });

    // POST
    app.post('/service', async (req, res) => {
      const newService = req.body;
      const result = await serviceCollection.insertOne(newService);
      res.send(result);
    });

    // DELETE
    app.delete('/service/:id', async (req, res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const service = await serviceCollection.deleteOne(query);
      res.send(service);
    })

  }
  
  finally {

  }
}

run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('Running genius server');
})


const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log('listeningaaaaaa');
});