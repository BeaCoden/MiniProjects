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
      :class="{ blur: isLandingBoxVisible }"
    />
  </div>

  <div
    v-show="isLandingBoxVisible"
    id="landingBox"
    class="bg-bodyGlass rounded-xl shadow-lg pb-5 px-5 absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-slideIn duration-1000"
  >
    <img src="../assets/img/landingPageText.png" alt="landingpage" />
    <h1
      class="font-bold text-xl text-primary px-3 italic opacity-100 text-shadow-primary"
    >
      "Hallo Taxiheld...,
    </h1>

    <p class="text-xs text-right text-primary px-3">
      mit dieser App verwaltest du deine Einnahmen und Ausgaben übersichtlich.
      Nutze Funktionen wie Foto-Upload für deine Coupons und Belege. Behalte
      einen klaren Finanzüberblick. Jetzt kostenlos registrieren & loslegen!"
    </p>
    <br />
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
      setTimeout(() => {
        this.isLandingBoxVisible = true;
      }, 1000); // Sie können die Dauer auf Ihren Wunschwert setzen
    }, 500); // Zeitverzögerung, um den Button zuerst anzuzeigen
  },
};
</script>
