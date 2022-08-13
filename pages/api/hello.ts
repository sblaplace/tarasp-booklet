// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const scryer = spawn('scryer-prolog', ['main.pl']);

  scryer.stdin.write('');

  scryer.stdout.on('data', (data) => {
    const resString = new String(data);

    const respJSON = JSON.parse(resString.trim().split('\n')[0]);

    res.status(200).json(respJSON);
  })

  scryer.stdin.end();
}
