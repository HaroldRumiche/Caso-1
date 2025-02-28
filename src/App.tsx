import React from 'react';
import {
  CircleUser,
  Menu,
  Star,
  ChevronRight,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const IntegrationsSection = () => {
  // ... (todo el código del componente)
}

function App() {
  // Mover el cálculo de posiciones aquí si se usa en el componente App
  const totalIcons = 5;
  const radius = 120;

  const iconPositions = Array.from({ length: totalIcons }).map((_, index) => {
    const angle = (180 / (totalIcons - 1)) * index;
    const angleInRadians = (angle * Math.PI) / 180;
    const x = 50 + (50 * Math.cos(angleInRadians));
    const y = radius - (radius * Math.sin(angleInRadians));
    return { x, y };
  });

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <div className="bg-blue-600 rounded-full p-1 mr-1">
              <CircleUser className="text-white" size={18} />
            </div>
            <span className="font-medium text-blue-600">coca</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-600">About Us</a>
            <a href="#" className="text-gray-600">Our Team</a>
            <a href="#" className="text-gray-600">Pricing</a>
            <a href="#" className="text-gray-600">Blog</a>
            <a href="#" className="text-gray-600">Contact</a>
          </div>
        </div>
        <button className="p-2 rounded-md">
          <Menu size={20} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Smarter <span className="italic font-serif">Writing</span><br />
              with <span className="italic font-serif">AI Tools</span>
            </h1>
            <div className="relative">
              <Star className="text-amber-400 absolute -right-4 -top-6" size={20} />
            </div>
            <p className="text-gray-600 mb-6">
              Coca: Your all-in-one AI platform for creating content quickly and cost-effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
                Try For Free (14 days)
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </div>
                Watch A Demo
              </button>
            </div>

            <div className="mt-12">
              <p className="text-xs text-gray-500 mb-4">TRUSTED BY 100+ COMPANIES</p>
              <div className="grid grid-cols-3 gap-6 items-center">

                <img src="https://descript-website.vercel.app/images/descript-logo.svg" alt="Descript" className="h-6 object-contain" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi6MZIUul7xiSzXGKZkGUZ3Vz-FOwe0jyb9Q&s" alt="Grammarly" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Grammarly_logo_2024.svg/250px-Grammarly_logo_2024.svg.png" alt="Grammarly" className="h-6 object-contain" />


                <img src="https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png" alt="Microsoft" className="h-6 object-contain" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJEMbGHjTLsdgJJLibp3FBx7EABfut2iTYw&s" alt="Notion" className="h-6 object-contain" />
                <img src="https://www.google.com.pe/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google" className="h-6 object-contain" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&h=400&q=80"
              alt="AI Robot Hand"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-10 -left-10 w-64 bg-white rounded-lg shadow-lg p-3">
              <img
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&w=240&h=160&q=80"
                alt="AI Interface"
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center py-16 bg-gray-100">
        <div className="bg-blue-600 text-white p-12 rounded-3xl shadow-2xl max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Tarjeta de imagen */}
            <div className="relative bg-white rounded-lg p-6 shadow-md max-w-sm mx-auto">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex gap-4 mb-4">
                  <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="mr-1">✏️</span> Write
                  </button>
                  <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center">
                    <span className="mr-1">🔍</span> Reply
                  </button>
                </div>
                <p className="text-gray-700 font-medium mb-1">Writing tone</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-500">Informal</p>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-red-500 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Friendly</p>
                    <div className="h-2 bg-gray-200 rounded-full mt-1">
                      <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Pessimistic</p>
                <div className="h-2 bg-gray-200 rounded-full mt-1">
                  <div className="h-2 bg-yellow-500 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Texto descriptivo */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Rapid and confident communication tool.</h2>
              <p className="mb-6">
                We understand the feeling of unease that comes when you're eager to share something you've written.
                It can be incredibly frustrating when your writing falls short of conveying the ideas you wish to express.
              </p>
              <p>
                That's why we developed the Masco AI writing tool. It empowers you to write with greater speed and confidence
                while also saving you valuable time.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Star className="text-yellow-400" size={48} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our team, composed of world-leading machine vision engineers and mobile device programmers,
              <span className="text-gray-500"> is available to perform custom research and develop tailored solutions.</span>
            </h2>
            <div className="mt-8">
              <p className="text-lg text-gray-600 mb-4">
                It has the capability to read and generate content in more than 65 languages, encompassing English, Spanish, Japanese.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-3xl max-h-96 bg-gray-100 rounded-full opacity-10"></div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 left-1/4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-1/3 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>

          {/* Título a la izquierda y texto a la derecha */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-2">Operates on your</h2>
              <h2 className="text-3xl font-bold mb-2">preferred website too.</h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-500">
                Connect our software with the apps you use and love. Early Bring All into your workflow to improve.
              </p>
            </div>
          </div>

          {/* Primera fila: 6 iconos de integración */}
          <div className="grid grid-cols-5 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxS5iRASsr50ASJqYsyAvcew2ICajtSGVkJw&s" alt="Integration 1" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Firefox_logo%2C_2017.png" alt="Integration 2" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRGSPaUngNz1Lhf4koodGYaGuSuFMKTGy6Rw&s" alt="Integration 3" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://w7.pngwing.com/pngs/123/106/png-transparent-apple-logo-logo-apple-icon-information-apple-logo-logo-monochrome-black-thumbnail.png" alt="Integration 4" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://w7.pngwing.com/pngs/339/623/png-transparent-zoom-app-hd-logo-thumbnail.png" alt="Integration 5" className="w-7 h-7" />
              </div>
            </div>
          </div>

          {/* Segunda fila: 5 iconos de integración */}
          <div className="grid grid-cols-5 gap-8 max-w-3xl mx-auto">
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="Integration 7" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png" alt="Integration 8" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png" alt="Integration 9" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://cdn-icons-png.flaticon.com/512/2504/2504780.png" alt="Integration 10" className="w-7 h-7" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[2px_3px_5px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <img src="https://images.sftcdn.net/images/t_app-icon-m/p/32c8f5d0-6391-11e8-a2b9-0242ac120005/2331845683/shopify-ecommerce-business-logo" alt="Integration 11" className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <div className="relative">
            <Star className="text-amber-400 absolute right-0 bottom-0" size={20} />
            <h2 className="text-3xl font-bold mb-4">
              Unlock various writing benefits with AI Writer.
            </h2>
            <p className="text-gray-500 mb-6">
              Unlock an array of writing benefits with our AI Writer. Designed to help you in all stages of AI Writer.
            </p>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm shadow-[2px_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[2px_2px_6px_rgba(0,0,0,0.15)] transition-shadow">
              <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">i</span>
              Learn More
            </button>
          </div>

          {/* Tarjetas con distintos niveles */}
          <div className="relative space-y-6">
            {/* Primera tarjeta */}
            <div className="bg-gray-100 p-6 rounded-lg flex gap-4 shadow-md relative z-10 translate-y-0">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <img src="https://images.vexels.com/media/users/3/158039/isolated/preview/05331045aee2a8e5142775d30365b88e-icono-de-silueta-de-apreton-de-manos.png" alt="Enterprise" className="w-16 h-16 object-cover rounded" />
              </div>
              <div>
                <h3 className="font-bold">Enterprise AI-Powered</h3>
                <p className="text-gray-500 text-sm">
                  Create your team of personas with our AI to help you write better content.
                </p>
              </div>
            </div>

            {/* Segunda tarjeta - desplazada */}
            <div className="bg-gray-100 p-5 rounded-lg flex gap-4 shadow-md relative z-20 -translate-y-6">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <img src="https://static-00.iconduck.com/assets.00/translate-icon-2048x2047-7p7f8iey.png" alt="Languages" className="w-14 h-14 object-cover rounded" />
              </div>
              <div>
                <h3 className="font-bold">Generate content in over 65+ languages</h3>
                <p className="text-gray-500 text-sm">
                  Our platform is ready to read and generate content in many languages.
                </p>
              </div>
            </div>

            {/* Última tarjeta - más abajo */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md relative z-30 -translate-y-12">
              <p className="text-gray-500 text-sm">
                Write essays, fiction, and poetry
              </p>
            </div>

            {/* Efecto de fondo azul */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-full h-full bg-blue-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Integrations Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto relative">
        {/* Background elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-3xl max-h-96 bg-gray-100 rounded-full opacity-10"></div>
        </div>
        <div className="relative">
          {/* Decorative dots */}
          <div className="absolute -top-10 left-1/4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-1/3 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>

          {/* Semi-circle of integration icons above the title */}
          <div className="relative h-40 mb-12">
            {/* Teams icon (izquierda) */}
            <div className="absolute" style={{ left: `${iconPositions[0].x}%`, top: `${iconPositions[0].y}px` }}>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png" alt="Teams" className="w-7 h-7" />
              </div>
            </div>

            {/* Zoom icon */}
            <div className="absolute" style={{ left: `${iconPositions[1].x}%`, top: `${iconPositions[1].y}px` }}>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                <img src="https://blog.logomyway.com/wp-content/uploads/2021/08/zoom-icon.png" alt="Zoom" className="w-7 h-7" />
              </div>
            </div>

            {/* Google Meet icon (centro superior) */}
            <div className="absolute" style={{ left: `${iconPositions[2].x}%`, top: `${iconPositions[2].y}px` }}>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png" alt="Google Meet" className="w-7 h-7" />
              </div>
            </div>

            {/* Notion icon */}
            <div className="absolute" style={{ left: `${iconPositions[3].x}%`, top: `${iconPositions[3].y}px` }}>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png" alt="Notion" className="w-7 h-7" />
              </div>
            </div>

            {/* Evernote icon (derecha) */}
            <div className="absolute" style={{ left: `${iconPositions[4].x}%`, top: `${iconPositions[4].y}px` }}>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
                <img src="https://www.wavekup.com/wp-content/uploads/2021/05/wavekup-evernote.png" alt="Evernote" className="w-7 h-7" />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations<br />with Coca</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Start by discovering the concept of integrations and how they'll improve in performing workflows for AI-complete media.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-6 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg transition-shadow">
              View all integrations
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="relative bg-blue-600 text-white p-10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.5)] w-[90%] h-[10cm]">
          <h2 className="text-3xl font-bold">Build your team today through Coca</h2>
          <p className="mt-2 text-lg">
            Subscribe to our newsletter to get the latest AI writing updates.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Try Free For 1 month
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Book a demo
            </button>
          </div>
          {/* Tarjeta flotante */}
          <div className="absolute top-10 right-[-60px] bg-white text-black p-4 rounded-xl shadow-lg w-64 h-[3cm]">
            <img
              src="https://source.unsplash.com/100x100/?technology,ai"
              alt="AI Assistant"
              className="w-16 h-16 rounded-lg object-cover mb-2"
            />
            <h3 className="font-bold text-lg">AI Assistant Reply</h3>
            <p className="text-sm">I can help you with your writing needs. What would you like to create today?</p>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to<br />
              <span className="italic font-serif">get started?</span>
            </h2>
            <p className="text-gray-500 mb-8">
              If there are questions you want to ask, we will answer all your questions.
            </p>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-500 mb-2">Enter your email</label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your email"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md shadow-md hover:shadow-lg transition-shadow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-500 mb-4">
              Maybe your question is have been answered, check this out.
            </p>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">What is Coca Soft</p>
                  <ChevronRight size={16} />
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">How can I get started with Coca Soft?</p>
                  <ChevronRight size={16} />
                </div>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <p className="font-medium">What kind of service will I get?</p>
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 text-center">
            © All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}


export default App;