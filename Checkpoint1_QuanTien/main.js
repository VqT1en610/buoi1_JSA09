var cards = [
  {
    name: "Team builder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "Another",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "Team marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "Quan Tien",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "meico",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "airen",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "forsure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "tinjuanchuaa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "juanenhe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
  {
    name: "siuuu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic voluptates odio exercitationem eaque tempore esse aperiam",
    img: "./img/ghost-solid.svg",
    tagColor: "greenTag",
  },
];
let container = document.getElementById("container");
for (let i = 0; i < cards.length; i++) {
  let div = document.createElement("div");
  div.classList.add("product_card");
  div.innerHTML = `
   <h1>${cards[i].name}</h1>
   <p>${cards[i].description}</p>
   <img src=${cards[i].img} alt="">
   `;
  container.appendChild(div);
}
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const storedPassword = localStorage.getItem(loginEmail);

    if (storedPassword === loginPassword) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Sai tài khoản hoặc mật khẩu.");
    }

    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
  });

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const signupEmail = document.getElementById("signupEmail").value;
    const signupPassword = document.getElementById("signupPassword").value;

    if (localStorage.getItem(signupEmail) === null) {
      localStorage.setItem(signupEmail, signupPassword);
      alert("Đăng ký thành công!");
    } else {
      alert("Email này đã được sử dụng.");
    }
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";
  });
