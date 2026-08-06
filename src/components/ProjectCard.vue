<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const iframeLoaded = ref(false)
const iframeFailed = ref(false)

function handleIframeLoad() {
  iframeLoaded.value = true
}

// Most browsers won't fire onerror for a blocked X-Frame-Options embed —
// this timeout is the practical fallback so the card never looks broken.
const FALLBACK_MS = 4000
setTimeout(() => {
  if (!iframeLoaded.value) iframeFailed.value = true
}, FALLBACK_MS)
</script>

<template>
  <article
    class="liquid-glass-surface rounded-3xl overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1"
  >
    <!-- Live preview -->
    <a
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      class="relative block aspect-[16/10] overflow-hidden bg-secondary"
    >
      <template v-if="!iframeFailed">
        <div class="absolute inset-0" style="pointer-events: none">
          <iframe
            :src="project.url"
            title="preview"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            class="origin-top-left"
            style="width: 250%; height: 250%; transform: scale(0.4); border: 0"
            @load="handleIframeLoad"
          />
        </div>
      </template>
      <template v-else>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-2">
          <span class="text-4xl" style="font-family: 'Instrument Serif', serif">{{ project.title.charAt(0) }}</span>
          <span class="text-xs text-muted-foreground">Preview unavailable — visit the live site</span>
        </div>
      </template>

      <div
        class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300"
      >
        <span
          class="liquid-glass rounded-full px-5 py-2 text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0"
        >
          Visit live site ↗
        </span>
      </div>
    </a>

    <!-- Content -->
    <div class="p-6 flex flex-col gap-3 flex-1">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-2xl text-foreground" style="font-family: 'Instrument Serif', serif">
          {{ project.title }}
        </h3>
        <span v-if="project.year" class="text-xs text-muted-foreground pt-1 whitespace-nowrap">{{ project.year }}</span>
      </div>

      <p class="text-sm text-muted-foreground">{{ project.tagline }}</p>
      <p class="text-sm text-muted-foreground leading-relaxed">{{ project.description }}</p>

      <div class="flex flex-wrap gap-2 mt-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
        >
          {{ tag }}
        </span>
      </div>

      <div class="flex items-center gap-4 mt-4 pt-4 border-t border-border/60">
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-foreground hover:text-muted-foreground transition-colors"
        >
          Live preview ↗
        </a>
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Source code
        </a>
      </div>
    </div>
  </article>
</template>
