// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(
    [
      {
          id: 0,
          question: "how do you spell linux",
          answer: "it's in the question dummy",
          options: [
              'option a',
              'option b',
              'option c',
              'option d',
          ],
          exam: "essentials",
          topic: 1,
          module: 1.1
      },

      {
          id: 1,
          question: "here's another question in essentials",
          answer: "here's another answer in essentials",
          options: [
              'option a',
              'option b',
              'option c',
              'option d',
          ],
          exam: "essentials",
          topic: 1,
          module: 1.2
      },
    ]
    )
}
