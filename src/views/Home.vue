<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects.js'

const featured = projects.filter((p) => p.featured)
const videoFailed = ref(false)
// Bound via JS (not a static template attribute) so Vite doesn't try to
// resolve it as a build-time module import when the file isn't present yet.
const heroVideoSrc = '/videos/hero-bg.mp4'
</script>

<template>
  <div>
    <!-- ================= HERO ================= -->
    <section class="relative isolate overflow-hidden">
      <!-- Fullscreen looping background video. Drop your own file at
           /public/videos/hero-bg.mp4 — falls back to a gradient if absent. -->
      <video
        v-if="!videoFailed"
        class="absolute inset-0 w-full h-full object-cover z-0"
        autoplay
        loop
        muted
        playsinline
        @error="videoFailed = true"
      >
        <source :src="heroVideoSrc" type="video/mp4" />
      </video>

      <!-- Fallback / always-present base gradient so the hero never looks empty -->
      <div
        class="absolute inset-0 z-0"
        style="
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, hsl(201 90% 20%), transparent 60%),
            hsl(var(--background));
        "
      />
      <div class="absolute inset-0 z-0 bg-black/25" />

      <div class="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40 max-w-7xl mx-auto">
        <h1
          class="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-5xl font-normal"
          style="font-family: 'Instrument Serif', serif"
        >
          Where <em class="not-italic text-muted-foreground">research</em> becomes
          <em class="not-italic text-muted-foreground">a working system.</em>
        </h1>

        <p class="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          This is my Final Year Project portfolio — a record of the models I trained, the
          systems I built, and the problems I chose to spend a year solving.
        </p>

        <div class="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-4 mt-12">
          <RouterLink
            to="/projects"
            class="liquid-glass rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03] cursor-pointer"
          >
            View My Work
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About me →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ================= FEATURED PROJECTS ================= -->
    <section id="projects" class="relative z-10 px-6 sm:px-8 max-w-7xl mx-auto pb-32">
      <div class="flex items-end justify-between gap-6 mb-10">
        <div>
          <p class="text-xs tracking-widest uppercase text-muted-foreground mb-3">Selected work</p>
          <h2 class="text-4xl sm:text-5xl" style="font-family: 'Instrument Serif', serif">
            Featured projects
          </h2>
        </div>
        <RouterLink
          to="/projects"
          class="hidden sm:block text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
        >
          View all →
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard v-for="project in featured" :key="project.id" :project="project" />
      </div>

      <RouterLink
        to="/projects"
        class="sm:hidden mt-8 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        View all projects →
      </RouterLink>
    </section>
  </div>
</template>
