(() => {
  'use strict';

  const sheet = window.DELIVERY_SHEET;
  if (!sheet) return;

  const STORAGE_LANG_KEY = 'durango-jl-lang';
  const STORAGE_NAME_KEY = 'durango-editor-name';
  const LOCAL_RECORDS_KEY = 'durango-jl-20261125-records';
  const LOCAL_ACTIVITY_KEY = 'durango-jl-20261125-activity';
  const LOCAL_PHOTOS_KEY = 'durango-jl-20261125-photos';

  const COPY = {
    en: {
      pageTitle: 'Juan Lopez Deliveries · Durango',
      workspaceLabel: 'OPERATIONS WORKSPACE',
      navStops: 'Delivery stops',
      navTable: 'Full route list',
      navActivity: 'Activity & notes',
      sidebarSub: 'Juan Lopez & Abraham · Live',
      crumbOps: 'Operations',
      crumbPage: 'Juan Lopez deliveries',
      livePill: 'Nov 25, 2026 · Shared live board',
      localPill: 'Nov 25, 2026 · Saved on this device',
      eyebrow: 'DELIVERY COORDINATION · NOV 25, 2026',
      heroLine1: 'Juan Lopez deliveries.',
      heroLine2: 'Clear at a glance.',
      heroSubtitle: 'Wednesday, November 25, 2026 — 9 skid steers + 2 rental Berlon spreaders across 9 stops for Juan Lopez & Abraham.',
      btnShare: 'Share update',
      btnPrint: 'Print handoff',
      btnExport: 'Export delivery list',
      lookupLabel: 'Quick equipment lookup',
      lookupPlaceholder: 'Address, store, equipment, serial #, or driver',
      scoreDelivered: 'Delivered',
      scoreNotDelivered: 'Not delivered',
      scorePending: 'Pending',
      scoreTotal: 'Total assigned',
      jumpStop09: 'View stop #09',
      metricStopsLabel: 'ACTIVE STOPS',
      metricStopsSub: '2 Walmart · 6 Jewel-Osco · 1 No pusher',
      metricEquipLabel: 'EQUIPMENT SCHEDULED',
      metricSkids: 'skids',
      metricBerlon: 'Berlon spreaders',
      metricProgressLabel: 'STOP CONFIRMATION',
      metricProgressSub: 'stops confirmed',
      sharedBanner: 'Anyone with this link can view and update delivery records. Save only confirmed information.',
      localBanner: 'Updates save directly on this device. Tap “Share update” anytime to text your live checklist to Roberto.',
      btnRefresh: 'Refresh now',
      btnRetry: 'Retry',
      trackerEyebrow: 'SITE DELIVERY TRACKER',
      trackerHeading: 'Machine & stop cards',
      trackerSub: 'Tap a stop to confirm delivery, record serial numbers, upload serial-plate photos, or open Google Maps directions.',
      btnExpandAll: 'Expand all',
      btnCollapseAll: 'Collapse all',
      filterStatusLabel: 'Status',
      statusAll: 'All stops',
      statusUnconfirmed: 'Unconfirmed',
      statusDelivered: 'Delivered',
      statusPartial: 'Partial delivery',
      statusNotDelivered: 'Not delivered',
      statusOnHold: 'On hold',
      tableSummaryTitle: 'Full route table',
      colGroup: 'Group',
      colAddress: 'Address',
      colEquipment: 'Assigned equipment',
      colStatus: 'Delivery status',
      colUpdated: 'Driver / Updated',
      activityTitle: 'Team activity & comments',
      activitySub: 'Live log of delivery confirmations, serial numbers, photos, and notes.',
      fieldYourName: 'Your name',
      fieldStop: 'Stop',
      fieldComment: 'Comment or field note',
      commentPlaceholder: 'Dropped behind garden center, serial plate uploaded, gate code, etc.',
      btnPostComment: 'Post note',
      footerNote: 'Anyone with this link can view and update delivery records for Juan Lopez’s November 25, 2026 route. No automatic messages or dispatch orders are sent.',
      langButton: 'Español',
      langAria: 'Ver sitio en español',
      assignedEquipmentLabel: 'ASSIGNED EQUIPMENT',
      mapsLink: 'Maps ↗',
      noRecordYet: 'No delivery update recorded yet',
      recordSavedPrefix: 'Delivery record · saved',
      recordBoxTitle: 'DELIVERY RECORD',
      deliveryDateLabel: 'Delivery date',
      updatedByLabel: 'Updated by',
      serialPending: 'Serial # pending',
      serialPrefix: 'Serial #',
      extraEquipLabel: 'Additional / replacement',
      noteLabel: 'Note',
      noDeliveredQty: 'No delivered quantities recorded yet.',
      btnUpdateDelivery: 'Update delivery',
      btnCloseEditor: 'Cancel',
      btnSaveDelivery: 'Save delivery',
      btnSaving: 'Saving…',
      btnReloadRecord: 'Reload latest record',
      quickLegend: 'Has the listed equipment arrived?',
      quickHelp: 'Yes confirms delivery. No records 0. Open Details below to add serial numbers or notes.',
      yes: 'Yes',
      no: 'No',
      driverFieldLabel: 'Delivery driver / Updated by',
      chooseDriver: 'Choose name',
      newDriverOption: 'Other name…',
      newDriverPlaceholder: 'Enter full name',
      statusFieldLabel: 'Delivery status',
      dateFieldLabel: 'Delivery date',
      detailsSummary: 'Details, serial numbers & notes',
      qtyDeliveredLabel: 'Delivered qty',
      modelLabel: 'Machine / model note',
      modelPlaceholder: 'e.g. Kubota SVL75-3, SSV75, Berlon',
      serialLabel: 'Serial number',
      serialPlaceholder: 'Enter serial # or leave blank',
      extraFieldLabel: 'Additional or replacement equipment',
      extraPlaceholder: 'Optional extra attachment or swap',
      notesFieldLabel: 'Delivery notes',
      notesPlaceholder: 'Drop location on lot, contact, gate info, etc.',
      photosAndDetails: 'Photos & delivery details',
      photosTitle: 'Delivery & serial-plate photos',
      noPhotosYet: 'No photos uploaded for this stop yet.',
      choosePhotoLabel: 'Choose or take photo',
      btnUploadPhoto: 'Upload photo',
      uploadingPhoto: 'Compressing & uploading…',
      photoSaved: 'Photo saved.',
      photoQuotaErr: 'Device storage full — remove older photos or share photos by text.',
      emptyFilter: 'No stops match your search or filter.',
      noActivityYet: 'No delivery updates or comments yet.',
      updatesCount: (n) => (n === 1 ? '1 update' : `${n} updates`),
      tableCount: (stops, units) => `${stops} stops · ${units} units`,
      toastSaved: 'Delivery record saved.',
      toastRefreshed: 'Records refreshed.',
      toastCommented: 'Note posted.',
      toastExported: 'Delivery list exported (CSV).',
      toastShared: 'Delivery status summary copied — ready to paste in text/WhatsApp.',
      errDriverRequired: 'Select your name or enter a name before saving.',
      errCommentRequired: 'Enter your name and a note before posting.',
      errPhotoRequired: 'Enter your name and choose a photo first.',
      errLoad: 'Could not reach shared storage. Check connection and tap Retry.',
      errConflict: 'Someone else updated this stop. Tap “Reload latest record” before saving.',
      noPusherTag: 'NO PUSHER',
      printTitle: 'Delivery Sheet — Juan Lopez',
      printDeliveredCol: 'Delivered'
    },
    es: {
      pageTitle: 'Entregas de Juan Lopez · Durango',
      workspaceLabel: 'ESPACIO DE OPERACIONES',
      navStops: 'Paradas de entrega',
      navTable: 'Lista completa',
      navActivity: 'Actividad y notas',
      sidebarSub: 'Juan Lopez y Abraham · En vivo',
      crumbOps: 'Operaciones',
      crumbPage: 'Entregas de Juan Lopez',
      livePill: '25 nov 2026 · Tablero compartido',
      localPill: '25 nov 2026 · Guardado en este dispositivo',
      eyebrow: 'COORDINACIÓN DE ENTREGAS · 25 NOV 2026',
      heroLine1: 'Entregas de Juan Lopez.',
      heroLine2: 'Claro a simple vista.',
      heroSubtitle: 'Miércoles 25 de noviembre de 2026 — 9 skid steers + 2 spreaders Berlon de renta en 9 paradas para Juan Lopez y Abraham.',
      btnShare: 'Enviar resumen',
      btnPrint: 'Imprimir hoja',
      btnExport: 'Exportar lista',
      lookupLabel: 'Búsqueda rápida de equipo',
      lookupPlaceholder: 'Dirección, tienda, equipo, serie o chofer',
      scoreDelivered: 'Entregado',
      scoreNotDelivered: 'No entregado',
      scorePending: 'Pendiente',
      scoreTotal: 'Total asignado',
      jumpStop09: 'Ver parada #09',
      metricStopsLabel: 'PARADAS ACTIVAS',
      metricStopsSub: '2 Walmart · 6 Jewel-Osco · 1 Sin pusher',
      metricEquipLabel: 'EQUIPO PROGRAMADO',
      metricSkids: 'skid steers',
      metricBerlon: 'spreaders Berlon',
      metricProgressLabel: 'CONFIRMACIÓN DE PARADAS',
      metricProgressSub: 'paradas confirmadas',
      sharedBanner: 'Cualquiera con este enlace puede ver y actualizar entregas. Guarde solo información confirmada.',
      localBanner: 'Los cambios se guardan en este dispositivo. Toca “Enviar resumen” en cualquier momento para mandar tu avance por mensaje a Roberto.',
      btnRefresh: 'Actualizar',
      btnRetry: 'Reintentar',
      trackerEyebrow: 'SEGUIMIENTO DE ENTREGAS',
      trackerHeading: 'Tarjetas de máquinas y paradas',
      trackerSub: 'Toque una parada para confirmar entrega, guardar números de serie, subir fotos de placa o abrir indicaciones en Google Maps.',
      btnExpandAll: 'Expandir todo',
      btnCollapseAll: 'Contraer todo',
      filterStatusLabel: 'Estado',
      statusAll: 'Todas las paradas',
      statusUnconfirmed: 'Sin confirmar',
      statusDelivered: 'Entregado',
      statusPartial: 'Entrega parcial',
      statusNotDelivered: 'No entregado',
      statusOnHold: 'En espera',
      tableSummaryTitle: 'Tabla completa de ruta',
      colGroup: 'Grupo',
      colAddress: 'Dirección',
      colEquipment: 'Equipo asignado',
      colStatus: 'Estado de entrega',
      colUpdated: 'Chofer / Actualizado',
      activityTitle: 'Actividad y comentarios del equipo',
      activitySub: 'Registro en vivo de entregas confirmadas, series, fotos y notas.',
      fieldYourName: 'Tu nombre',
      fieldStop: 'Parada',
      fieldComment: 'Comentario o nota de campo',
      commentPlaceholder: 'Se dejó atrás del área de jardín, foto de serie subida, código de portón, etc.',
      btnPostComment: 'Publicar nota',
      footerNote: 'Cualquiera con este enlace puede ver y actualizar las entregas de Juan Lopez del 25 de noviembre de 2026. No se envían mensajes automáticos.',
      langButton: 'English',
      langAria: 'View site in English',
      assignedEquipmentLabel: 'EQUIPO ASIGNADO',
      mapsLink: 'Mapa ↗',
      noRecordYet: 'Sin actualización de entrega aún',
      recordSavedPrefix: 'Registro guardado ·',
      recordBoxTitle: 'REGISTRO DE ENTREGA',
      deliveryDateLabel: 'Fecha de entrega',
      updatedByLabel: 'Actualizado por',
      serialPending: 'Serie pendiente',
      serialPrefix: 'Serie #',
      extraEquipLabel: 'Equipo adicional / reemplazo',
      noteLabel: 'Nota',
      noDeliveredQty: 'Sin cantidades entregadas registradas aún.',
      btnUpdateDelivery: 'Actualizar entrega',
      btnCloseEditor: 'Cancelar',
      btnSaveDelivery: 'Guardar entrega',
      btnSaving: 'Guardando…',
      btnReloadRecord: 'Recargar registro',
      quickLegend: '¿Ya se entregó el equipo listado?',
      quickHelp: 'Sí confirma la entrega. No registra 0. Abra Detalles abajo para agregar número de serie o notas.',
      yes: 'Sí',
      no: 'No',
      driverFieldLabel: 'Chofer / Actualizado por',
      chooseDriver: 'Elegir nombre',
      newDriverOption: 'Otro nombre…',
      newDriverPlaceholder: 'Escribe el nombre completo',
      statusFieldLabel: 'Estado de entrega',
      dateFieldLabel: 'Fecha de entrega',
      detailsSummary: 'Detalles, números de serie y notas',
      qtyDeliveredLabel: 'Cant. entregada',
      modelLabel: 'Máquina / modelo',
      modelPlaceholder: 'Ej. Kubota SVL75-3, SSV75, Berlon',
      serialLabel: 'Número de serie',
      serialPlaceholder: 'Ingresa serie o déjalo vacío',
      extraFieldLabel: 'Equipo adicional o de reemplazo',
      extraPlaceholder: 'Accesorio extra o cambio opcional',
      notesFieldLabel: 'Notas de entrega',
      notesPlaceholder: 'Dónde se dejó en el estacionamiento, contacto, etc.',
      photosAndDetails: 'Fotos y detalles de entrega',
      photosTitle: 'Fotos de entrega y placa de serie',
      noPhotosYet: 'Aún no hay fotos para esta parada.',
      choosePhotoLabel: 'Elegir o tomar foto',
      btnUploadPhoto: 'Subir foto',
      uploadingPhoto: 'Comprimiendo y subiendo…',
      photoSaved: 'Foto guardada.',
      photoQuotaErr: 'Almacenamiento lleno en este dispositivo — comparte la foto por mensaje.',
      emptyFilter: 'Ninguna parada coincide con tu búsqueda o filtro.',
      noActivityYet: 'Todavía no hay actualizaciones ni comentarios.',
      updatesCount: (n) => (n === 1 ? '1 actualización' : `${n} actualizaciones`),
      tableCount: (stops, units) => `${stops} paradas · ${units} equipos`,
      toastSaved: 'Registro de entrega guardado.',
      toastRefreshed: 'Registros actualizados.',
      toastCommented: 'Nota publicada.',
      toastExported: 'Lista exportada (CSV).',
      toastShared: 'Resumen copiado — listo para pegar en mensaje o WhatsApp.',
      errDriverRequired: 'Elige tu nombre o escríbelo antes de guardar.',
      errCommentRequired: 'Escribe tu nombre y una nota antes de publicar.',
      errPhotoRequired: 'Escribe tu nombre y selecciona una foto.',
      errLoad: 'No se pudo conectar al almacenamiento compartido. Toca Reintentar.',
      errConflict: 'Alguien más actualizó esta parada. Toca “Recargar registro” antes de guardar.',
      noPusherTag: 'SIN PUSHER',
      printTitle: 'Hoja de entregas — Juan Lopez',
      printDeliveredCol: 'Entregado'
    }
  };

  const state = {
    lang: detectInitialLang(),
    storageMode: 'worker',
    group: 'all',
    statusFilter: 'all',
    query: '',
    records: new Map(),
    activity: [],
    drafts: new Map(),
    expandedExtras: new Set(),
    photos: new Map(),
    loading: false,
    loaded: false,
    loadError: ''
  };

  function detectInitialLang() {
    const param = new URLSearchParams(location.search).get('lang');
    if (param === 'es' || param === 'en') return param;
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'es' || saved === 'en') return saved;
    return 'en';
  }

  function t(key) {
    return COPY[state.lang][key];
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  function savedName() {
    return localStorage.getItem(STORAGE_NAME_KEY) || '';
  }

  function rememberName(val) {
    const clean = String(val || '').trim().replace(/\s+/g, ' ').slice(0, 80);
    if (clean) localStorage.setItem(STORAGE_NAME_KEY, clean);
    return clean;
  }

  function statusLabel(status) {
    const map = {
      unconfirmed: t('statusUnconfirmed'),
      delivered: t('statusDelivered'),
      partial: t('statusPartial'),
      not_delivered: t('statusNotDelivered'),
      on_hold: t('statusOnHold')
    };
    return map[status] || map.unconfirmed;
  }

  function formatTimestamp(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat(state.lang === 'es' ? 'es-US' : 'en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(d);
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function stopById(id) {
    return sheet.stops.find((s) => s.id === id);
  }

  function newDraft(stop) {
    const existing = state.records.get(stop.id);
    const prevName = existing?.driver || savedName();
    const isPreset = sheet.drivers.includes(prevName);
    return {
      expectedVersion: existing ? existing.version : 0,
      status: existing ? existing.status : 'unconfirmed',
      deliveryDate: existing?.deliveryDate || sheet.deliveryDate,
      driverChoice: prevName ? (isPreset ? prevName : 'new') : '',
      driverCustom: prevName && !isPreset ? prevName : '',
      note: existing?.note || '',
      extraEquipment: existing?.extraEquipment || '',
      items: stop.items.map((def) => {
        const savedItem = existing?.items?.find((i) => i.key === def.key);
        return {
          key: def.key,
          quantity: savedItem && savedItem.quantity !== null && savedItem.quantity !== undefined ? String(savedItem.quantity) : '',
          model: savedItem?.model || '',
          serial: savedItem?.serial || ''
        };
      }),
      detailsOpen: Boolean(existing?.note || existing?.extraEquipment || existing?.items?.some((i) => i.serial || i.model)),
      saving: false,
      error: '',
      conflict: false
    };
  }

  function applyStaticCopy() {
    document.documentElement.lang = state.lang;
    document.title = t('pageTitle');
    for (const el of document.querySelectorAll('[data-i18n]')) {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (typeof val === 'string') el.textContent = val;
    }

    const searchInput = document.getElementById('global-search');
    if (searchInput) searchInput.placeholder = t('lookupPlaceholder');

    const commentText = document.getElementById('comment-text');
    if (commentText) commentText.placeholder = t('commentPlaceholder');

    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
      langBtn.textContent = t('langButton');
      langBtn.setAttribute('aria-label', t('langAria'));
    }

    document.getElementById('notice-title').textContent = state.lang === 'es' ? sheet.changeNotice.titleEs : sheet.changeNotice.titleEn;
    document.getElementById('notice-body').textContent = state.lang === 'es' ? sheet.changeNotice.bodyEs : sheet.changeNotice.bodyEn;
    document.getElementById('notice-meta').textContent = state.lang === 'es' ? sheet.changeNotice.confirmedAtEs : sheet.changeNotice.confirmedAtEn;

    const expandBtn = document.getElementById('toggle-expand-all');
    if (expandBtn) {
      const allExpanded = sheet.stops.every((s) => state.expandedExtras.has(s.id));
      expandBtn.textContent = allExpanded ? t('btnCollapseAll') : t('btnExpandAll');
    }

    const commentAuthor = document.getElementById('comment-author');
    if (commentAuthor && !commentAuthor.value) commentAuthor.value = savedName();

    const bannerText = document.getElementById('shared-banner-text');
    if (bannerText) {
      bannerText.textContent = state.storageMode === 'local' ? t('localBanner') : t('sharedBanner');
    }
    const livePillEl = document.querySelector('[data-i18n="livePill"]');
    if (livePillEl) {
      livePillEl.textContent = state.storageMode === 'local' ? t('localPill') : t('livePill');
    }
    const refreshBtn = document.getElementById('refresh-records');
    if (refreshBtn) {
      refreshBtn.hidden = state.storageMode === 'local';
    }

    populateCommentStops();
  }

  function populateCommentStops() {
    const sel = document.getElementById('comment-stop');
    if (!sel) return;
    const current = sel.value;
    sel.innerHTML = sheet.stops
      .map((s) => `<option value="${esc(s.id)}">#${esc(s.number)} · ${esc(s.address)}</option>`)
      .join('');
    if (current && stopById(current)) sel.value = current;
  }

  function animateScore(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    const end = Math.max(0, Math.round(value));
    el.textContent = String(end);
  }

  function updateScoreboard() {
    let total = 0;
    let delivered = 0;
    let notDelivered = 0;
    let stopsConfirmed = 0;

    for (const stop of sheet.stops) {
      const rec = state.records.get(stop.id);
      if (rec?.status === 'delivered') stopsConfirmed += 1;

      for (const def of stop.items) {
        total += def.qty;
        const savedItem = rec?.items?.find((i) => i.key === def.key);
        if (savedItem?.quantity === 0 || rec?.status === 'not_delivered') {
          notDelivered += def.qty;
        } else if (Number.isInteger(savedItem?.quantity) && savedItem.quantity > 0) {
          delivered += Math.min(def.qty, savedItem.quantity);
        } else if (rec?.status === 'delivered') {
          delivered += def.qty;
        }
      }
    }

    const pending = Math.max(0, total - delivered - notDelivered);
    animateScore('score-delivered', delivered);
    animateScore('score-not-delivered', notDelivered);
    animateScore('score-pending', pending);
    animateScore('score-total', total);

    const progressVal = document.getElementById('metric-progress-value');
    if (progressVal) {
      progressVal.innerHTML = `${stopsConfirmed} / ${sheet.stops.length} <small>${esc(t('metricProgressSub'))}</small>`;
    }

    const tableCount = document.getElementById('table-count-label');
    if (tableCount) tableCount.textContent = t('tableCount')(sheet.stops.length, total);
  }

  function renderGroupTabs() {
    const wrap = document.getElementById('group-tabs');
    if (!wrap) return;
    wrap.innerHTML = sheet.groups
      .map((g) => {
        const count = g.id === 'all' ? sheet.stops.length : sheet.stops.filter((s) => s.group === g.id).length;
        const label = state.lang === 'es' ? g.labelEs : g.labelEn;
        const active = state.group === g.id ? 'active' : '';
        return `<button type="button" role="tab" aria-selected="${state.group === g.id}" class="group-tab ${active}" data-group="${esc(g.id)}">${esc(label)} <span>${count}</span></button>`;
      })
      .join('');
  }

  function filteredStops() {
    const q = state.query.trim().toLowerCase();
    return sheet.stops.filter((stop) => {
      if (state.group !== 'all' && stop.group !== state.group) return false;
      const rec = state.records.get(stop.id);
      const st = rec?.status || 'unconfirmed';
      if (state.statusFilter !== 'all' && st !== state.statusFilter) return false;
      if (!q) return true;
      const hay = [
        stop.number,
        stop.address,
        stop.groupLabelEn,
        stop.groupLabelEs,
        stop.summaryEn,
        stop.summaryEs,
        stop.specialNoteEn || '',
        stop.specialNoteEs || '',
        rec?.driver || '',
        rec?.note || '',
        rec?.extraEquipment || '',
        ...(rec?.items || []).flatMap((i) => [i.model || '', i.serial || '']),
        ...stop.items.flatMap((i) => [i.labelEn, i.labelEs, i.detailEn, i.detailEs])
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }

  function renderVisualMarkup(stop) {
    return stop.items
      .map((item) => {
        const label = state.lang === 'es' ? item.labelEs : item.labelEn;
        return `<span class="site-thumb-machine-wrap">
          <span class="site-thumb-machine-icon icon-${esc(item.icon)}" role="img" aria-label="${esc(label)}, ${item.qty}x"></span>
          <b class="site-thumb-quantity-bubble">${item.qty}×</b>
          ${item.noPusher ? `<span class="no-pusher-badge">${esc(t('noPusherTag'))}</span>` : ''}
        </span>`;
      })
      .join('');
  }

  function renderRecordBox(stop, rec) {
    if (!rec) {
      return `<p class="record-meta">${esc(t('noRecordYet'))}</p>`;
    }

    const lines = stop.items.map((def) => {
      const saved = rec.items?.find((i) => i.key === def.key);
      const label = state.lang === 'es' ? def.labelEs : def.labelEn;
      const qtyText = saved && saved.quantity !== null && saved.quantity !== undefined ? `${saved.quantity}×` : (rec.status === 'delivered' ? `${def.qty}×` : '—');
      const metaParts = [];
      if (saved?.model) metaParts.push(saved.model);
      if (saved?.serial) metaParts.push(`${t('serialPrefix')} ${saved.serial}`);
      else if (rec.status === 'delivered' || (saved?.quantity && saved.quantity > 0)) metaParts.push(t('serialPending'));
      return `<li><strong>${esc(qtyText)} ${esc(label)}</strong>${metaParts.length ? `<span>${esc(metaParts.join(' · '))}</span>` : ''}</li>`;
    });

    const savedWhen = formatTimestamp(rec.updatedAt);
    return `
      <p class="record-meta">${esc(t('recordSavedPrefix'))} ${esc(savedWhen)}${rec.driver ? ` · ${esc(rec.driver)}` : ''}</p>
      <div class="record-box">
        <div class="record-box-title">${esc(t('recordBoxTitle'))}</div>
        ${rec.deliveryDate ? `<p><b>${esc(t('deliveryDateLabel'))}:</b> ${esc(rec.deliveryDate)}</p>` : ''}
        <ul>${lines.join('')}</ul>
        ${rec.extraEquipment ? `<p><b>${esc(t('extraEquipLabel'))}:</b> ${esc(rec.extraEquipment)}</p>` : ''}
        ${rec.note ? `<p><b>${esc(t('noteLabel'))}:</b> ${esc(rec.note)}</p>` : ''}
      </div>
    `;
  }

  function renderEditor(stop, draft) {
    const driverOptions = [
      `<option value="">${esc(t('chooseDriver'))}</option>`,
      ...sheet.drivers.map((name) => `<option value="${esc(name)}" ${draft.driverChoice === name ? 'selected' : ''}>${esc(name)}</option>`),
      `<option value="new" ${draft.driverChoice === 'new' ? 'selected' : ''}>${esc(t('newDriverOption'))}</option>`
    ].join('');

    const quickRows = stop.items
      .map((def) => {
        const dItem = draft.items.find((i) => i.key === def.key) || { key: def.key, quantity: '', model: '', serial: '' };
        const label = state.lang === 'es' ? def.labelEs : def.labelEn;
        const yesPressed = String(dItem.quantity) === String(def.qty);
        const noPressed = String(dItem.quantity) === '0';
        return `<div class="quick-row" data-item-key="${esc(def.key)}">
          <span class="quick-row-label">${def.qty}× ${esc(label)}</span>
          <span class="quick-row-btns">
            <button type="button" data-qty="${def.qty}" aria-pressed="${yesPressed}">${esc(t('yes'))}</button>
            <button type="button" data-qty="0" aria-pressed="${noPressed}">${esc(t('no'))}</button>
          </span>
        </div>`;
      })
      .join('');

    const unitFields = stop.items
      .map((def) => {
        const dItem = draft.items.find((i) => i.key === def.key) || { key: def.key, quantity: '', model: '', serial: '' };
        const label = state.lang === 'es' ? def.labelEs : def.labelEn;
        return `<fieldset class="unit-fieldset">
          <legend>${def.qty}× ${esc(label)}</legend>
          <div class="editor-row-2">
            <label class="editor-field">
              <span>${esc(t('qtyDeliveredLabel'))}</span>
              <input type="number" min="0" max="99" step="1" name="qty-${esc(def.key)}" value="${esc(dItem.quantity)}" placeholder="0-${def.qty}">
            </label>
            <label class="editor-field">
              <span>${esc(t('serialLabel'))}</span>
              <input type="text" maxlength="120" name="serial-${esc(def.key)}" value="${esc(dItem.serial)}" placeholder="${esc(t('serialPlaceholder'))}">
            </label>
          </div>
          <label class="editor-field">
            <span>${esc(t('modelLabel'))}</span>
            <input type="text" maxlength="200" name="model-${esc(def.key)}" value="${esc(dItem.model)}" placeholder="${esc(t('modelPlaceholder'))}">
          </label>
        </fieldset>`;
      })
      .join('');

    return `<form class="site-thumb-editor" data-stop-id="${esc(stop.id)}">
      <fieldset class="quick-delivery">
        <legend>${esc(t('quickLegend'))}</legend>
        <p class="quick-help">${esc(t('quickHelp'))}</p>
        ${quickRows}
      </fieldset>

      <div class="editor-row-2">
        <label class="editor-field">
          <span>${esc(t('driverFieldLabel'))}</span>
          <select name="driverChoice" required>${driverOptions}</select>
        </label>
        <label class="editor-field">
          <span>${esc(t('statusFieldLabel'))}</span>
          <select name="status">
            <option value="unconfirmed" ${draft.status === 'unconfirmed' ? 'selected' : ''}>${esc(t('statusUnconfirmed'))}</option>
            <option value="delivered" ${draft.status === 'delivered' ? 'selected' : ''}>${esc(t('statusDelivered'))}</option>
            <option value="partial" ${draft.status === 'partial' ? 'selected' : ''}>${esc(t('statusPartial'))}</option>
            <option value="not_delivered" ${draft.status === 'not_delivered' ? 'selected' : ''}>${esc(t('statusNotDelivered'))}</option>
            <option value="on_hold" ${draft.status === 'on_hold' ? 'selected' : ''}>${esc(t('statusOnHold'))}</option>
          </select>
        </label>
      </div>

      <label class="editor-field driver-custom-wrap" ${draft.driverChoice === 'new' ? '' : 'hidden'}>
        <span>${esc(t('newDriverPlaceholder'))}</span>
        <input type="text" name="driverCustom" maxlength="80" value="${esc(draft.driverCustom)}" placeholder="${esc(t('newDriverPlaceholder'))}">
      </label>

      <details class="delivery-details" ${draft.detailsOpen ? 'open' : ''}>
        <summary>${esc(t('detailsSummary'))}</summary>
        <div class="delivery-details-body">
          <label class="editor-field">
            <span>${esc(t('dateFieldLabel'))}</span>
            <input type="date" name="deliveryDate" value="${esc(draft.deliveryDate)}">
          </label>
          ${unitFields}
          <label class="editor-field">
            <span>${esc(t('extraFieldLabel'))}</span>
            <input type="text" name="extraEquipment" maxlength="500" value="${esc(draft.extraEquipment)}" placeholder="${esc(t('extraPlaceholder'))}">
          </label>
          <label class="editor-field">
            <span>${esc(t('notesFieldLabel'))}</span>
            <textarea name="note" rows="2" maxlength="2000" placeholder="${esc(t('notesPlaceholder'))}">${esc(draft.note)}</textarea>
          </label>
        </div>
      </details>

      ${draft.error ? `<p class="editor-error" role="alert">${esc(draft.error)}</p>` : ''}

      <div class="editor-actions">
        <button type="submit" class="site-thumb-save" ${draft.saving ? 'disabled' : ''}>${esc(draft.saving ? t('btnSaving') : t('btnSaveDelivery'))}</button>
        ${draft.conflict ? `<button type="button" class="site-thumb-cancel reload-conflict-btn">${esc(t('btnReloadRecord'))}</button>` : ''}
        <button type="button" class="site-thumb-cancel cancel-edit-btn">${esc(t('btnCloseEditor'))}</button>
      </div>
    </form>`;
  }

  function renderPhotosMarkup(stopId) {
    const list = state.photos.get(stopId);
    if (!list) return `<p class="photo-gallery-empty">…</p>`;
    if (!list.length) return `<p class="photo-gallery-empty">${esc(t('noPhotosYet'))}</p>`;
    return `<div class="photo-gallery">${list
      .map((p) => {
        const src = p.dataUrl || `/api/photos?record=${encodeURIComponent(stopId)}&photo=${encodeURIComponent(p.id)}`;
        return `<button type="button" class="photo-thumb-btn" data-full-src="${esc(src)}" title="${esc(formatTimestamp(p.time))}">
          <img src="${esc(src)}" alt="Delivery photo" loading="lazy">
        </button>`;
      })
      .join('')}</div>`;
  }

  function renderCards() {
    const container = document.getElementById('stop-cards');
    if (!container) return;

    const list = filteredStops();
    if (!list.length) {
      container.innerHTML = `<div class="empty-state">${esc(t('emptyFilter'))}</div>`;
      return;
    }

    container.innerHTML = list
      .map((stop) => {
        const rec = state.records.get(stop.id);
        const status = rec?.status || 'unconfirmed';
        const draft = state.drafts.get(stop.id);
        const groupLabel = state.lang === 'es' ? stop.groupLabelEs : stop.groupLabelEn;
        const summary = state.lang === 'es' ? stop.summaryEs : stop.summaryEn;
        const specialNote = state.lang === 'es' ? stop.specialNoteEs : stop.specialNoteEn;
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.mapsQuery)}`;
        const chips = stop.items
          .map((item) => {
            const label = state.lang === 'es' ? item.labelEs : item.labelEn;
            const cls = item.key === 'berlon' ? 'equip-chip rental' : item.noPusher ? 'equip-chip no-pusher' : 'equip-chip';
            return `<span class="${cls}"><b>${item.qty}×</b> ${esc(label)}</span>`;
          })
          .join('');
        const extraOpen = state.expandedExtras.has(stop.id);

        return `<article class="site-thumb ${stop.special ? 'special-stop' : ''}" id="card-${esc(stop.id)}" data-stop-id="${esc(stop.id)}">
          <div class="site-thumb-visual">
            <span class="site-thumb-index">${esc(stop.number)}</span>
            <span class="site-thumb-sheet">${esc(groupLabel)}</span>
            <div class="site-thumb-machines">${renderVisualMarkup(stop)}</div>
            <span class="site-thumb-illustration-label">${esc(t('assignedEquipmentLabel'))}</span>
          </div>
          <div class="site-thumb-body">
            <div class="card-status-row">
              <span class="status-pill ${esc(status)}">${esc(statusLabel(status))}</span>
              <a class="maps-link" href="${esc(mapsUrl)}" target="_blank" rel="noopener noreferrer">${esc(t('mapsLink'))}</a>
            </div>
            <h3 class="card-address">${esc(stop.address)}</h3>
            <p class="card-subtitle">${esc(summary)}</p>
            ${specialNote ? `<div class="card-special-note">${esc(specialNote)}</div>` : ''}
            <div class="equipment-chips">${chips}</div>
            ${renderRecordBox(stop, rec)}
            ${draft ? renderEditor(stop, draft) : `<button type="button" class="site-thumb-update" data-open-edit="${esc(stop.id)}">${esc(t('btnUpdateDelivery'))}</button>`}
            <details class="card-extra-details" data-extra-stop="${esc(stop.id)}" ${extraOpen ? 'open' : ''}>
              <summary><span>${esc(t('photosAndDetails'))}</span><span class="chev" aria-hidden="true">⌄</span></summary>
              <div class="card-photos" data-photo-stop="${esc(stop.id)}">
                <h4>${esc(t('photosTitle'))}</h4>
                <div class="photo-gallery-slot">${renderPhotosMarkup(stop.id)}</div>
                <form class="photo-form" data-photo-form="${esc(stop.id)}">
                  <label>
                    <span>${esc(t('fieldYourName'))}</span>
                    <input type="text" name="author" required maxlength="80" value="${esc(savedName())}" placeholder="Juan Lopez / Abraham">
                  </label>
                  <label>
                    <span>${esc(t('choosePhotoLabel'))}</span>
                    <input type="file" name="image" accept="image/*" capture="environment" required>
                  </label>
                  <button type="submit">${esc(t('btnUploadPhoto'))}</button>
                </form>
                <p class="photo-status" role="status"></p>
              </div>
            </details>
          </div>
        </article>`;
      })
      .join('');

    bindCardEvents(container);
  }

  function captureDraft(form, stop, draft) {
    draft.driverChoice = form.elements.driverChoice.value;
    draft.driverCustom = form.elements.driverCustom.value;
    draft.status = form.elements.status.value;
    draft.deliveryDate = form.elements.deliveryDate.value;
    draft.extraEquipment = form.elements.extraEquipment.value;
    draft.note = form.elements.note.value;
    const detailsEl = form.querySelector('.delivery-details');
    if (detailsEl) draft.detailsOpen = detailsEl.open;

    draft.items = stop.items.map((def) => ({
      key: def.key,
      quantity: form.elements[`qty-${def.key}`].value,
      model: form.elements[`model-${def.key}`].value,
      serial: form.elements[`serial-${def.key}`].value
    }));
  }

  function syncQuickButtonStates(form, stop) {
    for (const def of stop.items) {
      const val = form.elements[`qty-${def.key}`].value;
      const row = form.querySelector(`.quick-row[data-item-key="${def.key}"]`);
      if (!row) continue;
      for (const btn of row.querySelectorAll('button[data-qty]')) {
        btn.setAttribute('aria-pressed', String(val === btn.dataset.qty));
      }
    }
  }

  function bindCardEvents(container) {
    for (const btn of container.querySelectorAll('[data-open-edit]')) {
      btn.addEventListener('click', () => {
        const stop = stopById(btn.dataset.openEdit);
        if (!stop) return;
        state.drafts.set(stop.id, newDraft(stop));
        renderCards();
      });
    }

    for (const form of container.querySelectorAll('.site-thumb-editor')) {
      const stop = stopById(form.dataset.stopId);
      const draft = state.drafts.get(stop.id);
      if (!stop || !draft) continue;

      form.querySelector('.quick-delivery')?.addEventListener('click', (event) => {
        const btn = event.target.closest('button[data-qty]');
        if (!btn) return;
        const row = btn.closest('.quick-row');
        const key = row.dataset.itemKey;
        form.elements[`qty-${key}`].value = btn.dataset.qty;

        const qtys = stop.items.map((def) => form.elements[`qty-${def.key}`].value);
        if (form.elements.status.value !== 'on_hold') {
          const allFull = qtys.every((v, idx) => v !== '' && Number(v) === stop.items[idx].qty);
          const allZero = qtys.every((v) => v === '0');
          const someDelivered = qtys.some((v) => Number(v) > 0);
          form.elements.status.value = allFull
            ? 'delivered'
            : allZero
            ? 'not_delivered'
            : someDelivered
            ? 'partial'
            : 'unconfirmed';
        }
        if (!form.elements.deliveryDate.value) {
          form.elements.deliveryDate.value = sheet.deliveryDate;
        }
        syncQuickButtonStates(form, stop);
        captureDraft(form, stop, draft);
      });

      form.elements.driverChoice?.addEventListener('change', () => {
        const wrap = form.querySelector('.driver-custom-wrap');
        const isNew = form.elements.driverChoice.value === 'new';
        wrap.hidden = !isNew;
        if (isNew) form.elements.driverCustom.focus();
        captureDraft(form, stop, draft);
      });

      form.addEventListener('input', () => {
        syncQuickButtonStates(form, stop);
        captureDraft(form, stop, draft);
      });

      form.querySelector('.cancel-edit-btn')?.addEventListener('click', () => {
        state.drafts.delete(stop.id);
        renderCards();
      });

      form.querySelector('.reload-conflict-btn')?.addEventListener('click', async () => {
        const ok = await loadRecords(false);
        if (ok) {
          state.drafts.set(stop.id, newDraft(stop));
          renderAll();
        }
      });

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        saveRecord(stop, form);
      });
    }

    for (const details of container.querySelectorAll('.card-extra-details')) {
      const stopId = details.dataset.extraStop;
      details.addEventListener('toggle', () => {
        if (details.open) {
          state.expandedExtras.add(stopId);
          loadPhotos(stopId);
        } else {
          state.expandedExtras.delete(stopId);
        }
        applyStaticCopy();
      });
    }

    for (const pForm of container.querySelectorAll('.photo-form')) {
      pForm.addEventListener('submit', (event) => {
        event.preventDefault();
        uploadPhoto(pForm.dataset.photoForm, pForm);
      });
    }

    for (const thumb of container.querySelectorAll('.photo-thumb-btn')) {
      thumb.addEventListener('click', () => openLightbox(thumb.dataset.fullSrc));
    }
  }

  function renderTable() {
    const tbody = document.getElementById('route-table-body');
    if (!tbody) return;
    tbody.innerHTML = sheet.stops
      .map((stop) => {
        const rec = state.records.get(stop.id);
        const status = rec?.status || 'unconfirmed';
        const groupLabel = state.lang === 'es' ? stop.groupLabelEs : stop.groupLabelEn;
        const summary = state.lang === 'es' ? stop.summaryEs : stop.summaryEn;
        const updatedInfo = rec
          ? `${rec.driver || '—'} · ${formatTimestamp(rec.updatedAt)}`
          : '—';
        return `<tr class="${stop.special ? 'special-row' : ''}">
          <td><strong>${esc(stop.number)}</strong></td>
          <td>${esc(groupLabel)}</td>
          <td>${esc(stop.address)}</td>
          <td>${esc(summary)}</td>
          <td><span class="status-pill ${esc(status)}">${esc(statusLabel(status))}</span></td>
          <td>${esc(updatedInfo)}</td>
        </tr>`;
      })
      .join('');
  }

  function renderActivity() {
    const list = document.getElementById('activity-list');
    const badge = document.getElementById('activity-badge');
    const navBadge = document.getElementById('nav-activity-count');
    if (badge) badge.textContent = t('updatesCount')(state.activity.length);
    if (navBadge) navBadge.textContent = String(state.activity.length);
    if (!list) return;

    if (!state.activity.length) {
      list.innerHTML = `<li class="activity-empty">${esc(t('noActivityYet'))}</li>`;
      return;
    }

    list.innerHTML = state.activity
      .map((entry) => {
        const stop = stopById(entry.recordId);
        const stopTag = stop ? `#${stop.number} ${stop.address}` : entry.recordId;
        return `<li class="activity-entry">
          <div class="activity-entry-head">
            <strong>${esc(entry.author)}</strong>
            <span>${esc(entry.summary)}</span>
            <span>· ${esc(stopTag)}</span>
            <time datetime="${esc(entry.createdAt)}">${esc(formatTimestamp(entry.createdAt))}</time>
          </div>
          ${entry.comment ? `<p>${esc(entry.comment)}</p>` : ''}
        </li>`;
      })
      .join('');
  }

  function renderPrintSheet() {
    const el = document.getElementById('print-sheet');
    if (!el) return;
    const groups = ['walmart', 'jewel', 'no-pusher'];
    const sections = groups
      .map((gid) => {
        const stops = sheet.stops.filter((s) => s.group === gid);
        const gObj = sheet.groups.find((g) => g.id === gid);
        const title = state.lang === 'es' ? gObj.labelEs : gObj.labelEn;
        const rows = stops
          .map((stop) => {
            const rec = state.records.get(stop.id);
            const checked = rec?.status === 'delivered' ? '✓' : '';
            const summary = state.lang === 'es' ? stop.summaryEs : stop.summaryEn;
            const serials = (rec?.items || []).map((i) => i.serial).filter(Boolean).join(', ');
            return `<div class="print-row ${stop.special ? 'special' : ''}">
              <div>
                <strong>${esc(stop.number)}. ${esc(stop.address)}</strong><br>
                <span>${esc(summary)}${serials ? ` · Serial: ${esc(serials)}` : ''}</span>
              </div>
              <div class="print-check">${checked}</div>
            </div>`;
          })
          .join('');
        return `<div class="print-group-title">${esc(title)}</div>${rows}`;
      })
      .join('');

    const dateLabel = state.lang === 'es' ? sheet.dateLabelEs : sheet.dateLabelEn;
    const noticeTitle = state.lang === 'es' ? sheet.changeNotice.confirmedAtEs : sheet.changeNotice.confirmedAtEn;
    const noticeBody = state.lang === 'es' ? sheet.changeNotice.bodyEs : sheet.changeNotice.bodyEn;

    el.innerHTML = `
      <div class="print-header">
        <small>DURANGO / EQUIPMENT SALES AND RENTALS</small>
        <h2>${esc(t('printTitle'))}</h2>
      </div>
      <p class="print-sub"><strong>${esc(sheet.customer)}</strong> / ${esc(dateLabel)} — ${esc(state.lang === 'es' ? '9 skid steers + 2 spreaders Berlon de renta' : '9 skid steers + 2 rental Berlon spreaders')}</p>
      ${sections}
      <div class="print-note"><strong>${esc(noticeTitle)}</strong><br>${esc(noticeBody)}</div>
    `;
  }

  function renderAll() {
    applyStaticCopy();
    renderGroupTabs();
    updateScoreboard();
    renderCards();
    renderTable();
    renderActivity();
    renderPrintSheet();

    const errBanner = document.getElementById('sync-error-banner');
    const errText = document.getElementById('sync-error-text');
    if (errBanner && errText) {
      errBanner.hidden = !state.loadError;
      errText.textContent = state.loadError;
    }
  }

  function loadLocalStorageState() {
    state.storageMode = 'local';
    state.records.clear();
    try {
      const savedRecs = JSON.parse(localStorage.getItem(LOCAL_RECORDS_KEY) || '[]');
      for (const rec of savedRecs) {
        if (rec && typeof rec.id === 'string') state.records.set(rec.id, rec);
      }
    } catch {
      // Ignore corrupt local records
    }
    try {
      const savedAct = JSON.parse(localStorage.getItem(LOCAL_ACTIVITY_KEY) || '[]');
      state.activity = Array.isArray(savedAct) ? savedAct : [];
    } catch {
      state.activity = [];
    }
    try {
      const savedPhotos = JSON.parse(localStorage.getItem(LOCAL_PHOTOS_KEY) || '{}');
      for (const [stopId, items] of Object.entries(savedPhotos)) {
        if (Array.isArray(items)) state.photos.set(stopId, items);
      }
    } catch {
      // Ignore corrupt photo cache
    }
    state.loaded = true;
    state.loadError = '';
  }

  function persistLocalStorageState() {
    localStorage.setItem(LOCAL_RECORDS_KEY, JSON.stringify([...state.records.values()]));
    localStorage.setItem(LOCAL_ACTIVITY_KEY, JSON.stringify(state.activity.slice(0, 200)));
  }

  async function loadRecords(showConfirmToast = false) {
    if (state.loading) return false;
    state.loading = true;
    try {
      const response = await fetch('/api/deliveries', { credentials: 'same-origin', cache: 'no-store' });
      const contentType = response.headers.get('content-type') || '';
      if (response.status === 404 || !contentType.includes('application/json')) {
        loadLocalStorageState();
        return true;
      }
      const data = await response.json();
      if (!response.ok || !Array.isArray(data.records)) {
        throw new Error(data.error || t('errLoad'));
      }
      state.storageMode = 'worker';
      state.records.clear();
      for (const rec of data.records) {
        if (rec && typeof rec.id === 'string') state.records.set(rec.id, rec);
      }
      state.activity = Array.isArray(data.activity) ? data.activity : [];
      state.loaded = true;
      state.loadError = '';
      if (showConfirmToast) showToast(t('toastRefreshed'));
      return true;
    } catch (err) {
      if (!state.loaded) {
        loadLocalStorageState();
        return true;
      }
      state.loadError = err instanceof Error ? err.message : t('errLoad');
      return false;
    } finally {
      state.loading = false;
      renderAll();
    }
  }

  async function saveRecord(stop, form) {
    const draft = state.drafts.get(stop.id);
    if (!draft || draft.saving) return;
    captureDraft(form, stop, draft);

    const rawAuthor = draft.driverChoice === 'new' ? draft.driverCustom : draft.driverChoice;
    const author = rememberName(rawAuthor);
    if (!author) {
      draft.error = t('errDriverRequired');
      renderCards();
      return;
    }

    const items = draft.items.map((item) => ({
      key: item.key,
      quantity: item.quantity === '' ? null : Number(item.quantity),
      model: item.model.trim(),
      serial: item.serial.trim()
    }));

    if (state.storageMode === 'local') {
      const now = new Date().toISOString();
      const nextVersion = (state.records.get(stop.id)?.version || 0) + 1;
      const saved = {
        id: stop.id,
        status: draft.status,
        items,
        note: draft.note.trim(),
        extraEquipment: draft.extraEquipment.trim(),
        deliveryDate: draft.deliveryDate,
        driver: author,
        updatedAt: now,
        version: nextVersion
      };
      state.records.set(stop.id, saved);
      state.activity.unshift({
        id: Date.now(),
        recordId: stop.id,
        kind: 'change',
        author,
        summary: `status set to ${draft.status.replaceAll('_', ' ')}`,
        comment: draft.note.trim(),
        createdAt: now,
        recordVersion: nextVersion
      });
      persistLocalStorageState();
      state.drafts.delete(stop.id);
      showToast(t('toastSaved'));
      renderAll();
      return;
    }

    draft.saving = true;
    draft.error = '';
    draft.conflict = false;
    renderCards();

    try {
      const response = await fetch('/api/deliveries', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: stop.id,
          author,
          expectedVersion: draft.expectedVersion,
          status: draft.status,
          items,
          note: draft.note.trim(),
          extraEquipment: draft.extraEquipment.trim(),
          deliveryDate: draft.deliveryDate
        })
      });
      const data = await response.json();
      if (!response.ok || !data.record) {
        draft.conflict = response.status === 409;
        throw new Error(draft.conflict ? t('errConflict') : data.error || 'Could not save delivery.');
      }
      state.records.set(stop.id, data.record);
      if (data.activity) state.activity.unshift(data.activity);
      state.drafts.delete(stop.id);
      showToast(t('toastSaved'));
      renderAll();
    } catch (err) {
      draft.saving = false;
      draft.error = err instanceof Error ? err.message : 'Could not save delivery.';
      renderCards();
    }
  }

  async function loadPhotos(stopId) {
    if (state.storageMode === 'local') {
      if (!state.photos.has(stopId)) state.photos.set(stopId, []);
      const slot = document.querySelector(`.card-photos[data-photo-stop="${stopId}"] .photo-gallery-slot`);
      if (slot) {
        slot.innerHTML = renderPhotosMarkup(stopId);
        for (const thumb of slot.querySelectorAll('.photo-thumb-btn')) {
          thumb.addEventListener('click', () => openLightbox(thumb.dataset.fullSrc));
        }
      }
      return;
    }
    try {
      const res = await fetch(`/api/photos?record=${encodeURIComponent(stopId)}`, {
        credentials: 'same-origin',
        cache: 'no-store'
      });
      if (!res.ok) return;
      const data = await res.json();
      if (Array.isArray(data.photos)) {
        state.photos.set(stopId, data.photos);
        const slot = document.querySelector(`.card-photos[data-photo-stop="${stopId}"] .photo-gallery-slot`);
        if (slot) {
          slot.innerHTML = renderPhotosMarkup(stopId);
          for (const thumb of slot.querySelectorAll('.photo-thumb-btn')) {
            thumb.addEventListener('click', () => openLightbox(thumb.dataset.fullSrc));
          }
        }
      }
    } catch {
      // Ignore silent gallery fetch errors
    }
  }

  function compressToJpeg(file, maxSide = 1600, quality = 0.82) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const objUrl = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(objUrl);
        let { width, height } = img;
        if (width > maxSide || height > maxSide) {
          const ratio = Math.min(maxSide / width, maxSide / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (!blob) reject(new Error('Could not encode JPEG photo.'));
            else resolve({ blob, dataUrl: canvas.toDataURL('image/jpeg', quality) });
          },
          'image/jpeg',
          quality
        );
      };
      img.onerror = () => {
        URL.revokeObjectURL(objUrl);
        reject(new Error('Selected file could not be read as an image.'));
      };
      img.src = objUrl;
    });
  }

  async function uploadPhoto(stopId, form) {
    const statusEl = form.parentElement.querySelector('.photo-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const author = rememberName(form.elements.author.value);
    const file = form.elements.image.files?.[0];
    if (!author || !file) {
      statusEl.className = 'photo-status error';
      statusEl.textContent = t('errPhotoRequired');
      return;
    }

    submitBtn.disabled = true;
    statusEl.className = 'photo-status';
    statusEl.textContent = t('uploadingPhoto');

    try {
      if (state.storageMode === 'local') {
        const { dataUrl } = await compressToJpeg(file, 900, 0.72);
        const existing = state.photos.get(stopId) || [];
        const nextList = [{ id: String(Date.now()), time: new Date().toISOString(), dataUrl }, ...existing];
        const allPhotos = Object.fromEntries(state.photos.entries());
        allPhotos[stopId] = nextList;
        try {
          localStorage.setItem(LOCAL_PHOTOS_KEY, JSON.stringify(allPhotos));
        } catch {
          throw new Error(t('photoQuotaErr'));
        }
        state.photos.set(stopId, nextList);
        state.activity.unshift({
          id: Date.now(),
          recordId: stopId,
          kind: 'photo',
          author,
          summary: 'saved a delivery photo on this device',
          comment: '',
          createdAt: new Date().toISOString(),
          recordVersion: 0
        });
        persistLocalStorageState();
        form.elements.image.value = '';
        statusEl.textContent = t('photoSaved');
        loadPhotos(stopId);
        renderActivity();
        return;
      }

      const { blob: jpegBlob } = await compressToJpeg(file, 1600, 0.82);
      const res = await fetch(
        `/api/photos?record=${encodeURIComponent(stopId)}&author=${encodeURIComponent(author)}`,
        {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'image/jpeg' },
          body: jpegBlob
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Photo upload failed.');
      form.elements.image.value = '';
      statusEl.textContent = t('photoSaved');
      await loadPhotos(stopId);
      await loadRecords(false);
    } catch (err) {
      statusEl.className = 'photo-status error';
      statusEl.textContent = err instanceof Error ? err.message : 'Photo upload failed.';
    } finally {
      submitBtn.disabled = false;
    }
  }

  async function submitComment(event) {
    event.preventDefault();
    const authorInput = document.getElementById('comment-author');
    const stopSel = document.getElementById('comment-stop');
    const textInput = document.getElementById('comment-text');
    const errEl = document.getElementById('comment-error');
    const submitBtn = document.getElementById('comment-submit');

    const author = rememberName(authorInput.value);
    const comment = textInput.value.trim();
    if (!author || !comment) {
      errEl.textContent = t('errCommentRequired');
      return;
    }

    if (state.storageMode === 'local') {
      const stop = stopById(stopSel.value);
      state.activity.unshift({
        id: Date.now(),
        recordId: stopSel.value,
        kind: 'comment',
        author,
        summary: `commented on ${stop ? stop.address : stopSel.value}`,
        comment,
        createdAt: new Date().toISOString(),
        recordVersion: 0
      });
      persistLocalStorageState();
      textInput.value = '';
      errEl.textContent = '';
      renderActivity();
      showToast(t('toastCommented'));
      return;
    }

    submitBtn.disabled = true;
    errEl.textContent = '';

    try {
      const res = await fetch('/api/deliveries', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'comment',
          id: stopSel.value,
          author,
          comment
        })
      });
      const data = await res.json();
      if (!res.ok || !data.activity) throw new Error(data.error || 'Could not post note.');
      state.activity.unshift(data.activity);
      textInput.value = '';
      renderActivity();
      showToast(t('toastCommented'));
    } catch (err) {
      errEl.textContent = err instanceof Error ? err.message : 'Could not post note.';
    } finally {
      submitBtn.disabled = false;
    }
  }

  async function shareStatusSummary() {
    const iconFor = { delivered: '✅', partial: '⚠️', not_delivered: '❌', on_hold: '⏸️', unconfirmed: '⬜' };
    const header =
      state.lang === 'es'
        ? `Durango — Entregas Juan Lopez (Mié 25 nov 2026)`
        : `Durango — Juan Lopez Deliveries (Wed Nov 25, 2026)`;
    const lines = [header, ''];
    for (const stop of sheet.stops) {
      const rec = state.records.get(stop.id);
      const st = rec?.status || 'unconfirmed';
      const serials = (rec?.items || []).map((i) => i.serial).filter(Boolean).join(', ');
      const extra = [
        statusLabel(st),
        rec?.driver ? rec.driver : '',
        serials ? `S/N: ${serials}` : '',
        rec?.note ? rec.note : ''
      ]
        .filter(Boolean)
        .join(' · ');
      lines.push(`${iconFor[st] || '⬜'} #${stop.number} ${stop.address} (${stop.groupLabelEn}) — ${extra}`);
    }
    const text = lines.join('\n');
    try {
      if (navigator.share) {
        await navigator.share({ title: header, text });
        return;
      }
    } catch {
      // User canceled or Web Share unsupported; fall through to clipboard
    }
    try {
      await navigator.clipboard.writeText(text);
      showToast(t('toastShared'));
    } catch {
      window.prompt(header, text);
    }
  }

  function exportCsv() {
    const headers = ['Stop #', 'Group', 'Address', 'Assigned Equipment', 'Status', 'Delivery Date', 'Driver', 'Serial Numbers', 'Notes'];
    const csvCell = (val) => `"${String(val ?? '').replace(/"/g, '""')}"`;
    const rows = sheet.stops.map((stop) => {
      const rec = state.records.get(stop.id);
      const serials = (rec?.items || [])
        .filter((i) => i.serial)
        .map((i) => `${i.key}: ${i.serial}`)
        .join('; ');
      return [
        stop.number,
        stop.groupLabelEn,
        stop.address,
        stop.summaryEn,
        rec?.status || 'unconfirmed',
        rec?.deliveryDate || '',
        rec?.driver || '',
        serials,
        rec?.note || (stop.special ? stop.specialNoteEn : '')
      ].map(csvCell).join(',');
    });
    const csv = [headers.map(csvCell).join(','), ...rows].join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'juan-lopez-deliveries-2026-11-25.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast(t('toastExported'));
  }

  function openLightbox(src) {
    const box = document.getElementById('photo-lightbox');
    const img = document.getElementById('lightbox-img');
    if (!box || !img) return;
    img.src = src;
    box.hidden = false;
  }

  function closeLightbox() {
    const box = document.getElementById('photo-lightbox');
    const img = document.getElementById('lightbox-img');
    if (!box || !img) return;
    box.hidden = true;
    img.src = '';
  }

  function setLang(nextLang) {
    state.lang = nextLang;
    localStorage.setItem(STORAGE_LANG_KEY, nextLang);
    const url = new URL(location.href);
    if (nextLang === 'es') url.searchParams.set('lang', 'es');
    else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    renderAll();
  }

  function wireGlobalEvents() {
    document.getElementById('language-toggle')?.addEventListener('click', () => {
      setLang(state.lang === 'es' ? 'en' : 'es');
    });

    document.getElementById('share-button')?.addEventListener('click', shareStatusSummary);

    document.getElementById('print-button')?.addEventListener('click', () => {
      renderPrintSheet();
      window.print();
    });

    document.getElementById('export-button')?.addEventListener('click', exportCsv);

    document.getElementById('global-search')?.addEventListener('input', (e) => {
      state.query = e.target.value;
      renderCards();
    });

    document.getElementById('group-tabs')?.addEventListener('click', (e) => {
      const btn = e.target.closest('.group-tab[data-group]');
      if (!btn) return;
      state.group = btn.dataset.group;
      renderGroupTabs();
      renderCards();
    });

    document.getElementById('status-filter')?.addEventListener('change', (e) => {
      state.statusFilter = e.target.value;
      renderCards();
    });

    document.getElementById('jump-pulaski')?.addEventListener('click', () => {
      state.group = 'all';
      state.statusFilter = 'all';
      state.query = '';
      const searchEl = document.getElementById('global-search');
      if (searchEl) searchEl.value = '';
      const statusEl = document.getElementById('status-filter');
      if (statusEl) statusEl.value = 'all';
      renderGroupTabs();
      renderCards();
      const card = document.getElementById('card-stop-09');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('highlight-flash');
        setTimeout(() => card.classList.remove('highlight-flash'), 1800);
      }
    });

    document.getElementById('toggle-expand-all')?.addEventListener('click', () => {
      const allOpen = sheet.stops.every((s) => state.expandedExtras.has(s.id));
      if (allOpen) {
        state.expandedExtras.clear();
      } else {
        for (const s of sheet.stops) {
          state.expandedExtras.add(s.id);
          loadPhotos(s.id);
        }
      }
      renderAll();
    });

    document.getElementById('refresh-records')?.addEventListener('click', () => loadRecords(true));
    document.getElementById('retry-sync-btn')?.addEventListener('click', () => loadRecords(true));
    document.getElementById('comment-form')?.addEventListener('submit', submitComment);

    document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
    document.getElementById('photo-lightbox')?.addEventListener('click', (e) => {
      if (e.target.id === 'photo-lightbox') closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    for (const nav of document.querySelectorAll('.nav-item')) {
      nav.addEventListener('click', () => {
        for (const n of document.querySelectorAll('.nav-item')) n.classList.remove('active');
        nav.classList.add('active');
      });
    }

    // Gentle auto-refresh every 60 seconds when visible, in worker mode, and no editor is open
    setInterval(() => {
      if (state.storageMode === 'worker' && document.visibilityState === 'visible' && state.drafts.size === 0 && !state.loading) {
        loadRecords(false);
      }
    }, 60000);
  }

  wireGlobalEvents();
  renderAll();
  loadRecords(false);
})();
