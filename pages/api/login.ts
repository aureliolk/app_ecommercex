import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(process.env.JWT_SECRET)
    console.log(req.body)

    // Verify the user credentials and generate a token
    const user = { email: req.body.email, username: req.body.username };
    
    const token = jwt.sign({ user }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.json({ token });
};
