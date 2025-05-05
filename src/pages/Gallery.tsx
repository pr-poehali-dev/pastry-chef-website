
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Данные для галереи
  const galleryItems = [
    {
      id: 1,
      title: "Искусство глазури",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
      description: "Мастерство нанесения глазури требует точности и уверенных движений рук."
    },
    {
      id: 2,
      title: "Работа с тестом",
      image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907",
      description: "Правильно замешанное тесто - основа любого кондитерского изделия."
    },
    {
      id: 3,
      title: "Шоколадные конфеты",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32",
      description: "Создание шоколадных конфет требует понимания температурных режимов."
    },
    {
      id: 4,
      title: "Выпечка хлеба",
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877",
      description: "Хлебопечение - одно из древнейших кулинарных искусств."
    },
    {
      id: 5,
      title: "Декорирование тортов",
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
      description: "Украшение тортов позволяет кондитеру проявить свой художественный талант."
    },
    {
      id: 6,
      title: "Работа с карамелью",
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
      description: "Карамель требует специальных навыков и соблюдения техники безопасности."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFEFD5] font-sans">
      {/* Шапка сайта */}
      <header className="bg-[#8B4513] text-white p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Искусство Кондитера-Повара</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/gallery" className="hover:underline font-bold">Мастерство</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#8B4513]">Мастерство кондитера-повара</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Подробный обзор основных техник и навыков, которыми должен владеть профессиональный кондитер-повар
          </p>
          <Separator className="my-6 bg-[#D2691E]/30 max-w-[200px] mx-auto" />
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B4513] mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Button variant="outline" className="border-[#D2691E] text-[#8B4513] hover:bg-[#FFE4B5]">
                  Изучить технику
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#F0E68C] p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-3">Совершенствуйте своё мастерство</h3>
              <p className="text-gray-700">
                Кондитерское искусство — это постоянное развитие и изучение новых техник. Наши курсы помогут вам освоить 
                как базовые, так и продвинутые навыки работы с различными ингредиентами и текстурами.
              </p>
            </div>
            <div>
              <Button className="bg-[#D2691E] hover:bg-[#8B4513] px-6 py-6 text-lg">
                Записаться на курс
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-[#8B4513] mb-6 text-center">Инструменты кондитера-повара</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-[#FFDAB9] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🧁</span>
              </div>
              <h4 className="font-bold text-[#8B4513] mb-2">Базовый инвентарь</h4>
              <p className="text-gray-700">
                Венчики, миксеры, сита, мерные ёмкости, скалки, формы для выпечки и разнообразные ножи.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-[#FFDAB9] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🍰</span>
              </div>
              <h4 className="font-bold text-[#8B4513] mb-2">Специальное оборудование</h4>
              <p className="text-gray-700">
                Кондитерские мешки, насадки, шпатели, термометры, аэрографы и инструменты для моделирования.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-[#FFDAB9] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🍞</span>
              </div>
              <h4 className="font-bold text-[#8B4513] mb-2">Техническое оснащение</h4>
              <p className="text-gray-700">
                Профессиональные печи, холодильное оборудование, тестомесы, темперирующие машины для шоколада.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Подвал */}
      <footer className="bg-[#8B4513] text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Искусство Кондитера-Повара. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
