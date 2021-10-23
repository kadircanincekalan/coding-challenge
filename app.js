const pattern = /^[^@\s]+@[^@\s]+\.[^@\.\s]+$/i;
function check() {
  let email = document.querySelector("#mail").value;
  console.log(email);
  if (pattern.test(email)) {
    console.log("hello");
    document.querySelector("#validation").innerHTML = `${email} is valid`;
  } else {
    document.querySelector("#validation").innerHTML = `${email} not valid`;
  }
}