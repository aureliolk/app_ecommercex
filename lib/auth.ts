import jwt from 'jsonwebtoken';

const secret = 'mysecretkey';

export const signToken = (payload: object) => {
    return jwt.sign(payload, secret, { expiresIn: '24h' });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, secret) as object;
}

