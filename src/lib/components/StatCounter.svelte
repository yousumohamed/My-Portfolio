<script lang="ts">
    import type { Tweened } from "svelte/motion";

    // These are the "properties" (props) this component accepts.
    // It needs a label to display and a "tweened" store for the number.
    export let label: string;
    export let store: Tweened<number>;
</script>

<div
    class="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md py-4 h-[200px]"
>
    <dt
        class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400"
    >
        {label}
    </dt>
    <dd
        class="order-1 text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400"
    >
        <!-- 
      Because 'store' is a top-level prop, we CAN use the $ syntax here without any errors!
    -->
        +{Math.round($store)}
    </dd>
</div>
