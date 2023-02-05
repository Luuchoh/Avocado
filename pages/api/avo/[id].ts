import { NextApiRequest, NextApiResponse } from "next";

import DB from '@database'

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()
  const productId = request.query.id
  const entry = await db.getById(productId as string)

  response.status(200).json(entry)
}

export default allAvos