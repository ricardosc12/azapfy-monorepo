export const isDev = process.env.NODE_ENV !== 'production';
export const server = isDev ? 'http://localhost:3000' : 'https://azapfy-nextjs.vercel.app';
