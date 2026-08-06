<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  // Front-end only placeholder. Wire this up to an API route,
  // Formspree, EmailJS, or similar before deploying.
  console.log('Contact form submitted:', form.value)
  submitted.value = true
}
</script>

<template>
  <div class="relative z-10 px-6 sm:px-8 max-w-2xl mx-auto pt-24 pb-32">
    <p class="text-xs tracking-widest uppercase text-muted-foreground mb-4 animate-fade-rise">Contact</p>
    <h1
      class="animate-fade-rise-delay text-5xl sm:text-6xl leading-[1] tracking-tight mb-6"
      style="font-family: 'Instrument Serif', serif"
    >
      Let's <em class="not-italic text-muted-foreground">talk</em>
    </h1>
    <p class="animate-fade-rise-delay-2 text-muted-foreground mb-12 max-w-xl">
      Questions about a project, or interested in collaborating? Send a message.
    </p>

    <form v-if="!submitted" class="flex flex-col gap-5" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm text-muted-foreground">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="liquid-glass-surface rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-foreground/40"
          placeholder="Your name"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="email" class="text-sm text-muted-foreground">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="liquid-glass-surface rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-foreground/40"
          placeholder="you@example.com"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="message" class="text-sm text-muted-foreground">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          rows="5"
          class="liquid-glass-surface rounded-xl px-4 py-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-foreground/40 resize-none"
          placeholder="What's on your mind?"
        />
      </div>

      <button
        type="submit"
        class="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground self-start transition-transform hover:scale-[1.03] cursor-pointer"
      >
        Send message
      </button>
    </form>

    <div v-else class="liquid-glass-surface rounded-2xl px-6 py-8 text-center">
      <p class="text-lg text-foreground mb-2" style="font-family: 'Instrument Serif', serif">Thank you</p>
      <p class="text-sm text-muted-foreground">Your message has been noted. I'll get back to you soon.</p>
    </div>
  </div>
</template>
