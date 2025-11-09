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
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 animate-fade-in">
              <span className="text-3xl">🦅</span>
              <h1 className="text-2xl font-bold text-primary">Trailbird</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'routes', 'planning', 'register', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Планируйте путешествия
                <span className="text-primary block">как альбатрос</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Создавайте идеальные маршруты, открывайте новые горизонты и путешествуйте с уверенностью.
                Trailbird — ваш проводник в мир приключений.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('planning')} className="hover:scale-105 transition-transform">
                  Начать планирование
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('routes')}>
                  Популярные маршруты
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/4ba8bacf-4d47-4b92-b5e1-e80d30a2347c/files/a422d62a-25fa-4b5b-b969-b4b8ca0f36cf.jpg"
                alt="Альбатрос в полете"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm">Маршрутов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="routes" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Популярные маршруты</h2>
            <p className="text-lg text-muted-foreground">Откройте для себя лучшие направления</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card
                key={route.id}
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={route.image}
                    alt={route.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {route.difficulty}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{route.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>{route.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{route.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="planning" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Как мы планируем</h2>
            <p className="text-lg text-muted-foreground">Четыре простых шага к идеальному путешествию</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover:bg-primary hover:text-primary-foreground transition-all">
                  <Icon name={step.icon as any} size={32} />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => scrollToSection('register')} className="hover:scale-105 transition-transform">
              Создать маршрут
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="register" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl">
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Начните свое приключение</h2>
                <p className="text-muted-foreground">Зарегистрируйтесь и получите доступ ко всем маршрутам</p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Фамилия</label>
                    <Input placeholder="Ваша фамилия" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Расскажите о себе</label>
                  <Textarea placeholder="Какие путешествия вам интересны?" rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Зарегистрироваться
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Готовы спланировать ваше следующее путешествие? Напишите нам!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hello@trailbird.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Офис</p>
                    <p className="text-muted-foreground">Москва, ул. Путешественников, 1</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем путешествии..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🦅</span>
                <h3 className="text-xl font-bold">Trailbird</h3>
              </div>
              <p className="text-sm opacity-80">Ваш проводник в мир приключений</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('home')} className="hover:opacity-100">Главная</button></li>
                <li><button onClick={() => scrollToSection('routes')} className="hover:opacity-100">Маршруты</button></li>
                <li><button onClick={() => scrollToSection('planning')} className="hover:opacity-100">Планирование</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">FAQ</a></li>
                <li><a href="#" className="hover:opacity-100">Помощь</a></li>
                <li><a href="#" className="hover:opacity-100">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 Trailbird. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
