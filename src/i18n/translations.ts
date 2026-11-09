export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'es';

export const languageMeta: Record<Lang, { path: string; label: string; name: string; htmlLang: string; ogLocale: string; dateLocale: string }> = {
	es: { path: '/', label: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES', dateLocale: 'es-ES' },
	en: { path: '/en/', label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB', dateLocale: 'en-GB' },
};

const es = {
	title: '¿A qué hora me puedo ir? — Calculadora de horas de trabajo',
	description:
		'Calcula a qué hora termina tu jornada y cuánto tiempo te queda para irte. Introduce tu hora de entrada, jornada y descanso.',
	featureList: 'Calcula la hora de salida según la entrada, jornada y descanso.',
	languageSwitcher: 'Cambiar idioma',
	privacyNote: 'Tus horarios se calculan en tu navegador.',
	theme: {
		dark: 'Oscuro',
		light: 'Claro',
		switchToDark: 'Activar modo oscuro',
		switchToLight: 'Activar modo claro',
	},
	heading: '¿A qué hora me puedo ir?',
	lead: 'Calcula a qué hora termina tu jornada y cuánto tiempo te queda para irte.',
	calculatorLabel: 'Calculadora de hora de salida',
	startLabel: 'Hora de entrada',
	startHint: 'Hora a la que empiezas tu turno.',
	workLabel: 'Jornada',
	workHint: 'Duración a trabajar, no una hora del día.',
	breakLabel: 'Descanso',
	breakHint: 'Duración que no cuenta como jornada.',
	noBreak: 'Sin descanso',
	reset: 'Restablecer horario',
	formulaLabel: 'Fórmula de cálculo',
	formula: ['Entrada', 'Jornada', 'Descanso', 'Salida'],
	howTitle: '¿Cómo calcular a qué hora me puedo ir?',
	howText:
		'Introduce la hora a la que has empezado, las horas que debes trabajar y el descanso que no cuenta como jornada. La calculadora suma los tres valores y actualiza el tiempo restante con el reloj real.',
	examplesTitle: 'Ejemplos',
	examples: [
		{ title: 'Entrada a las 08:00 + 8 h', text: 'Salida a las 16:00.' },
		{ title: 'Entrada a las 08:30 + 8 h + 30 min', text: 'Salida a las 17:00.' },
		{ title: 'Entrada a las 22:00 + 8 h + 30 min', text: 'Salida a las 06:30 del día siguiente.' },
	],
	faqTitle: 'Preguntas frecuentes',
	faq: [
		{
			q: '¿El descanso cuenta como tiempo trabajado?',
			a: 'Depende de tus condiciones laborales. Añádelo a la calculadora cuando no forme parte de tu jornada efectiva.',
		},
		{
			q: '¿Funciona si termino al día siguiente?',
			a: 'Sí. La hora de salida se calcula a partir de un instante real, así que también contempla el cruce de medianoche.',
		},
		{
			q: '¿Se guardan mis horarios?',
			a: 'Se recuerdan únicamente en el almacenamiento local de este navegador. No se envían a ningún servidor.',
		},
	],
	footer: 'Una calculadora sencilla para saber cuándo toca plegar.',
	clock: {
		empty: 'INTRODUCE TU HORARIO',
		endPlaceholder: 'La hora de salida aparecerá aquí.',
		endTime: 'Tu hora de salida es las {time}.',
		endTimeNextDay: 'Tu hora de salida es las {time} del día siguiente.',
		remaining: 'TE QUEDAN',
		canLeave: 'TE PUEDES IR',
		overtime: 'YA TE PODRÍAS HABER IDO',
	},
};

export type Translation = typeof es;

const en: Translation = {
	title: 'What time can I leave? — Work hours calculator',
	description:
		'Work out what time your shift ends and how long until you can leave. Enter your start time, working hours and break.',
	featureList: 'Calculates your finishing time from your start time, working hours and break.',
	languageSwitcher: 'Change language',
	privacyNote: 'Your schedule is calculated in your browser.',
	theme: {
		dark: 'Dark',
		light: 'Light',
		switchToDark: 'Switch to dark mode',
		switchToLight: 'Switch to light mode',
	},
	heading: 'What time can I leave?',
	lead: 'Work out what time your shift ends and how long until you can leave.',
	calculatorLabel: 'Finishing time calculator',
	startLabel: 'Start time',
	startHint: 'The time your shift starts.',
	workLabel: 'Working hours',
	workHint: 'How long you work, not a time of day.',
	breakLabel: 'Break',
	breakHint: "Time that doesn't count as work.",
	noBreak: 'No break',
	reset: 'Reset schedule',
	formulaLabel: 'Calculation formula',
	formula: ['Start', 'Hours', 'Break', 'Finish'],
	howTitle: 'How do I work out what time I can leave?',
	howText:
		"Enter the time you started, the hours you need to work and any break that doesn't count as working time. The calculator adds the three values together and updates the time remaining using the real clock.",
	examplesTitle: 'Examples',
	examples: [
		{ title: 'Start at 08:00 + 8 h', text: 'Finish at 16:00.' },
		{ title: 'Start at 08:30 + 8 h + 30 min', text: 'Finish at 17:00.' },
		{ title: 'Start at 22:00 + 8 h + 30 min', text: 'Finish at 06:30 the next day.' },
	],
	faqTitle: 'Frequently asked questions',
	faq: [
		{
			q: 'Does the break count as working time?',
			a: "It depends on your employment terms. Add it to the calculator when it isn't part of your paid working time.",
		},
		{
			q: 'Does it work if I finish the next day?',
			a: 'Yes. The finishing time is calculated from a real point in time, so it also handles shifts that cross midnight.',
		},
		{
			q: 'Is my schedule saved?',
			a: "It's only remembered in this browser's local storage. It's never sent to any server.",
		},
	],
	footer: 'A simple calculator to know when it’s time to clock off.',
	clock: {
		empty: 'ENTER YOUR SCHEDULE',
		endPlaceholder: 'Your finishing time will appear here.',
		endTime: 'You finish at {time}.',
		endTimeNextDay: 'You finish at {time} the next day.',
		remaining: 'TIME LEFT',
		canLeave: 'YOU CAN LEAVE',
		overtime: 'YOU COULD HAVE LEFT ALREADY',
	},
};

export const translations: Record<Lang, Translation> = { es, en };
