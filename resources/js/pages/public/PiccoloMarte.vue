<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { Users } from 'lucide-vue-next';
import PublicLayout from '@/layouts/PublicLayout.vue';

defineOptions({ layout: PublicLayout });

const rooms = [
    {
        title: 'Camera Matrimoniale/Doppia con terrazza',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-046.jpg',
        alt: 'Camera matrimoniale con terrazza',
        description:
            'Elegante e luminosa stanza matrimoniale che, su richiesta, può diventare una camera doppia o ospitare un terzo letto. Dotata di ogni comfort, di bagno privato con doccia e di un balcone con affaccio panoramico su un ampio terrazzo.',
        features: 'biancheria, phone, frigo-bar, WiFi e parcheggio interno',
        capacity: {
            people: '2-3',
            details:
                '1 letto matrimoniale / 2 singoli (+1 su richiesta) · terrazzo',
        },
    },
    {
        title: 'Camera Matrimoniale/Doppia',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-047.jpg',
        alt: 'Camera matrimoniale doppia',
        description:
            'Confortevole camera matrimoniale dotata di bagno privato con doccia. La stanza può essere allestita come camera doppia con due letti singoli su richiesta del cliente.',
        features: 'biancheria, phone, frigo-bar, WiFi e parcheggio interno',
        capacity: {
            people: '2-3',
            details: '1 letto matrimoniale / 2 singoli',
        },
    },
    {
        title: 'Camera Matrimoniale',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-048.jpg',
        alt: 'Camera matrimoniale luminosa',
        description:
            'Incantevole stanza matrimoniale inondata di luce e dotata di comodo bagno in camera con doccia.',
        features: 'biancheria, phone, frigo-bar, parcheggio',
        capacity: {
            people: '2',
            details: '1 letto matrimoniale',
        },
    },
    {
        title: 'Appartamento con terrazza',
        image: 'https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-049.jpg',
        alt: 'Appartamento con terrazza',
        description:
            'Questa sistemazione è un vero e proprio appartamento deluxe, dotato di ampio open space suddiviso in zona living, area attrezzata con divano-letto e sala da pranzo con angolo cottura a vista. La vera e propria camera da letto è composta da un grande matrimoniale, un altro divano-letto e un bagno privato dotato di doccia.',
        features:
            'biancheria, phone, frigo-bar, WiFi, tavolo, parcheggio interno, angolo cottura, terrazzo',
        capacity: {
            people: '2-6',
            details: '1 letto matrimoniale · 2 divano-letto',
        },
    },
];
</script>

<template>
    <Head title="Piccolo Marte">
        <meta
            name="description"
            content="Il Piccolo Marte è un residence indipendente, interamente ristrutturato con camere eleganti, giardino privato o terrazza."
        />
    </Head>

    <section class="mx-auto w-full max-w-6xl px-6 pb-14 pt-2">
        <div
            class="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(115deg,_rgba(28,26,25,0.85),_rgba(28,26,25,0.45)),url('https://irp-cdn.multiscreensite.com/335c0af0/dms3rep/multi/ristorante-al-settimo-cielo-montenero-di-bisaccia-046.jpg')] bg-cover bg-center p-12 text-white md:p-16"
        >
            <div class="max-w-2xl space-y-5 public-reveal">
                <p class="text-xs uppercase tracking-[0.5em] text-white/70">
                    Piccolo Marte
                </p>
                <h1 class="font-display text-4xl md:text-5xl">
                    Camere con terrazza.
                </h1>
                <p class="font-body text-base text-white/80">
                    Il Piccolo Marte è un residence indipendente, interamente
                    ristrutturato e volto ad offrire camere arredate con gusto e
                    corredate di tutti i servizi per soddisfare le esigenze dei
                    propri ospiti.
                </p>
                <div class="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
                    <span class="rounded-full bg-white/15 px-4 py-2">
                        CIN: IT070046A13FI7DKU6
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
                    Il residence
                </p>
                <h2 class="font-display text-3xl md:text-4xl">
                    Eleganza, privacy e comfort.
                </h2>
            </div>
            <div class="space-y-4 text-[var(--public-olive)] public-reveal">
                <p>
                    La struttura rappresenta una perfetta combinazione di
                    eleganza e innovazione ed è ubicata nel territorio del
                    comune di Montenero di Bisaccia a pochi chilometri dalla
                    costa adriatica dei trabocchi e dai centri turistici di
                    Vasto e Termoli.
                </p>
                <p>
                    Il residence offre quattro soluzioni di diverse metrature
                    dove design e comfort convivono dando vita a sistemazioni
                    moderne e funzionali, tutte con bagno privato, aria
                    condizionata, lenzuola e biancheria, frigo bar e parcheggio
                    privato interno.
                </p>
            </div>
        </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-6 pb-20">
        <div class="grid gap-6 md:grid-cols-2">
            <article
                v-for="room in rooms"
                :key="room.title"
                class="group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/60 bg-cover bg-center" 
                :style="{ backgroundImage: `url(${room.image})` }"
            >
                <div
                    class="absolute inset-0 bg-[linear-gradient(160deg,_rgba(0,0,0,0.65),_rgba(0,0,0,0.2))] transition duration-300 group-hover:opacity-90"
                />
                <div
                    class="relative z-10 flex h-full flex-col justify-end gap-4 p-6 text-white"
                >
                    <h3 class="font-display text-2xl">{{ room.title }}</h3>
                    <p class="text-sm text-white/85">
                        {{ room.description }}
                    </p>
                    <div class="space-y-2 text-xs uppercase tracking-[0.25em]">
                        <p class="text-white/90">Servizi e dotazioni</p>
                        <p class="text-white/75">{{ room.features }}</p>
                        <div class="flex flex-wrap items-center gap-2 rounded-full bg-black/30 px-3 py-1 text-white/85">
                            <Users class="h-4 w-4" aria-hidden="true" />
                            <span>{{ room.capacity.people }} ospiti</span>
                            <span>·</span>
                            <span>{{ room.capacity.details }}</span>
                        </div>
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
                    Piccolo Marte vi aspetta tra natura e relax.
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
