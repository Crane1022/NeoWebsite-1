<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

const allTags = computed(() => {
  const set = new Set()
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
  return ['All', ...Array.from(set)]
})

const activeTag = ref('All')

const filtered = computed(() => {
  if (activeTag.value === 'All') return projects
  return projects.filter((p) => p.tags.includes(activeTag.value))
})
</script>

<template>
  <div class="relative z-10 px-6 sm:px-8 max-w-7xl mx-auto pt-24 pb-32">
    <p class="text-xs tracking-widest uppercase text-muted-foreground mb-4 animate-fade-rise">Portfolio</p>
    <h1
      class="animate-fade-rise-delay text-5xl sm:text-6xl leading-[1] tracking-tight mb-6"
      style="font-family: 'Instrument Serif', serif"
    >
      My <em class="not-italic text-muted-foreground">projects</em>
    </h1>
    <p class="animate-fade-rise-delay-2 text-muted-foreground max-w-2xl mb-10">
      Every card below embeds a live preview of the actual site — click through to explore, or
      hover to see it in motion.
    </p>

    <div class="flex flex-wrap gap-2 mb-10">
      <button
        v-for="tag in allTags"
        :key="tag"
        type="button"
        class="text-xs rounded-full px-4 py-2 transition-colors"
        :class="
          activeTag === tag
            ? 'liquid-glass text-foreground'
            : 'text-muted-foreground border border-border hover:text-foreground'
        "
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ProjectCard v-for="project in filtered" :key="project.id" :project="project" />
    </div>

    <p v-if="filtered.length === 0" class="text-muted-foreground text-sm mt-10">
      No projects match that filter yet.
    </p>
  </div>
</template>
