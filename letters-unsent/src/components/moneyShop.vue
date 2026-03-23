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
  min-width: 330px;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff8de;
}
.money-shop h2 {
  padding: 16px 0;
  margin: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 60px; */

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

  border: black;
}
.money-shop li {
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 12px;

  /* border: inset 8px #ffaeae; */
  background-color: #fff3c9;
  transition: ease 150ms;
}
.money-shop li:hover {
  cursor: pointer;
  background-color: #ffeba2;
}
.money-shop li img {
  height: 40px;
}
</style>
