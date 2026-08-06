<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const sidebarOpen = ref(false)
const dropdownOpen = ref(false)
const dropdownRef = ref(null)

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'My Project' },
]

const moreLinks = [
  { to: '/journal', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

function closeSidebar() {
  sidebarOpen.value = false
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    dropdownOpen.value = false
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    dropdownOpen.value = false
    sidebarOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header class="relative z-30">
    <nav class="flex flex-row items-center justify-between px-6 sm:px-8 py-6 max-w-7xl mx-auto">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl sm:text-3xl tracking-tight text-foreground"
        style="font-family: 'Instrument Serif', serif"
      >
        Final Year<sup class="text-xs align-super">FYP</sup>
      </RouterLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <RouterLink
          v-for="link in primaryLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm transition-colors"
          :class="route.path === link.to ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'"
        >
          {{ link.label }}
        </RouterLink>

        <!-- Dropdown: Others -->
        <div ref="dropdownRef" class="relative">
          <button
            type="button"
            class="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            :aria-expanded="dropdownOpen"
            aria-haspopup="true"
            @click.stop="toggleDropdown"
          >
            Others
            <svg
              class="w-3.5 h-3.5 transition-transform duration-200"
              :class="dropdownOpen ? 'rotate-180' : ''"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <Transition name="page-fade">
            <div
              v-if="dropdownOpen"
              class="liquid-glass-surface absolute right-0 mt-3 w-44 rounded-2xl py-2 shadow-2xl"
            >
              <RouterLink
                v-for="link in moreLinks"
                :key="link.to"
                :to="link.to"
                class="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                @click="dropdownOpen = false"
              >
                {{ link.label }}
              </RouterLink>
            </div>
          </Transition>
        </div>

        <RouterLink
          to="/projects"
          class="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
        >
          View My Work
        </RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <button
        type="button"
        class="md:hidden liquid-glass rounded-full p-2.5 text-foreground"
        aria-label="Open menu"
        @click="sidebarOpen = true"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <!-- Mobile sidebar -->
    <Teleport to="body">
      <Transition name="scrim">
        <div
          v-if="sidebarOpen"
          class="fixed inset-0 bg-black/60 z-40 md:hidden"
          @click="closeSidebar"
        />
      </Transition>
      <Transition name="sidebar">
        <aside
          v-if="sidebarOpen"
          class="fixed top-0 right-0 h-full w-[78vw] max-w-sm z-50 md:hidden liquid-glass-surface flex flex-col"
          style="background: hsl(var(--background) / 0.98)"
        >
          <div class="flex items-center justify-between px-6 py-6">
            <span class="text-xl text-foreground" style="font-family: 'Instrument Serif', serif">Menu</span>
            <button
              type="button"
              class="liquid-glass rounded-full p-2 text-foreground"
              aria-label="Close menu"
              @click="closeSidebar"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
              </svg>
            </button>
          </div>

          <nav class="flex flex-col px-6 gap-1 mt-2 overflow-y-auto">
            <RouterLink
              v-for="link in [...primaryLinks, ...moreLinks]"
              :key="link.to"
              :to="link.to"
              class="py-3.5 text-lg border-b border-border/60 transition-colors"
              :class="route.path === link.to ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'"
              @click="closeSidebar"
            >
              {{ link.label }}
            </RouterLink>
          </nav>

          <div class="px-6 mt-auto mb-8">
            <RouterLink
              to="/projects"
              class="liquid-glass rounded-full px-6 py-3 text-sm text-foreground flex items-center justify-center"
              @click="closeSidebar"
            >
              View My Work
            </RouterLink>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>
