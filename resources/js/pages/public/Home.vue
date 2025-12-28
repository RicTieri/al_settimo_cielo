<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });

const gallery = [
    {
        src: '/assets/legacy/Ricevimento_1-d890b275-598h.jpg',
        alt: 'Ricevimento elegante',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-004.jpg',
        alt: 'Sala ricevimenti',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-005.jpg',
        alt: 'Dettagli della location',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-006.jpg',
        alt: 'Atmosfera serale',
    },
];
</script>

<template>
    <Head title="Al Settimo Cielo">
        <meta
            name="description"
            content="Al Settimo Cielo è una struttura elegante inserita nel paesaggio suggestivo delle colline molisane nel territorio di Montenero di Bisaccia."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16 pt-4">
        <div
            class="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]"
        >
            <div class="space-y-6 public-reveal">
                <p
                    class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                >
                    Sale per matrimoni
                </p>
                <h1 class="font-display text-4xl leading-tight md:text-5xl">
                    Un ricevimento che si vive tra colline, luce e meraviglia.
                </h1>
                <p class="font-body text-base text-[var(--public-olive)] md:text-lg">
                    Al Settimo Cielo è una struttura elegante inserita nel
                    paesaggio suggestivo delle colline molisane di Montenero di
                    Bisaccia, pensata per accogliere matrimoni ed eventi
                    indimenticabili.
                </p>
                <div class="flex flex-wrap gap-4">
                    <Link
                        href="/location"
                        class="rounded-full bg-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[var(--public-terracotta)]"
                    >
                        Scopri la location
                    </Link>
                    <Link
                        href="/sede-e-recapiti"
                        class="rounded-full border border-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--public-night)] transition hover:border-[var(--public-terracotta)] hover:text-[var(--public-terracotta)]"
                    >
                        Contattaci
                    </Link>
                </div>
            </div>
            <div
                class="grid gap-4 sm:grid-cols-2 public-reveal public-reveal-delay-1"
            >
                <img
                    src="/assets/legacy/Ricevimento_1-d890b275-598h.jpg"
                    alt="Ricevimento"
                    class="h-full w-full rounded-3xl object-cover shadow-xl"
                />
                <div class="grid gap-4">
                    <img
                        src="https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/2026_1KZ_5864.jpg"
                        alt="Giardino della location"
                        class="h-full w-full rounded-3xl object-cover shadow-xl"
                    />
                    <div
                        class="rounded-3xl border border-white/70 bg-white/70 p-6 text-sm text-[var(--public-olive)] shadow-xl"
                    >
                        <p class="font-display text-lg text-[var(--public-ink)]">
                            7.000 mq di bellezza
                        </p>
                        <p>
                            Un’oasi di relax e benessere tra palme, fontane e
                            scorci panoramici.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div class="space-y-4 public-reveal">
                <p
                    class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                >
                    Un paesaggio che accoglie
                </p>
                <h2 class="font-display text-3xl md:text-4xl">
                    Una location ideale per ogni occasione.
                </h2>
            </div>
            <div class="space-y-4 text-[var(--public-olive)] public-reveal">
                <p>
                    Al Settimo Cielo è una sala ricevimenti di grande fascino
                    che nasce tra le dolci colline molisane. La suggestività del
                    paesaggio, l’eleganza e lo charme della struttura la rendono
                    perfetta per matrimoni, battesimi, anniversari, ricorrenze e
                    feste private.
                </p>
                <p>
                    Dispone di una sala principale con capienza fino a 300
                    persone, una sala con vista giardino, un’incantevole area a
                    bordo piscina e un’ampia terrazza panoramica.
                </p>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16">
        <div class="flex items-center justify-between pb-6">
            <h3 class="font-display text-2xl">
                Atmosfere che restano nella memoria
            </h3>
            <span
                class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
            >
                Gallery
            </span>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <img
                v-for="item in gallery"
                :key="item.src"
                :src="item.src"
                :alt="item.alt"
                class="h-56 w-full rounded-2xl object-cover shadow-lg"
            />
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 py-16">
        <div
            class="rounded-[32px] border border-white/70 bg-white/80 p-10 shadow-xl md:p-12"
        >
            <div class="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                <div class="space-y-4 public-reveal">
                    <p
                        class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                    >
                        La cucina
                    </p>
                    <h3 class="font-display text-3xl md:text-4xl">
                        “Cucina non è mangiare. È molto, molto di più. Cucina è
                        poesia.”
                    </h3>
                    <p class="text-sm text-[var(--public-olive)]">
                        _ Heinz Beck
                    </p>
                </div>
                <div class="space-y-4 text-[var(--public-olive)] public-reveal">
                    <p>
                        Ruggiero D’Ascenzo, patron ed executive chef, si prende
                        cura della preparazione dei piatti: piacere, creatività
                        ed eleganza sono le parole chiave che li definiscono.
                    </p>
                    <p>
                        L’esperienza e la costante innovazione completano un
                        percorso gastronomico pensato per sorprendere.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-20">
        <div
            class="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/60 bg-[linear-gradient(120deg,_rgba(184,91,53,0.15),_rgba(86,98,74,0.15))] p-10 md:flex-row md:items-center"
        >
            <div class="space-y-2">
                <p
                    class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
                >
                    Prenota una visita
                </p>
                <p class="font-display text-2xl md:text-3xl">
                    Ogni dettaglio è pensato per accogliere il tuo giorno
                    speciale.
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
