# Solar-Calculator

Курсова робота із курсу JavaScript КА "Шаг"

#Основні риси
- Онлайн-калькулятор, який розраховує необхідну кількість сонячних панелей(в залежності від розташування обєкта), їх вартість, вартість монтажних робіт, строк окупності .
- Автоматично, відповідно до введених даних, розраховується  кількість згенерованої  енергії та її вартість по Зеленому тарифу.

#Типи даних

Онлайн-калькулятор буде оперувати такими типами даний:

Назва області, в якій планується використання сонячних панелей -> назва, кількість випромінення сонячної радіації в рік;

Клас панелей -> площа, вартість;

Користувачі -> вид тариф;

Тариф -> назва, вартість.

#Структура даних:

Дані будуть розміщенні відповідно до паттерна Repository у файлах:

Файл region.json:

{

	 "region_id": 1,
  	 "region_name": "Rivnenska",
  	 "level of solar radiation": 3.01
  
}

Файл customer.json:

{

	"customer_id": 1,
	"customer_type": "household",
	"customer_tariff: 0.034,
	"region_id":1
	
}



 
Файл type_of_solar_panel.json:

{

  	 "panel_id":1,
  	 "panel_type": "Premium",
  	 "panel_price": 212,
  	 "panel_power": 0.2
	 "panel_area": 1.28,
	 "panel_KPD": 18%
	 
 }

Загальний вигляд обєкту буде таким 

{

  "id": 98,
  "customer": {
            "customer_id": 3,
            "customer_type": "Green_tariff",
            "customer_tariff": 0.19,
            "region": {
                  "id": 11,
                  "region_name": "Kiev",
                  "level of solar radiation": 3.1
                } 
        },
  "type_of_solar_panel": {
           "panel_id": 2,
           "panel_type": "Premium",
           "panel_price": 212,
           "panel_power": 0.2,
           "panel_area": 1.28,
           "panel_KPD": 18
           }
           
}
