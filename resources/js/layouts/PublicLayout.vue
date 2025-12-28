<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Weddings & Events', href: '/wedding-events-gallery' },
    { label: 'Food', href: '/food-gallery' },
    { label: 'Residence', href: '/residence-gallery' },
    { label: 'Location', href: '/location' },
    { label: 'Contatti', href: '/sede-e-recapiti' },
];

const page = usePage();
const isMobileMenuOpen = ref(false);
const isActive = (href: string) => {
    if (href === '/') {
        return page.url === '/';
    }

    return page.url.startsWith(href);
};

const navLinkBase =
    'group relative inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-[var(--public-olive)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--public-terracotta)]/40 md:text-sm md:tracking-[0.22em]';
const navLinkEffects =
    "after:pointer-events-none after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-transparent after:transition after:content-['']";
const navLinkStates =
    'hover:text-[var(--public-terracotta)] hover:after:bg-[var(--public-terracotta)] data-[active=true]:text-[var(--public-night)] data-[active=true]:after:bg-[var(--public-terracotta)]';

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};
</script>

<template>
    <div class="public-site min-h-screen">
        <div class="relative overflow-hidden">
            <div
                class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,167,160,0.35),_transparent_55%),radial-gradient(circle_at_20%_80%,_rgba(86,98,74,0.25),_transparent_60%)]"
            />
            <div
                class="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(184,91,53,0.45),_rgba(184,91,53,0))] blur-3xl"
            />
            <div
                class="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(93,74,50,0.35),_rgba(93,74,50,0))] blur-3xl"
            />

            <header class="relative z-10">
                <div class="mx-auto w-full max-w-6xl px-6 pt-4 md:pt-6">
                    <div class="flex flex-col gap-4 md:hidden">
                        <div class="relative flex items-center justify-center">
                            <Link
                                href="/"
                                class="flex flex-col items-center gap-2 text-center"
                            >
                                <img
                                    src="/assets/legacy/Logo_Settimocielo-276w.png"
                                    alt="Al Settimo Cielo"
                                    class="h-10 w-auto"
                                />
                                <div class="leading-tight">
                                    <p class="font-display text-lg tracking-[0.25em]">
                                        AL SETTIMO CIELO
                                    </p>
                                    <p class="text-[10px] uppercase tracking-[0.32em] text-[var(--public-olive)]">
                                        Montenero di Bisaccia
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="hidden w-full flex-col items-center gap-6 pb-10 md:flex">
                        <Link
                            href="/"
                            class="flex flex-col items-center gap-2 text-center"
                        >
                            <img
                                src="/assets/legacy/Logo_Settimocielo-276w.png"
                                alt="Al Settimo Cielo"
                                class="h-12 w-auto"
                            />
                            <div class="leading-tight">
                                <p class="font-display text-xl tracking-[0.2em]">
                                    AL SETTIMO CIELO
                                </p>
                                <p class="text-xs uppercase tracking-[0.3em] text-[var(--public-olive)]">
                                    Montenero di Bisaccia
                                </p>
                            </div>
                        </Link>
                        <nav class="flex flex-wrap items-center gap-4 text-[var(--public-olive)]">
                            <Link
                                v-for="item in navItems"
                                :key="item.href"
                                :href="item.href"
                                :data-active="isActive(item.href) ? 'true' : 'false'"
                                :aria-current="isActive(item.href) ? 'page' : null"
                                :class="[navLinkBase, navLinkEffects, navLinkStates]"
                            >
                                {{ item.label }}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <div
                v-if="isMobileMenuOpen"
                class="fixed inset-0 z-50 flex flex-col justify-between bg-white/90 px-6 py-8 text-[var(--public-ink)] backdrop-blur-md md:hidden"
            >
                <div class="flex items-center justify-between">
                    <p class="font-display text-lg tracking-[0.25em]">
                        AL SETTIMO CIELO
                    </p>
                    <button
                        type="button"
                        class="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--public-olive)] shadow-sm backdrop-blur transition hover:text-[var(--public-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--public-terracotta)]/40"
                        @click="closeMobileMenu"
                    >
                        Chiudi
                    </button>
                </div>
                <nav class="flex flex-col gap-4 text-[var(--public-olive)]">
                    <Link
                        v-for="item in navItems"
                        :key="item.href"
                        :href="item.href"
                        :data-active="isActive(item.href) ? 'true' : 'false'"
                        :aria-current="isActive(item.href) ? 'page' : null"
                        :class="[navLinkBase, navLinkEffects, navLinkStates, 'w-full justify-start text-left']"
                        @click="closeMobileMenu"
                    >
                        {{ item.label }}
                    </Link>
                </nav>
                <div class="text-xs uppercase tracking-[0.32em] text-[var(--public-olive)]">
                    Montenero di Bisaccia
                </div>
            </div>
            <div
                v-if="!isMobileMenuOpen"
                class="fixed inset-x-4 bottom-4 z-30 flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[var(--public-olive)] shadow-sm backdrop-blur md:hidden"
            >
                <span>Al Settimo Cielo</span>
                <button
                    type="button"
                    class="rounded-full bg-[var(--public-night)] px-4 py-2 text-white transition hover:bg-[var(--public-terracotta)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--public-terracotta)]/40"
                    @click="isMobileMenuOpen = true"
                >
                    Menu
                </button>
            </div>

            <main class="relative z-10">
                <slot />
            </main>

            <footer class="relative z-10 border-t border-white/70">
                <div
                    class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-[var(--public-olive)] md:flex-row md:items-center md:justify-between"
                >
                    <div>
                        <p class="font-display text-lg text-[var(--public-ink)]">
                            Al Settimo Cielo
                        </p>
                        <p>Contrada Pozzo Innamorato SNC</p>
                        <p>86036 - Montenero di Bisaccia (CB)</p>
                    </div>
                    <div class="flex flex-col gap-2 text-[var(--public-ink)]">
                        <a
                            href="tel:+390875967456"
                            class="font-body text-base hover:text-[var(--public-terracotta)]"
                        >
                            +39 0875 967456
                        </a>
                        <a
                            href="mailto:info.alsettimocielo@gmail.com"
                            class="font-body text-base hover:text-[var(--public-terracotta)]"
                        >
                            info.alsettimocielo@gmail.com
                        </a>
                    </div>
                    <p class="text-xs uppercase tracking-[0.3em]">
                        Oasi di relax e ricevimenti
                    </p>
                </div>
            </footer>
        </div>
    </div>
</template>
