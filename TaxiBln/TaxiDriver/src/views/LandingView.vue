<template>
  <div
    v-show="isLandingBtnVisible"
    id="landingBtn"
    class="fixed top-5 left-3/4 z-50 text-sm"
  >
    <button
      class="bg-primary text-fontColor font-semibold rounded hover:bg-secondary px-3 py-2"
    >
      weiter
    </button>
  </div>

  <div class="flex flex-col items-center justify-center">
    <img
      id="car"
      src="../assets/img/landingPageCar.png"
      alt="landingpage"
      class="h-screen w-screen object-cover"
      :class="{ 'blur-md': isLandingBoxVisible }"
    />
  </div>

  <div v-if="isLandingBoxVisible" id="landingBox">
    <img src="../assets/img/landingPageText.png" alt="landingpage" />
    <h1
      class="font-bold text-xl text-primary px-3 italic opacity-100 text-shadow-primary"
    >
      "Hallo Taxiheld...,
    </h1>

    <p class="text-xs text-right text-primary px-3 py-5">
      mit dieser App verwaltest du deine Einnahmen und Ausgaben übersichtlich.
      Nutze Funktionen wie Foto-Upload für deine Coupons und Belege. Behalte
      einen klaren Finanzüberblick. Jetzt kostenlos registrieren & loslegen!"
    </p>

    <figcaption class="text-right text-xs text-primary pr-3">
      <cite title="Source Title">
        <a href="www.linkedin.com/in/beapitzschke">- Taxi Billing Team</a>
      </cite>
    </figcaption>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLandingBoxVisible: false,
      isLandingBtnVisible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLandingBtnVisible = true;
    }, 500);
    setTimeout(() => {
      this.isLandingBoxVisible = true;
    }, 1500);
  },
};
</script>
<style>
#landingBox {
  background-color: rgba(130, 79, 110, 0.53);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding-bottom: 1.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  position: absolute;
  width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeIn 1s ease forwards;
}

/* Animations-Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%); /* Startposition der Animation */
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}
</style>
