<script lang="ts">
  import '../app.css';
  import { BrainCircuit, Instagram } from 'lucide-svelte';
  
  // Destructure children directly in Svelte 5 style
  let { children } = $props();
</script>

<div class="min-h-screen bg-navy-blue text-pearl-white selection:bg-metallic-gold selection:text-navy-blue">
  <!-- Sticky Header -->
  <header class="fixed top-0 w-full z-50 backdrop-blur-md bg-navy-blue/80 border-b border-white/10 transition-all duration-300">
    <div class="container mx-auto px-6 h-20 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2 group">
        <div class="relative">
          <!-- ADN / Brain icon matching the concept -->
          <BrainCircuit class="w-8 h-8 text-metallic-gold transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
        </div>
        <span class="font-sans font-semibold tracking-widest uppercase text-lg hidden sm:block">
          Mimperio <span class="font-light">Celular</span>
        </span>
      </a>
      
      <nav class="hidden md:flex gap-8">
        <a href="#protocolo" class="text-sm font-sans uppercase tracking-wider text-pearl-white/80 hover:text-metallic-gold transition-colors">El Protocolo</a>
        <a href="#filosofia" class="text-sm font-sans uppercase tracking-wider text-pearl-white/80 hover:text-metallic-gold transition-colors">Filosofía</a>
      </nav>

      <a href="#contacto" class="hidden md:inline-flex items-center justify-center px-6 py-2 border border-metallic-gold text-metallic-gold text-sm font-sans uppercase tracking-widest hover:bg-metallic-gold hover:text-navy-blue transition-all duration-300">
        Contacto
      </a>
      
      <!-- Mobile menu button stub -->
      <button class="md:hidden text-pearl-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </div>
  </header>

  <main class="pt-20">
    {@render children()}
  </main>

  <footer class="bg-navy-blue border-t border-white/10 py-12 mt-20">
    <div class="container mx-auto px-6 text-center">
      <div class="mb-8 flex justify-center space-x-6">
        <a href="#" class="text-pearl-white/60 hover:text-metallic-gold transition-colors">
          <Instagram class="w-6 h-6" />
        </a>
        <a href="#" class="text-pearl-white/60 hover:text-metallic-gold transition-colors">
          <!-- Custom WhatsApp Icon since Lucide doesn't have official branding by default. Wait, lucide-svelte doesn't have whatsapp? 
          Actually sometimes it does not. We'll use Phone or something else if not available, OR we can just use SVG. Let's just use SVG for WhatsApp -->
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </div>
      <p class="text-sm text-pearl-white/40 font-serif max-w-3xl mx-auto leading-relaxed">
        Mimperio Celular: Ciencia de vanguardia para una vida en plenitud. Los productos mencionados son herramientas de bienestar y no pretenden diagnosticar, tratar o curar enfermedades.
      </p>
      <p class="text-xs text-pearl-white/30 font-sans mt-8 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Mimperio Celular. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</div>
