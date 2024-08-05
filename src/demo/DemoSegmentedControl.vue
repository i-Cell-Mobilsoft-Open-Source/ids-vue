<template>
  <div class="demo">
    <h1>Segmented control</h1>
    <div class="row">
      <div class="col">
        <h3>Single selection</h3>
        <IdsSegmentedControl v-model="singleSelection" :appearance="'filled'" :variant="'primary'" :size="'comfortable'">
          <IdsSegmentedControlItem value="first" label="Label 1" />
          <IdsSegmentedControlItem value="second" label="Label 2" />
          <IdsSegmentedControlItem value="third" label="Label 3" />
        </IdsSegmentedControl>
      </div>

      <div class="col">
        <h3>Multi selection</h3>
        <IdsSegmentedControl 
          v-model="multiSelection"
          :appearance="'filled'" 
          :variant="'primary'" 
          :size="'comfortable'"
          :multi-select="true"
        >
          <IdsSegmentedControlItem value="first" label="Label 1" />
          <IdsSegmentedControlItem value="second" label="Label 2" />
          <IdsSegmentedControlItem value="third" label="Label 3" />
        </IdsSegmentedControl>
      </div>
    </div>

    <div v-for="(appearance, appearanceIndex) in appearances" :key="appearanceIndex">
      <h3>{{ appearance.toUpperCase() }}</h3>
      <div v-for="(variant, variantIndex) in variants" :key="variantIndex">
        <section :class="variant">
          <h4>{{ variant.toUpperCase() }}</h4>
          <div v-for="(size, sizeIndex) in sizes" :key="sizeIndex">
            <h5>{{ size }}</h5>
            <div class="segmented-control-group">
              <IdsSegmentedControl v-model="multiSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlItem value="first">
                  <template #icon>
                    <IdsIcon :icon="icon.lightbulb" />
                  </template>
                </IdsSegmentedControlItem>
                <IdsSegmentedControlItem value="second">
                  <template #icon>
                    <IdsIcon :icon="icon.account" />
                  </template>
                </IdsSegmentedControlItem>
                <IdsSegmentedControlItem value="third">
                  <template #icon>
                    <IdsIcon :icon="icon.alarm" />
                  </template>
                </IdsSegmentedControlItem>
              </IdsSegmentedControl>

              <IdsSegmentedControl v-model="multiSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlItem value="first" label="Label 1" />
                <IdsSegmentedControlItem value="second" label="Label 2" />
                <IdsSegmentedControlItem value="third" label="Label 3" />
              </IdsSegmentedControl>

              <IdsSegmentedControl v-model="multiSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlItem value="first" label="Label 1">
                  <IdsIcon :icon="icon.lightbulb" />
                </IdsSegmentedControlItem>
                <IdsSegmentedControlItem value="second" label="Label 2">
                  <IdsIcon :icon="icon.account" />
                </IdsSegmentedControlItem>
                <IdsSegmentedControlItem value="third" label="Label 3">
                  <IdsIcon :icon="icon.alarm" />
                </IdsSegmentedControlItem>
              </IdsSegmentedControl>

              <IdsSegmentedControl v-model="multiSelection2" :appearance="appearance" :variant="variant" :size="size">
                <IdsSegmentedControlItem value="first" label="Label 1">
                  <template #icon>
                    <IdsIcon :icon="icon.lightbulb" />
                  </template>
                  <template #suffixContent>
                    <span>$</span>
                  </template>
                </IdsSegmentedControlItem>
                <IdsSegmentedControlItem value="second" label="Label 2">
                  <template #icon>
                    <IdsIcon :icon="icon.account" />
                  </template>
                  <template #suffixContent>
                    <span>$</span>
                  </template>
                </IdsSegmentedControlItem>
                <IdsSegmentedControlItem value="third" label="Label 3">
                  <template #icon>
                    <IdsIcon :icon="icon.alarm" />
                  </template>
                  <template #suffixContent>
                    <span>$</span>
                  </template>
                </IdsSegmentedControlItem>
              </IdsSegmentedControl>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
 import IdsSegmentedControl from '../components/segmented-control/IdsSegmentedControl.vue';
 import IdsSegmentedControlItem from '../components/segmented-control/IdsSegmentedControlItem.vue';
 import IdsIcon from '../components/icon/IdsIcon.vue';
 import { Size, SizeType } from '../models/size.type';
 import { SegmentedControlVariant, SegmentedControlVariantType } from '../components/segmented-control/models/IdsSegmentedControlVariant.type';
 import { SegmentedControlAppearance, SegmentedControlAppearanceType } from '../components/segmented-control/models/IdsSegmentedControlAppearance.type';
 import mdiLightbulbOnOutline from '@mdi/svg/svg/lightbulb-on-outline.svg?component';
 import mdiAccount from '@mdi/svg/svg/account.svg?component';
 import mdiAlarm from '@mdi/svg/svg/alarm.svg?component';
 import { ref } from "vue";

 const singleSelection = ref(['first']);
 const multiSelection = ref(['first']);
 const multiSelection2 = ref(['first']);
 
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