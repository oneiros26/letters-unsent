<template>
  <article class="love-shop">
    <ul>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Love item 1</p>
      </li>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Love item 2</p>
      </li>
      <li>
        <img
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
        <p>Love item 3</p>
      </li>
    </ul>
  </article>
</template>

<script lang="ts"></script>

<style scoped>
.love-shop {
  position: relative;

  min-width: 330px;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: solid 2px rgb(255, 182, 193);
}
.love-shop::before {
  content: "";
  position: absolute;
  inset: 0;

  background: url("../assets/imgs/love-bg.png");
  background-size: cover;
  background-position: center;

  opacity: 0.8;

  z-index: 0;
}
.love-shop::after {
  content: "";
  position: absolute;
  inset: 0;

  background: rgba(255, 182, 193, 0.25);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  z-index: 1;
}
.love-shop > * {
  position: relative;
  z-index: 2;
}
.love-shop ul {
  width: 100%;

  border: black;
}
.love-shop li {
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 12px;

  background-color: #ffe4e4;
  transition: ease 150ms;
}
.love-shop li:hover {
  cursor: pointer;
  background-color: #ffd4d4;
}
.love-shop li img {
  height: 40px;
}
</style>
