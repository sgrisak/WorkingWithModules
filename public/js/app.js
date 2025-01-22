import getSessions from "./sessionRepository.js"; // This is a default import
// Because of that, we don't need to name it 'getSessions'. We are just
// importing whatever the exported default function is from that file and,
// in this file, we can name it whatever we want.
// Importantly, whatever we name it, we need to match the name where we
// call the function

import { sessionTemplate, errorMessage } from "./template.js"; // This is a named import
// could also do this:
// import * as template from "./template.js";
// but would then need to change reference to 'sessionTemplate' below. It
// would need to be named: 'template.sessionTemplate'

function render() {
  var list = document.querySelector("#sessions");
  if (!list) return;
  list.innerHTML = sessionTemplate(data.listItems);
}

var data = {
  listItems: [],
};

getSessions().then((sessions) => {
  console.log("promises!");
  data.listItems = sessions;
  render();
});
