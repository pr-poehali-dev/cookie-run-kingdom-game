import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem('cookieScore');
    return saved ? parseInt(saved, 10) : 0;
  });
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    localStorage.setItem('cookieScore', score.toString());
  }, [score]);

  const cookies = [
    { id: 1, name: 'Brave Cookie', rarity: 5, type: 'Воин', power: '🗡️', color: 'from-pink-400 to-purple-500' },
    { id: 2, name: 'Magic Cookie', rarity: 4, type: 'Маг', power: '✨', color: 'from-blue-400 to-cyan-500' },
    { id: 3, name: 'Healer Cookie', rarity: 4, type: 'Целитель', power: '💖', color: 'from-green-400 to-emerald-500' },
    { id: 4, name: 'Speed Cookie', rarity: 3, type: 'Разведчик', power: '⚡', color: 'from-yellow-400 to-orange-500' },
    { id: 5, name: 'Tank Cookie', rarity: 5, type: 'Защитник', power: '🛡️', color: 'from-red-400 to-pink-500' },
    { id: 6, name: 'Ranger Cookie', rarity: 3, type: 'Лучник', power: '🏹', color: 'from-purple-400 to-pink-500' },
  ];

  const news = [
    { id: 1, title: 'Новое обновление 3.0!', date: '15 Октября 2025', emoji: '🎉' },
    { id: 2, title: 'Событие: Хэллоуин', date: '10 Октября 2025', emoji: '🎃' },
    { id: 3, title: 'Новый персонаж: Dark Choco', date: '5 Октября 2025', emoji: '🍫' },
  ];

  const gallery = [
    { id: 1, title: 'Королевство', emoji: '🏰' },
    { id: 2, title: 'Битва', emoji: '⚔️' },
    { id: 3, title: 'Праздник', emoji: '🎊' },
    { id: 4, title: 'Приключения', emoji: '🗺️' },
  ];

  const handleCookieClick = () => {
    setScore(score + 10);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300">
      <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white" style={{ 
            textShadow: '3px 3px 0 #5a1a5a, -1px -1px 0 #5a1a5a, 1px -1px 0 #5a1a5a, -1px 1px 0 #5a1a5a',
            fontFamily: 'Fredoka, cursive'
          }}>
            🍪 COOKIE KINGDOM
          </h1>
          <div className="hidden md:flex gap-2">
            {['home', 'characters', 'game', 'gallery', 'news', 'community'].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full font-bold text-white transition-all ${
                  activeTab === tab 
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 scale-110' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105'
                }`}
                style={{ fontFamily: 'Fredoka, cursive' }}
              >
                {tab === 'home' && 'Главная'}
                {tab === 'characters' && 'Персонажи'}
                {tab === 'game' && 'Игра'}
                {tab === 'gallery' && 'Галерея'}
                {tab === 'news' && 'Новости'}
                {tab === 'community' && 'Сообщество'}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4 md:p-8">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center py-12 md:py-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ 
                textShadow: '4px 4px 0 #5a1a5a, -2px -2px 0 #5a1a5a, 2px -2px 0 #5a1a5a, -2px 2px 0 #5a1a5a',
                fontFamily: 'Fredoka, cursive'
              }}>
                Добро пожаловать в<br/>Cookie Kingdom! 🏰
              </h2>
              <p className="text-xl md:text-2xl text-white mb-8 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Собери команду легендарных печенек и спаси королевство!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  onClick={() => setActiveTab('game')}
                  className="text-xl px-8 py-6 rounded-full font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-110 transition-transform text-white shadow-lg"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  ▶️ Играть сейчас
                </Button>
                <Button 
                  onClick={() => setActiveTab('characters')}
                  className="text-xl px-8 py-6 rounded-full font-bold bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-110 transition-transform text-white shadow-lg"
                  style={{ fontFamily: 'Fredoka, cursive' }}
                >
                  👑 Персонажи
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '⚔️', title: 'Эпические битвы', desc: 'Сражайся с боссами' },
                { icon: '🏰', title: 'Строй королевство', desc: 'Создай свой замок' },
                { icon: '🎁', title: 'Собирай награды', desc: 'Открывай сокровища' },
              ].map((feature, idx) => (
                <Card key={idx} className="p-6 bg-white/90 backdrop-blur hover:scale-105 transition-transform border-4 border-purple-400 rounded-3xl">
                  <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-center mb-2 text-purple-700" style={{ fontFamily: 'Fredoka, cursive' }}>
                    {feature.title}
                  </h3>
                  <p className="text-center text-gray-700 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {feature.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'characters' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8" style={{ 
              textShadow: '3px 3px 0 #5a1a5a',
              fontFamily: 'Fredoka, cursive'
            }}>
              👑 Легендарные печеньки
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cookies.map((cookie) => (
                <Card key={cookie.id} className="overflow-hidden border-4 border-yellow-400 rounded-3xl hover:scale-105 transition-transform bg-gradient-to-br from-yellow-100 to-orange-100">
                  <div className={`h-32 bg-gradient-to-r ${cookie.color} flex items-center justify-center`}>
                    <span className="text-7xl">{cookie.power}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-purple-800" style={{ fontFamily: 'Fredoka, cursive' }}>
                        {cookie.name}
                      </h3>
                      <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold">
                        {'⭐'.repeat(cookie.rarity)}
                      </Badge>
                    </div>
                    <p className="text-gray-700 mb-4 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      Тип: {cookie.type}
                    </p>
                    <Button className="w-full rounded-full font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 transition-transform" style={{ fontFamily: 'Fredoka, cursive' }}>
                      Играть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'game' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8" style={{ 
              textShadow: '3px 3px 0 #5a1a5a',
              fontFamily: 'Fredoka, cursive'
            }}>
              🎮 Кликер печенек
            </h2>
            <Card className="max-w-2xl mx-auto p-8 bg-white/95 backdrop-blur border-4 border-pink-400 rounded-3xl">
              <div className="text-center space-y-6">
                <div className="text-3xl font-bold text-purple-700" style={{ fontFamily: 'Fredoka, cursive' }}>
                  Счёт: {score} 🍪
                </div>
                <button
                  onClick={handleCookieClick}
                  className="text-9xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                >
                  🍪
                </button>
                <p className="text-xl text-gray-700 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Кликай на печеньку чтобы собрать очки!
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-4 rounded-2xl">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="font-bold text-purple-700" style={{ fontFamily: 'Fredoka, cursive' }}>Бонус x2</div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-200 to-orange-200 p-4 rounded-2xl">
                    <div className="text-2xl mb-2">🎁</div>
                    <div className="font-bold text-orange-700" style={{ fontFamily: 'Fredoka, cursive' }}>Награда</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8" style={{ 
              textShadow: '3px 3px 0 #5a1a5a',
              fontFamily: 'Fredoka, cursive'
            }}>
              🖼️ Галерея королевства
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((item) => (
                <Card key={item.id} className="overflow-hidden border-4 border-blue-400 rounded-3xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="h-64 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center">
                    <span className="text-9xl">{item.emoji}</span>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-center text-purple-700" style={{ fontFamily: 'Fredoka, cursive' }}>
                      {item.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8" style={{ 
              textShadow: '3px 3px 0 #5a1a5a',
              fontFamily: 'Fredoka, cursive'
            }}>
              📰 Новости королевства
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {news.map((item) => (
                <Card key={item.id} className="p-6 bg-white/95 backdrop-blur border-4 border-green-400 rounded-3xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">{item.emoji}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-purple-700" style={{ fontFamily: 'Fredoka, cursive' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        {item.date}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8" style={{ 
              textShadow: '3px 3px 0 #5a1a5a',
              fontFamily: 'Fredoka, cursive'
            }}>
              👥 Сообщество
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '💬', title: 'Discord', desc: 'Присоединяйся к общению', color: 'from-indigo-400 to-purple-500' },
                { icon: '📱', title: 'Telegram', desc: 'Новости и обновления', color: 'from-blue-400 to-cyan-500' },
                { icon: '🎥', title: 'YouTube', desc: 'Гайды и стримы', color: 'from-red-400 to-pink-500' },
                { icon: '🏆', title: 'Турниры', desc: 'Соревнуйся с другими', color: 'from-yellow-400 to-orange-500' },
              ].map((social, idx) => (
                <Card key={idx} className="overflow-hidden border-4 border-purple-400 rounded-3xl hover:scale-105 transition-transform cursor-pointer">
                  <div className={`h-32 bg-gradient-to-r ${social.color} flex items-center justify-center`}>
                    <span className="text-7xl">{social.icon}</span>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold mb-2 text-purple-700" style={{ fontFamily: 'Fredoka, cursive' }}>
                      {social.title}
                    </h3>
                    <p className="text-gray-700 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      {social.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-xl font-bold mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
            🍪 Cookie Run: Kingdom
          </p>
          <p className="text-sm opacity-90" style={{ fontFamily: 'Nunito, sans-serif' }}>
            © 2025 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;