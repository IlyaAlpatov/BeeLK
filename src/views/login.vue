<template>
  <div class="body">
    <div class="name-tag">
      <div class="hello">
        <div id="hello">BEELK</div>
        <div id="my-name-is">Личный Кабинет</div>
      </div>
      <form class="form" action="#">
        <div><input type="text" placeholder="Почта" /></div>
        <div><input type="password" placeholder="Пароль" /></div>
        <div>
          <button class="is-clickable" @click="showRandomToast" type="submit">
            Войти <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </form>
      <div class="underbar"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showRandomToast() {
      Math.random() > 0.5
        ? this.$buefy.toast.open({
            duration: 1000,
            message: "Вы успешно авторизовались",
            type: "is-success",
            position: "is-bottom-left",
          })
        : this.$buefy.toast.open({
            duration: 1000,
            message: "Не удалось авторизоваться",
            type: "is-danger",
            position: "is-bottom-left",
          });
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Gochi+Hand);
.body {
  line-height: 1;

  height: 100vh;
  background: linear-gradient(#3bffd5ab 0%, #23c1fa 100%);
  padding: 200px 0;
}

.name-tag {
  position: relative;
  margin: 0 auto;

  height: 240px;
  width: 350px;
  background: #fff;
  border-radius: 10px;
  transform: rotate(-3deg);
}

.hello {
  height: 80px;
  width: 340px;
  background: #000000;
  text-align: center;
  color: rgba(247, 167, 0);
  border: 5px solid rgb(247, 167, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#hello {
  margin-top: 8px;
  font-weight: 600;
  font-size: 33px;
  letter-spacing: 10px;
}

#my-name-is {
  font-size: 18px;
  font-weight: 200;
  letter-spacing: 1px;
}

.underbar {
  position: absolute;
  top: 198px;
  left: 5px;
  height: 37px;
  width: 340px;
  background: #000000;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: -1;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7px 0 0 0;
}
form button {
  position: absolute;
  top: 198px;
  left: 5px;
  height: 37px;
  width: 340px;
  background: #000000;
  color: rgb(247, 167, 0);
  font-weight: 600;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 0;
  transition: all 0.2s;
}
form button:active {
  outline: none;
}
form input[type="text"],
form input[type="password"] {
  width: 300px;
  font-family: "Gochi Hand", cursive;
  text-align: center;
  border: 0;
  outline: none;
}
form input[type="text"]:valid,
form input[type="text"]:focus,
form input[type="password"]:valid,
form input[type="password"]:focus {
  border: 0;
}
form input[type="text"] {
  font-size: 45px;
}
form input[type="password"] {
  font-size: 22px;
  margin-top: 7px;
}

.greeting {
  display: none;
  height: 100px;
  font-size: 35px;
  font-weight: 200;
  color: rgb(255, 255, 255);
  text-align: center;
}
.greeting span {
  font-weight: 600;
}
</style>