module.exports = {
  amqp: {
    transport: {
      connection: {
        host: 'rabbitmq',
        port: 5672,
      },
      debug: true,
    },
  },
  redis: {
    hosts: [
      {
        host: 'redis-1',
        port: 6379,
      },
      {
        host: 'redis-2',
        port: 6379,
      },
      {
        host: 'redis-3',
        port: 6379,
      },
    ],
  },
  admins: [
    {
      username: 'root@foo.com',
      password: 'rootpassword000000',
      metadata: {
        firstName: 'Root',
        lastName: 'Admin',
        roles: ['admin', 'root'],
      },
    },
    {
      username: 'admin@foo.com',
      password: 'adminpassword00000',
      metadata: {
        firstName: 'Admin',
        lastName: 'Admin',
        roles: ['admin'],
      },
    },
    {
      username: 'second.admin@foo.com',
      password: 'secondadminpassword',
      metadata: {
        firstName: 'SecondAdmin',
        lastName: 'Admin',
        roles: ['admin'],
      },
    },
    {
      username: 'user@foo.com',
      password: 'userpassword000000',
      metadata: {
        firstName: 'User',
        lastName: 'User',
        roles: [],
      },
    },
    {
      username: 'second.user@foo.com',
      password: 'seconduserpassword',
      metadata: {
        firstName: 'SecondUser',
        lastName: 'User',
        roles: [],
      },
    },
  ],
};