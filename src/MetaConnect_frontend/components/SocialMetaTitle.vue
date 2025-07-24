<script lang="ts" setup>
const props = defineProps<{
  logo?: string;
  linkTo?: string;
  logoUrl?: string;
}>();
</script>
<template>
  <div
    class="font-bold flex flex-row items-center w-full py-1 px-0 ml-0 text-xl min-h-20"
  >
    <NuxtLink :to="props.linkTo" v-if="props.logoUrl">
      <img
        :src="props.logoUrl"
        height="50"
        width="50"
        class="mb-2 rounded-md bg-gray-900 hover:border-2 hover:bg-white"
      />
    </NuxtLink>
    <IconLink
      :to="props.linkTo ?? ''"
      :logo="props.logo"
      v-else-if="props.linkTo"
    />
    <div v-else style="width: 1em; height: 1em" />

    <div
      class="flex-grow px-1 text-center flex items-center justify-center gap-2"
    >
      <slot>
        <div class="flex items-center">
          <span
            class="text-purple-600 dark:text-purple-300 transform rotate-12 transition-transform origin-top-left duration-300 hover:rotate-0 text-2xl"
          >
            MetaSocial
          </span>
        </div>
      </slot>
    </div>
    <slot name="action">
      <div style="width: 1em; height: 1em" />
    </slot>
  </div>
</template>
