// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { page = 1 } = req.query;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&query=NASA&include_adult=false&page=${page}`
    );
    const results = await response.json();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
