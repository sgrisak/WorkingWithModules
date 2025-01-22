const sessionURL = "sessions.json";

let sessionList = [];

function getSessions() {
  return new Promise(function (resolve, reject) {
    var oReq = new XMLHttpRequest();
    oReq.onload = function (e) {
      sessionList = e.target.response;
      resolve(sessionList);
    };
    oReq.open("GET", sessionURL, true);
    oReq.responseType = "json";
    oReq.send();
  });
}

// export { getSessions }; // Named export
// export {getSessions as default} // Default export
export { getSessions as default, sessionURL }; // Combo default and named exports
// You could use: import anyName from './sessionRepository.js';
// Like this: import sessions from './sessionRepository.js';
// This will give you getSessions function only, since it is set as default.
// You would need to do this to get both:
// import sessions, { sessionURL } from './sessionRepository.js';
// to get both.

// We know we will need to import this module into app.js. We will also need to
// import the sessionTemplate from ./template.js. You an combine exports of items
// that are not even in this file to simplify your imports in app.js by doing this:

// export { getSessions as default, sessionURL };
// export { sessionTemplate } from './template.js';

// The above is known as 'aggregating modules'.
