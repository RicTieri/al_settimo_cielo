<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });
</script>

<template>
    <Head title="Residence">
        <meta
            name="description"
            content="Due strutture, quattro soluzioni e tutto lo spazio per vivere un’esperienza di relax raffinato."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16 pt-2">
        <div
            class="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]"
        >
            <div class="space-y-6 public-reveal">
                <h1 class="font-display text-4xl md:text-5xl">
                    Due strutture, un’unica esperienza.
                </h1>
                <p class="font-body text-base text-[var(--public-olive)] md:text-lg">
                    La nostra idea è accogliervi offrendo due strutture
                    differenti: Al Settimo Cielo e Piccolo Marte. Entrambe
                    garantiscono soluzioni eleganti, camere raffinate e tutto ciò
                    che serve per abbandonarsi al relax.
                </p>
                <Link
                    href="/sede-e-recapiti"
                    class="inline-flex rounded-full bg-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[var(--public-terracotta)]"
                >
                    Prenota una visita
                </Link>
            </div>
            <div class="public-reveal public-reveal-delay-1">
                <img
                    src="https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/2026_1KZ_5864.jpg"
                    alt="Residence Al Settimo Cielo"
                    class="h-full w-full rounded-[32px] object-cover shadow-xl"
                />
            </div>
        </div>
    </section>


    <section class="mx-auto w-full max-w-6xl px-6 pb-20">
        <div class="flex items-center justify-between pb-6 public-reveal">
            <h2 class="font-display text-2xl md:text-3xl">
                Le nostre strutture
            </h2>
            <span
                class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
            >
                Residence
            </span>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
            <article
                class="flex flex-col gap-6 rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-sm public-reveal"
            >
                <div class="space-y-3">
                    <p class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]">
                        Al Settimo Cielo
                    </p>
                    <p class="font-display text-2xl">
                        Suite e appartamenti con piscina privata.
                    </p>
                    <p class="text-sm text-[var(--public-olive)]">
                        Un complesso esclusivo con ingressi indipendenti,
                        terrazze e servizi completi per un soggiorno elegante.
                    </p>
                </div>
                <Link
                    href="/al-settimo-cielo"
                    class="inline-flex w-fit rounded-full bg-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[var(--public-terracotta)]"
                >
                    Scopri Al Settimo Cielo
                </Link>
            </article>
            <article
                class="flex flex-col gap-6 rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-sm public-reveal public-reveal-delay-1"
            >
                <div class="space-y-3">
                    <p class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]">
                        Piccolo Marte
                    </p>
                    <p class="font-display text-2xl">
                        Camere con terrazza e giardini privati.
                    </p>
                    <p class="text-sm text-[var(--public-olive)]">
                        Un residence indipendente e ristrutturato con soluzioni
                        moderne, affacci panoramici e privacy totale.
                    </p>
                </div>
                <Link
                    href="/piccolo-marte"
                    class="inline-flex w-fit rounded-full bg-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[var(--public-terracotta)]"
                >
                    Scopri Piccolo Marte
                </Link>
            </article>
        </div>
    </section>
</template>
