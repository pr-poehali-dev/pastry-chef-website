
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Данные для галереи
  const galleryItems = [
    {
      id: 1,
      title: "Многоярусный торт",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636",
      description: "Элегантный многоярусный торт с нежным кремом и свежими ягодами."
    },
    {
      id: 2,
      title: "Пирожные макарон",
      image: "https://images.unsplash.com/photo-1558326567-98166332163b",
      description: "Разноцветные пирожные макарон с различными вкусами и начинками."
    },
    {
      id: 3,
      title: "Шоколадное искусство",
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834",
      description: "Изысканные шоколадные конфеты ручной работы с различными начинками."
    },
    {
      id: 4,
      title: "Домашняя выпечка",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
      description: "Ароматная домашняя выпечка с корицей и свежими фруктами."
    },
    {
      id: 5,
      title: "Муссовые десерты",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710123",
      description: "Современные муссовые десерты с зеркальной глазурью и оригинальным декором."
    },
    {
      id: 6,
      title: "Свадебный торт",
      image: "https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2",
      description: "Роскошный свадебный торт с тонкой ручной работой и сахарными цветами."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF7CD] font-sans">
      {/* Шапка сайта */}
      <header className="bg-[#9b87f5] text-white p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Мир Кондитерского Искусства</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/gallery" className="hover:underline font-bold">Галерея</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#7E69AB]">Галерея кондитерских шедевров</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Вдохновитесь работами профессиональных кондитеров и узнайте, каких высот можно достичь в этой профессии
          </p>
          <Separator className="my-6 bg-[#9b87f5]/30 max-w-[200px] mx-auto" />
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
                <h3 className="text-xl font-bold text-[#7E69AB] mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <Button variant="outline" className="border-[#9b87f5] text-[#7E69AB] hover:bg-[#E5DEFF]">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#FDE1D3] p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-[#7E69AB] mb-3">Хотите стать кондитером?</h3>
              <p className="text-gray-700">
                Профессия кондитера сочетает в себе творчество, технические навыки и постоянное развитие. 
                Начните свой путь в мир кондитерского искусства уже сегодня!
              </p>
            </div>
            <div>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] px-6 py-6 text-lg">
                Начать обучение
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Подвал */}
      <footer className="bg-[#9b87f5] text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Мир Кондитерского Искусства. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
