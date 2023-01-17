function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  let li = document.createElement('li');

  for (key of friends) {
    li.innerHTML('beforeEnd', `<li>${key.firstName} + ${key.lastName}</li>`);
  }

  ul.append(li);
  return ul;
}

