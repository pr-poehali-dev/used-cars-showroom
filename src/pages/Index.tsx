import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  image: string;
}

const carData: Car[] = [
  { id: 1, brand: 'Toyota', model: 'Camry', year: 2020, price: 1850000, mileage: 45000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/d1a781cb-945c-4f28-beb2-2d1775ea4e32.jpg' },
  { id: 2, brand: 'BMW', model: 'X5', year: 2019, price: 3200000, mileage: 60000, fuel: 'Дизель', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 3, brand: 'Mercedes', model: 'E-Class', year: 2021, price: 3800000, mileage: 25000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/1606663c-3963-461e-a6a0-8412e3fac4ba.jpg' },
  { id: 4, brand: 'Audi', model: 'A6', year: 2020, price: 2950000, mileage: 38000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/d1a781cb-945c-4f28-beb2-2d1775ea4e32.jpg' },
  { id: 5, brand: 'Volkswagen', model: 'Tiguan', year: 2019, price: 1650000, mileage: 72000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 6, brand: 'Hyundai', model: 'Tucson', year: 2020, price: 1450000, mileage: 50000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 7, brand: 'Kia', model: 'Sportage', year: 2021, price: 1750000, mileage: 30000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 8, brand: 'Mazda', model: 'CX-5', year: 2019, price: 1550000, mileage: 65000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 9, brand: 'Nissan', model: 'Qashqai', year: 2020, price: 1350000, mileage: 55000, fuel: 'Бензин', transmission: 'Вариатор', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 10, brand: 'Ford', model: 'Focus', year: 2019, price: 950000, mileage: 80000, fuel: 'Бензин', transmission: 'Механика', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/d1a781cb-945c-4f28-beb2-2d1775ea4e32.jpg' },
  { id: 11, brand: 'Skoda', model: 'Octavia', year: 2020, price: 1250000, mileage: 45000, fuel: 'Бензин', transmission: 'Робот', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/d1a781cb-945c-4f28-beb2-2d1775ea4e32.jpg' },
  { id: 12, brand: 'Renault', model: 'Duster', year: 2019, price: 850000, mileage: 90000, fuel: 'Бензин', transmission: 'Механика', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 13, brand: 'Chevrolet', model: 'Cruze', year: 2018, price: 750000, mileage: 95000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/d1a781cb-945c-4f28-beb2-2d1775ea4e32.jpg' },
  { id: 14, brand: 'Honda', model: 'CR-V', year: 2020, price: 2150000, mileage: 40000, fuel: 'Бензин', transmission: 'Вариатор', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 15, brand: 'Subaru', model: 'Forester', year: 2019, price: 1850000, mileage: 70000, fuel: 'Бензин', transmission: 'Вариатор', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 16, brand: 'Volvo', model: 'XC60', year: 2020, price: 2850000, mileage: 35000, fuel: 'Дизель', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 17, brand: 'Lexus', model: 'RX', year: 2021, price: 4200000, mileage: 20000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 18, brand: 'Infiniti', model: 'QX50', year: 2019, price: 2250000, mileage: 55000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 19, brand: 'Mitsubishi', model: 'Outlander', year: 2020, price: 1650000, mileage: 48000, fuel: 'Бензин', transmission: 'Вариатор', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
  { id: 20, brand: 'Jeep', model: 'Cherokee', year: 2019, price: 2050000, mileage: 62000, fuel: 'Бензин', transmission: 'Автомат', image: 'https://cdn.poehali.dev/projects/29e65762-e45c-40f0-92ff-798cdc14740a/files/fb5caa10-99ad-4c4b-bd0b-76f08daa7191.jpg' },
];

const reviews = [
  { name: 'Александр М.', text: 'Купил Toyota Camry. Отличное обслуживание, честные условия. Рекомендую!', rating: 5 },
  { name: 'Мария К.', text: 'Долго выбирала автомобиль, менеджеры помогли определиться. Взяла в кредит без проблем.', rating: 5 },
  { name: 'Дмитрий П.', text: 'Прозрачные условия сделки, все документы оформили быстро. Доволен покупкой!', rating: 5 },
];

export default function Index() {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const filteredCars = carData.filter(car => {
    const brandMatch = selectedBrand === 'all' || car.brand === selectedBrand;
    const priceMatch = !maxPrice || car.price <= parseInt(maxPrice);
    const yearMatch = selectedYear === 'all' || car.year.toString() === selectedYear;
    return brandMatch && priceMatch && yearMatch;
  });

  const brands = ['all', ...Array.from(new Set(carData.map(car => car.brand)))];
  const years = ['all', ...Array.from(new Set(carData.map(car => car.year.toString()))).sort().reverse()];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-[#1A1F2C] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold">АвтоДрайв</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#guarantees" className="hover:text-primary transition-colors">Гарантии</a>
              <a href="#credit" className="hover:text-primary transition-colors">Кредит</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Надёжные автомобили <span className="text-primary">с пробегом</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Более 20 проверенных автомобилей в наличии. Гарантия качества, прозрачные условия, помощь в оформлении.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Search" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Каталог автомобилей</h2>
          
          <Card className="mb-8 animate-scale-in">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Марка</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все марки" />
                    </SelectTrigger>
                    <SelectContent>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>
                          {brand === 'all' ? 'Все марки' : brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Год</label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все годы" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={year}>
                          {year === 'all' ? 'Все годы' : year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Макс. цена</label>
                  <Input
                    type="number"
                    placeholder="Введите цену"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedBrand('all');
                      setMaxPrice('');
                      setSelectedYear('all');
                    }}
                  >
                    Сбросить
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car, index) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="relative h-48 bg-gray-100">
                  <img src={car.image} alt={`${car.brand} ${car.model}`} className="w-full h-full object-cover" />
                  <Badge className="absolute top-3 right-3 bg-primary">{car.year}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-xl mb-2">{car.brand} {car.model}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Gauge" size={16} />
                      <span>{car.mileage.toLocaleString()} км</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Fuel" size={16} />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Settings" size={16} />
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {car.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-8">
              АвтоДрайв — это современный автосалон с 10-летним опытом работы на рынке подержанных автомобилей. 
              Мы тщательно проверяем каждый автомобиль перед продажей и предоставляем полную историю обслуживания.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center animate-scale-in">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={40} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">Полная проверка технического состояния</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" size={40} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Честные сделки</h3>
                <p className="text-muted-foreground">Прозрачное оформление документов</p>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2">Поддержка 24/7</h3>
                <p className="text-muted-foreground">Консультации на всех этапах покупки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Услуги автосалона</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Search', title: 'Подбор авто', desc: 'Поможем найти идеальный автомобиль' },
              { icon: 'Wrench', title: 'Диагностика', desc: 'Полная проверка перед покупкой' },
              { icon: 'RefreshCw', title: 'Trade-in', desc: 'Обмен вашего авто с доплатой' },
              { icon: 'FileText', title: 'Оформление', desc: 'Помощь со всеми документами' },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="guarantees" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Гарантии и условия</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { title: 'Гарантия 6 месяцев', desc: 'На все автомобили предоставляется гарантия на основные агрегаты' },
              { title: 'Возврат в течение 14 дней', desc: 'Не понравился автомобиль? Вернем деньги без вопросов' },
              { title: 'Юридическая чистота', desc: 'Проверяем историю авто по всем базам данных' },
              { title: 'Техническая проверка', desc: '150+ точек контроля перед продажей' },
            ].map((item, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="credit" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Кредит и рассрочка</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Работаем с ведущими банками. Одобрение за 30 минут, ставка от 5.9% годовых
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">от 5.9%</div>
              <p className="text-muted-foreground">Процентная ставка</p>
            </Card>
            <Card className="p-6 text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">до 7 лет</div>
              <p className="text-muted-foreground">Срок кредита</p>
            </Card>
            <Card className="p-6 text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">от 0%</div>
              <p className="text-muted-foreground">Первоначальный взнос</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Рассчитать кредит
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
              <p className="text-gray-300">Ежедневно 9:00 - 21:00</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@avtodrive.ru</p>
              <p className="text-gray-300">Ответим в течение часа</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold mb-2">Адрес</h3>
              <p className="text-gray-300">г. Москва</p>
              <p className="text-gray-300">ул. Автомобильная, 15</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 АвтоДрайв. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
