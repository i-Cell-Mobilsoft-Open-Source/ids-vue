<template>
  <div class="demo">
    <h2>Checkboxes</h2>
    <h3>base</h3>
    <button @click="toggleIndeterminate()">
      indeterminate
    </button>
    <button @click="toggleDisabled()">
      disabled
    </button>
    <button @click="toggleValidity()">
      validity
    </button>
    <button @click="change()">
      size
    </button>
    <button @click="toggleChecked()">
      check
    </button>
    <IdsCheckbox :id="'ids-checkbox-' + 4444555" :key="44444" v-model="checked" :size="'compact'" :variant="'surface'">
      Test 1.
      <template #IdsHintMsg>
        <IdsSuccessMessage>
          Test Success Msg
          <template #idsMessageSuffix>
            13/50
          </template>
        </IdsSuccessMessage>
      </template>
    </IdsCheckbox>
    compact, comfortable, spacious, dense
    <IdsCheckbox
      :id="'ids-checkbox-' + 445" :key="445" v-model="asd1" :disabled="disab"
      :size="sizeChange"
      :variant="'surface'" :readonly="false" :value="'korte'"
      :is-valid="validw"
      :indeterminate="indeterminate" @update:indeterminate="changeIndeterminate($event)"
    >
      Test 2.
      <template #IdsHintMsg>
        <IdsHintMessage>
          Test Msg
          <template #idsMessageSuffix>
            13/50
          </template>
        </IdsHintMessage>
      </template>
      <template #IdsErrorMsg>
        <IdsErrorMessage>
          Test Error Msg
          <template #idsMessageSuffix>
            13/50
          </template>
        </IdsErrorMessage>
      </template>
    </IdsCheckbox>
    <IdsCheckbox
      :id="'ids-checkbox-' + 444" :key="444" v-model="asd1" :disabled="disab"
      :size="sizeChange"
      :variant="'surface'" :readonly="false" :value="'alma'"
      :is-valid="validw"
    >
      This is a test.
      <template #IdsHintMsg>
        <IdsHintMessage>
          <template #IdsMessagePrefix>
            Test Hint
          </template>
          Test Text
          <template #idsMessageSuffix>
            13/50
          </template>
        </IdsHintMessage>
      </template>
      <template #IdsErrorMsg>
        <IdsErrorMessage>
          Test Error Msg
          <template #idsMessageSuffix>
            13/50
          </template>
        </IdsErrorMessage>
      </template>
    </IdsCheckbox>
    <IdsCheckbox
      :id="'ids-checkbox-' + 446" :key="446" v-model="asd1" :disabled="disab"
      :size="sizeChange"
      :variant="'surface'" :readonly="false" :value="'asd'"
      :is-valid="validw"
    >
      Test Label 1.
      <template #IdsHintMsg>
        <IdsHintMessage>
          <template #IdsMessagePrefix>
            Test Prefix Hint Msg
          </template>
          Test Hint
          <template #idsMessageSuffix>
            13/50
          </template>
        </IdsHintMessage>
      </template>
      <template #IdsErrorMsg>
        <IdsErrorMessage>
          Test Error Msg
          <template #idsMessageSuffix>
            13/50
          </template>
        </IdsErrorMessage>
      </template>
    </IdsCheckbox>
    <p>value: {{ asd1 }}</p>

    <h3>Disabled</h3>
    <IdsCheckbox
      v-for="(option, index) in allOptions" :key="index" :size="option.size" :variant="option.variant"
      :disabled="true"
    > 
      Its disabled
    </IdsCheckbox>
    <h3>indeterminate</h3>
    <IdsCheckbox
      v-for="(option, index) in allOptions" :id="'ids-checkbox-' + index + '-id'" :key="index"
      :size="option.size" :variant="option.variant"
    >
      This is a test msg.
    </IdsCheckbox>
    <IdsCheckbox
      v-for="(option, index) in allOptions" :id="'ids-checkbox-' + index + '-idn'" :key="index"
      :size="option.size" :variant="option.variant" :disabled="true" :indeterminate="true"
    >
      This is a test msg.
    </IdsCheckbox>
    <h3>error</h3>
    <IdsCheckbox
      v-for="(option, index) in allOptions" :id="'ids-checkbox-' + index + '-error'" :key="index"
      :size="option.size" :variant="option.variant" :is-valid="false"
    >
      This is a test msg.
    </IdsCheckbox>
    <IdsCheckbox
      v-for="(option, index) in allOptions" :id="'ids-checkbox-' + index + '-iererere'" :key="index"
      :size="option.size" :variant="option.variant" :invalid="true" :indeterminate="true"
    >
      This is a test msg.
    </IdsCheckbox>

    <div class="demo dark-container">
      <h2 class="text-white">
        light mode
      </h2>
      <IdsCheckbox
        v-for="(option, index) in allSizes" :id="'ids-checkbox-' + index + 'li'" :key="index" :size="option"
        :variant="'light'" :indeterminate="false"
      >
        This is a test msg.
      </IdsCheckbox>
      <h3>Disabled</h3>
      <IdsCheckbox
        v-for="(option, index) in allSizes" :id="'ids-checkbox-' + index + '-dilis'" :key="index"
        :size="option" :variant="'light'" :disabled="true"
      >
        This is a test msg.
      </IdsCheckbox>
      <h3>indeterminate</h3>
      <IdsCheckbox
        v-for="(option, index) in allSizes" :id="'ids-checkbox-' + index + '-idli'" :key="index"
        :size="option" :variant="'light'" :indeterminate="true"
      >
        This is a test msg.
      </IdsCheckbox>
      <IdsCheckbox
        v-for="(option, index) in allSizes" :id="'ids-checkbox-' + index + '-idnli'" :key="index"
        :size="option" :variant="'light'" :disabled="true" :indeterminate="true"
      >
        This is a test msg.
      </IdsCheckbox>
      <h3>error</h3>
      <IdsCheckbox
        v-for="(option, index) in allSizes" :id="'ids-checkbox-' + index + '-errorli'" :key="index"
        :size="option" :variant="'light'" :is-valid="false"
      >
        This is a test msg.
      </IdsCheckbox>
      <IdsCheckbox
        v-for="(option, index) in allSizes" :id="'ids-checkbox-' + index + '-iererereli'" :key="index"
        :size="option" :variant="'light'" :is-valid="false" :indeterminate="true"
      >
        This is a test msg.
      </IdsCheckbox>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import IdsCheckbox from "../components/checkbox/IdsCheckbox.vue";
import IdsHintMessage from "../components/message/IdsHintMessage.vue";
import IdsErrorMessage from "../components/message/IdsErrorMessage.vue";
import IdsSuccessMessage from "../components/message/IdsSuccessMessage.vue";

const indeterminate = ref(false);
const disab = ref(false);
const checked = ref();
const validw = ref(true);
const asd1 = ref(["alma", "korte", "asd"]);
const sizeChange = ref("compact");

type CheckboxOptions = {
  size?: "compact" | "comfortable" | "spacious" | "dense";
  variant?:
  | "dark"
  | "surface";
};

const allSizes: Array<CheckboxOptions["size"]> = [
  "compact",
  "comfortable",
  "spacious",
  "dense"
];
const allVariants: Array<CheckboxOptions["variant"]> = [
  "dark",
  "surface"
];

const allOptions: CheckboxOptions[] = [];

function change(): void {
  sizeChange.value = "dense";
}

function changeIndeterminate(ind: boolean): void {
  indeterminate.value = ind;
}

function toggleValidity(): void {
  validw.value = !validw.value;
}

function toggleIndeterminate(): void {
  indeterminate.value = !indeterminate.value;
}

function toggleDisabled(): void {
  disab.value = !disab.value;
}

function toggleChecked(): void {
  checked.value = !checked.value;
}

for (const size of allSizes) {
  for (const variant of allVariants) {
    const options: CheckboxOptions = { size, variant };
    allOptions.push(options);
  }
}
</script>
<style scoped lang="scss">
@import "./demo-style.scss";

.dark-container {
  background-color: black;
  padding: 16px;
}
</style>