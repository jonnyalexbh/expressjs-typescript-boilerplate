import db from '../../db';

export const getUsers = async (_, res) => {
  const users = await db.select('*').from('users');
  res.send({ users });
};
