<!--
Landing page
-->
<script lang="ts" setup>
definePageMeta({
  title: "Login",
  layout: "default",
});

const teamSelected = () =>
  window.localStorage.getItem("team") && !window.localStorage.getItem("invite");
const hasInvite = () => window.localStorage.getItem("invite");

const auth = useAuthState();
await checkAuth(false);

async function login() {
  if (!inBrowser()) return;

  const res = await loginTest();
  if (res.ok) {
    auth.setClient(!!res.val);
    navTo("/logged-in");
  } else {
    addNotification("error", "Log in failed:\n" + res.err); // TODO: format error
  }
}
</script>

<template>
  <div class="w-full flex-grow flex flex-col items-center">
    <!-- Title Section -->
    <SocialmetaTitle class="py-16" />

    <!-- Hero Text Section -->
    <div class="text-5xl p-8 text-center space-y-4">
      <div class="font-sans text-white/90 font-medium tracking-tight">
        <span class="text-gray-100">Craft</span><br />
        <span class="text-gray-200">Your</span><br />
        <span class="text-gray-300">Decentralized</span><br />
        <span class="text-gray-400">Identity</span>
      </div>
    </div>

    <!-- Spacer -->
    <div class="grow" />

    <!-- Tagline Section -->
    <div
      class="grow flex flex-col items-center text-lg text-gray-400 font-light tracking-wide"
    >
      The Future of Social Interaction
    </div>

    <!-- Buttons Section -->
    <div class="w-full max-w-md space-y-4 px-4 py-8">
      <Btn
        v-if="auth.loggedIn && hasInvite()"
        class="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg transition-all"
        to="/logged-in"
      >
        Enter Network
      </Btn>
      <Btn
        v-else-if="auth.loggedIn && teamSelected()"
        class="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg transition-all"
        to="/team-info"
      >
        Continue Journey
      </Btn>
      <Btn
        v-else-if="auth.loggedIn"
        class="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg transition-all"
        to="/select-team"
      >
        Choose Your Tribe
      </Btn>
      <Btn
        v-else
        class="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-lg transition-all"
        @click="login()"
      >
        Connect with <img src="/icp.png" class="h-6 inline" />
      </Btn>
    </div>

    <ICFooter class="mt-8" />
  </div>
</template>
