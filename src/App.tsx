import { Mail, Phone, MapPin, Linkedin, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#3A2E41]">
      <header className="absolute top-0 left-0 p-6 md:p-8">
        <img
          src="/logo.png"
          alt="AlbyFatou Logo"
          className="h-16 md:h-20 rounded-2xl"
        />
      </header>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A77BBF]/5 via-white to-[#E9B8CE]/5"></div>

        <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3A2E41]">
              Bonjour, je suis <span className="font-semibold text-[#A77BBF]">Fatou Cissé</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A77BBF] font-light">
              Consultante en Automatisation & Intelligence Artificielle
            </p>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              Simplifiez vos processus grâce à l'IA.
            </p>
            <div className="pt-4">
              <a
                href="#services"
                className="inline-block bg-[#A77BBF] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8F66A8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Découvrir mes services
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A77BBF] to-[#E9B8CE] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src="/photo_de_moi.png"
              alt="Fatou Cissé"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#3A2E41] mb-8">
            À propos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Passionnée par la technologie et l'efficacité, j'ai commencé mon parcours dans l'automatisation le 13 octobre 2025.
            Mon objectif : rendre l'IA accessible, concrète et utile pour les petites structures.
          </p>
          <div className="flex items-center justify-center gap-3 pt-4">
            <Sparkles className="w-6 h-6 text-[#A77BBF]" />
            <p className="text-xl md:text-2xl text-[#A77BBF] font-light italic">
              Chaque automatisation est une façon de reprendre le contrôle de son temps.
            </p>
            <Sparkles className="w-6 h-6 text-[#E9B8CE]" />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#3A2E41] text-center mb-12">
            Ce que je propose <span className="text-[#A77BBF]">(pour commencer)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#A77BBF]/5 to-[#E9B8CE]/5 p-8 rounded-3xl border border-[#A77BBF]/10 hover:border-[#A77BBF]/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-[#A77BBF] rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-[#3A2E41] mb-4">
                Agents IA
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Création d'assistants intelligents adaptés à vos besoins (chatbots, assistants Notion, etc.)
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E9B8CE]/5 to-[#A77BBF]/5 p-8 rounded-3xl border border-[#E9B8CE]/10 hover:border-[#E9B8CE]/30 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-[#E9B8CE] rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-[#3A2E41] mb-4">
                Automatisations simples
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Connexion fluide entre vos outils (Google Sheets, Notion, Airtable…)
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg text-[#A77BBF] font-light">
              👉 De nouvelles offres arriveront prochainement !
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#A77BBF] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8F66A8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Discutons ensemble
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#A77BBF]/5 via-white to-[#E9B8CE]/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#3A2E41] mb-12">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="tel:0667467257"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-[#A77BBF]/10 hover:border-[#A77BBF]/30 transition-all duration-300 hover:shadow-lg group"
            >
              <Phone className="w-5 h-5 text-[#A77BBF] group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 font-light">06.67.46.72.57</span>
            </a>

            <div className="flex items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-[#A77BBF]/10">
              <MapPin className="w-5 h-5 text-[#A77BBF]" />
              <span className="text-gray-700 font-light">Île-de-France</span>
            </div>

            <a
              href="mailto:contact@aibyfatou.com"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-[#A77BBF]/10 hover:border-[#A77BBF]/30 transition-all duration-300 hover:shadow-lg group"
            >
              <Mail className="w-5 h-5 text-[#A77BBF] group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 font-light">contact@aibyfatou.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/fatou-cisse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-[#A77BBF]/10 hover:border-[#A77BBF]/30 transition-all duration-300 hover:shadow-lg group"
            >
              <Linkedin className="w-5 h-5 text-[#A77BBF] group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 font-light">Fatou Cissé</span>
            </a>
          </div>

          <a
            href="mailto:contact@aibyfatou.com"
            className="inline-block bg-[#A77BBF] text-white px-10 py-4 rounded-full font-medium hover:bg-[#8F66A8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>
      </section>

      <footer className="bg-[#F5F5F7] py-8 px-6 text-center">
        <p className="text-gray-600 font-light">
          © 2025 AI by Fatou — Automatisation & Intelligence Artificielle
        </p>
        <p className="text-gray-500 text-sm mt-2 font-light">
          Design minimaliste et doux inspiré par Fatou Cissé
        </p>
      </footer>
    </div>
  );
}

export default App;
