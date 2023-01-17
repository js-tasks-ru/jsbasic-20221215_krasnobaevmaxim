function highlight(table) {
  for (let tr of table.children[1].rows) { // для каждой строки tr таблицы
    let available = tr.cells[3];
    if (available.hasAttribute("data-available"))
    {
      switch (available.dataset.available) {
      case "true":
        tr.classList.toggle("available");
        break;
      case "false":
        tr.classList.toggle("unavailable");
      }
    } else {
      tr.hidden = true;
    }

    let gender = tr.cells[2].textContent;
    switch (gender) {
    case "m":
      tr.classList.toggle("male");
      break;
    case "f":
      tr.classList.toggle("female");
    }

    let age = +tr.cells[1].textContent;
    if (age < 18) {tr.style.textDecoration = "line-through";}
  }
}
