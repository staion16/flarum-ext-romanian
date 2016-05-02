// Custom French Moment.js Locales
// Based on: https://github.com/moment/moment/blob/develop/locale/fr.js

moment.locale('ro', {
  months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombroe_noiembrie_decembrie'.split('_'),
  monthsShort: 'ian._feb._mar_apr._mai_iun_iul._aug_sep._oct._noi._dec.'.split('_'),
  monthsParseExact : true,
  weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
  weekdaysShort: 'dum._lun._mar._mie._joi._vin._sâm.'.split('_'),
  weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
  weekdaysParseExact : true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY', // Swiss French uses DD.MM.YYYY. Canadian French uses YYYY-MM-DD.
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[Astăzi la] LT',
    nextDay: '[Mâine la] LT',
    nextWeek: 'dddd [la] LT',
    lastDay: '[Ieri la] LT',
    lastWeek: '[în ziua de] dddd [a săptămânii trecute' + '] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'în %s',
    past: 'acum %s',
    s: 'câteva secunde',
    m: 'un minut',
    mm: '%d minute',
    h: 'o oră',
    hh: '%d ore',
    d: 'o zi',
    dd: '%d zile',
    M: 'o lună',
    MM: '%d luni',
    y: 'un an',
    yy: '%d ani'
  },
  ordinalParse: /\d{1,2}(ul|e)/,
  ordinal: function (number) {
    return number + (number === 1 ? 'ul' : 'a');
  },
  week: {
    dow: 1, // Monday is the first day of the week. Canadian French uses 0, because Sunday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year. Canadian French uses 6, because the week that contains Jan 1st is the first week of the year.
  }
});
