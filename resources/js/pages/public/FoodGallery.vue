<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });

const gallery = [
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-030.jpg',
        alt: 'Creazioni gastronomiche',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-031.jpg',
        alt: 'Dettagli di cucina',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-032.jpg',
        alt: 'Allestimenti eleganti',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-033.jpg',
        alt: 'Buffet di benvenuto',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-034.jpg',
        alt: 'Piatti della tradizione',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-035.jpg',
        alt: 'Presentazione gourmet',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-036.jpg',
        alt: 'Atmosfera conviviale',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-037.jpg',
        alt: 'Dettagli a tavola',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-038.jpg',
        alt: 'Selezioni di ingredienti',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-039.jpg',
        alt: 'Cura del dettaglio',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-040.jpg',
        alt: 'Gusto e raffinatezza',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-041.jpg',
        alt: 'Piatti contemporanei',
    },
    {
        src: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-042.jpg',
        alt: 'Sapori autentici',
    },
];
</script>

<template>
    <Head title="Food">
        <meta
            name="description"
            content="Cucina adatta a soddisfare ogni esigenza, tra tradizione e innovazione gastronomica."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-12 pt-2">
        <div
            class="rounded-[32px] border border-white/60 bg-white/75 p-10 shadow-xl md:p-14"
        >
            <div class="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
                <div class="space-y-4 public-reveal">
                    <p
                        class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                    >
                        Food
                    </p>
                    <h1 class="font-display text-4xl md:text-5xl">
                        “Non si può pensare bene, amare bene, dormire bene se
                        prima non si è mangiato bene.”
                    </h1>
                    <p class="text-sm text-[var(--public-olive)]">
                        _ Virginia Woolf
                    </p>
                </div>
                <div class="space-y-4 text-[var(--public-olive)] public-reveal">
                    <p>
                        Al Settimo Cielo propone una cucina capace di soddisfare
                        le esigenze dei clienti attraverso il connubio perfetto
                        tra tradizione e innovazione gastronomica.
                    </p>
                    <p>
                        Dal talento dello Chef Ruggiero D’Ascenzo, attivo nel
                        settore dal 1978, nascono proposte su misura e una
                        costante ricerca di abbinamenti che rendono ogni
                        ricevimento unico.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 py-12">
        <div class="flex items-center justify-between pb-6">
            <h3 class="font-display text-2xl">Gallery food</h3>
            <span
                class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
            >
                Esperienza culinaria
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
            class="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/60 bg-[linear-gradient(120deg,_rgba(184,91,53,0.15),_rgba(86,98,74,0.15))] p-10 md:flex-row md:items-center"
        >
            <div class="space-y-2">
                <p
                    class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
                >
                    Menu dedicati
                </p>
                <p class="font-display text-2xl md:text-3xl">
                    Tradizione, esperienza e innovazione per ogni evento.
                </p>
            </div>
            <Link
                href="/sede-e-recapiti"
                class="rounded-full bg-[var(--public-night)] px-6 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-[var(--public-terracotta)]"
            >
                Richiedi informazioni
            </Link>
        </div>
    </section>
</template>
