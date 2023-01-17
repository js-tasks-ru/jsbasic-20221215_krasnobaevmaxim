function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (key of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${key.firstName} ${key.lastName}`;
    ul.append(li);
  }

  return ul;
}
