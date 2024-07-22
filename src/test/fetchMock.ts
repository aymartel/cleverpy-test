export const fetchMock = (url: string) => {
  if (url === 'https://jsonplaceholder.typicode.com/posts') {
    return Promise.resolve({
      json: () => Promise.resolve(Array.from({ length: 15 }, (_, i) => ({
        userId: 1,
        id: i + 1,
        title: `Test Post ${i + 1}`,
        body: 'Test Body',
      }))),
    });
  }
  if (url === 'https://jsonplaceholder.typicode.com/posts/1') {
    return Promise.resolve({
      json: () => Promise.resolve({
        userId: 1,
        id: 1,
        title: 'Test Post 1',
        body: 'Test Body',
      }),
    });
  }
  if (url === 'https://jsonplaceholder.typicode.com/users/1') {
    return Promise.resolve({
      json: () => Promise.resolve({
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      }),
    });
  }
  if (url === 'https://jsonplaceholder.typicode.com/comments?postId=1') {
    return Promise.resolve({
      json: () => Promise.resolve([
        {
          postId: 1,
          id: 1,
          name: 'Test Comment 1',
          email: 'test1@example.com',
          body: 'Test Comment Body 1',
        },
        {
          postId: 1,
          id: 2,
          name: 'Test Comment 2',
          email: 'test2@example.com',
          body: 'Test Comment Body 2',
        },
      ]),
    });
  }

  return Promise.reject(new Error(`Unknown URL: ${url}`));
};
