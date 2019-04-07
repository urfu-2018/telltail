import Actions = require('tables/Actions');
import Adventure = require('tables/Adventure');
import Hashing = require('tables/Hashing');
function addtable() {
Adventure.bulkCreate([
    {
        numberAction: 'dragon',
        title: 'Бой с драконом',
        // tslint:disable-next-line:object-literal-sort-keys
        description: ''
    },
    {
        numberAction: 'EpicQvest',
        title: 'Эпичный квест',
        // tslint:disable-next-line:object-literal-sort-keys
        description: ''
    },
    {
        numberAction: 'AdventureMag',
        title: 'Приключения мага',
        // tslint:disable-next-line:object-literal-sort-keys
        description: "Древнее Зло вновь набирается сил... Грядет новая битва." +
        " Вы – единственная надежда выстоять в финальной битве с темными силами."
    }
]);

Actions.bulkCreate([
    {
        action: '1',
        adventure: 'AdventureMag',
        nextAction: '2'

    },
    {
        action: '1',
        adventure: 'EpicQvest',
        nextAction: '2'
    }
]);

Hashing.bulkCreate([
    {
        hash: 'дракон;фэнтези;hard;берсерк',
        hashEN: 'dragon;fantasy;hard;berserk',
        title: 'Бой с драконом'
    },
    {
        hash: 'магия;фэнтези',
        hashEN: 'magic;fantasy',
        title: 'Приключения мага'
    },
    {
        hash: 'команда;фэнтези;магия',
        hashEN: 'paty;fantasy;magic',
        title: 'Эпичный квест'
    }
]);

}

export = addtable;
