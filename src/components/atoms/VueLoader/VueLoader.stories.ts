import { storiesOf } from '@storybook/vue';
import { brandVariations } from '../../utils';
import VueLoader from './VueLoader.vue';

const story = storiesOf('Atoms|Loader', module) as any;

story.add(
  'Loader Variants',
  () => ({
    components: { VueLoader },
    data(): any {
      return {
        variations: brandVariations,
      };
    },
    template: `<div>
<template v-for="variation in variations">
<vue-loader :color="variation" />
<vue-loader :color="variation" medium />
<vue-loader :color="variation" large />
<br />
<br />
</template>
</div>`,
  }),
  {
    info: {
      components: { VueLoader },
    },
  },
);