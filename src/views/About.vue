<script setup>
const skills = [
  'Python', 'Vue.js', 'TensorFlow / Keras', 'scikit-learn',
  'OpenCV', 'Pinia', 'SQL', 'Tailwind CSS',
]

const timeline = [
  { year: '2023', label: 'Started BSc in Computing / Data Science' },
  { year: '2025', label: 'Machine learning & computer vision coursework' },
  { year: '2026', label: 'Final Year Project: AI-driven privacy profiling system' },
]
</script>

<template>
  <div class="relative z-10 px-6 sm:px-8 max-w-4xl mx-auto pt-24 pb-32">
    <p class="text-xs tracking-widest uppercase text-muted-foreground mb-4 animate-fade-rise">About</p>
    <h1
      class="animate-fade-rise-delay text-5xl sm:text-6xl leading-[1] tracking-tight mb-8"
      style="font-family: 'Instrument Serif', serif"
    >
      Hi, I'm <em class="not-italic text-muted-foreground">[Your Name]</em>.
    </h1>

    <p class="animate-fade-rise-delay-2 text-muted-foreground text-lg leading-relaxed max-w-2xl">
      I'm a final-year Computing / Data Science student. This site collects the projects I built
      across my degree — from classical machine learning pipelines to computer vision and full-stack
      web applications — and the capstone project I'm currently finishing.
    </p>

    <div class="grid sm:grid-cols-2 gap-12 mt-20">
      <div>
        <h2 class="text-2xl mb-5" style="font-family: 'Instrument Serif', serif">Skills</h2>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in skills"
            :key="skill"
            class="text-xs text-muted-foreground border border-border rounded-full px-3 py-1.5"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <div>
        <h2 class="text-2xl mb-5" style="font-family: 'Instrument Serif', serif">Timeline</h2>
        <ul class="flex flex-col gap-4">
          <li v-for="item in timeline" :key="item.year" class="flex gap-4 text-sm">
            <span class="text-muted-foreground w-12 shrink-0">{{ item.year }}</span>
            <span class="text-foreground">{{ item.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
