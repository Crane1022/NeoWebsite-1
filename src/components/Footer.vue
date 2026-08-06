<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 border-t border-border/60 mt-32">
    <div
      class="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <p class="text-sm text-muted-foreground text-center sm:text-left">
        © {{ year }} Final Year Project. Built with Vue &amp; Tailwind CSS.
      </p>
      <div class="flex items-center gap-6">
        <a href="mailto:you@example.com" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Email
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>
