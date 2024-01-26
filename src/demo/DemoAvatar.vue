<template>
  <div class="demo">
    <h2>Avatars</h2>
    <IdsAvatar
      v-for="(option, index) in allOptions"
      :key="index"
      :size="option.size"
      :variant="option.variant"
      :id="`${option.variant}-${option.size}-avatar-monogram`"
    >
      BB
    </IdsAvatar>
    <IdsAvatar
      v-for="(option, index) in allOptions"
      :key="index"
      :size="option.size"
      :variant="option.variant"
      :id="`${option.variant}-${option.size}-avatar-user`"
    >
    </IdsAvatar>

    <IdsAvatar
      v-for="(option, index) in allSizeOptions"
      :key="index"
      :size="option.size"
      image="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
      :id="`${option.size}-avatar-with-image`"
    >
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
.demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 40px;
}

p {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.pt-2 {
  padding-top: 2rem;
}
</style>
