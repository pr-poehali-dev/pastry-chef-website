
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFEFD5] font-sans">
      {/* Шапка сайта */}
      <header className="bg-[#8B4513] text-white p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Искусство Кондитера-Повара</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/gallery" className="hover:underline">Мастерство</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="container mx-auto py-8 px-4">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-[#8B4513] mb-4">Профессия Кондитер-Повар</h2>
              <p className="text-gray-700 mb-4">
                Кондитер-повар — это специалист, который создает шедевры кулинарного искусства, 
                сочетая знания о выпечке, приготовлении десертов и художественном оформлении блюд. 
                Эта профессия требует не только кулинарных навыков, но и творческого подхода, точности и внимания к деталям.
              </p>
              <Button className="bg-[#D2691E] hover:bg-[#8B4513]">
                Узнать о карьере
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1603984362497-0a878f607b98" 
                alt="Кондитер-повар за работой" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Вкладки */}
        <Tabs defaultValue="profession" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 bg-[#FFE4B5]">
            <TabsTrigger value="profession" className="data-[state=active]:bg-[#D2691E] data-[state=active]:text-white">Описание профессии</TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-[#D2691E] data-[state=active]:text-white">Навыки и обучение</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profession" className="mt-6">
            <Card className="border-[#D2691E]/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Суть профессии</h3>
                    <p className="mb-4">
                      Кондитер-повар занимается приготовлением различных видов выпечки, десертов, тортов, хлебобулочных 
                      изделий и других сладостей. Он совмещает технические знания о приготовлении пищи с 
                      художественным оформлением блюд.
                    </p>
                    <p className="mb-4">
                      Эти специалисты работают в ресторанах, кафе, пекарнях, кондитерских, на предприятиях питания и в 
                      гостиничном бизнесе. Многие со временем открывают собственное дело.
                    </p>
                    <h4 className="text-xl font-semibold text-[#8B4513] mt-6 mb-3">Ежедневные задачи:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Приготовление теста и выпечки по рецептам</li>
                      <li>Создание десертов и кондитерских изделий</li>
                      <li>Разработка новых рецептур и технологий</li>
                      <li>Оформление и декорирование блюд</li>
                      <li>Работа с шоколадом, карамелью, мастикой</li>
                      <li>Контроль качества используемых ингредиентов</li>
                      <li>Соблюдение санитарных норм и стандартов</li>
                    </ul>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1595492476662-0c6ba77d5df0" 
                      alt="Создание десерта" 
                      className="rounded-lg shadow-md mb-6 w-full h-auto"
                    />
                    <div className="bg-[#FFDAB9] p-5 rounded-lg">
                      <h4 className="text-xl font-semibold text-[#8B4513] mb-3">Преимущества профессии:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ Возможность творческого самовыражения</li>
                        <li>✓ Высокий спрос на рынке труда</li>
                        <li>✓ Перспективы открытия собственного бизнеса</li>
                        <li>✓ Возможность участия в кулинарных конкурсах</li>
                        <li>✓ Профессия не подвержена автоматизации</li>
                        <li>✓ Постоянное развитие и совершенствование</li>
                        <li>✓ Радость от создания продукта, приносящего удовольствие людям</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills" className="mt-6">
            <Card className="border-[#D2691E]/20">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Необходимые навыки</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold">Профессиональные компетенции:</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                          <li>Знание технологии приготовления теста и выпечки</li>
                          <li>Понимание принципов работы с различными ингредиентами</li>
                          <li>Умение работать с кондитерским оборудованием</li>
                          <li>Знание основ пищевой химии и физики в кулинарии</li>
                          <li>Владение различными техниками декорирования</li>
                          <li>Умение работать с шоколадом, карамелью, мастикой</li>
                          <li>Знание правил хранения продуктов</li>
                          <li>Владение техникой безопасности</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Личные качества:</h4>
                        <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                          <li>Творческое мышление</li>
                          <li>Аккуратность и внимательность</li>
                          <li>Терпение и усидчивость</li>
                          <li>Развитое чувство вкуса и обоняния</li>
                          <li>Хорошая память на рецепты</li>
                          <li>Способность к длительной концентрации</li>
                          <li>Умение работать в команде</li>
                          <li>Стрессоустойчивость</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Образование и развитие</h3>
                    <img 
                      src="https://images.unsplash.com/photo-1589985270958-bf04ac9428d5" 
                      alt="Обучение кондитерскому мастерству" 
                      className="rounded-lg shadow-md mb-6 w-full h-auto"
                    />
                    <div className="bg-[#F0E68C] p-5 rounded-lg">
                      <h4 className="text-xl font-semibold text-[#8B4513] mb-3">Как получить профессию:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Среднее профессиональное образование в колледжах кулинарного профиля</li>
                        <li>• Высшее образование в сфере пищевых технологий</li>
                        <li>• Специализированные курсы и мастер-классы</li>
                        <li>• Стажировки в ресторанах и кондитерских</li>
                        <li>• Самообразование и практика</li>
                      </ul>
                      
                      <h4 className="text-xl font-semibold text-[#8B4513] mt-6 mb-3">Карьерные перспективы:</h4>
                      <p className="text-gray-700 mb-3">
                        Карьерный путь кондитера-повара может развиваться в нескольких направлениях:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>1. От помощника до шеф-кондитера крупного ресторана или гостиницы</li>
                        <li>2. Открытие собственной кондитерской или пекарни</li>
                        <li>3. Специализация на определенном виде продукции (торты, шоколад, хлеб)</li>
                        <li>4. Преподавание в кулинарных школах</li>
                        <li>5. Написание кулинарных книг и ведение блогов</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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

export default Index;
