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
                <p
                    class="text-xs uppercase tracking-[0.5em] text-[var(--public-olive)]"
                >
                    Residence
                </p>
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
        <div
            class="grid gap-8 rounded-[28px] border border-white/60 bg-white/75 p-10 md:grid-cols-3"
        >
            <div class="space-y-3 public-reveal">
                <p class="font-display text-xl">Al Settimo Cielo</p>
                <p class="text-sm text-[var(--public-olive)]">
                    Atmosfere eleganti, spazi curati e dettagli di charme per un
                    soggiorno esclusivo.
                </p>
            </div>
            <div class="space-y-3 public-reveal public-reveal-delay-1">
                <p class="font-display text-xl">Piccolo Marte</p>
                <p class="text-sm text-[var(--public-olive)]">
                    Una dimensione intima e riservata, ideale per chi desidera
                    quiete e privacy.
                </p>
            </div>
            <div class="space-y-3 public-reveal public-reveal-delay-2">
                <p class="font-display text-xl">Quattro soluzioni</p>
                <p class="text-sm text-[var(--public-olive)]">
                    Camere curate nei minimi dettagli, pensate per ogni esigenza
                    di comfort.
                </p>
            </div>
        </div>
    </section>
</template>
