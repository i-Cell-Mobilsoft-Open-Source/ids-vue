<template>
  <div class="demo">
    <h1>Segmented control</h1>
    <div class="row">
      <h3>Single selection</h3>
      <IdsSegmentedControlToggle v-model="singleSelection" :appearance="'filled'" :variant="'primary'" :size="'comfortable'">
        <IdsSegmentedControlToggleItem value="first" label="Label 1" />
        <IdsSegmentedControlToggleItem value="second" label="Label 2" />
        <IdsSegmentedControlToggleItem value="third" label="Label 3" />
      </IdsSegmentedControlToggle>
    </div>

    <div v-for="(appearance, appearanceIndex) in appearances" :key="appearanceIndex">
      <h3>{{ appearance.toUpperCase() }}</h3>
      <div v-for="(variant, variantIndex) in variants" :key="variantIndex">
        <section :class="variant">
          <h4>{{ variant.toUpperCase() }}</h4>
          <div v-for="(size, sizeIndex) in sizes" :key="sizeIndex">
            <h5>{{ size }}</h5>
            <div class="segmented-control-group">
              <IdsSegmentedControlToggle v-model="singleSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlToggleItem value="first">
                  <template #icon>
                    <IdsIcon :icon="icon.lightbulb" />
                  </template>
                </IdsSegmentedControlToggleItem>
                <IdsSegmentedControlToggleItem value="second">
                  <template #icon>
                    <IdsIcon :icon="icon.account" />
                  </template>
                </IdsSegmentedControlToggleItem>
                <IdsSegmentedControlToggleItem value="third">
                  <template #icon>
                    <IdsIcon :icon="icon.alarm" />
                  </template>
                </IdsSegmentedControlToggleItem>
              </IdsSegmentedControlToggle>

              <IdsSegmentedControlToggle v-model="singleSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlToggleItem value="first" label="Label 1" />
                <IdsSegmentedControlToggleItem value="second" label="Label 2" />
                <IdsSegmentedControlToggleItem value="third" label="Label 3" />
              </IdsSegmentedControlToggle>

              <IdsSegmentedControlToggle v-model="singleSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlToggleItem value="first" label="Label 1">
                  <IdsIcon :icon="icon.lightbulb" />
                </IdsSegmentedControlToggleItem>
                <IdsSegmentedControlToggleItem value="second" label="Label 2">
                  <IdsIcon :icon="icon.account" />
                </IdsSegmentedControlToggleItem>
                <IdsSegmentedControlToggleItem value="third" label="Label 3">
                  <IdsIcon :icon="icon.alarm" />
                </IdsSegmentedControlToggleItem>
              </IdsSegmentedControlToggle>

              <IdsSegmentedControlToggle v-model="singleSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlToggleItem value="first" label="Label 1">
                  <template #icon>
                    <IdsIcon :icon="icon.lightbulb" />
                  </template>
                  <template #suffixContent>
                    <span>$</span>
                  </template>
                </IdsSegmentedControlToggleItem>
                <IdsSegmentedControlToggleItem value="second" label="Label 2">
                  <template #icon>
                    <IdsIcon :icon="icon.account" />
                  </template>
                  <template #suffixContent>
                    <span>$</span>
                  </template>
                </IdsSegmentedControlToggleItem>
                <IdsSegmentedControlToggleItem value="third" label="Label 3">
                  <template #icon>
                    <IdsIcon :icon="icon.alarm" />
                  </template>
                  <template #suffixContent>
                    <span>$</span>
                  </template>
                </IdsSegmentedControlToggleItem>
              </IdsSegmentedControlToggle>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
 import IdsSegmentedControlToggle from '../components/segmented-control/IdsSegmentedControlToggle.vue';
 import IdsSegmentedControlToggleItem from '../components/segmented-control/IdsSegmentedControlToggleItem.vue';
 import IdsIcon from '../components/icon/IdsIcon.vue';
 import { Size, SizeType } from '../models/size.type';
 import { SegmentedControlVariant, SegmentedControlVariantType } from '../components/segmented-control/models/IdsSegmentedControlVariant.type';
 import { SegmentedControlAppearance, SegmentedControlAppearanceType } from '../components/segmented-control/models/IdsSegmentedControlAppearance.type';
 import mdiLightbulbOnOutline from '@mdi/svg/svg/lightbulb-on-outline.svg?component';
 import mdiAccount from '@mdi/svg/svg/account.svg?component';
 import mdiAlarm from '@mdi/svg/svg/alarm.svg?component';
 import { ref } from "vue";

 const singleSelection = ref(['first']);
 const singleSelection2 = ref(['first']);
 
 const icon = {
    lightbulb: mdiLightbulbOnOutline,
    account: mdiAccount,
    alarm: mdiAlarm,
  };

  const sizes: SizeType[] = [
    Size.DENSE,
    Size.COMPACT,
    Size.COMFORTABLE,
    Size.SPACIOUS,
  ];

  const variants: SegmentedControlVariantType[] = [
    SegmentedControlVariant.PRIMARY,
    SegmentedControlVariant.SURFACE,
    SegmentedControlVariant.LIGHT,
    SegmentedControlVariant.DARK,
  ];

  const appearances: SegmentedControlAppearanceType[] = [
    SegmentedControlAppearance.FILLED,
    SegmentedControlAppearance.OUTLINED,
  ];

</script>
<style scoped lang="scss">
  @import "./demo-style.scss";

  section {
  padding: 32px;

  &.dark,
  &.surface {
    background-color: transparent;
  }
  &.light {
    background-color: #252526;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: white;
    }
  }

  h3 {
    padding-top: 24px;
  }

  .segmented-control-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 24px;

    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
}

.row {
  display: flex;
  gap: 32px;
}

.col {
  margin-top: 2rem;
  margin-bottom: 1rem;
  flex: 1 1;
}
</style>