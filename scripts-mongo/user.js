
db.createUser({
  user: 'admin',
  pwd: 'admin1',
  roles: [
    {
      role: 'readWrite',
      db: 'names',
    },
  ],
});
