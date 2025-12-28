<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });

const gallery = [
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-008.jpg',
        alt: 'Area piscina',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-009.jpg',
        alt: 'Scorci della location',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-011.jpg',
        alt: 'Ricevimento all’aperto',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-012.jpg',
        alt: 'Dettagli floreali',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-013.jpg',
        alt: 'Atmosfera serale',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-014.jpg',
        alt: 'Eleganza e luce',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-015.jpg',
        alt: 'Spazi esterni',
    },
    {
        src: '/assets/legacy/ristorante-al-settimo-cielo-montenero-di-bisaccia-016-393w.jpg',
        alt: 'Piscina al tramonto',
    },
    {
        src: '/assets/legacy/ristorante-al-settimo-cielo-montenero-di-bisaccia-017-352w.jpg',
        alt: 'Relax a bordo piscina',
    },
];
</script>

<template>
    <Head title="Location">
        <meta
            name="description"
            content="La location Al Settimo Cielo offre sala ricevimenti, area piscina e terrazza panoramica per eventi indimenticabili."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-14 pt-2">
        <div
            class="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(120deg,_rgba(28,26,25,0.85),_rgba(28,26,25,0.4)),url('https://lirp.cdn-website.com/335c0af0/dms3rep/multi/opt/ristorante-al-settimo-cielo-montenero-di-bisaccia-007-2880w.jpg')] bg-cover bg-center p-12 text-white md:p-16"
        >
            <div class="max-w-2xl space-y-5 public-reveal">
                <p class="text-xs uppercase tracking-[0.5em] text-white/70">
                    La nostra location
                </p>
                <h1 class="font-display text-4xl md:text-5xl">
                    Spazi che cambiano atmosfera ad ogni ora del giorno.
                </h1>
                <p class="font-body text-base text-white/80">
                    Al Settimo Cielo dispone di sale ricevimenti, aree esterne e
                    una piscina scenografica che rendono ogni evento un
                   ’esperienza esclusiva.
                </p>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="grid gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div class="space-y-4 public-reveal">
                <p
                    class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                >
                    L’area piscina
                </p>
                <h2 class="font-display text-3xl md:text-4xl">
                    Un bordo piscina che incanta al primo sguardo.
                </h2>
                <p class="text-[var(--public-olive)]">
                    Circondata dal verde, la piscina è l’anima scenografica
                    della location. Qui si possono vivere aperitivi, ricevimenti,
                    feste e momenti alternativi, per un’esperienza esclusiva e
                    indimenticabile.
                </p>
            </div>
            <div class="public-reveal public-reveal-delay-1">
                <img
                    src="/assets/legacy/ristorante-al-settimo-cielo-montenero-di-bisaccia-016-393w.jpg"
                    alt="Piscina scenografica"
                    class="h-full w-full rounded-[32px] object-cover shadow-xl"
                />
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16">
        <div class="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
            <div class="public-reveal">
                <img
                    src="/assets/legacy/ristorante-al-settimo-cielo-montenero-di-bisaccia-017-352w.jpg"
                    alt="Sala ricevimenti"
                    class="h-full w-full rounded-[32px] object-cover shadow-xl"
                />
            </div>
            <div class="space-y-4 public-reveal public-reveal-delay-1">
                <p
                    class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                >
                    La sala
                </p>
                <h2 class="font-display text-3xl md:text-4xl">
                    Sala Aldebaran e sala Sotto le Stelle.
                </h2>
                <p class="text-[var(--public-olive)]">
                    La sala Aldebaran è l’area privilegiata per un ricevimento
                    memorabile. La sala Sotto le Stelle si affaccia sul giardino
                    e la terrazza panoramica completa l’esperienza con viste
                    suggestive.
                </p>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16">
        <div class="flex items-center justify-between pb-6">
            <h3 class="font-display text-2xl">Gallery location</h3>
            <span
                class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
            >
                Spazi e dettagli
            </span>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <img
                v-for="item in gallery"
                :key="item.src"
                :src="item.src"
                :alt="item.alt"
                class="h-56 w-full rounded-2xl object-cover shadow-lg"
            />
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-20">
        <div
            class="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/60 bg-white/75 p-10 md:flex-row md:items-center"
        >
            <div class="space-y-2">
                <p
                    class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
                >
                    Visita la location
                </p>
                <p class="font-display text-2xl md:text-3xl">
                    Ogni spazio è pronto ad accogliere il tuo evento.
                </p>
            </div>
            <Link
                href="/sede-e-recapiti"
                class="rounded-full bg-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[var(--public-terracotta)]"
            >
                Contattaci
            </Link>
        </div>
    </section>
</template>
