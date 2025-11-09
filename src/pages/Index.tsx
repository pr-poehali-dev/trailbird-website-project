import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const routes = [
    {
      id: 1,
      title: 'Альпийские тропы',
      location: 'Швейцария, Альпы',
      duration: '7 дней',
      difficulty: 'Средняя',
      image: 'https://cdn.poehali.dev/projects/4ba8bacf-4d47-4b92-b5e1-e80d30a2347c/files/1df381f0-e11d-4e11-a2e0-5c931270f8c4.jpg'
    },
    {
      id: 2,
      title: 'Океанские просторы',
      location: 'Новая Зеландия',
      duration: '10 дней',
      difficulty: 'Легкая',
      image: 'https://cdn.poehali.dev/projects/4ba8bacf-4d47-4b92-b5e1-e80d30a2347c/files/a422d62a-25fa-4b5b-b969-b4b8ca0f36cf.jpg'
    },
    {
      id: 3,
      title: 'Древние маршруты',
      location: 'Перу, Мачу-Пикчу',
      duration: '5 дней',
      difficulty: 'Сложная',
      image: 'https://cdn.poehali.dev/projects/4ba8bacf-4d47-4b92-b5e1-e80d30a2347c/files/cedfc980-4d88-444e-966a-e32d7cfd866c.jpg'
    }
  ];

  const planningSteps = [
    {
      icon: 'MapPin',
      title: 'Выберите направление',
      description: 'Укажите желаемую страну или регион для путешествия'
    },
    {
      icon: 'Calendar',
      title: 'Определите даты',
      description: 'Выберите продолжительность и период поездки'
    },
    {
      icon: 'Users',
      title: 'Состав группы',
      description: 'Сколько человек отправится в путешествие'
    },
    {
      icon: 'Route',
      title: 'Постройте маршрут',
      description: 'Мы подберем оптимальный путь с учетом ваших предпочтений'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden mesh-bg">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="bird animate-fly-across" style={{ animationDelay: '0s' }} />
        <div className="bird animate-fly-across" style={{ animationDelay: '8s', top: '30%' }} />
        <div className="bird animate-fly-across" style={{ animationDelay: '16s', top: '60%' }} />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b-4 border-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bird scale-75" />
              <h1 className="text-3xl font-black text-foreground uppercase tracking-tight">Trailbird</h1>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['home', 'routes', 'planning', 'register', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 font-bold uppercase text-sm transition-all border-2 ${
                    activeSection === section 
                      ? 'bg-primary text-primary-foreground border-foreground' 
                      : 'bg-transparent text-foreground border-transparent hover:border-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'routes' && 'Маршруты'}
                  {section === 'planning' && 'Планирование'}
                  {section === 'register' && 'Регистрация'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-20">
              <div className="inline-block">
                <div className="bird scale-150 mb-6" />
              </div>
              <h2 className="text-6xl md:text-7xl font-black leading-none uppercase">
                Планируйте
                <br />
                <span className="text-primary">путешествия</span>
                <br />
                как альбатрос
              </h2>
              <p className="text-xl font-medium">
                Создавайте идеальные маршруты, открывайте новые горизонты.
                Trailbird — ваш проводник в мир приключений.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('planning')} 
                  className="brutalist-card bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase px-8 py-6 text-lg"
                >
                  Начать
                  <Icon name="ArrowRight" className="ml-2" size={24} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('routes')}
                  className="brutalist-card font-bold uppercase px-8 py-6 text-lg border-4"
                >
                  Маршруты
                </Button>
              </div>
            </div>
            <div className="relative z-20">
              <div className="brutalist-card overflow-hidden bg-card">
                <img
                  src="https://cdn.poehali.dev/projects/4ba8bacf-4d47-4b92-b5e1-e80d30a2347c/files/a422d62a-25fa-4b5b-b969-b4b8ca0f36cf.jpg"
                  alt="Альбатрос в полете"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 border-4 border-foreground">
                <p className="text-5xl font-black">500+</p>
                <p className="text-lg font-bold uppercase">Маршрутов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-24 px-4 bg-secondary/20 diagonal-split">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 uppercase">Популярные маршруты</h2>
            <p className="text-xl font-medium">Откройте для себя лучшие направления</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {routes.map((route, index) => (
              <div
                key={route.id}
                className="brutalist-card bg-card overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 border-2 border-foreground font-bold uppercase text-sm">
                    {route.difficulty}
                  </div>
                </div>
                <div className="p-6 border-t-4 border-foreground">
                  <h3 className="text-2xl font-black mb-4 uppercase">{route.title}</h3>
                  <div className="space-y-3 text-base font-medium mb-6">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} />
                      <span>{route.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={20} />
                      <span>{route.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase border-2 border-foreground">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planning" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 uppercase">Как мы планируем</h2>
            <p className="text-xl font-medium">Четыре простых шага к идеальному путешествию</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => (
              <div
                key={index}
                className="brutalist-card bg-card p-8 text-center"
              >
                <div className="w-20 h-20 bg-primary border-4 border-foreground flex items-center justify-center mx-auto mb-6">
                  <Icon name={step.icon as any} size={36} className="text-primary-foreground" />
                </div>
                <div className="text-4xl font-black mb-2">0{index + 1}</div>
                <h3 className="text-xl font-black mb-3 uppercase">{step.title}</h3>
                <p className="font-medium">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('register')} 
              className="brutalist-card bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase px-12 py-8 text-xl"
            >
              Создать маршрут
              <Icon name="Sparkles" className="ml-3" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <section id="register" className="py-24 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <div className="brutalist-card bg-card p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black mb-3 uppercase">Начните приключение</h2>
              <p className="text-lg font-medium">Зарегистрируйтесь и получите доступ ко всем маршрутам</p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Имя</label>
                  <Input placeholder="Ваше имя" className="border-2 border-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Фамилия</label>
                  <Input placeholder="Ваша фамилия" className="border-2 border-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">Email</label>
                <Input type="email" placeholder="example@email.com" className="border-2 border-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">Телефон</label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" className="border-2 border-foreground" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">Расскажите о себе</label>
                <Textarea placeholder="Какие путешествия вам интересны?" rows={4} className="border-2 border-foreground" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase py-6 text-lg border-4 border-foreground">
                Зарегистрироваться
                <Icon name="Send" className="ml-2" size={22} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-5xl font-black uppercase">Свяжитесь с нами</h2>
              <p className="text-xl font-medium">
                Готовы спланировать ваше следующее путешествие? Напишите нам!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary border-4 border-foreground flex items-center justify-center">
                    <Icon name="Mail" size={28} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm">Email</p>
                    <p className="text-lg font-medium">hello@trailbird.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary border-4 border-foreground flex items-center justify-center">
                    <Icon name="Phone" size={28} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm">Телефон</p>
                    <p className="text-lg font-medium">+7 (800) 555-35-35</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary border-4 border-foreground flex items-center justify-center">
                    <Icon name="MapPin" size={28} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm">Офис</p>
                    <p className="text-lg font-medium">Москва, ул. Путешественников, 1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="brutalist-card bg-card p-8">
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="border-2 border-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="border-2 border-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Сообщение</label>
                  <Textarea placeholder="Расскажите о вашем путешествии..." rows={5} className="border-2 border-foreground" />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase py-5 border-2 border-foreground">
                  Отправить
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-4 border-t-8 border-primary">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bird scale-75" style={{ filter: 'invert(1)' }} />
                <h3 className="text-2xl font-black uppercase">Trailbird</h3>
              </div>
              <p className="font-medium">Ваш проводник в мир приключений</p>
            </div>
            <div>
              <h4 className="font-black mb-4 uppercase text-lg">Навигация</h4>
              <ul className="space-y-2 font-medium">
                <li><button onClick={() => scrollToSection('home')} className="hover:underline">Главная</button></li>
                <li><button onClick={() => scrollToSection('routes')} className="hover:underline">Маршруты</button></li>
                <li><button onClick={() => scrollToSection('planning')} className="hover:underline">Планирование</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 uppercase text-lg">Поддержка</h4>
              <ul className="space-y-2 font-medium">
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Помощь</a></li>
                <li><a href="#" className="hover:underline">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 uppercase text-lg">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 border-2 border-background flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                  <Icon name="Facebook" size={22} />
                </a>
                <a href="#" className="w-12 h-12 border-2 border-background flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                  <Icon name="Instagram" size={22} />
                </a>
                <a href="#" className="w-12 h-12 border-2 border-background flex items-center justify-center hover:bg-background hover:text-foreground transition-colors">
                  <Icon name="Twitter" size={22} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-background pt-8 text-center font-medium">
            <p>© 2024 TRAILBIRD. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
