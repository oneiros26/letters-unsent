<template>
  <article class="love-shop">
    <h2><i class="heart-icon fa-regular fa-heart fa-2x"></i></h2>
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
  min-width: 330px;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffeded;
}
.love-shop h2 {
  padding: 16px 40px;
  margin: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffc9c9;
  border-radius: 20px;
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
