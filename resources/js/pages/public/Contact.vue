<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });
</script>

<template>
    <Head title="Contatti">
        <meta
            name="description"
            content="Contattaci per informazioni, consulenze e prenotazioni. Al Settimo Cielo, Montenero di Bisaccia."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16 pt-2">
        <div
            class="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(120deg,_rgba(28,26,25,0.9),_rgba(28,26,25,0.55)),url('https://lirp.cdn-website.com/335c0af0/dms3rep/multi/opt/2026_1KZ_5864-1920w.jpg')] bg-cover bg-center p-12 text-white md:p-16"
        >
            <div class="max-w-2xl space-y-5 public-reveal">
                <p class="text-xs uppercase tracking-[0.5em] text-white/70">
                    Contatti
                </p>
                <h1 class="font-display text-4xl md:text-5xl">
                    Al Settimo Cielo
                </h1>
                <p class="text-lg text-white/80">
                    Montenero di Bisaccia
                </p>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-20">
        <div class="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div
                class="space-y-6 rounded-[28px] border border-white/60 bg-white/80 p-10 shadow-xl"
            >
                <div>
                    <p
                        class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                    >
                        Informazioni
                    </p>
                    <h2 class="font-display text-3xl md:text-4xl">
                        Siamo qui per voi.
                    </h2>
                </div>
                <div class="space-y-4 text-[var(--public-olive)]">
                    <p>
                        Contrada Pozzo Innamorato SNC<br />
                        86036 - Montenero di Bisaccia (CB)
                    </p>
                    <p>
                        Telefono:
                        <a
                            href="tel:+390875967456"
                            class="text-[var(--public-night)] hover:text-[var(--public-terracotta)]"
                        >
                            +39 0875 967456
                        </a>
                    </p>
                    <p>
                        Email:
                        <a
                            href="mailto:info.alsettimocielo@gmail.com"
                            class="text-[var(--public-night)] hover:text-[var(--public-terracotta)]"
                        >
                            info.alsettimocielo@gmail.com
                        </a>
                    </p>
                </div>
                <p class="text-sm text-[var(--public-olive)]">
                    Compila il modulo per richiedere maggiori informazioni o per
                    prenotare una consulenza: siamo pronti ad ascoltare i tuoi
                    desideri.
                </p>
            </div>

            <div
                class="rounded-[28px] border border-white/60 bg-[linear-gradient(120deg,_rgba(184,91,53,0.15),_rgba(86,98,74,0.15))] p-8 shadow-xl"
            >
                <form
                    action="mailto:info.alsettimocielo@gmail.com"
                    method="post"
                    enctype="text/plain"
                    class="space-y-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        class="w-full rounded-full border border-white/60 bg-white/80 px-4 py-3 text-sm text-[var(--public-ink)] placeholder:text-[var(--public-olive)]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        class="w-full rounded-full border border-white/60 bg-white/80 px-4 py-3 text-sm text-[var(--public-ink)] placeholder:text-[var(--public-olive)]"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Messaggio"
                        class="w-full rounded-[24px] border border-white/60 bg-white/80 px-4 py-3 text-sm text-[var(--public-ink)] placeholder:text-[var(--public-olive)]"
                    />
                    <button
                        type="submit"
                        class="w-full rounded-full bg-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[var(--public-terracotta)]"
                    >
                        Invia richiesta
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
