<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Users } from 'lucide-vue-next';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });

const suites = [
    {
        title: 'Lira',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-054.jpg',
        alt: 'Monolocale Lira',
        description:
            'Monolocale con letto matrimoniale arredato in maniera essenziale e dotato di angolo cottura e bagno privato con doccia. Grazioso giardino privato e possibilità di usufruire della piscina.',
        features:
            'Ingresso indipendente · biancheria, phone, frigo-bar, WiFi, angolo cottura, parcheggio e uso piscina',
    },
    {
        title: 'Idra',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-055.jpg',
        alt: 'Bilocale Idra',
        description:
            'Bilocale con stanza matrimoniale e zona living con angolo cottura. Open space con comodo divano-letto per accogliere fino a tre persone, bagno privato con doccia e giardino esclusivo.',
        features:
            'Ingresso indipendente · biancheria, phone, frigo-bar, WiFi, angolo cottura, parcheggio e uso piscina',
    },
    {
        title: 'Andromeda',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-056.jpg',
        alt: 'Bilocale Andromeda',
        description:
            'Soluzione con camera matrimoniale e ampia zona living dotata di divano letto a due posti, ideale per una famiglia fino a quattro persone. Zona pranzo con angolo cottura, bagno privato e piccolo terrazzo panoramico.',
        features:
            'Ingresso indipendente · biancheria, phone, frigo-bar, WiFi, angolo cottura, parcheggio e uso piscina',
    },
    {
        title: 'Auriga',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-057.jpg',
        alt: 'Bilocale Auriga',
        description:
            'Ampio bilocale con camera matrimoniale, stanza doppia e bagno privato con doccia. Terrazza antistante con vista sul territorio e possibilità di usufruire della piscina.',
        features:
            'Ingresso indipendente · biancheria, phone, frigo-bar, WiFi, parcheggio e uso piscina',
    },
];

const apartments = [
    {
        title: 'Monolocale',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-046.jpg',
        alt: 'Monolocale',
        description:
            'Monolocale accogliente dotato di angolo cottura e bagno privato. La zona living permette di avere un letto matrimoniale e un divano letto a due posti.',
        features:
            'biancheria, phone, frigo-bar, WiFi, angolo cottura, parcheggio e uso piscina',
        capacity: {
            people: '3-4',
            details:
                '1 letto matrimoniale · 1 divano letto (singolo o matrimoniale)',
        },
    },
    {
        title: 'Bilocale 4 posti letto',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-047.jpg',
        alt: 'Bilocale 4 posti letto',
        description:
            "Bilocale con cucina abitabile e grande camera da letto. L'ampia zona living permette di usufruire di un divano letto per posti aggiuntivi.",
        features:
            'biancheria, phone, frigo-bar, WiFi, angolo cottura, parcheggio e uso piscina',
        capacity: {
            people: '3-4',
            details:
                '1 letto matrimoniale · 1 divano letto (singolo o matrimoniale)',
        },
    },
    {
        title: 'Bilocale 6 posti letto',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-046.jpg',
        alt: 'Bilocale 6 posti letto',
        description:
            'Bilocale ampio e luminoso con ampia camera matrimoniale con divano letto. Zona living con cucina abitabile e divano letto che può divenire singolo o matrimoniale.',
        features:
            'biancheria, phone, frigo-bar, WiFi, angolo cottura, parcheggio e uso piscina',
        capacity: {
            people: '4-6',
            details:
                '1 letto matrimoniale · 2 divano letto (singolo o matrimoniale)',
        },
    },
];
</script>

<template>
    <Head title="Residence Al Settimo Cielo">
        <meta
            name="description"
            content="Il Residence Al Settimo Cielo accoglie i suoi ospiti in piccoli appartamenti dotati di entrata privata, terrazze e ingresso in piscina."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-14 pt-2">
        <div
            class="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(120deg,_rgba(28,26,25,0.85),_rgba(28,26,25,0.45)),url('https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-054.jpg')] bg-cover bg-center p-12 text-white md:p-16"
        >
            <div class="max-w-2xl space-y-5 public-reveal">
                <p class="text-xs uppercase tracking-[0.5em] text-white/70">
                    Residence
                </p>
                <h1 class="font-display text-4xl md:text-5xl">
                    Al Settimo Cielo.
                </h1>
                <p class="font-body text-base text-white/80">
                    Un complesso esclusivo che mette a disposizione splendidi
                    appartamenti dotati di tutti i comfort, immerso nelle
                    colline molisane a pochi chilometri dalla costa.
                </p>
                <div class="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
                    <span class="rounded-full bg-white/15 px-4 py-2">
                        CIN: IT070046A1LSJZKI9S
                    </span>
                    <span class="rounded-full bg-white/15 px-4 py-2">
                        Check in 13:00 · Check out 10:00
                    </span>
                </div>
                <Link
                    href="/sede-e-recapiti"
                    class="inline-flex rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.3em] text-[var(--public-night)] transition hover:bg-[var(--public-rose)]"
                >
                    Contattaci
                </Link>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16">
        <div class="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
            <div class="space-y-4 public-reveal">
                <p
                    class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                >
                    Ospitalità
                </p>
                <h2 class="font-display text-3xl md:text-4xl">
                    Comfort e relax in collina.
                </h2>
            </div>
            <div class="space-y-4 text-[var(--public-olive)] public-reveal">
                <p>
                    Il residence Al Settimo Cielo è un complesso esclusivo che
                    mette a disposizione splendidi appartamenti dotati di tutti
                    i comfort. Immerso nelle colline molisane e situato a pochi
                    chilometri dalla costa, è un esempio di ospitalità ed
                    eleganza.
                </p>
                <p>
                    Gli ospiti potranno usufruire del parcheggio privato, della
                    piscina e del ristorante aperto su prenotazione. Ogni
                    soluzione è dotata di entrata indipendente, bagno privato,
                    aria condizionata, lenzuola e biancheria, frigo bar.
                </p>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-16">
        <div class="flex items-center justify-between pb-6">
            <h3 class="font-display text-2xl">Suite e bilocali</h3>
            <span
                class="text-xs uppercase tracking-[0.4em] text-[var(--public-olive)]"
            >
                Al Settimo Cielo
            </span>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
            <article
                v-for="suite in suites"
                :key="suite.title"
                class="group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/60 bg-cover bg-center"
                :style="{ backgroundImage: `url(${suite.image})` }"
            >
                <div
                    class="absolute inset-0 bg-[linear-gradient(160deg,_rgba(0,0,0,0.65),_rgba(0,0,0,0.2))] transition duration-300 group-hover:opacity-90"
                />
                <div
                    class="relative z-10 flex h-full flex-col justify-end gap-4 p-6 text-white"
                >
                    <h3 class="font-display text-2xl">{{ suite.title }}</h3>
                    <p class="text-sm text-white/85">
                        {{ suite.description }}
                    </p>
                    <p class="text-xs uppercase tracking-[0.25em] text-white/75">
                        {{ suite.features }}
                    </p>
                </div>
            </article>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-20">
        <div class="grid gap-6 md:grid-cols-2">
            <article
                v-for="apartment in apartments"
                :key="apartment.title"
                class="group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/60 bg-cover bg-center"
                :style="{ backgroundImage: `url(${apartment.image})` }"
            >
                <div
                    class="absolute inset-0 bg-[linear-gradient(160deg,_rgba(0,0,0,0.65),_rgba(0,0,0,0.2))] transition duration-300 group-hover:opacity-90"
                />
                <div
                    class="relative z-10 flex h-full flex-col justify-end gap-4 p-6 text-white"
                >
                    <h3 class="font-display text-2xl">
                        {{ apartment.title }}
                    </h3>
                    <p class="text-sm text-white/85">
                        {{ apartment.description }}
                    </p>
                    <p class="text-xs uppercase tracking-[0.25em] text-white/85">
                        {{ apartment.features }}
                    </p>
                    <div
                        class="flex flex-wrap items-center gap-2  px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/90"
                    >
                        <Users class="h-4 w-4" aria-hidden="true" />
                        <span>{{ apartment.capacity.people }} ospiti</span>
                        <span>·</span>
                        <span>{{ apartment.capacity.details }}</span>
                    </div>
                </div>
            </article>
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
                    Prenota il tuo soggiorno
                </p>
                <p class="font-display text-2xl md:text-3xl">
                    Rilassati tra piscina e colline molisane.
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
