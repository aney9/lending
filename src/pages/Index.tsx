
import React from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Navigation */}
      <header className="py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">L.O.L. Surprise!</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-pink-500">Особенности</a>
            <a href="#collection" className="text-gray-700 hover:text-pink-500">Коллекция</a>
            <a href="#testimonials" className="text-gray-700 hover:text-pink-500">Отзывы</a>
            <a href="#faq" className="text-gray-700 hover:text-pink-500">FAQ</a>
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Откройте мир <br />
                <span className="text-pink-500">L.O.L. Surprise!</span>
              </h1>
              <p className="text-lg text-gray-600">
                Коллекционные куклы с 7 сюрпризами в каждой упаковке. Собери все и открой невероятные аксессуары!
              </p>
              <div className="flex space-x-4">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6">
                  Смотреть коллекцию
                </Button>
                <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 rounded-full px-6">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-full w-72 h-72 mx-auto flex items-center justify-center overflow-hidden bg-pink-100">
                <img 
                  src="https://assets.stickpng.com/images/5ed908096099811256d0ef18.png" 
                  alt="L.O.L. Surprise! Doll" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Floating bubbles */}
              <div className="absolute top-10 left-0 bg-white border border-pink-200 rounded-full py-2 px-6 text-pink-500">
                <span>7+ сюрпризов</span>
              </div>
              <div className="absolute bottom-10 right-0 bg-white border border-pink-200 rounded-full py-2 px-6 text-pink-500">
                <span>100+ кукол</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Почему <span className="text-pink-500">L.O.L. Surprise!</span> так популярны?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Сюрприз в каждой</h3>
              <p className="text-gray-600">Откройте 7+ уникальных сюрпризов внутри каждой куклы</p>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👗</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Стильные наряды</h3>
              <p className="text-gray-600">Модные аксессуары и наряды для каждой куклы</p>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Коллекционирование</h3>
              <p className="text-gray-600">Соберите все редкие и ультра-редкие куклы</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collection Section */}
      <section id="collection" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Популярная <span className="text-pink-500">коллекция</span>
          </h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src="https://i.pinimg.com/originals/85/36/38/853638ca4e0a25a0d95c49ab69f91b8c.png" 
                        alt="LOL Surprise Doll 1" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="mt-3 text-center font-medium">Queen Bee</h3>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src="https://p1.hiclipart.com/preview/955/1/200/dolls-lol-doll-lol-surprise-supreme-bffs-limited-edition-queen-diva-and-bhaddie-png-clipart.jpg" 
                        alt="LOL Surprise Doll 2" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="mt-3 text-center font-medium">Diva</h3>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src="https://p7.hiclipart.com/preview/899/674/541/lol-surprise-doll-toy-mga-entertainment-others.jpg" 
                        alt="LOL Surprise Doll 3" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="mt-3 text-center font-medium">Rocker</h3>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src="https://i.pinimg.com/originals/7c/e2/14/7ce214e79e2c2e7a97ca22c60eebd9c0.png" 
                        alt="LOL Surprise Doll 4" 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="mt-3 text-center font-medium">Cosmic Queen</h3>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Что говорят <span className="text-pink-500">родители</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-50 rounded-lg p-6">
              <p className="italic mb-4">"Моя дочь обожает свою коллекцию L.O.L. Surprise! Каждый раз, когда мы покупаем новую куклу, это настоящий праздник распаковки!"</p>
              <p className="font-medium">- Анна, мама 7-летней девочки</p>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-6">
              <p className="italic mb-4">"Качество кукол отличное, а множество аксессуаров делают игру более интересной. Стоит своих денег!"</p>
              <p className="font-medium">- Елена, мама 9-летней девочки</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Часто задаваемые <span className="text-pink-500">вопросы</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Для какого возраста подходят куклы L.O.L. Surprise?</h3>
              <p className="text-gray-600">Куклы рекомендованы для детей от 5 лет и старше из-за наличия мелких деталей.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Сколько сюрпризов находится в шаре?</h3>
              <p className="text-gray-600">В каждом шаре L.O.L. Surprise находится 7 или более сюрпризов, включая аксессуары, обувь, одежду и куклу.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Какие серии кукол L.O.L. Surprise сейчас доступны?</h3>
              <p className="text-gray-600">Сейчас доступны серии L.O.L. Surprise O.M.G., Lights, Lil Sisters, Pets и многие другие. Ассортимент постоянно обновляется.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">L.O.L. Surprise!</h2>
          <p className="mb-6">© 2023 MGA Entertainment. Все права защищены.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-pink-400">Facebook</a>
            <a href="#" className="hover:text-pink-400">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
