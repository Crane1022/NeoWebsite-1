<script setup>
const entries = [
  {
    date: 'Mar 2026',
    title: 'The ANN paradox',
    excerpt:
      'Why the neural network scored the highest raw accuracy but the lowest Macro F1 on an imbalanced accident-severity dataset — and what that taught me about picking metrics before models.',
  },
  {
    date: 'Jan 2026',
    title: 'Debugging a blank admin page',
    excerpt:
      'A single multi-root component was enough to silently break routing in a Vue 3 + Pinia app. Notes on tracking it down.',
  },
  {
    date: 'Nov 2025',
    title: 'Fine-tuning on feedback',
    excerpt:
      'Building a feedback loop into an image classifier so it keeps improving after deployment, without retraining from scratch every time.',
  },
]
</script>

<template>
  <div class="relative z-10 px-6 sm:px-8 max-w-3xl mx-auto pt-24 pb-32">
    <p class="text-xs tracking-widest uppercase text-muted-foreground mb-4 animate-fade-rise">Journal</p>
    <h1
      class="animate-fade-rise-delay text-5xl sm:text-6xl leading-[1] tracking-tight mb-12"
      style="font-family: 'Instrument Serif', serif"
    >
      Notes along the way
    </h1>

    <div class="flex flex-col divide-y divide-border/60">
      <article v-for="entry in entries" :key="entry.title" class="py-8 first:pt-0">
        <span class="text-xs text-muted-foreground">{{ entry.date }}</span>
        <h2 class="text-2xl mt-2 mb-3" style="font-family: 'Instrument Serif', serif">
          {{ entry.title }}
        </h2>
        <p class="text-muted-foreground leading-relaxed">{{ entry.excerpt }}</p>
      </article>
    </div>
  </div>
</template>
