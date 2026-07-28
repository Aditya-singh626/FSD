// sync
function register() {
  console.log("register here");
  waitfordelay(1000);

}
function login() {
  console.log("login here");
  waitfordelay(1000);
}
function getData() {
  console.log("login here");
  waitfordelay(1000);
}
function displaydata() {
  console.log("login here");
  waitfordelay(1000);
}
function waitfordelay(delay) {
  const mt = Date.now() + delay;
  while(Date.now()<mt){
  }
}
register();
login();
getData();
displaydata();
