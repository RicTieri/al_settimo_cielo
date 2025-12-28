<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Weddings & Events', href: '/wedding-events-gallery' },
    { label: 'Food', href: '/food-gallery' },
    { label: 'Residence', href: '/residence-gallery' },
    { label: 'Location', href: '/location' },
    { label: 'Contatti', href: '/sede-e-recapiti' },
];
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
                <div
                    class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-10 pt-8 md:flex-row md:items-center md:justify-between"
                >
                    <Link href="/" class="flex items-center gap-4">
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
                    <nav
                        class="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.22em] text-[var(--public-olive)]"
                    >
                        <Link
                            v-for="item in navItems"
                            :key="item.href"
                            :href="item.href"
                            class="transition hover:text-[var(--public-terracotta)]"
                        >
                            {{ item.label }}
                        </Link>
                    </nav>
                </div>
            </header>

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
