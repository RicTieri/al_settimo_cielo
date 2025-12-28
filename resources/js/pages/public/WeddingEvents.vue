<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });

const gallery = [
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-020.jpg',
        alt: 'Festa di matrimonio',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-021.jpg',
        alt: 'Dettagli floreali',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-022.jpg',
        alt: 'Location con piscina',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-023.jpg',
        alt: 'Ricevimento serale',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-024.jpg',
        alt: 'Elegante macchina per matrimoni',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-025.jpg',
        alt: 'Tavolo imperiale',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-026.jpg',
        alt: 'Festeggiamenti eleganti',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-027.jpg',
        alt: 'Cenni di luce',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-028.jpg',
        alt: 'Scenografia del ricevimento',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-029.jpg',
        alt: 'Atmosfera romantica',
    },
];
</script>

<template>
    <Head title="Weddings & Events">
        <meta
            name="description"
            content="Servizi aggiuntivi, stile e design per rendere unico il vostro ricevimento, in una location elegante e suggestiva."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-14 pt-2">
        <div
            class="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(120deg,_rgba(28,26,25,0.9),_rgba(28,26,25,0.6)),url('https://lirp.cdn-website.com/335c0af0/dms3rep/multi/opt/ristorante-al-settimo-cielo-montenero-di-bisaccia-019-2880w.jpg')] bg-cover bg-center p-12 text-white md:p-16"
        >
            <div class="max-w-2xl space-y-5 public-reveal">
                <p class="text-xs uppercase tracking-[0.5em] text-white/70">
                    Weddings & Events
                </p>
                <h1 class="font-display text-4xl md:text-5xl">
                    Location dei vostri sogni.
                </h1>
                <p class="font-body text-base text-white/80">
                    Lo spettacolo di un matrimonio perfetto nasce dagli
                    sguardi complici e dai dettagli che raccontano la vostra
                    storia. Noi li curiamo con passione, dall’inizio alla fine.
                </p>
                <div class="flex flex-wrap gap-4">
                    <Link
                        href="/sede-e-recapiti"
                        class="rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--public-night)] transition hover:bg-[var(--public-rose)]"
                    >
                        Prenota un incontro
                    </Link>
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
                    Servizi su misura
                </p>
                <h2 class="font-display text-3xl md:text-4xl">
                    Ogni dettaglio parla di voi.
                </h2>
            </div>
            <div class="space-y-4 text-[var(--public-olive)] public-reveal">
                <p>
                    Al Settimo Cielo si occuperà dell’organizzazione e della
                    supervisione del ricevimento, permettendo agli sposi di
                    vivere il loro giorno con serenità e meraviglia.
                </p>
                <p>
                    Servizi aggiuntivi, composizioni floreali, stile e design,
                    baby zone, free style bar, music & dj-set, buffet di
                    benvenuto e angoli personalizzati: ogni elemento è pensato
                    per rendere unico il vostro ricevimento.
                </p>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16">
        <div class="flex items-center justify-between pb-6">
            <h3 class="font-display text-2xl">Gallery eventi</h3>
            <span
                class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
            >
                Wedding moments
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
            class="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/60 bg-white/70 p-10 md:flex-row md:items-center"
        >
            <div class="space-y-2">
                <p
                    class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
                >
                    Prenota il tuo ricevimento
                </p>
                <p class="font-display text-2xl md:text-3xl">
                    Ogni evento diventa un racconto indimenticabile.
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
