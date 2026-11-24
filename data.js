window.DELIVERY_SHEET = {
  sheetId: 'juan-lopez-2026-11-25',
  customer: 'Juan Lopez',
  deliveryDate: '2026-11-25',
  dateLabelEn: 'Wednesday, November 25, 2026',
  dateLabelEs: 'Miércoles 25 de noviembre de 2026',
  drivers: ['Juan Lopez', 'Abraham', 'Roberto', 'Lucas', 'Javier', 'Emmanuel', 'Omar'],
  changeNotice: {
    confirmedAtEn: 'Confirmed by Juan on Nov 24, 4:58 PM',
    confirmedAtEs: 'Cambio confirmado por Juan el 24 de noviembre, 4:58 p. m.',
    titleEn: '9424 S. Pulaski replaces 4650 W. 103rd St. (No pusher).',
    titleEs: '9424 S. Pulaski reemplaza a 4650 W. 103rd St. (Sin pusher).',
    bodyEn: 'The stop at 4650 W. 103rd St. is canceled. Deliver 1 of Juan’s skid steers without a pusher to 9424 S. Pulaski (street address only confirmed).',
    bodyEs: 'Se cancela la parada en 4650 W. 103rd St. Entregar 1 skid steer de Juan sin pusher en 9424 S. Pulaski (solo se confirmó la dirección de calle).',
    targetStopId: 'stop-09'
  },
  groups: [
    { id: 'all', labelEn: 'All stops', labelEs: 'Todas las paradas' },
    { id: 'walmart', labelEn: 'Walmart', labelEs: 'Walmart' },
    { id: 'jewel', labelEn: 'Jewel-Osco', labelEs: 'Jewel-Osco' },
    { id: 'no-pusher', labelEn: 'No pusher', labelEs: 'Sin pusher' }
  ],
  stops: [
    {
      id: 'stop-01',
      number: '01',
      group: 'walmart',
      groupLabelEn: 'WALMART',
      groupLabelEs: 'WALMART',
      address: '1460 Golf Road, Rolling Meadows, IL 60008',
      mapsQuery: '1460 Golf Road, Rolling Meadows, IL 60008',
      summaryEn: '1 skid steer + 1 rental Berlon spreader',
      summaryEs: '1 skid steer + 1 spreader Berlon de renta',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        },
        {
          key: 'berlon',
          qty: 1,
          icon: 'berlon',
          labelEn: 'Berlon Spreader (Rental)',
          labelEs: 'Spreader Berlon (Renta)',
          detailEn: 'Durango rental spreader',
          detailEs: 'Spreader Berlon de renta'
        }
      ]
    },
    {
      id: 'stop-02',
      number: '02',
      group: 'walmart',
      groupLabelEn: 'WALMART',
      groupLabelEs: 'WALMART',
      address: '930 Mount Prospect Plaza, Mount Prospect, IL 60056',
      mapsQuery: '930 Mount Prospect Plaza, Mount Prospect, IL 60056',
      summaryEn: '1 skid steer + 1 rental Berlon spreader',
      summaryEs: '1 skid steer + 1 spreader Berlon de renta',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        },
        {
          key: 'berlon',
          qty: 1,
          icon: 'berlon',
          labelEn: 'Berlon Spreader (Rental)',
          labelEs: 'Spreader Berlon (Renta)',
          detailEn: 'Durango rental spreader',
          detailEs: 'Spreader Berlon de renta'
        }
      ]
    },
    {
      id: 'stop-03',
      number: '03',
      group: 'jewel',
      groupLabelEn: 'JEWEL-OSCO',
      groupLabelEs: 'JEWEL-OSCO',
      address: '9350 W. 159th St., Orland Park, IL 60462',
      mapsQuery: '9350 W. 159th St., Orland Park, IL 60462',
      summaryEn: '1 of Juan’s skid steers',
      summaryEs: '1 skid steer de Juan',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        }
      ]
    },
    {
      id: 'stop-04',
      number: '04',
      group: 'jewel',
      groupLabelEn: 'JEWEL-OSCO',
      groupLabelEs: 'JEWEL-OSCO',
      address: '2317 75th St., Woodridge, IL 60517',
      mapsQuery: '2317 75th St., Woodridge, IL 60517',
      summaryEn: '1 of Juan’s skid steers',
      summaryEs: '1 skid steer de Juan',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        }
      ]
    },
    {
      id: 'stop-05',
      number: '05',
      group: 'jewel',
      groupLabelEn: 'JEWEL-OSCO',
      groupLabelEs: 'JEWEL-OSCO',
      address: '1759 W. Ogden Ave., Naperville, IL 60540',
      mapsQuery: '1759 W. Ogden Ave., Naperville, IL 60540',
      summaryEn: '1 of Juan’s skid steers',
      summaryEs: '1 skid steer de Juan',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        }
      ]
    },
    {
      id: 'stop-06',
      number: '06',
      group: 'jewel',
      groupLabelEn: 'JEWEL-OSCO',
      groupLabelEs: 'JEWEL-OSCO',
      address: '8801 Ridgeland Ave., Oak Lawn, IL 60453',
      mapsQuery: '8801 Ridgeland Ave., Oak Lawn, IL 60453',
      summaryEn: '1 of Juan’s skid steers',
      summaryEs: '1 skid steer de Juan',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        }
      ]
    },
    {
      id: 'stop-07',
      number: '07',
      group: 'jewel',
      groupLabelEn: 'JEWEL-OSCO',
      groupLabelEs: 'JEWEL-OSCO',
      address: '127 E. Ogden Ave., Naperville, IL 60563',
      mapsQuery: '127 E. Ogden Ave., Naperville, IL 60563',
      summaryEn: '1 of Juan’s skid steers',
      summaryEs: '1 skid steer de Juan',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        }
      ]
    },
    {
      id: 'stop-08',
      number: '08',
      group: 'jewel',
      groupLabelEn: 'JEWEL-OSCO',
      groupLabelEs: 'JEWEL-OSCO',
      address: '2855 95th St., Naperville, IL 60564',
      mapsQuery: '2855 95th St., Naperville, IL 60564',
      summaryEn: '1 of Juan’s skid steers',
      summaryEs: '1 skid steer de Juan',
      special: false,
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          labelEn: 'Skid Steer',
          labelEs: 'Skid steer',
          detailEn: 'Juan’s skid steer',
          detailEs: 'Skid steer de Juan'
        }
      ]
    },
    {
      id: 'stop-09',
      number: '09',
      group: 'no-pusher',
      groupLabelEn: 'NO PUSHER',
      groupLabelEs: 'SIN PUSHER',
      address: '9424 S. Pulaski',
      mapsQuery: '9424 S. Pulaski',
      summaryEn: '1 of Juan’s skid steers, NO pusher',
      summaryEs: '1 skid steer de Juan, sin pusher',
      special: true,
      specialNoteEn: 'Replaces canceled 4650 W. 103rd St. Confirmed by Juan Nov 24, 4:58 PM (street address only).',
      specialNoteEs: 'Reemplaza a 4650 W. 103rd St. (cancelada). Confirmado por Juan el 24 nov, 4:58 p. m. (solo dirección de calle).',
      items: [
        {
          key: 'skid',
          qty: 1,
          icon: 'ssv75',
          noPusher: true,
          labelEn: 'Skid Steer (No pusher)',
          labelEs: 'Skid steer (Sin pusher)',
          detailEn: 'Juan’s skid steer — NO pusher',
          detailEs: 'Skid steer de Juan — SIN pusher'
        }
      ]
    }
  ]
};
