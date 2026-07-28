// sync
function register(login) {
  console.log("register here");
  waitfordelay(1000);
  login(getData);
}
function login(getData) {
  console.log("login here");
  waitfordelay(1000);
  getData(displaydata);
}
function getData(displaydata) {
  console.log("getData here");
  waitfordelay(1000);
  displaydata();
}
function displaydata() {
  console.log("displaydata here");
  waitfordelay(1000);
}
function waitfordelay(delay) {
  const mt = Date.now() + delay;
  while (Date.now() < mt) {}
}
register(login);
