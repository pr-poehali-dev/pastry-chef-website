
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDF7CD] font-sans">
      {/* Шапка сайта */}
      <header className="bg-[#9b87f5] text-white p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Мир Кондитерского Искусства</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/gallery" className="hover:underline">Галерея</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto py-8 px-4">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-[#7E69AB] mb-4">Профессия Повар-кондитер</h2>
              <p className="text-gray-700 mb-4">
                Повар-кондитер — это специалист по производству десертов, выпечки и кондитерских изделий. 
                Это профессия для творческих людей, обладающих терпением, вниманием к деталям и любовью к кулинарному искусству.
              </p>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                Узнать о карьере
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1516559828984-fb3b99548b21" 
                alt="Повар-кондитер за работой" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Вкладки */}
        <Tabs defaultValue="profession" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-[#E5DEFF]">
            <TabsTrigger value="profession" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">О профессии</TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">Навыки и обучение</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profession" className="mt-6">
            <Card className="border-[#9b87f5]/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#7E69AB] mb-4">Описание профессии</h3>
                    <p className="mb-4">
                      Повар-кондитер создает разнообразные десерты, торты, пирожные, печенье, шоколадные 
                      конфеты и другие сладости. Это специалист, который сочетает в себе навыки повара и художника.
                    </p>
                    <p className="mb-4">
                      Кондитеры работают в ресторанах, кафе, пекарнях, кондитерских цехах, на предприятиях пищевой 
                      промышленности или открывают собственный бизнес.
                    </p>
                    <h4 className="text-xl font-semibold text-[#7E69AB] mt-6 mb-3">Обязанности:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Приготовление десертов по рецептам</li>
                      <li>Разработка новых рецептов и технологий</li>
                      <li>Оформление и декорирование кондитерских изделий</li>
                      <li>Контроль качества продукции</li>
                      <li>Соблюдение санитарных норм и правил безопасности</li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1556388275-bb5585725aca" 
                      alt="Приготовление десерта" 
                      className="rounded-lg shadow-md mb-6 w-full h-auto"
                    />
                    <div className="bg-[#FDE1D3] p-5 rounded-lg">
                      <h4 className="text-xl font-semibold text-[#7E69AB] mb-3">Преимущества профессии:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ Творческая самореализация</li>
                        <li>✓ Востребованность на рынке труда</li>
                        <li>✓ Возможность развития собственного бизнеса</li>
                        <li>✓ Работа с приятными продуктами и материалами</li>
                        <li>✓ Возможность постоянного развития и совершенствования</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className="mt-6">
            <Card className="border-[#9b87f5]/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#7E69AB] mb-4">Необходимые навыки</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold">Профессиональные навыки:</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                          <li>Знание пищевой химии и физики</li>
                          <li>Техники замеса теста и выпечки</li>
                          <li>Умение работать с шоколадом</li>
                          <li>Навыки декорирования</li>
                          <li>Знание санитарных норм</li>
                          <li>Навыки работы со специальным оборудованием</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Личные качества:</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                          <li>Творческий подход</li>
                          <li>Внимание к деталям</li>
                          <li>Терпение и усидчивость</li>
                          <li>Хороший вкус и обоняние</li>
                          <li>Физическая выносливость</li>
                          <li>Чистоплотность</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#7E69AB] mb-4">Образование и карьера</h3>
                    <img 
                      src="https://images.unsplash.com/photo-1607478900766-efe13248b125" 
                      alt="Учебный процесс" 
                      className="rounded-lg shadow-md mb-6 w-full h-auto"
                    />
                    <div className="bg-[#D3E4FD] p-5 rounded-lg">
                      <h4 className="text-xl font-semibold text-[#7E69AB] mb-3">Где учиться:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Кулинарные колледжи и техникумы</li>
                        <li>• Высшие учебные заведения со специализацией в пищевой технологии</li>
                        <li>• Профессиональные курсы и мастер-классы</li>
                        <li>• Стажировки в известных ресторанах и кондитерских</li>
                      </ul>
                      
                      <h4 className="text-xl font-semibold text-[#7E69AB] mt-6 mb-3">Карьерный рост:</h4>
                      <p className="text-gray-700">
                        От помощника кондитера до шеф-кондитера или владельца собственного бизнеса. 
                        Многие профессионалы специализируются в конкретном направлении: шоколатье, 
                        работа с карамелью, создание свадебных тортов.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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

export default Index;
