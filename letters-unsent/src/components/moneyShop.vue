<template>
  <article class="money-shop">
    <h2>
      <i class="delivery-icon fa-regular fa-paper-plane fa-2x"></i>
      <i class="letter-icon fa-regular fa-envelope fa-2x"></i>
    </h2>
    <ul>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Delivery upgrade 1</p>
      </li>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Delivery upgrade 2</p>
      </li>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Delivery upgrade 3</p>
      </li>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Delivery upgrade 4</p>
      </li>
    </ul>
  </article>
</template>

<script lang="ts"></script>

<style scoped>
.money-shop {
  position: relative;
  overflow: hidden;

  min-width: 330px;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-left: solid 2px rgb(138, 151, 163);
}

.money-shop::before {
  content: "";
  position: absolute;
  inset: 0;

  background: url("../assets/imgs/money-bg.png");
  background-size: cover;
  background-position: center;

  opacity: 0.8;
  z-index: 0;
}

.money-shop::after {
  content: "";
  position: absolute;
  inset: 0;

  background: rgba(138, 151, 163, 0.25);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  z-index: 1;
}

.money-shop > * {
  position: relative;
  z-index: 2;
}

.money-shop h2 {
  padding: 16px 0;
  margin: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;

  background-color: #ffeba3;
  border-radius: 20px;
}

.money-shop h2 i {
  width: 120px;

  display: flex;
  justify-content: center;
  transition: ease 150ms;
}

.money-shop h2 i:hover {
  cursor: pointer;
  color: whitesmoke;
}

.money-shop .delivery-icon {
  border-right: gray solid 1px;
}

.money-shop ul {
  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;
}

.money-shop li {
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 12px;

  background-color: #fff3c9;
  transition: ease 150ms;
}

.money-shop li:hover {
  cursor: pointer;
  background-color: #ffeba2;
}

.money-shop li img {
  height: 40px;
  display: block;
}
</style>
