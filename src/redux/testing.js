const cardsInfo = {
    card: [
        {
            nameKvest: 'Карантин',
            discriptionKvest: 'Очнувшись привязанными, вы узнаете, что стали жертвами эксперимента со смертельным вирусом, который проводила международная компания. У вас есть ровно 90 минут на то, чтобы найти антидот и спастись',
            price: '1 человек - 500 рублей'
        },
        {
            nameKvest: 'Автоквест',
            discriptionKvest: 'tozhe ochen xorochii',
            price: '1 человек - 500 рублей'
        },
        {
            nameKvest: 'Детские праздники',
            discriptionKvest: 'tozhe ochen xorochii',
            price: '1 человек - 500 рублей'
        },
        {
            nameKvest: 'Корпоративы',
            discriptionKvest: 'tozhe ochen xorochii',
            price: '1 человек - 500 рублей'
        },
        {
            nameKvest: 'Аренда реквизита',
            discriptionKvest: 'tozhe ochen xorochii',
            price: '1 человек - 500 рублей'
        },
        {
            nameKvest: 'Ночь Мертвых',
            discriptionKvest: 'tozhe ochen xorochii',
            price: '1 человек - 500 рублей'
        },
    ]

}

export const transformSelection = (index) => {
    // debugger;
    switch (index) {
        case 0:
            return ('/karantin');    
        case 1:
            return ('/autokvest');    
        case 2:
            return ('/childrenholidays');    
        case 3:
            return ('/corporate');    
        case 4:
            return ('/rent');    
        case 5:
            return ('/karantin');       
        default:
            break;
    }
}
export default cardsInfo;