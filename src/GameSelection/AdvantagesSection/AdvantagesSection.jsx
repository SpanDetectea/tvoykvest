import React from "react";
import './AdvantagesSection.css';

const AdvantagesSection = () => {
    return (
        <div className="wrapper__AS__double">
            <h1>Почему нас выбирают</h1>
            <div className="wrapper_AS">
                <div className="AS">
                    <div className="img__AS">7</div>
                    <div className="info__AS">
                        лет
                        приносим радость
                    </div>
                </div>
                <div className="AS">
                    <div className="img__AS">50</div>
                    <div className="info__AS">
                        праздников
                        проводим ежемесячно
                    </div>
                </div>
                <div className="AS">
                    <div className="img__AS">55</div>
                    <div className="info__AS">
                        штатных
                        сотрудников
                    </div>
                </div>
                <div className="AS">
                    <div className="img__AS">400 тыс </div>
                    <div className="info__AS">
                        сыгранных
                        игр
                    </div>
                </div>
            </div>
            <div className="section__AS">
                <p>iLocked - это праздничное агентство полного цикла! Мы можем организовать и провести для Вас детский праздник,
                    корпоративное мероприятие, частную вечеринку, выездной квест или тимбилдинг!</p>
                <p>Мы появились на свет в 2014 году и вот уже более семи лет развиваемся на рынке развлечений, занимая все
                    более высокие позиции</p>
                <p>iLocked собрал свыше 30 партнеров во всех городах России, а количество клиентов переваливает за сотни тысяч
                    счастливых игроков</p>
                <p>На популярные запросы «организовать детский праздник» или «где провести корпоратив или тимбилдинг» команда
                    iLocked готова дать свой ответ! Мы в течение нескольких часов подготовим для вас сценарий, смету и подробный
                    тайминг вашего мероприятия, чтобы по его завершению у ваших друзей и коллег остались только самые яркие эмоции
                    и незабываемые впечатления!</p>
            </div>
        </div>
    );
}

export default AdvantagesSection;