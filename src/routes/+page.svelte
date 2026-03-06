<script lang="ts">
    import { onMount } from "svelte";
    import {
        ChevronRight,
        Sparkles,
        Moon,
        Sun,
        Droplets,
        Download,
    } from "lucide-svelte";

    let mounted = $state(false);

    onMount(() => {
        mounted = true;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-in-up");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 },
        );

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
            observer.observe(el);
        });
    });
</script>

<svelte:head>
    <title>Mimperio Celular | Renacimiento Celular</title>
    <meta
        name="description"
        content="Biotecnología de vanguardia para la optimización biológica y regeneración molecular sin procedimientos invasivos."
    />
</svelte:head>

<!-- 1. HERO SECTION -->
<section
    class="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20"
>
    <!-- Decorative background elements -->
    <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-metallic-gold/10 via-navy-blue to-navy-blue pointer-events-none"
    ></div>
    <div
        class="absolute top-1/4 -left-32 w-96 h-96 bg-metallic-gold/10 rounded-full blur-[100px] pointer-events-none"
    ></div>

    <div class="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-metallic-gold/30 bg-metallic-gold/5 text-metallic-gold text-xs font-sans uppercase tracking-widest mb-10 transition-all duration-[1000ms] ease-out delay-100 {mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'}"
        >
            <Sparkles class="w-4 h-4" />
            <span>El futuro del bienestar</span>
        </div>

        <h1
            class="text-4xl md:text-6xl lg:text-7xl font-sans font-light leading-tight mb-8 transition-all duration-[1000ms] ease-out delay-300 {mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'}"
        >
            Tu cuerpo posee una <span
                class="font-serif italic font-medium text-metallic-gold"
                >sabiduría infinita</span
            >; en Mimperio Celular, te entregamos la llave para despertarla.
        </h1>

        <p
            class="text-lg md:text-xl text-pearl-white/80 font-serif max-w-3xl mx-auto mb-14 transition-all duration-[1000ms] ease-out delay-500 {mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'}"
        >
            Biotecnología de vanguardia para la optimización biológica y
            regeneración molecular sin procedimientos invasivos.
        </p>

        <div
            class="transition-all duration-[1000ms] ease-out delay-700 {mounted
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'}"
        >
            <a
                href="#protocolo"
                class="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-metallic-gold text-navy-blue font-sans font-medium uppercase tracking-widest overflow-hidden transition-all hover:bg-white"
            >
                <span class="relative z-10"
                    >Iniciar mi Renacimiento Celular</span
                >
                <ChevronRight
                    class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
                />
            </a>
        </div>
    </div>
</section>

<!-- 2. EL PROTOCOLO PUNTA DE LANZA -->
<section id="protocolo" class="py-32 bg-navy-blue relative scroll-mt-20">
    <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center mb-24 animate-on-scroll initial-hidden">
            <h2 class="text-4xl md:text-5xl font-sans font-light mb-6">
                El Protocolo <span class="font-serif italic text-metallic-gold"
                    >Punta de Lanza</span
                >
            </h2>
            <div class="w-24 h-[1px] bg-metallic-gold/70 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 md:gap-12">
            <!-- Card 1: X39 -->
            <div
                class="group relative bg-white/[0.02] border border-white/10 p-10 hover:border-metallic-gold/50 transition-all duration-500 animate-on-scroll initial-hidden h-full flex flex-col hover:bg-white/[0.04] shadow-xl shadow-black/20"
            >
                <div
                    class="w-14 h-14 rounded-full border border-metallic-gold flex items-center justify-center mb-8 text-metallic-gold group-hover:bg-metallic-gold group-hover:text-navy-blue transition-colors duration-500"
                >
                    <Sparkles class="w-6 h-6" />
                </div>
                <h3 class="text-2xl font-sans tracking-widest mb-2 uppercase">
                    X39
                </h3>
                <h4
                    class="text-xs font-sans text-metallic-gold tracking-widest mb-6 uppercase"
                >
                    El Activador Maestro
                </h4>
                <p
                    class="text-pearl-white/70 font-serif leading-relaxed flex-grow text-lg"
                >
                    Fototerapia avanzada para elevar el péptido GHK-Cu y activar
                    tus células madre.
                </p>
            </div>

            <!-- Card 2: Cellergize -->
            <div
                class="group relative bg-white/[0.02] border border-white/10 p-10 hover:border-metallic-gold/50 transition-all duration-500 animate-on-scroll initial-hidden h-full flex flex-col hover:bg-white/[0.04] shadow-xl shadow-black/20"
                style="animation-delay: 150ms;"
            >
                <div
                    class="w-14 h-14 rounded-full border border-metallic-gold flex items-center justify-center mb-8 text-metallic-gold group-hover:bg-metallic-gold group-hover:text-navy-blue transition-colors duration-500"
                >
                    <div class="flex -space-x-2">
                        <Sun class="w-5 h-5" />
                        <Moon class="w-5 h-5 opacity-70" />
                    </div>
                </div>
                <h3 class="text-2xl font-sans tracking-widest mb-2 uppercase">
                    Cellergize
                </h3>
                <h4
                    class="text-xs font-sans text-metallic-gold tracking-widest mb-6 uppercase"
                >
                    Armonía Circadiana
                </h4>
                <p
                    class="text-pearl-white/70 font-serif leading-relaxed flex-grow text-lg"
                >
                    Sincroniza tu metabolismo: enfoque total de día y reparación
                    profunda de noche.
                </p>
            </div>

            <!-- Card 3: Trío Alavida -->
            <div
                class="group relative bg-white/[0.02] border border-white/10 p-10 hover:border-metallic-gold/50 transition-all duration-500 animate-on-scroll initial-hidden h-full flex flex-col hover:bg-white/[0.04] shadow-xl shadow-black/20"
                style="animation-delay: 300ms;"
            >
                <div
                    class="w-14 h-14 rounded-full border border-metallic-gold flex items-center justify-center mb-8 text-metallic-gold group-hover:bg-metallic-gold group-hover:text-navy-blue transition-colors duration-500"
                >
                    <Droplets class="w-6 h-6" />
                </div>
                <h3 class="text-2xl font-sans tracking-widest mb-2 uppercase">
                    Trío Alavida
                </h3>
                <h4
                    class="text-xs font-sans text-metallic-gold tracking-widest mb-6 uppercase"
                >
                    Luminosidad Holística
                </h4>
                <p
                    class="text-pearl-white/70 font-serif leading-relaxed flex-grow text-lg"
                >
                    El secreto de una piel radiante que nace desde la
                    regeneración celular interna.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- 3. FILOSOFÍA "MIMPERIO" -->
<section
    id="filosofia"
    class="py-32 bg-navy-blue relative overflow-hidden border-t border-white/5 scroll-mt-20"
>
    <div
        class="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-metallic-gold/5 blur-[120px] pointer-events-none rounded-full"
    ></div>

    <div class="container mx-auto px-6 max-w-6xl">
        <div class="grid md:grid-cols-2 gap-20 items-center">
            <div class="animate-on-scroll initial-hidden relative z-10">
                <h2
                    class="text-4xl md:text-5xl lg:text-6xl font-sans font-light mb-8 leading-tight"
                >
                    Soberanía Biológica:<br />
                    <span
                        class="font-serif italic text-metallic-gold block mt-4 text-3xl md:text-4xl lg:text-5xl"
                        >El Origen de Mimperio Celular.</span
                    >
                </h2>
                <div class="w-16 h-[1px] bg-metallic-gold/70 mb-10"></div>
                <div
                    class="space-y-6 text-lg text-pearl-white/80 font-serif leading-relaxed"
                >
                    <p>
                        Nacimos para democratizar el acceso a tecnologías de
                        optimización biológica.
                    </p>
                    <p>
                        No buscamos invadir tu cuerpo, sino entregarle la señal
                        adecuada para que florezca de nuevo. Tu ecosistema
                        interno tiene el diseño perfecto; nosotros te entregamos
                        el código fuente.
                    </p>
                </div>
            </div>

            <div
                class="relative animate-on-scroll initial-hidden mx-auto max-w-md w-full"
                style="animation-delay: 200ms;"
            >
                <div
                    class="aspect-square border border-white/10 p-6 relative bg-navy-blue/50 backdrop-blur-sm"
                >
                    <div
                        class="absolute inset-0 bg-gradient-to-tr from-metallic-gold/5 to-transparent"
                    ></div>
                    <div
                        class="w-full h-full border border-metallic-gold/20 flex items-center justify-center relative"
                    >
                        <div
                            class="absolute w-40 h-40 border border-metallic-gold/30 rounded-full animate-[spin_20s_linear_infinite]"
                        ></div>
                        <div
                            class="absolute w-64 h-64 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"
                        ></div>
                        <Sparkles
                            class="w-16 h-16 text-metallic-gold opacity-80"
                        />
                    </div>

                    <div
                        class="absolute top-0 left-0 w-6 h-6 border-t border-l border-metallic-gold"
                    ></div>
                    <div
                        class="absolute top-0 right-0 w-6 h-6 border-t border-r border-metallic-gold"
                    ></div>
                    <div
                        class="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-metallic-gold"
                    ></div>
                    <div
                        class="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-metallic-gold"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 4. SECCIÓN DE CONVERSIÓN (Lead Magnet) -->
<section
    class="py-32 relative bg-[#06101f] overflow-hidden border-t border-white/5"
>
    <div
        class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-metallic-gold/5 to-transparent pointer-events-none"
    ></div>

    <div
        class="container mx-auto px-6 max-w-4xl relative z-10 text-center animate-on-scroll initial-hidden"
    >
        <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-metallic-gold/10 text-metallic-gold mb-10 border border-metallic-gold/20"
        >
            <Download class="w-8 h-8" />
        </div>

        <h2
            class="text-2xl md:text-3xl font-serif italic text-metallic-gold mb-6"
        >
            ¿Listo para despertar tu sabiduría celular?
        </h2>

        <h3
            class="text-4xl md:text-5xl lg:text-6xl font-sans font-light mb-12 text-pearl-white"
        >
            Descarga: El Despertar de las Células Madre <span
                class="text-sm align-top text-white/40 ml-2 font-mono tracking-widest"
                >PDF</span
            >
        </h3>

        <form
            class="max-w-xl mx-auto relative"
            on:submit|preventDefault={() => {}}
        >
            <div class="flex flex-col sm:flex-row gap-0 shadow-2xl">
                <input
                    type="email"
                    placeholder="Tu mejor correo electrónico"
                    class="flex-1 bg-white/5 border border-white/10 px-8 py-5 text-pearl-white font-sans focus:outline-none focus:border-metallic-gold transition-colors placeholder:text-white/30 text-lg"
                    required
                />
                <button
                    type="submit"
                    class="px-10 py-5 bg-metallic-gold text-navy-blue font-sans uppercase tracking-widest font-medium hover:bg-white transition-colors duration-300 whitespace-nowrap"
                >
                    Obtener mi Guía
                </button>
            </div>
            <p
                class="text-xs text-white/40 mt-6 font-sans uppercase tracking-wider"
            >
                Privacidad garantizada. Un paso hacia tu esplendor.
            </p>
        </form>
    </div>
</section>

<style>
    :global(.animate-fade-in-up) {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .initial-hidden {
        opacity: 0;
        transform: translateY(40px);
    }
</style>
