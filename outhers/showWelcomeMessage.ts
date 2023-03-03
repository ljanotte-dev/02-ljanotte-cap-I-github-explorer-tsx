type User = {
  name: string;
  email: string;
  address: {
    city: string;
    state?: string;
  };
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your sate is ${user.address.state}`;
}

showWelcomeMessage({
  name: "leandro",
  email: "leandro@gmail.com",
  address: {
    city: "New York",
    state: "Ny",
  },
});

const message = showWelcomeMessage({
  name: "leandro",
  email: "leandro@gmail.com",
  address: {
    city: "New York",
    state: "Ny",
  },
});

const user = {
  name: "leandro",
  email: "leandro@gmail.com",
  address: {
    city: "New York",
    state: "Ny",
  },
};

const message2 = showWelcomeMessage(user);

user.address;
