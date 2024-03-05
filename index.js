import express from 'express'
const app = express()
const port = 3000
import prisma from './prisma/prisma.js'

app.post('/api/team/:score/:json', async (req, res) => {
  let json = JSON.stringify(req.params.json)
  console.log("🚀 ~ app.post ~ json:", json)
  console.log(JSON.parse(json));

  try {
    const team = await prisma.axieTeam.create({
      data: {
        json: json,
        score: 1
      },
    });

    return res.status(201).json({ message: 'created' });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Internal Server Error' });
  }
})

app.get('/api/team/:score', async(req, res) => {
  let score = Number(req.params.score)
  const team = await prisma.axieTeam.findFirst({
    where: {
      score: score,
    }
  })

  return res.status(201).json(team);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})