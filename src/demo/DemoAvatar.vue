<template>
  <div class="demo">
    <h2>Avatars</h2>
    <IdsAvatar
      v-for="(option, index) in allOptions"
      :id="`${option.variant}-${option.size}-avatar-monogram`"
      :key="index"
      :size="option.size"
      :variant="option.variant"
    >
      BB
    </IdsAvatar>
    <IdsAvatar
      v-for="(option, index) in allOptions"
      :id="`${option.variant}-${option.size}-avatar-user`"
      :key="index"
      :size="option.size"
      :variant="option.variant"
    />

    <IdsAvatar
      v-for="(option, index) in allSizeOptions"
      :id="`${option.size}-avatar-with-image`"
      :key="index"
      :size="option.size"
      image="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
    />
    <IdsAvatar
      v-for="(option, index) in allOptions"
      :id="`${option.variant}-${option.size}-avatar-label-text`"
      :key="index"
      :size="option.size"
      :variant="option.variant"
    >
      <template #labelText>
        Label text
      </template>
      <template #subText>
        Sub text
      </template>
    </IdsAvatar>
  </div>
</template>

<script setup lang="ts">
import IdsAvatar from "../components/IdsAvatar.vue";
type AvatarOptions = {
  size?: "compact" | "comfortable" | "spacious";
  variant?: "surface" | "primary" | "secondary" | "light" | "dark";
};

const allSizes: Array<AvatarOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
];
const allVariants: Array<AvatarOptions["variant"]> = [
  "surface",
  "primary",
  "secondary",
  "light",
  "dark",
];

const allOptions: AvatarOptions[] = [];
const allSizeOptions: Pick<AvatarOptions, "size">[] = [];

for (const size of allSizes) {
  for (const variant of allVariants) {
    const options: AvatarOptions = { size, variant };
    allOptions.push(options);
  }
}

for (const size of allSizes) {
  const options: Pick<AvatarOptions, "size"> = { size };
  allSizeOptions.push(options);
}
</script>

<style scoped>
@import "./demo-style.scss";
</style>
