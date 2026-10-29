import { Calendar, type EventMountArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid/index.js";
import interactionPlugin, {
  type DateClickArg,
} from "@fullcalendar/interaction/index.js";
import { db } from "./storage";

type SupportedLanguage =
  | "en"
  | "es"
  | "fr"
  | "de"
  | "zh"
  | "ja"
  | "ko"
  | "ru"
  | "ar"
  | "pt"
  | "hi";

export const dewenTranslations: Record<
  SupportedLanguage,
  Record<string, string>
> = {
  en: {
    title: "Dewen - Local-First Task & Project Management",
    enablenotimessage:
      "Enable desktop notifications for the best task experience! (optional)",
    enablenotificationsbtn: "Enable Notifications",
    closenotipopup: "✕",
    nosearchresults: "No search results",
    customizebtn: "Customize",
    dashboardbtn: "Dashboard",
    automationsbtn: "Automations",
    settingsbtn: "Settings",
    closesidebarbtn: "✕ Close",
    customizeheadertitle: "Customize",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "Presets",
    defaultpresetbtn: "Default",
    oceanpresetbtn: "Ocean",
    forestpresetbtn: "Forest",
    sunsetpresetbtn: "Sunset",
    rosepresetbtn: "Rose",
    midnightpresetbtn: "Midnight",
    terminalpresetbtn: "Terminal",
    slatepresetbtn: "Slate",
    customizebgheadertitle: "Background",
    custombgcolorlabel: "Custom Background Color:",
    customizeaccentheadertitle: "Accent",
    customaccentcolorlabel: "Custom Accent Color:",
    expandminianalyticstooltiptext: "Expand Mini Analytics",
    whattofocusonheader: "WHAT TO FOCUS ON",
    riskreportheader: "RISK REPORT",
    upcomingheader: "UPCOMING",
    staletasksheader: "STALE TASKS",
    taskcount: "0 tasks done",
    todolistname: "Tasks",
    option: "Date Created",
    "option.2": "Priority",
    "option.3": "Due Date",
    addbtn: "Add",
    notasksyet: "No tasks yet",
    tinytaskstip: "Add a task to get started.",
    nopriorityoption: "None",
    lowpriorityoption: "Low",
    mediumpriorityoption: "Medium",
    highpriorityoption: "High",
    todostatus: "To Do",
    inprogressstatus: "In Progress",
    blockedstatus: "Blocked",
    donestatus: "Done",
    norecurrenceoption: "None",
    dailyrecurrenceoption: "Daily",
    weeklyrecurrenceoption: "Weekly",
    monthlyrecurrenceoption: "Monthly",
    yearlyrecurrenceoption: "Yearly",
    blockedbylabel: "Blocked By:",
    "option.4": "Select a task",
    canceltaskcreationbtn: "Cancel",
    addtaskbtn: "Add Task",
    tododropzone: "To Do",
    inprogressdropzone: "In Progress",
    alldonedropzone: "Completed",
    "option.5": "Focus Timer",
    "option.6": "Decrastinator",
    "option.7": "Break Timer",
    "option.8": "Choose a task to focus on...",
    currentfocusedtask: "task",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "Quick Notes",
    addbtn2: "Add",
    nonotesyet: "No notes yet",
    tinynotestip: "Add a note to get started.",
    cancelnotecreationbtn: "Cancel",
    addnotebtn: "Add Note",
    activityname: "Activity",
    automationsname: "Automations",
    automationslisttitle: "Your Automations",
    addautomationbtn: "Add Automation",
    settingsheader: "Settings",
    settingsnavitem: "Personal",
    "settingsnavitem.2": "Agents",
    "settingsnavitem.3": "Security",
    "settingsnavitem.4": "Accessibility",
    "settingsnavitem.5": "About",
    avatarlabel: "Avatar:",
    changeavatarbtn: "Change Avatar",
    avatarpresetsbtn: "Browse Presets",
    avataraccenttogglelabel: "Turn On Accent",
    fullnamelabel: "Full Name:",
    preferrednamelabel: "Preferred Name:",
    aitogglelabel: "Enable AI",
    apikeylabel: "AI API Key:",
    "apikeylabel.2": "Tavily API Key (for the Researcher Agent):",
    securitytogglelabel: "Enable Security",
    passwordlabel: "Master Password:",
    "passwordlabel.2": "Confirm Master Password:",
    passwordhintlabel: "Master Password Hint:",
    languagelabel: "Language:",
    "option.9": "English",
    "option.10": "Spanish",
    "option.11": "French",
    "option.12": "German",
    "option.13": "Chinese",
    "option.14": "Japanese",
    "option.15": "Korean",
    "option.16": "Russian",
    "option.17": "Arabic",
    "option.18": "Portuguese",
    "option.19": "Hindi",
    versioninfo: "Version: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "Developed by",
    "a.3": "Report a Bug",
    "a.4": "Request a Feature",
    aboutfooter: "© 2026 Jaxon Penka. All rights reserved.",
    avatarpresetsname: "Avatar Presets",
    closeavatarpresets: "✕",
    avatarpresetname: "Default",
    "avatarpresetname.2": "The Developer",
    "avatarpresetname.3": "The Artist",
    "avatarpresetname.4": "The Entrepreneur",
    "avatarpresetname.5": "The Student",
    "avatarpresetname.6": "The Writer",
    "avatarpresetname.7": "The Scientist",
    "avatarpresetname.8": "The Gamer",
    "avatarpresetname.9": "The Explorer",
    "avatarpresetname.10": "The Musician",
    agentdivname: "Dewen Agents",
    closeagentbtn: "✕",
    agentname: "Planner Agent",
    agenttagline: "Helps you plan and organize your tasks",
    "agentname.2": "Researcher Agent",
    "agenttagline.2": "Assists with research and information gathering",
    "agentname.3": "Prioritizer Agent",
    "agenttagline.3": "Determines what needs the most attention",
    "agentname.4": "Organizer Agent",
    "agenttagline.4": "Helps you organize tasks and notes effectively",
    agentinstructionstitle: "Agent Instructions",
    runagentbtntext: "Run Agent",
    commandshelplisttitle: "Command Help",
    closecommandshelplist: "✕",
    categoryname: "Create",
    commanditem: ":a <task description> - Create a task",
    "commanditem.2": ":n <note text> - Create a note",
    "categoryname.2": "Manage",
    "commanditem.3": ":c <task title> - Complete a task",
    "commanditem.4": ":d <task title> - Delete a task",
    "commanditem.5": ":x - Clear and delete all completed tasks",
    "commanditem.6": ":p <task title>, <priority> - Prioritize a task",
    "commanditem.7": ":et <task title> - Edit a task",
    "commanditem.8": ":en <note text> - Edit a note",
    "categoryname.3": "Focus",
    "commanditem.9": ":f <duration>, <task title> - Start a focus timer",
    "commanditem.10": ":pt - Pause the current timer",
    "commanditem.11": ":rst - Resume the current timer",
    "commanditem.12": ":rt - Restart the current timer",
    "categoryname.4": "Other",
    "commanditem.13": ":h - Show this help menu",
  },
  es: {
    title: "Dewen - Gestión de tareas y proyectos local",
    enablenotimessage:
      "¡Activa las notificaciones de escritorio para disfrutar de la mejor experiencia! (opcional)",
    enablenotificationsbtn: "Activar notificaciones",
    closenotipopup: "✕",
    nosearchresults: "No hay resultados de búsqueda",
    customizebtn: "Personalizar",
    dashboardbtn: "Panel",
    automationsbtn: "Automatizaciones",
    settingsbtn: "Configuración",
    closesidebarbtn: "✕ Cerrar",
    customizeheadertitle: "Personalizar",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "Preajustes",
    defaultpresetbtn: "Predeterminado",
    oceanpresetbtn: "Océano",
    forestpresetbtn: "Bosque",
    sunsetpresetbtn: "Atardecer",
    rosepresetbtn: "Rosa",
    midnightpresetbtn: "Medianoche",
    terminalpresetbtn: "Terminal",
    slatepresetbtn: "Pizarra",
    customizebgheadertitle: "Fondo",
    custombgcolorlabel: "Color de fondo personalizado:",
    customizeaccentheadertitle: "Acento",
    customaccentcolorlabel: "Color de acento personalizado:",
    expandminianalyticstooltiptext: "Expandir análisis breve",
    whattofocusonheader: "EN QUÉ CENTRARSE",
    riskreportheader: "INFORME DE RIESGOS",
    upcomingheader: "PRÓXIMAS TAREAS",
    staletasksheader: "TAREAS PENDIENTES",
    taskcount: "0 tareas completadas",
    todolistname: "Tareas",
    option: "Fecha de creación",
    "option.2": "Prioridad",
    "option.3": "Fecha de vencimiento",
    addbtn: "Añadir",
    notasksyet: "Aún no hay tareas",
    tinytaskstip: "Añade una tarea para comenzar.",
    nopriorityoption: "Ninguna",
    lowpriorityoption: "Baja",
    mediumpriorityoption: "Media",
    highpriorityoption: "Alta",
    todostatus: "Por hacer",
    inprogressstatus: "En progreso",
    blockedstatus: "Bloqueada",
    donestatus: "Hecha",
    norecurrenceoption: "Ninguna",
    dailyrecurrenceoption: "Diaria",
    weeklyrecurrenceoption: "Semanal",
    monthlyrecurrenceoption: "Mensual",
    yearlyrecurrenceoption: "Anual",
    blockedbylabel: "Bloqueada por:",
    "option.4": "Selecciona una tarea",
    canceltaskcreationbtn: "Cancelar",
    addtaskbtn: "Añadir tarea",
    tododropzone: "Por hacer",
    inprogressdropzone: "En progreso",
    alldonedropzone: "Completadas",
    "option.5": "Temporizador de enfoque",
    "option.6": "Antiprocrastinador",
    "option.7": "Temporizador de descanso",
    "option.8": "Elige una tarea para centrarte...",
    currentfocusedtask: "tarea",
    "px-4": "15 min",
    "px-4.2": "25 min",
    "px-4.3": "45 min",
    "px-4.4": "60 min",
    notesname: "Notas rápidas",
    addbtn2: "Añadir",
    nonotesyet: "Aún no hay notas",
    tinynotestip: "Añade una nota para comenzar.",
    cancelnotecreationbtn: "Cancelar",
    addnotebtn: "Añadir nota",
    activityname: "Actividad",
    automationsname: "Automatizaciones",
    automationslisttitle: "Tus automatizaciones",
    addautomationbtn: "Añadir automatización",
    settingsheader: "Configuración",
    settingsnavitem: "Personal",
    "settingsnavitem.2": "Agentes",
    "settingsnavitem.3": "Seguridad",
    "settingsnavitem.4": "Accesibilidad",
    "settingsnavitem.5": "Acerca de",
    avatarlabel: "Avatar:",
    changeavatarbtn: "Cambiar avatar",
    avatarpresetsbtn: "Explorar preajustes",
    avataraccenttogglelabel: "Activar acento",
    fullnamelabel: "Nombre completo:",
    preferrednamelabel: "Nombre preferido:",
    aitogglelabel: "Activar IA",
    apikeylabel: "Clave API de IA:",
    "apikeylabel.2": "Clave API de Tavily (para el agente de investigación):",
    securitytogglelabel: "Activar seguridad",
    passwordlabel: "Contraseña maestra:",
    "passwordlabel.2": "Confirmar contraseña maestra:",
    passwordhintlabel: "Pista para la contraseña maestra:",
    languagelabel: "Idioma:",
    "option.9": "Inglés",
    "option.10": "Español",
    "option.11": "Francés",
    "option.12": "Alemán",
    "option.13": "Chino",
    "option.14": "Japonés",
    "option.15": "Coreano",
    "option.16": "Ruso",
    "option.17": "Árabe",
    "option.18": "Portugués",
    "option.19": "Hindi",
    versioninfo: "Versión: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "Desarrollado por",
    "a.3": "Informar de un error",
    "a.4": "Solicitar una función",
    aboutfooter: "© 2026 Jaxon Penka. Todos los derechos reservados.",
    avatarpresetsname: "Preajustes de avatar",
    closeavatarpresets: "✕",
    avatarpresetname: "Predeterminado",
    "avatarpresetname.2": "El desarrollador",
    "avatarpresetname.3": "El artista",
    "avatarpresetname.4": "El emprendedor",
    "avatarpresetname.5": "El estudiante",
    "avatarpresetname.6": "El escritor",
    "avatarpresetname.7": "El científico",
    "avatarpresetname.8": "El jugador",
    "avatarpresetname.9": "El explorador",
    "avatarpresetname.10": "El músico",
    agentdivname: "Agentes de Dewen",
    closeagentbtn: "✕",
    agentname: "Agente planificador",
    agenttagline: "Te ayuda a planificar y organizar tus tareas",
    "agentname.2": "Agente investigador",
    "agenttagline.2": "Te ayuda a investigar y recopilar información",
    "agentname.3": "Agente priorizador",
    "agenttagline.3": "Determina qué requiere más atención",
    "agentname.4": "Agente organizador",
    "agenttagline.4": "Te ayuda a organizar tareas y notas eficazmente",
    agentinstructionstitle: "Instrucciones del agente",
    runagentbtntext: "Ejecutar agente",
    commandshelplisttitle: "Ayuda de comandos",
    closecommandshelplist: "✕",
    categoryname: "Crear",
    commanditem: ":a <descripción de tarea> - Crear una tarea",
    "commanditem.2": ":n <texto de nota> - Crear una nota",
    "categoryname.2": "Administrar",
    "commanditem.3": ":c <título de tarea> - Completar una tarea",
    "commanditem.4": ":d <título de tarea> - Eliminar una tarea",
    "commanditem.5": ":x - Borrar y eliminar todas las tareas completadas",
    "commanditem.6": ":p <título de tarea>, <prioridad> - Priorizar una tarea",
    "commanditem.7": ":et <título de tarea> - Editar una tarea",
    "commanditem.8": ":en <texto de nota> - Editar una nota",
    "categoryname.3": "Enfoque",
    "commanditem.9":
      ":f <duración>, <título de tarea> - Iniciar un temporizador de enfoque",
    "commanditem.10": ":pt - Pausar el temporizador actual",
    "commanditem.11": ":rst - Reanudar el temporizador actual",
    "commanditem.12": ":rt - Reiniciar el temporizador actual",
    "categoryname.4": "Otros",
    "commanditem.13": ":h - Mostrar este menú de ayuda",
  },
  fr: {
    title: "Dewen - Gestion locale des tâches et des projets",
    enablenotimessage:
      "Activez les notifications sur ordinateur pour profiter pleinement des tâches ! (facultatif)",
    enablenotificationsbtn: "Activer les notifications",
    closenotipopup: "✕",
    nosearchresults: "Aucun résultat",
    customizebtn: "Personnaliser",
    dashboardbtn: "Tableau de bord",
    automationsbtn: "Automatisations",
    settingsbtn: "Paramètres",
    closesidebarbtn: "✕ Fermer",
    customizeheadertitle: "Personnaliser",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "Préréglages",
    defaultpresetbtn: "Par défaut",
    oceanpresetbtn: "Océan",
    forestpresetbtn: "Forêt",
    sunsetpresetbtn: "Coucher de soleil",
    rosepresetbtn: "Rose",
    midnightpresetbtn: "Minuit",
    terminalpresetbtn: "Terminal",
    slatepresetbtn: "Ardoise",
    customizebgheadertitle: "Arrière-plan",
    custombgcolorlabel: "Couleur d’arrière-plan personnalisée :",
    customizeaccentheadertitle: "Accentuation",
    customaccentcolorlabel: "Couleur d’accentuation personnalisée :",
    expandminianalyticstooltiptext: "Développer les mini-statistiques",
    whattofocusonheader: "À FAIRE EN PRIORITÉ",
    riskreportheader: "RAPPORT DE RISQUES",
    upcomingheader: "À VENIR",
    staletasksheader: "TÂCHES EN RETARD",
    taskcount: "0 tâche terminée",
    todolistname: "Tâches",
    option: "Date de création",
    "option.2": "Priorité",
    "option.3": "Date d’échéance",
    addbtn: "Ajouter",
    notasksyet: "Aucune tâche pour le moment",
    tinytaskstip: "Ajoutez une tâche pour commencer.",
    nopriorityoption: "Aucune",
    lowpriorityoption: "Faible",
    mediumpriorityoption: "Moyenne",
    highpriorityoption: "Élevée",
    todostatus: "À faire",
    inprogressstatus: "En cours",
    blockedstatus: "Bloquée",
    donestatus: "Terminée",
    norecurrenceoption: "Aucune",
    dailyrecurrenceoption: "Quotidienne",
    weeklyrecurrenceoption: "Hebdomadaire",
    monthlyrecurrenceoption: "Mensuelle",
    yearlyrecurrenceoption: "Annuelle",
    blockedbylabel: "Bloquée par :",
    "option.4": "Sélectionner une tâche",
    canceltaskcreationbtn: "Annuler",
    addtaskbtn: "Ajouter une tâche",
    tododropzone: "À faire",
    inprogressdropzone: "En cours",
    alldonedropzone: "Terminées",
    "option.5": "Minuteur de concentration",
    "option.6": "Anti-procrastination",
    "option.7": "Minuteur de pause",
    "option.8": "Choisissez une tâche sur laquelle vous concentrer...",
    currentfocusedtask: "tâche",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "Notes rapides",
    addbtn2: "Ajouter",
    nonotesyet: "Aucune note pour le moment",
    tinynotestip: "Ajoutez une note pour commencer.",
    cancelnotecreationbtn: "Annuler",
    addnotebtn: "Ajouter une note",
    activityname: "Activité",
    automationsname: "Automatisations",
    automationslisttitle: "Vos automatisations",
    addautomationbtn: "Ajouter une automatisation",
    settingsheader: "Paramètres",
    settingsnavitem: "Personnel",
    "settingsnavitem.2": "Agents",
    "settingsnavitem.3": "Sécurité",
    "settingsnavitem.4": "Accessibilité",
    "settingsnavitem.5": "À propos",
    avatarlabel: "Avatar :",
    changeavatarbtn: "Changer d’avatar",
    avatarpresetsbtn: "Parcourir les préréglages",
    avataraccenttogglelabel: "Activer l’accentuation",
    fullnamelabel: "Nom complet :",
    preferrednamelabel: "Nom préféré :",
    aitogglelabel: "Activer l’IA",
    apikeylabel: "Clé API d’IA :",
    "apikeylabel.2": "Clé API Tavily (pour l’agent de recherche) :",
    securitytogglelabel: "Activer la sécurité",
    passwordlabel: "Mot de passe principal :",
    "passwordlabel.2": "Confirmer le mot de passe principal :",
    passwordhintlabel: "Indice du mot de passe principal :",
    languagelabel: "Langue :",
    "option.9": "Anglais",
    "option.10": "Espagnol",
    "option.11": "Français",
    "option.12": "Allemand",
    "option.13": "Chinois",
    "option.14": "Japonais",
    "option.15": "Coréen",
    "option.16": "Russe",
    "option.17": "Arabe",
    "option.18": "Portugais",
    "option.19": "Hindi",
    versioninfo: "Version : v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "Développé par",
    "a.3": "Signaler un bug",
    "a.4": "Suggérer une fonctionnalité",
    aboutfooter: "© 2026 Jaxon Penka. Tous droits réservés.",
    avatarpresetsname: "Préréglages d’avatar",
    closeavatarpresets: "✕",
    avatarpresetname: "Par défaut",
    "avatarpresetname.2": "Le développeur",
    "avatarpresetname.3": "L’artiste",
    "avatarpresetname.4": "L’entrepreneur",
    "avatarpresetname.5": "L’étudiant",
    "avatarpresetname.6": "L’écrivain",
    "avatarpresetname.7": "Le scientifique",
    "avatarpresetname.8": "Le joueur",
    "avatarpresetname.9": "L’explorateur",
    "avatarpresetname.10": "Le musicien",
    agentdivname: "Agents Dewen",
    closeagentbtn: "✕",
    agentname: "Agent planificateur",
    agenttagline: "Vous aide à planifier et organiser vos tâches",
    "agentname.2": "Agent de recherche",
    "agenttagline.2": "Vous aide à rechercher et à recueillir des informations",
    "agentname.3": "Agent de priorisation",
    "agenttagline.3": "Détermine ce qui nécessite le plus d’attention",
    "agentname.4": "Agent organisateur",
    "agenttagline.4":
      "Vous aide à organiser efficacement vos tâches et vos notes",
    agentinstructionstitle: "Instructions de l’agent",
    runagentbtntext: "Exécuter l’agent",
    commandshelplisttitle: "Aide sur les commandes",
    closecommandshelplist: "✕",
    categoryname: "Créer",
    commanditem: ":a <task description> - Créer une tâche",
    "commanditem.2": ":n <note text> - Créer une note",
    "categoryname.2": "Gérer",
    "commanditem.3": ":c <task title> - Terminer une tâche",
    "commanditem.4": ":d <task title> - Supprimer une tâche",
    "commanditem.5": ":x - Effacer et supprimer toutes les tâches terminées",
    "commanditem.6":
      ":p <task title>, <priority> - Définir la priorité d’une tâche",
    "commanditem.7": ":et <task title> - Modifier une tâche",
    "commanditem.8": ":en <note text> - Modifier une note",
    "categoryname.3": "Concentration",
    "commanditem.9":
      ":f <duration>, <task title> - Lancer un minuteur de concentration",
    "commanditem.10": ":pt - Mettre le minuteur en pause",
    "commanditem.11": ":rst - Reprendre le minuteur",
    "commanditem.12": ":rt - Redémarrer le minuteur",
    "categoryname.4": "Autre",
    "commanditem.13": ":h - Afficher ce menu d’aide",
  },
  de: {
    title: "Dewen - Lokale Aufgaben- und Projektverwaltung",
    enablenotimessage:
      "Aktiviere Desktop-Benachrichtigungen für das beste Aufgabenerlebnis! (optional)",
    enablenotificationsbtn: "Benachrichtigungen aktivieren",
    closenotipopup: "✕",
    nosearchresults: "Keine Suchergebnisse",
    customizebtn: "Anpassen",
    dashboardbtn: "Dashboard",
    automationsbtn: "Automatisierungen",
    settingsbtn: "Einstellungen",
    closesidebarbtn: "✕ Schließen",
    customizeheadertitle: "Anpassen",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "Voreinstellungen",
    defaultpresetbtn: "Standard",
    oceanpresetbtn: "Ozean",
    forestpresetbtn: "Wald",
    sunsetpresetbtn: "Sonnenuntergang",
    rosepresetbtn: "Rose",
    midnightpresetbtn: "Mitternacht",
    terminalpresetbtn: "Terminal",
    slatepresetbtn: "Schiefer",
    customizebgheadertitle: "Hintergrund",
    custombgcolorlabel: "Benutzerdefinierte Hintergrundfarbe:",
    customizeaccentheadertitle: "Akzent",
    customaccentcolorlabel: "Benutzerdefinierte Akzentfarbe:",
    expandminianalyticstooltiptext: "Mini-Statistik erweitern",
    whattofocusonheader: "WORAUF DU DICH KONZENTRIEREN SOLLTEST",
    riskreportheader: "RISIKOBERICHT",
    upcomingheader: "DEMNÄCHST",
    staletasksheader: "ÜBERFÄLLIGE AUFGABEN",
    taskcount: "0 Aufgaben erledigt",
    todolistname: "Aufgaben",
    option: "Erstellungsdatum",
    "option.2": "Priorität",
    "option.3": "Fälligkeitsdatum",
    addbtn: "Hinzufügen",
    notasksyet: "Noch keine Aufgaben",
    tinytaskstip: "Füge eine Aufgabe hinzu, um loszulegen.",
    nopriorityoption: "Keine",
    lowpriorityoption: "Niedrig",
    mediumpriorityoption: "Mittel",
    highpriorityoption: "Hoch",
    todostatus: "Zu erledigen",
    inprogressstatus: "In Bearbeitung",
    blockedstatus: "Blockiert",
    donestatus: "Erledigt",
    norecurrenceoption: "Keine",
    dailyrecurrenceoption: "Täglich",
    weeklyrecurrenceoption: "Wöchentlich",
    monthlyrecurrenceoption: "Monatlich",
    yearlyrecurrenceoption: "Jährlich",
    blockedbylabel: "Blockiert durch:",
    "option.4": "Aufgabe auswählen",
    canceltaskcreationbtn: "Abbrechen",
    addtaskbtn: "Aufgabe hinzufügen",
    tododropzone: "Zu erledigen",
    inprogressdropzone: "In Bearbeitung",
    alldonedropzone: "Abgeschlossen",
    "option.5": "Fokus-Timer",
    "option.6": "Aufschieber-Hilfe",
    "option.7": "Pausen-Timer",
    "option.8": "Wähle eine Aufgabe zum Fokussieren aus...",
    currentfocusedtask: "Aufgabe",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "Kurze Notizen",
    addbtn2: "Hinzufügen",
    nonotesyet: "Noch keine Notizen",
    tinynotestip: "Füge eine Notiz hinzu, um loszulegen.",
    cancelnotecreationbtn: "Abbrechen",
    addnotebtn: "Notiz hinzufügen",
    activityname: "Aktivität",
    automationsname: "Automatisierungen",
    automationslisttitle: "Deine Automatisierungen",
    addautomationbtn: "Automatisierung hinzufügen",
    settingsheader: "Einstellungen",
    settingsnavitem: "Persönlich",
    "settingsnavitem.2": "Agenten",
    "settingsnavitem.3": "Sicherheit",
    "settingsnavitem.4": "Barrierefreiheit",
    "settingsnavitem.5": "Über",
    avatarlabel: "Avatar:",
    changeavatarbtn: "Avatar ändern",
    avatarpresetsbtn: "Voreinstellungen durchsuchen",
    avataraccenttogglelabel: "Akzent aktivieren",
    fullnamelabel: "Vollständiger Name:",
    preferrednamelabel: "Bevorzugter Name:",
    aitogglelabel: "KI aktivieren",
    apikeylabel: "KI-API-Schlüssel:",
    "apikeylabel.2": "Tavily-API-Schlüssel (für den Recherche-Agenten):",
    securitytogglelabel: "Sicherheit aktivieren",
    passwordlabel: "Master-Passwort:",
    "passwordlabel.2": "Master-Passwort bestätigen:",
    passwordhintlabel: "Hinweis zum Master-Passwort:",
    languagelabel: "Sprache:",
    "option.9": "Englisch",
    "option.10": "Spanisch",
    "option.11": "Französisch",
    "option.12": "Deutsch",
    "option.13": "Chinesisch",
    "option.14": "Japanisch",
    "option.15": "Koreanisch",
    "option.16": "Russisch",
    "option.17": "Arabisch",
    "option.18": "Portugiesisch",
    "option.19": "Hindi",
    versioninfo: "Version: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "Entwickelt von",
    "a.3": "Fehler melden",
    "a.4": "Funktion vorschlagen",
    aboutfooter: "© 2026 Jaxon Penka. Alle Rechte vorbehalten.",
    avatarpresetsname: "Avatar-Voreinstellungen",
    closeavatarpresets: "✕",
    avatarpresetname: "Standard",
    "avatarpresetname.2": "Der Entwickler",
    "avatarpresetname.3": "Der Künstler",
    "avatarpresetname.4": "Der Unternehmer",
    "avatarpresetname.5": "Der Student",
    "avatarpresetname.6": "Der Schriftsteller",
    "avatarpresetname.7": "Der Wissenschaftler",
    "avatarpresetname.8": "Der Gamer",
    "avatarpresetname.9": "Der Entdecker",
    "avatarpresetname.10": "Der Musiker",
    agentdivname: "Dewen-Agenten",
    closeagentbtn: "✕",
    agentname: "Planungsagent",
    agenttagline: "Hilft dir, deine Aufgaben zu planen und zu organisieren",
    "agentname.2": "Recherche-Agent",
    "agenttagline.2": "Unterstützt bei Recherche und Informationsbeschaffung",
    "agentname.3": "Priorisierungsagent",
    "agenttagline.3": "Ermittelt, was die meiste Aufmerksamkeit benötigt",
    "agentname.4": "Organisationsagent",
    "agenttagline.4":
      "Hilft dir, Aufgaben und Notizen effektiv zu organisieren",
    agentinstructionstitle: "Agentenanweisungen",
    runagentbtntext: "Agent ausführen",
    commandshelplisttitle: "Befehlshilfe",
    closecommandshelplist: "✕",
    categoryname: "Erstellen",
    commanditem: ":a <task description> - Aufgabe erstellen",
    "commanditem.2": ":n <note text> - Notiz erstellen",
    "categoryname.2": "Verwalten",
    "commanditem.3": ":c <task title> - Aufgabe abschließen",
    "commanditem.4": ":d <task title> - Aufgabe löschen",
    "commanditem.5": ":x - Alle erledigten Aufgaben leeren und löschen",
    "commanditem.6":
      ":p <task title>, <priority> - Aufgabenpriorität festlegen",
    "commanditem.7": ":et <task title> - Aufgabe bearbeiten",
    "commanditem.8": ":en <note text> - Notiz bearbeiten",
    "categoryname.3": "Fokus",
    "commanditem.9": ":f <duration>, <task title> - Fokus-Timer starten",
    "commanditem.10": ":pt - Aktuellen Timer pausieren",
    "commanditem.11": ":rst - Aktuellen Timer fortsetzen",
    "commanditem.12": ":rt - Aktuellen Timer neu starten",
    "categoryname.4": "Sonstiges",
    "commanditem.13": ":h - Dieses Hilfemenü anzeigen",
  },
  zh: {
    title: "Dewen - 本地优先的任务与项目管理",
    enablenotimessage: "开启桌面通知，获得更好的任务管理体验！（可选）",
    enablenotificationsbtn: "开启通知",
    closenotipopup: "✕",
    nosearchresults: "没有搜索结果",
    customizebtn: "自定义",
    dashboardbtn: "仪表板",
    automationsbtn: "自动化",
    settingsbtn: "设置",
    closesidebarbtn: "✕ 关闭",
    customizeheadertitle: "自定义",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "预设",
    defaultpresetbtn: "默认",
    oceanpresetbtn: "海洋",
    forestpresetbtn: "森林",
    sunsetpresetbtn: "日落",
    rosepresetbtn: "玫瑰",
    midnightpresetbtn: "午夜",
    terminalpresetbtn: "终端",
    slatepresetbtn: "石板",
    customizebgheadertitle: "背景",
    custombgcolorlabel: "自定义背景颜色：",
    customizeaccentheadertitle: "强调色",
    customaccentcolorlabel: "自定义强调色：",
    expandminianalyticstooltiptext: "展开迷你分析",
    whattofocusonheader: "优先关注",
    riskreportheader: "风险报告",
    upcomingheader: "即将到来",
    staletasksheader: "逾期任务",
    taskcount: "已完成 0 个任务",
    todolistname: "任务",
    option: "创建日期",
    "option.2": "优先级",
    "option.3": "截止日期",
    addbtn: "添加",
    notasksyet: "还没有任务",
    tinytaskstip: "添加一个任务以开始使用。",
    nopriorityoption: "无",
    lowpriorityoption: "低",
    mediumpriorityoption: "中",
    highpriorityoption: "高",
    todostatus: "待办",
    inprogressstatus: "进行中",
    blockedstatus: "受阻",
    donestatus: "已完成",
    norecurrenceoption: "无",
    dailyrecurrenceoption: "每天",
    weeklyrecurrenceoption: "每周",
    monthlyrecurrenceoption: "每月",
    yearlyrecurrenceoption: "每年",
    blockedbylabel: "阻塞原因：",
    "option.4": "选择任务",
    canceltaskcreationbtn: "取消",
    addtaskbtn: "添加任务",
    tododropzone: "待办",
    inprogressdropzone: "进行中",
    alldonedropzone: "已完成",
    "option.5": "专注计时器",
    "option.6": "防拖延",
    "option.7": "休息计时器",
    "option.8": "选择要专注的任务...",
    currentfocusedtask: "任务",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "快速笔记",
    addbtn2: "添加",
    nonotesyet: "还没有笔记",
    tinynotestip: "添加一条笔记以开始使用。",
    cancelnotecreationbtn: "取消",
    addnotebtn: "添加笔记",
    activityname: "活动",
    automationsname: "自动化",
    automationslisttitle: "你的自动化",
    addautomationbtn: "添加自动化",
    settingsheader: "设置",
    settingsnavitem: "个人",
    "settingsnavitem.2": "智能体",
    "settingsnavitem.3": "安全",
    "settingsnavitem.4": "无障碍",
    "settingsnavitem.5": "关于",
    avatarlabel: "头像：",
    changeavatarbtn: "更换头像",
    avatarpresetsbtn: "浏览预设",
    avataraccenttogglelabel: "开启强调色",
    fullnamelabel: "全名：",
    preferrednamelabel: "首选名称：",
    aitogglelabel: "启用 AI",
    apikeylabel: "AI API 密钥：",
    "apikeylabel.2": "Tavily API 密钥（用于研究智能体）：",
    securitytogglelabel: "启用安全功能",
    passwordlabel: "主密码：",
    "passwordlabel.2": "确认主密码：",
    passwordhintlabel: "主密码提示：",
    languagelabel: "语言：",
    "option.9": "英语",
    "option.10": "西班牙语",
    "option.11": "法语",
    "option.12": "德语",
    "option.13": "中文",
    "option.14": "日语",
    "option.15": "韩语",
    "option.16": "俄语",
    "option.17": "阿拉伯语",
    "option.18": "葡萄牙语",
    "option.19": "印地语",
    versioninfo: "版本：v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "开发者",
    "a.3": "报告错误",
    "a.4": "请求新功能",
    aboutfooter: "© 2026 Jaxon Penka。保留所有权利。",
    avatarpresetsname: "头像预设",
    closeavatarpresets: "✕",
    avatarpresetname: "默认",
    "avatarpresetname.2": "开发者",
    "avatarpresetname.3": "艺术家",
    "avatarpresetname.4": "创业者",
    "avatarpresetname.5": "学生",
    "avatarpresetname.6": "作家",
    "avatarpresetname.7": "科学家",
    "avatarpresetname.8": "玩家",
    "avatarpresetname.9": "探险家",
    "avatarpresetname.10": "音乐家",
    agentdivname: "Dewen 智能体",
    closeagentbtn: "✕",
    agentname: "规划智能体",
    agenttagline: "帮助你规划和整理任务",
    "agentname.2": "研究智能体",
    "agenttagline.2": "协助研究和收集信息",
    "agentname.3": "优先级智能体",
    "agenttagline.3": "判断哪些事项最需要关注",
    "agentname.4": "整理智能体",
    "agenttagline.4": "帮助你有效整理任务和笔记",
    agentinstructionstitle: "智能体指令",
    runagentbtntext: "运行智能体",
    commandshelplisttitle: "命令帮助",
    closecommandshelplist: "✕",
    categoryname: "创建",
    commanditem: ":a <task description> - 创建任务",
    "commanditem.2": ":n <note text> - 创建笔记",
    "categoryname.2": "管理",
    "commanditem.3": ":c <task title> - 完成任务",
    "commanditem.4": ":d <task title> - 删除任务",
    "commanditem.5": ":x - 清除并删除所有已完成任务",
    "commanditem.6": ":p <task title>, <priority> - 设置任务优先级",
    "commanditem.7": ":et <task title> - 编辑任务",
    "commanditem.8": ":en <note text> - 编辑笔记",
    "categoryname.3": "专注",
    "commanditem.9": ":f <duration>, <task title> - 启动专注计时器",
    "commanditem.10": ":pt - 暂停当前计时器",
    "commanditem.11": ":rst - 恢复当前计时器",
    "commanditem.12": ":rt - 重启当前计时器",
    "categoryname.4": "其他",
    "commanditem.13": ":h - 显示此帮助菜单",
  },
  ja: {
    title: "Dewen - ローカル優先のタスク・プロジェクト管理",
    enablenotimessage:
      "デスクトップ通知を有効にして、タスクを快適に管理しましょう！（任意）",
    enablenotificationsbtn: "通知を有効にする",
    closenotipopup: "✕",
    nosearchresults: "検索結果がありません",
    customizebtn: "カスタマイズ",
    dashboardbtn: "ダッシュボード",
    automationsbtn: "自動化",
    settingsbtn: "設定",
    closesidebarbtn: "✕ 閉じる",
    customizeheadertitle: "カスタマイズ",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "プリセット",
    defaultpresetbtn: "デフォルト",
    oceanpresetbtn: "海",
    forestpresetbtn: "森",
    sunsetpresetbtn: "夕焼け",
    rosepresetbtn: "ローズ",
    midnightpresetbtn: "ミッドナイト",
    terminalpresetbtn: "ターミナル",
    slatepresetbtn: "スレート",
    customizebgheadertitle: "背景",
    custombgcolorlabel: "背景色をカスタマイズ：",
    customizeaccentheadertitle: "アクセント",
    customaccentcolorlabel: "アクセントカラーをカスタマイズ：",
    expandminianalyticstooltiptext: "ミニ分析を展開",
    whattofocusonheader: "優先して取り組むこと",
    riskreportheader: "リスクレポート",
    upcomingheader: "近日予定",
    staletasksheader: "期限超過のタスク",
    taskcount: "完了したタスク：0件",
    todolistname: "タスク",
    option: "作成日",
    "option.2": "優先度",
    "option.3": "期限",
    addbtn: "追加",
    notasksyet: "タスクはまだありません",
    tinytaskstip: "タスクを追加して始めましょう。",
    nopriorityoption: "なし",
    lowpriorityoption: "低",
    mediumpriorityoption: "中",
    highpriorityoption: "高",
    todostatus: "未着手",
    inprogressstatus: "進行中",
    blockedstatus: "ブロック中",
    donestatus: "完了",
    norecurrenceoption: "なし",
    dailyrecurrenceoption: "毎日",
    weeklyrecurrenceoption: "毎週",
    monthlyrecurrenceoption: "毎月",
    yearlyrecurrenceoption: "毎年",
    blockedbylabel: "ブロック要因：",
    "option.4": "タスクを選択",
    canceltaskcreationbtn: "キャンセル",
    addtaskbtn: "タスクを追加",
    tododropzone: "未着手",
    inprogressdropzone: "進行中",
    alldonedropzone: "完了",
    "option.5": "集中タイマー",
    "option.6": "先延ばし防止",
    "option.7": "休憩タイマー",
    "option.8": "集中するタスクを選択...",
    currentfocusedtask: "タスク",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "クイックメモ",
    addbtn2: "追加",
    nonotesyet: "メモはまだありません",
    tinynotestip: "メモを追加して始めましょう。",
    cancelnotecreationbtn: "キャンセル",
    addnotebtn: "メモを追加",
    activityname: "アクティビティ",
    automationsname: "自動化",
    automationslisttitle: "自動化一覧",
    addautomationbtn: "自動化を追加",
    settingsheader: "設定",
    settingsnavitem: "個人設定",
    "settingsnavitem.2": "エージェント",
    "settingsnavitem.3": "セキュリティ",
    "settingsnavitem.4": "アクセシビリティ",
    "settingsnavitem.5": "このアプリについて",
    avatarlabel: "アバター：",
    changeavatarbtn: "アバターを変更",
    avatarpresetsbtn: "プリセットを見る",
    avataraccenttogglelabel: "アクセントを有効にする",
    fullnamelabel: "氏名：",
    preferrednamelabel: "希望する名前：",
    aitogglelabel: "AIを有効にする",
    apikeylabel: "AI APIキー：",
    "apikeylabel.2": "Tavily APIキー（リサーチエージェント用）：",
    securitytogglelabel: "セキュリティを有効にする",
    passwordlabel: "マスターパスワード：",
    "passwordlabel.2": "マスターパスワードを確認：",
    passwordhintlabel: "マスターパスワードのヒント：",
    languagelabel: "言語：",
    "option.9": "英語",
    "option.10": "スペイン語",
    "option.11": "フランス語",
    "option.12": "ドイツ語",
    "option.13": "中国語",
    "option.14": "日本語",
    "option.15": "韓国語",
    "option.16": "ロシア語",
    "option.17": "アラビア語",
    "option.18": "ポルトガル語",
    "option.19": "ヒンディー語",
    versioninfo: "バージョン：v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "開発者：",
    "a.3": "バグを報告",
    "a.4": "機能をリクエスト",
    aboutfooter: "© 2026 Jaxon Penka. All rights reserved.",
    avatarpresetsname: "アバターのプリセット",
    closeavatarpresets: "✕",
    avatarpresetname: "デフォルト",
    "avatarpresetname.2": "開発者",
    "avatarpresetname.3": "アーティスト",
    "avatarpresetname.4": "起業家",
    "avatarpresetname.5": "学生",
    "avatarpresetname.6": "作家",
    "avatarpresetname.7": "科学者",
    "avatarpresetname.8": "ゲーマー",
    "avatarpresetname.9": "探検家",
    "avatarpresetname.10": "音楽家",
    agentdivname: "Dewenエージェント",
    closeagentbtn: "✕",
    agentname: "プランナーエージェント",
    agenttagline: "タスクの計画と整理をサポートします",
    "agentname.2": "リサーチエージェント",
    "agenttagline.2": "調査と情報収集をサポートします",
    "agentname.3": "優先順位付けエージェント",
    "agenttagline.3": "最も注意が必要なことを判断します",
    "agentname.4": "整理エージェント",
    "agenttagline.4": "タスクやメモを効率よく整理するのをサポートします",
    agentinstructionstitle: "エージェントへの指示",
    runagentbtntext: "エージェントを実行",
    commandshelplisttitle: "コマンドヘルプ",
    closecommandshelplist: "✕",
    categoryname: "作成",
    commanditem: ":a <task description> - タスクを作成",
    "commanditem.2": ":n <note text> - メモを作成",
    "categoryname.2": "管理",
    "commanditem.3": ":c <task title> - タスクを完了",
    "commanditem.4": ":d <task title> - タスクを削除",
    "commanditem.5": ":x - 完了したタスクをすべて消去して削除",
    "commanditem.6": ":p <task title>, <priority> - タスクの優先度を設定",
    "commanditem.7": ":et <task title> - タスクを編集",
    "commanditem.8": ":en <note text> - メモを編集",
    "categoryname.3": "集中",
    "commanditem.9": ":f <duration>, <task title> - 集中タイマーを開始",
    "commanditem.10": ":pt - 現在のタイマーを一時停止",
    "commanditem.11": ":rst - 現在のタイマーを再開",
    "commanditem.12": ":rt - 現在のタイマーを再起動",
    "categoryname.4": "その他",
    "commanditem.13": ":h - このヘルプメニューを表示",
  },
  ko: {
    title: "Dewen - 로컬 우선 작업 및 프로젝트 관리",
    enablenotimessage:
      "최적의 작업 환경을 위해 데스크톱 알림을 켜세요! (선택 사항)",
    enablenotificationsbtn: "알림 켜기",
    closenotipopup: "✕",
    nosearchresults: "검색 결과 없음",
    customizebtn: "사용자 지정",
    dashboardbtn: "대시보드",
    automationsbtn: "자동화",
    settingsbtn: "설정",
    closesidebarbtn: "✕ 닫기",
    customizeheadertitle: "사용자 지정",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "프리셋",
    defaultpresetbtn: "기본값",
    oceanpresetbtn: "바다",
    forestpresetbtn: "숲",
    sunsetpresetbtn: "노을",
    rosepresetbtn: "장미",
    midnightpresetbtn: "미드나이트",
    terminalpresetbtn: "터미널",
    slatepresetbtn: "슬레이트",
    customizebgheadertitle: "배경",
    custombgcolorlabel: "사용자 지정 배경색:",
    customizeaccentheadertitle: "강조색",
    customaccentcolorlabel: "사용자 지정 강조색:",
    expandminianalyticstooltiptext: "미니 분석 펼치기",
    whattofocusonheader: "집중할 항목",
    riskreportheader: "위험 보고서",
    upcomingheader: "예정 항목",
    staletasksheader: "미완료 작업",
    taskcount: "완료한 작업 0개",
    todolistname: "작업",
    option: "생성 날짜",
    "option.2": "우선순위",
    "option.3": "마감일",
    addbtn: "추가",
    notasksyet: "아직 작업이 없습니다",
    tinytaskstip: "작업을 추가해 시작하세요.",
    nopriorityoption: "없음",
    lowpriorityoption: "낮음",
    mediumpriorityoption: "보통",
    highpriorityoption: "높음",
    todostatus: "할 일",
    inprogressstatus: "진행 중",
    blockedstatus: "차단됨",
    donestatus: "완료",
    norecurrenceoption: "없음",
    dailyrecurrenceoption: "매일",
    weeklyrecurrenceoption: "매주",
    monthlyrecurrenceoption: "매월",
    yearlyrecurrenceoption: "매년",
    blockedbylabel: "차단 사유:",
    "option.4": "작업 선택",
    canceltaskcreationbtn: "취소",
    addtaskbtn: "작업 추가",
    tododropzone: "할 일",
    inprogressdropzone: "진행 중",
    alldonedropzone: "완료됨",
    "option.5": "집중 타이머",
    "option.6": "미루기 방지",
    "option.7": "휴식 타이머",
    "option.8": "집중할 작업을 선택하세요...",
    currentfocusedtask: "작업",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "빠른 메모",
    addbtn2: "추가",
    nonotesyet: "아직 메모가 없습니다",
    tinynotestip: "메모를 추가해 시작하세요.",
    cancelnotecreationbtn: "취소",
    addnotebtn: "메모 추가",
    activityname: "활동",
    automationsname: "자동화",
    automationslisttitle: "내 자동화",
    addautomationbtn: "자동화 추가",
    settingsheader: "설정",
    settingsnavitem: "개인",
    "settingsnavitem.2": "에이전트",
    "settingsnavitem.3": "보안",
    "settingsnavitem.4": "접근성",
    "settingsnavitem.5": "정보",
    avatarlabel: "아바타:",
    changeavatarbtn: "아바타 변경",
    avatarpresetsbtn: "프리셋 둘러보기",
    avataraccenttogglelabel: "강조색 켜기",
    fullnamelabel: "전체 이름:",
    preferrednamelabel: "선호하는 이름:",
    aitogglelabel: "AI 사용",
    apikeylabel: "AI API 키:",
    "apikeylabel.2": "Tavily API 키 (리서치 에이전트용):",
    securitytogglelabel: "보안 사용",
    passwordlabel: "마스터 비밀번호:",
    "passwordlabel.2": "마스터 비밀번호 확인:",
    passwordhintlabel: "마스터 비밀번호 힌트:",
    languagelabel: "언어:",
    "option.9": "영어",
    "option.10": "스페인어",
    "option.11": "프랑스어",
    "option.12": "독일어",
    "option.13": "중국어",
    "option.14": "일본어",
    "option.15": "한국어",
    "option.16": "러시아어",
    "option.17": "아랍어",
    "option.18": "포르투갈어",
    "option.19": "힌디어",
    versioninfo: "버전: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "개발자",
    "a.3": "버그 신고",
    "a.4": "기능 요청",
    aboutfooter: "© 2026 Jaxon Penka. All rights reserved.",
    avatarpresetsname: "아바타 프리셋",
    closeavatarpresets: "✕",
    avatarpresetname: "기본값",
    "avatarpresetname.2": "개발자",
    "avatarpresetname.3": "예술가",
    "avatarpresetname.4": "기업가",
    "avatarpresetname.5": "학생",
    "avatarpresetname.6": "작가",
    "avatarpresetname.7": "과학자",
    "avatarpresetname.8": "게이머",
    "avatarpresetname.9": "탐험가",
    "avatarpresetname.10": "음악가",
    agentdivname: "Dewen 에이전트",
    closeagentbtn: "✕",
    agentname: "계획 에이전트",
    agenttagline: "작업을 계획하고 정리하도록 도와줍니다",
    "agentname.2": "리서치 에이전트",
    "agenttagline.2": "조사와 정보 수집을 지원합니다",
    "agentname.3": "우선순위 에이전트",
    "agenttagline.3": "가장 주의가 필요한 항목을 판단합니다",
    "agentname.4": "정리 에이전트",
    "agenttagline.4": "작업과 메모를 효율적으로 정리하도록 도와줍니다",
    agentinstructionstitle: "에이전트 지침",
    runagentbtntext: "에이전트 실행",
    commandshelplisttitle: "명령어 도움말",
    closecommandshelplist: "✕",
    categoryname: "만들기",
    commanditem: ":a <task description> - 작업 만들기",
    "commanditem.2": ":n <note text> - 메모 만들기",
    "categoryname.2": "관리",
    "commanditem.3": ":c <task title> - 작업 완료",
    "commanditem.4": ":d <task title> - 작업 삭제",
    "commanditem.5": ":x - 완료된 작업 모두 지우고 삭제",
    "commanditem.6": ":p <task title>, <priority> - 작업 우선순위 설정",
    "commanditem.7": ":et <task title> - 작업 편집",
    "commanditem.8": ":en <note text> - 메모 편집",
    "categoryname.3": "집중",
    "commanditem.9": ":f <duration>, <task title> - 집중 타이머 시작",
    "commanditem.10": ":pt - 현재 타이머 일시 중지",
    "commanditem.11": ":rst - 현재 타이머 다시 시작",
    "commanditem.12": ":rt - 현재 타이머 재시작",
    "categoryname.4": "기타",
    "commanditem.13": ":h - 도움말 메뉴 표시",
  },
  ru: {
    title: "Dewen — локальное управление задачами и проектами",
    enablenotimessage:
      "Включите уведомления на компьютере для удобной работы с задачами! (необязательно)",
    enablenotificationsbtn: "Включить уведомления",
    closenotipopup: "✕",
    nosearchresults: "Ничего не найдено",
    customizebtn: "Настроить",
    dashboardbtn: "Панель управления",
    automationsbtn: "Автоматизация",
    settingsbtn: "Настройки",
    closesidebarbtn: "✕ Закрыть",
    customizeheadertitle: "Настроить",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "Предустановки",
    defaultpresetbtn: "По умолчанию",
    oceanpresetbtn: "Океан",
    forestpresetbtn: "Лес",
    sunsetpresetbtn: "Закат",
    rosepresetbtn: "Роза",
    midnightpresetbtn: "Полночь",
    terminalpresetbtn: "Терминал",
    slatepresetbtn: "Сланец",
    customizebgheadertitle: "Фон",
    custombgcolorlabel: "Свой цвет фона:",
    customizeaccentheadertitle: "Акцент",
    customaccentcolorlabel: "Свой цвет акцента:",
    expandminianalyticstooltiptext: "Развернуть мини-аналитику",
    whattofocusonheader: "НА ЧЁМ СОСРЕДОТОЧИТЬСЯ",
    riskreportheader: "ОТЧЁТ О РИСКАХ",
    upcomingheader: "СКОРО",
    staletasksheader: "ПРОСРОЧЕННЫЕ ЗАДАЧИ",
    taskcount: "Выполнено задач: 0",
    todolistname: "Задачи",
    option: "Дата создания",
    "option.2": "Приоритет",
    "option.3": "Срок выполнения",
    addbtn: "Добавить",
    notasksyet: "Пока нет задач",
    tinytaskstip: "Добавьте задачу, чтобы начать.",
    nopriorityoption: "Нет",
    lowpriorityoption: "Низкий",
    mediumpriorityoption: "Средний",
    highpriorityoption: "Высокий",
    todostatus: "К выполнению",
    inprogressstatus: "В процессе",
    blockedstatus: "Заблокировано",
    donestatus: "Готово",
    norecurrenceoption: "Нет",
    dailyrecurrenceoption: "Ежедневно",
    weeklyrecurrenceoption: "Еженедельно",
    monthlyrecurrenceoption: "Ежемесячно",
    yearlyrecurrenceoption: "Ежегодно",
    blockedbylabel: "Заблокировано задачей:",
    "option.4": "Выберите задачу",
    canceltaskcreationbtn: "Отмена",
    addtaskbtn: "Добавить задачу",
    tododropzone: "К выполнению",
    inprogressdropzone: "В процессе",
    alldonedropzone: "Завершено",
    "option.5": "Таймер концентрации",
    "option.6": "Антипрокрастинатор",
    "option.7": "Таймер перерыва",
    "option.8": "Выберите задачу для концентрации...",
    currentfocusedtask: "задача",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "Быстрые заметки",
    addbtn2: "Добавить",
    nonotesyet: "Пока нет заметок",
    tinynotestip: "Добавьте заметку, чтобы начать.",
    cancelnotecreationbtn: "Отмена",
    addnotebtn: "Добавить заметку",
    activityname: "Активность",
    automationsname: "Автоматизация",
    automationslisttitle: "Ваши автоматизации",
    addautomationbtn: "Добавить автоматизацию",
    settingsheader: "Настройки",
    settingsnavitem: "Личные",
    "settingsnavitem.2": "Агенты",
    "settingsnavitem.3": "Безопасность",
    "settingsnavitem.4": "Специальные возможности",
    "settingsnavitem.5": "О приложении",
    avatarlabel: "Аватар:",
    changeavatarbtn: "Изменить аватар",
    avatarpresetsbtn: "Выбрать из шаблонов",
    avataraccenttogglelabel: "Включить акцент",
    fullnamelabel: "Полное имя:",
    preferrednamelabel: "Предпочитаемое имя:",
    aitogglelabel: "Включить ИИ",
    apikeylabel: "Ключ API ИИ:",
    "apikeylabel.2": "Ключ API Tavily (для агента-исследователя):",
    securitytogglelabel: "Включить защиту",
    passwordlabel: "Главный пароль:",
    "passwordlabel.2": "Подтвердите главный пароль:",
    passwordhintlabel: "Подсказка для главного пароля:",
    languagelabel: "Язык:",
    "option.9": "Английский",
    "option.10": "Испанский",
    "option.11": "Французский",
    "option.12": "Немецкий",
    "option.13": "Китайский",
    "option.14": "Японский",
    "option.15": "Корейский",
    "option.16": "Русский",
    "option.17": "Арабский",
    "option.18": "Португальский",
    "option.19": "Хинди",
    versioninfo: "Версия: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "Разработано",
    "a.3": "Сообщить об ошибке",
    "a.4": "Предложить функцию",
    aboutfooter: "© 2026 Jaxon Penka. Все права защищены.",
    avatarpresetsname: "Шаблоны аватара",
    closeavatarpresets: "✕",
    avatarpresetname: "По умолчанию",
    "avatarpresetname.2": "Разработчик",
    "avatarpresetname.3": "Художник",
    "avatarpresetname.4": "Предприниматель",
    "avatarpresetname.5": "Студент",
    "avatarpresetname.6": "Писатель",
    "avatarpresetname.7": "Учёный",
    "avatarpresetname.8": "Игрок",
    "avatarpresetname.9": "Путешественник",
    "avatarpresetname.10": "Музыкант",
    agentdivname: "Агенты Dewen",
    closeagentbtn: "✕",
    agentname: "Агент-планировщик",
    agenttagline: "Помогает планировать и упорядочивать задачи",
    "agentname.2": "Агент-исследователь",
    "agenttagline.2": "Помогает искать и собирать информацию",
    "agentname.3": "Агент приоритетов",
    "agenttagline.3": "Определяет, что требует наибольшего внимания",
    "agentname.4": "Агент-организатор",
    "agenttagline.4": "Помогает эффективно упорядочивать задачи и заметки",
    agentinstructionstitle: "Инструкции для агента",
    runagentbtntext: "Запустить агента",
    commandshelplisttitle: "Справка по командам",
    closecommandshelplist: "✕",
    categoryname: "Создание",
    commanditem: ":a <task description> - Создать задачу",
    "commanditem.2": ":n <note text> - Создать заметку",
    "categoryname.2": "Управление",
    "commanditem.3": ":c <task title> - Завершить задачу",
    "commanditem.4": ":d <task title> - Удалить задачу",
    "commanditem.5": ":x - Очистить и удалить все завершённые задачи",
    "commanditem.6":
      ":p <task title>, <priority> - Установить приоритет задачи",
    "commanditem.7": ":et <task title> - Изменить задачу",
    "commanditem.8": ":en <note text> - Изменить заметку",
    "categoryname.3": "Концентрация",
    "commanditem.9":
      ":f <duration>, <task title> - Запустить таймер концентрации",
    "commanditem.10": ":pt - Приостановить текущий таймер",
    "commanditem.11": ":rst - Возобновить текущий таймер",
    "commanditem.12": ":rt - Перезапустить текущий таймер",
    "categoryname.4": "Другое",
    "commanditem.13": ":h - Показать это меню справки",
  },
  ar: {
    title: "Dewen - إدارة المهام والمشاريع محليًا",
    enablenotimessage:
      "فعّل إشعارات سطح المكتب للحصول على أفضل تجربة للمهام! (اختياري)",
    enablenotificationsbtn: "تفعيل الإشعارات",
    closenotipopup: "✕",
    nosearchresults: "لا توجد نتائج بحث",
    customizebtn: "تخصيص",
    dashboardbtn: "لوحة المعلومات",
    automationsbtn: "الأتمتة",
    settingsbtn: "الإعدادات",
    closesidebarbtn: "✕ إغلاق",
    customizeheadertitle: "تخصيص",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "الإعدادات المسبقة",
    defaultpresetbtn: "افتراضي",
    oceanpresetbtn: "المحيط",
    forestpresetbtn: "الغابة",
    sunsetpresetbtn: "غروب الشمس",
    rosepresetbtn: "وردي",
    midnightpresetbtn: "منتصف الليل",
    terminalpresetbtn: "الطرفية",
    slatepresetbtn: "أردوازي",
    customizebgheadertitle: "الخلفية",
    custombgcolorlabel: "لون خلفية مخصص:",
    customizeaccentheadertitle: "لون التمييز",
    customaccentcolorlabel: "لون تمييز مخصص:",
    expandminianalyticstooltiptext: "توسيع التحليلات المصغرة",
    whattofocusonheader: "ما يجب التركيز عليه",
    riskreportheader: "تقرير المخاطر",
    upcomingheader: "القادم",
    staletasksheader: "المهام المتأخرة",
    taskcount: "اكتملت 0 مهام",
    todolistname: "المهام",
    option: "تاريخ الإنشاء",
    "option.2": "الأولوية",
    "option.3": "تاريخ الاستحقاق",
    addbtn: "إضافة",
    notasksyet: "لا توجد مهام بعد",
    tinytaskstip: "أضف مهمة للبدء.",
    nopriorityoption: "بدون",
    lowpriorityoption: "منخفضة",
    mediumpriorityoption: "متوسطة",
    highpriorityoption: "عالية",
    todostatus: "المهام",
    inprogressstatus: "قيد التنفيذ",
    blockedstatus: "محظورة",
    donestatus: "مكتملة",
    norecurrenceoption: "بدون",
    dailyrecurrenceoption: "يوميًا",
    weeklyrecurrenceoption: "أسبوعيًا",
    monthlyrecurrenceoption: "شهريًا",
    yearlyrecurrenceoption: "سنويًا",
    blockedbylabel: "محظورة بسبب:",
    "option.4": "اختر مهمة",
    canceltaskcreationbtn: "إلغاء",
    addtaskbtn: "إضافة مهمة",
    tododropzone: "المهام",
    inprogressdropzone: "قيد التنفيذ",
    alldonedropzone: "مكتملة",
    "option.5": "مؤقت التركيز",
    "option.6": "مكافحة التسويف",
    "option.7": "مؤقت الاستراحة",
    "option.8": "اختر مهمة للتركيز عليها...",
    currentfocusedtask: "مهمة",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "ملاحظات سريعة",
    addbtn2: "إضافة",
    nonotesyet: "لا توجد ملاحظات بعد",
    tinynotestip: "أضف ملاحظة للبدء.",
    cancelnotecreationbtn: "إلغاء",
    addnotebtn: "إضافة ملاحظة",
    activityname: "النشاط",
    automationsname: "الأتمتة",
    automationslisttitle: "الأتمتة الخاصة بك",
    addautomationbtn: "إضافة أتمتة",
    settingsheader: "الإعدادات",
    settingsnavitem: "شخصي",
    "settingsnavitem.2": "الوكلاء",
    "settingsnavitem.3": "الأمان",
    "settingsnavitem.4": "إمكانية الوصول",
    "settingsnavitem.5": "حول",
    avatarlabel: "الصورة الرمزية:",
    changeavatarbtn: "تغيير الصورة الرمزية",
    avatarpresetsbtn: "استعراض الإعدادات المسبقة",
    avataraccenttogglelabel: "تفعيل لون التمييز",
    fullnamelabel: "الاسم الكامل:",
    preferrednamelabel: "الاسم المفضل:",
    aitogglelabel: "تفعيل الذكاء الاصطناعي",
    apikeylabel: "مفتاح API للذكاء الاصطناعي:",
    "apikeylabel.2": "مفتاح Tavily API (لوكيل البحث):",
    securitytogglelabel: "تفعيل الأمان",
    passwordlabel: "كلمة المرور الرئيسية:",
    "passwordlabel.2": "تأكيد كلمة المرور الرئيسية:",
    passwordhintlabel: "تلميح كلمة المرور الرئيسية:",
    languagelabel: "اللغة:",
    "option.9": "الإنجليزية",
    "option.10": "الإسبانية",
    "option.11": "الفرنسية",
    "option.12": "الألمانية",
    "option.13": "الصينية",
    "option.14": "اليابانية",
    "option.15": "الكورية",
    "option.16": "الروسية",
    "option.17": "العربية",
    "option.18": "البرتغالية",
    "option.19": "الهندية",
    versioninfo: "الإصدار: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "طوّره",
    "a.3": "الإبلاغ عن خطأ",
    "a.4": "اقتراح ميزة",
    aboutfooter: "© 2026 Jaxon Penka. جميع الحقوق محفوظة.",
    avatarpresetsname: "إعدادات الصور الرمزية",
    closeavatarpresets: "✕",
    avatarpresetname: "افتراضي",
    "avatarpresetname.2": "المطوّر",
    "avatarpresetname.3": "الفنان",
    "avatarpresetname.4": "رائد الأعمال",
    "avatarpresetname.5": "الطالب",
    "avatarpresetname.6": "الكاتب",
    "avatarpresetname.7": "العالِم",
    "avatarpresetname.8": "اللاعب",
    "avatarpresetname.9": "المستكشف",
    "avatarpresetname.10": "الموسيقي",
    agentdivname: "وكلاء Dewen",
    closeagentbtn: "✕",
    agentname: "وكيل التخطيط",
    agenttagline: "يساعدك على تخطيط مهامك وتنظيمها",
    "agentname.2": "وكيل البحث",
    "agenttagline.2": "يساعد في البحث وجمع المعلومات",
    "agentname.3": "وكيل تحديد الأولويات",
    "agenttagline.3": "يحدد ما يحتاج إلى أكبر قدر من الاهتمام",
    "agentname.4": "وكيل التنظيم",
    "agenttagline.4": "يساعدك على تنظيم المهام والملاحظات بفعالية",
    agentinstructionstitle: "تعليمات الوكيل",
    runagentbtntext: "تشغيل الوكيل",
    commandshelplisttitle: "مساعدة الأوامر",
    closecommandshelplist: "✕",
    categoryname: "إنشاء",
    commanditem: ":a <task description> - إنشاء مهمة",
    "commanditem.2": ":n <note text> - إنشاء ملاحظة",
    "categoryname.2": "إدارة",
    "commanditem.3": ":c <task title> - إكمال مهمة",
    "commanditem.4": ":d <task title> - حذف مهمة",
    "commanditem.5": ":x - مسح جميع المهام المكتملة وحذفها",
    "commanditem.6": ":p <task title>, <priority> - تحديد أولوية مهمة",
    "commanditem.7": ":et <task title> - تعديل مهمة",
    "commanditem.8": ":en <note text> - تعديل ملاحظة",
    "categoryname.3": "التركيز",
    "commanditem.9": ":f <duration>, <task title> - بدء مؤقت التركيز",
    "commanditem.10": ":pt - إيقاف المؤقت الحالي مؤقتًا",
    "commanditem.11": ":rst - استئناف المؤقت الحالي",
    "commanditem.12": ":rt - إعادة تشغيل المؤقت الحالي",
    "categoryname.4": "أخرى",
    "commanditem.13": ":h - عرض قائمة المساعدة هذه",
  },
  pt: {
    title: "Dewen - Gestão local de tarefas e projetos",
    enablenotimessage:
      "Ative as notificações no computador para ter a melhor experiência com tarefas! (opcional)",
    enablenotificationsbtn: "Ativar notificações",
    closenotipopup: "✕",
    nosearchresults: "Nenhum resultado de pesquisa",
    customizebtn: "Personalizar",
    dashboardbtn: "Painel",
    automationsbtn: "Automações",
    settingsbtn: "Configurações",
    closesidebarbtn: "✕ Fechar",
    customizeheadertitle: "Personalizar",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "Predefinições",
    defaultpresetbtn: "Padrão",
    oceanpresetbtn: "Oceano",
    forestpresetbtn: "Floresta",
    sunsetpresetbtn: "Pôr do sol",
    rosepresetbtn: "Rosa",
    midnightpresetbtn: "Meia-noite",
    terminalpresetbtn: "Terminal",
    slatepresetbtn: "Ardósia",
    customizebgheadertitle: "Plano de fundo",
    custombgcolorlabel: "Cor personalizada do plano de fundo:",
    customizeaccentheadertitle: "Destaque",
    customaccentcolorlabel: "Cor personalizada de destaque:",
    expandminianalyticstooltiptext: "Expandir mini análise",
    whattofocusonheader: "NO QUE SE CONCENTRAR",
    riskreportheader: "RELATÓRIO DE RISCOS",
    upcomingheader: "PRÓXIMAS TAREFAS",
    staletasksheader: "TAREFAS ATRASADAS",
    taskcount: "0 tarefas concluídas",
    todolistname: "Tarefas",
    option: "Data de criação",
    "option.2": "Prioridade",
    "option.3": "Data de vencimento",
    addbtn: "Adicionar",
    notasksyet: "Ainda não há tarefas",
    tinytaskstip: "Adicione uma tarefa para começar.",
    nopriorityoption: "Nenhuma",
    lowpriorityoption: "Baixa",
    mediumpriorityoption: "Média",
    highpriorityoption: "Alta",
    todostatus: "A fazer",
    inprogressstatus: "Em andamento",
    blockedstatus: "Bloqueada",
    donestatus: "Concluída",
    norecurrenceoption: "Nenhuma",
    dailyrecurrenceoption: "Diária",
    weeklyrecurrenceoption: "Semanal",
    monthlyrecurrenceoption: "Mensal",
    yearlyrecurrenceoption: "Anual",
    blockedbylabel: "Bloqueada por:",
    "option.4": "Selecione uma tarefa",
    canceltaskcreationbtn: "Cancelar",
    addtaskbtn: "Adicionar tarefa",
    tododropzone: "A fazer",
    inprogressdropzone: "Em andamento",
    alldonedropzone: "Concluídas",
    "option.5": "Temporizador de foco",
    "option.6": "Antiprocrastinação",
    "option.7": "Temporizador de pausa",
    "option.8": "Escolha uma tarefa para se concentrar...",
    currentfocusedtask: "tarefa",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "Notas rápidas",
    addbtn2: "Adicionar",
    nonotesyet: "Ainda não há notas",
    tinynotestip: "Adicione uma nota para começar.",
    cancelnotecreationbtn: "Cancelar",
    addnotebtn: "Adicionar nota",
    activityname: "Atividade",
    automationsname: "Automações",
    automationslisttitle: "Suas automações",
    addautomationbtn: "Adicionar automação",
    settingsheader: "Configurações",
    settingsnavitem: "Pessoal",
    "settingsnavitem.2": "Agentes",
    "settingsnavitem.3": "Segurança",
    "settingsnavitem.4": "Acessibilidade",
    "settingsnavitem.5": "Sobre",
    avatarlabel: "Avatar:",
    changeavatarbtn: "Alterar avatar",
    avatarpresetsbtn: "Explorar predefinições",
    avataraccenttogglelabel: "Ativar destaque",
    fullnamelabel: "Nome completo:",
    preferrednamelabel: "Nome preferido:",
    aitogglelabel: "Ativar IA",
    apikeylabel: "Chave de API de IA:",
    "apikeylabel.2": "Chave de API Tavily (para o agente pesquisador):",
    securitytogglelabel: "Ativar segurança",
    passwordlabel: "Senha mestra:",
    "passwordlabel.2": "Confirmar senha mestra:",
    passwordhintlabel: "Dica da senha mestra:",
    languagelabel: "Idioma:",
    "option.9": "Inglês",
    "option.10": "Espanhol",
    "option.11": "Francês",
    "option.12": "Alemão",
    "option.13": "Chinês",
    "option.14": "Japonês",
    "option.15": "Coreano",
    "option.16": "Russo",
    "option.17": "Árabe",
    "option.18": "Português",
    "option.19": "Hindi",
    versioninfo: "Versão: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "Desenvolvido por",
    "a.3": "Relatar um erro",
    "a.4": "Sugerir um recurso",
    aboutfooter: "© 2026 Jaxon Penka. Todos os direitos reservados.",
    avatarpresetsname: "Predefinições de avatar",
    closeavatarpresets: "✕",
    avatarpresetname: "Padrão",
    "avatarpresetname.2": "O desenvolvedor",
    "avatarpresetname.3": "O artista",
    "avatarpresetname.4": "O empreendedor",
    "avatarpresetname.5": "O estudante",
    "avatarpresetname.6": "O escritor",
    "avatarpresetname.7": "O cientista",
    "avatarpresetname.8": "O jogador",
    "avatarpresetname.9": "O explorador",
    "avatarpresetname.10": "O músico",
    agentdivname: "Agentes Dewen",
    closeagentbtn: "✕",
    agentname: "Agente planejador",
    agenttagline: "Ajuda você a planejar e organizar suas tarefas",
    "agentname.2": "Agente pesquisador",
    "agenttagline.2": "Ajuda com pesquisas e coleta de informações",
    "agentname.3": "Agente priorizador",
    "agenttagline.3": "Determina o que precisa de mais atenção",
    "agentname.4": "Agente organizador",
    "agenttagline.4": "Ajuda você a organizar tarefas e notas com eficiência",
    agentinstructionstitle: "Instruções do agente",
    runagentbtntext: "Executar agente",
    commandshelplisttitle: "Ajuda de comandos",
    closecommandshelplist: "✕",
    categoryname: "Criar",
    commanditem: ":a <task description> - Criar uma tarefa",
    "commanditem.2": ":n <note text> - Criar uma nota",
    "categoryname.2": "Gerenciar",
    "commanditem.3": ":c <task title> - Concluir uma tarefa",
    "commanditem.4": ":d <task title> - Excluir uma tarefa",
    "commanditem.5": ":x - Limpar e excluir todas as tarefas concluídas",
    "commanditem.6":
      ":p <task title>, <priority> - Definir a prioridade de uma tarefa",
    "commanditem.7": ":et <task title> - Editar uma tarefa",
    "commanditem.8": ":en <note text> - Editar uma nota",
    "categoryname.3": "Foco",
    "commanditem.9":
      ":f <duration>, <task title> - Iniciar um temporizador de foco",
    "commanditem.10": ":pt - Pausar o temporizador atual",
    "commanditem.11": ":rst - Retomar o temporizador atual",
    "commanditem.12": ":rt - Reiniciar o temporizador atual",
    "categoryname.4": "Outros",
    "commanditem.13": ":h - Mostrar este menu de ajuda",
  },
  hi: {
    title: "Dewen - स्थानीय रूप से कार्य और परियोजना प्रबंधन",
    enablenotimessage:
      "बेहतर कार्य अनुभव के लिए डेस्कटॉप सूचनाएँ चालू करें! (वैकल्पिक)",
    enablenotificationsbtn: "सूचनाएँ चालू करें",
    closenotipopup: "✕",
    nosearchresults: "कोई खोज परिणाम नहीं",
    customizebtn: "अनुकूलित करें",
    dashboardbtn: "डैशबोर्ड",
    automationsbtn: "स्वचालन",
    settingsbtn: "सेटिंग",
    closesidebarbtn: "✕ बंद करें",
    customizeheadertitle: "अनुकूलित करें",
    closecustomizebtn: "✕",
    customizepresetsheadertitle: "प्रीसेट",
    defaultpresetbtn: "डिफ़ॉल्ट",
    oceanpresetbtn: "महासागर",
    forestpresetbtn: "वन",
    sunsetpresetbtn: "सूर्यास्त",
    rosepresetbtn: "गुलाब",
    midnightpresetbtn: "मध्यरात्रि",
    terminalpresetbtn: "टर्मिनल",
    slatepresetbtn: "स्लेट",
    customizebgheadertitle: "पृष्ठभूमि",
    custombgcolorlabel: "कस्टम पृष्ठभूमि रंग:",
    customizeaccentheadertitle: "एक्सेंट",
    customaccentcolorlabel: "कस्टम एक्सेंट रंग:",
    expandminianalyticstooltiptext: "मिनी विश्लेषण फैलाएँ",
    whattofocusonheader: "किस पर ध्यान दें",
    riskreportheader: "जोखिम रिपोर्ट",
    upcomingheader: "आगामी",
    staletasksheader: "पुराने कार्य",
    taskcount: "0 कार्य पूरे हुए",
    todolistname: "कार्य",
    option: "बनाने की तारीख",
    "option.2": "प्राथमिकता",
    "option.3": "अंतिम तिथि",
    addbtn: "जोड़ें",
    notasksyet: "अभी कोई कार्य नहीं",
    tinytaskstip: "शुरू करने के लिए कोई कार्य जोड़ें।",
    nopriorityoption: "कोई नहीं",
    lowpriorityoption: "कम",
    mediumpriorityoption: "मध्यम",
    highpriorityoption: "उच्च",
    todostatus: "करना है",
    inprogressstatus: "जारी है",
    blockedstatus: "अवरुद्ध",
    donestatus: "पूरा हुआ",
    norecurrenceoption: "कोई नहीं",
    dailyrecurrenceoption: "रोज़ाना",
    weeklyrecurrenceoption: "साप्ताहिक",
    monthlyrecurrenceoption: "मासिक",
    yearlyrecurrenceoption: "वार्षिक",
    blockedbylabel: "इसके कारण रुका:",
    "option.4": "कार्य चुनें",
    canceltaskcreationbtn: "रद्द करें",
    addtaskbtn: "कार्य जोड़ें",
    tododropzone: "करना है",
    inprogressdropzone: "जारी है",
    alldonedropzone: "पूरा हुआ",
    "option.5": "ध्यान केंद्रित करने का टाइमर",
    "option.6": "टालमटोल रोकें",
    "option.7": "विश्राम टाइमर",
    "option.8": "ध्यान केंद्रित करने के लिए कोई कार्य चुनें...",
    currentfocusedtask: "कार्य",
    "px-4": "15m",
    "px-4.2": "25m",
    "px-4.3": "45m",
    "px-4.4": "60m",
    notesname: "त्वरित नोट्स",
    addbtn2: "जोड़ें",
    nonotesyet: "अभी कोई नोट नहीं",
    tinynotestip: "शुरू करने के लिए कोई नोट जोड़ें।",
    cancelnotecreationbtn: "रद्द करें",
    addnotebtn: "नोट जोड़ें",
    activityname: "गतिविधि",
    automationsname: "स्वचालन",
    automationslisttitle: "आपके स्वचालन",
    addautomationbtn: "स्वचालन जोड़ें",
    settingsheader: "सेटिंग",
    settingsnavitem: "व्यक्तिगत",
    "settingsnavitem.2": "एजेंट",
    "settingsnavitem.3": "सुरक्षा",
    "settingsnavitem.4": "सुलभता",
    "settingsnavitem.5": "परिचय",
    avatarlabel: "अवतार:",
    changeavatarbtn: "अवतार बदलें",
    avatarpresetsbtn: "प्रीसेट देखें",
    avataraccenttogglelabel: "एक्सेंट चालू करें",
    fullnamelabel: "पूरा नाम:",
    preferrednamelabel: "पसंदीदा नाम:",
    aitogglelabel: "AI चालू करें",
    apikeylabel: "AI API कुंजी:",
    "apikeylabel.2": "Tavily API कुंजी (शोध एजेंट के लिए):",
    securitytogglelabel: "सुरक्षा चालू करें",
    passwordlabel: "मुख्य पासवर्ड:",
    "passwordlabel.2": "मुख्य पासवर्ड की पुष्टि करें:",
    passwordhintlabel: "मुख्य पासवर्ड का संकेत:",
    languagelabel: "भाषा:",
    "option.9": "अंग्रेज़ी",
    "option.10": "स्पेनिश",
    "option.11": "फ़्रेंच",
    "option.12": "जर्मन",
    "option.13": "चीनी",
    "option.14": "जापानी",
    "option.15": "कोरियाई",
    "option.16": "रूसी",
    "option.17": "अरबी",
    "option.18": "पुर्तगाली",
    "option.19": "हिंदी",
    versioninfo: "संस्करण: v1.0.0",
    a: "Jaxon Penka",
    developerinfo: "निर्माता",
    "a.3": "बग की रिपोर्ट करें",
    "a.4": "नई सुविधा का सुझाव दें",
    aboutfooter: "© 2026 Jaxon Penka. सर्वाधिकार सुरक्षित।",
    avatarpresetsname: "अवतार प्रीसेट",
    closeavatarpresets: "✕",
    avatarpresetname: "डिफ़ॉल्ट",
    "avatarpresetname.2": "डेवलपर",
    "avatarpresetname.3": "कलाकार",
    "avatarpresetname.4": "उद्यमी",
    "avatarpresetname.5": "विद्यार्थी",
    "avatarpresetname.6": "लेखक",
    "avatarpresetname.7": "वैज्ञानिक",
    "avatarpresetname.8": "गेमर",
    "avatarpresetname.9": "अन्वेषक",
    "avatarpresetname.10": "संगीतकार",
    agentdivname: "Dewen एजेंट",
    closeagentbtn: "✕",
    agentname: "योजना एजेंट",
    agenttagline:
      "आपके कार्यों की योजना बनाने और उन्हें व्यवस्थित करने में मदद करता है",
    "agentname.2": "शोध एजेंट",
    "agenttagline.2": "शोध और जानकारी जुटाने में सहायता करता है",
    "agentname.3": "प्राथमिकता एजेंट",
    "agenttagline.3": "तय करता है कि किस पर सबसे अधिक ध्यान देना चाहिए",
    "agentname.4": "व्यवस्था एजेंट",
    "agenttagline.4":
      "कार्यों और नोट्स को प्रभावी ढंग से व्यवस्थित करने में मदद करता है",
    agentinstructionstitle: "एजेंट निर्देश",
    runagentbtntext: "एजेंट चलाएँ",
    commandshelplisttitle: "कमांड सहायता",
    closecommandshelplist: "✕",
    categoryname: "बनाएँ",
    commanditem: ":a <task description> - कार्य बनाएँ",
    "commanditem.2": ":n <note text> - नोट बनाएँ",
    "categoryname.2": "प्रबंधित करें",
    "commanditem.3": ":c <task title> - कार्य पूरा करें",
    "commanditem.4": ":d <task title> - कार्य हटाएँ",
    "commanditem.5": ":x - पूरे हुए सभी कार्य साफ़ करके हटाएँ",
    "commanditem.6":
      ":p <task title>, <priority> - कार्य की प्राथमिकता तय करें",
    "commanditem.7": ":et <task title> - कार्य संपादित करें",
    "commanditem.8": ":en <note text> - नोट संपादित करें",
    "categoryname.3": "ध्यान",
    "commanditem.9": ":f <duration>, <task title> - ध्यान टाइमर शुरू करें",
    "commanditem.10": ":pt - मौजूदा टाइमर रोकें",
    "commanditem.11": ":rst - मौजूदा टाइमर फिर शुरू करें",
    "commanditem.12": ":rt - मौजूदा टाइमर रीस्टार्ट करें",
    "categoryname.4": "अन्य",
    "commanditem.13": ":h - यह सहायता मेनू दिखाएँ",
  },
};

export function updateAppLanguage(language: SupportedLanguage) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && dewenTranslations[language][key]) {
      if (element instanceof HTMLOptionElement) {
        element.text = dewenTranslations[language][key];
      } else {
        element.textContent = dewenTranslations[language][key];
      }
    }
  });

  document.documentElement.lang = language;
  localStorage.setItem("appLanguage", language);
  setupDate(language);
  setupGreeting(language);
}

function getElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Element not found: ${selector}`);
  return element;
}

function getAllElements<T extends HTMLElement>(
  selector: string,
): NodeListOf<T> {
  return document.querySelectorAll<T>(selector);
}

const overlay = getElement<HTMLDivElement>(".overlay");
const askForNotifications = getElement<HTMLDivElement>(".askForNotifications");
const enableNotificationsBtn = getElement<HTMLButtonElement>(
  ".enableNotificationsBtn",
);
const closeNotiPopup = getElement<HTMLButtonElement>(".closeNotiPopup");
const sidebar = getElement<HTMLDivElement>(".sidebar");
const sidebarBtns = getAllElements<HTMLButtonElement>(".sidebar button");
const hamburgerBtn = getElement<HTMLButtonElement>(".hamburgerBtn");
const focusOnList = getElement<HTMLUListElement>(".focusOnList");
const upcomingList = getElement<HTMLUListElement>(".upcomingList");
const staleTasksList = getElement<HTMLUListElement>(".staleTasksList");
const header = getElement<HTMLHeadElement>(".header");
const searchDiv = getElement<HTMLDivElement>(".searchDiv");
const searchBar = getElement<HTMLInputElement>(".searchBar");
const searchResultsMenu = getElement<HTMLDivElement>(".searchResultsMenu");
const dashboardBtn = getElement<HTMLButtonElement>(".dashboardBtn");
// const calendarBtn = getElement<HTMLButtonElement>(".calendarBtn");
const settingsBtn = getElement<HTMLButtonElement>(".settingsBtn");
const closeSidebarBtn = getElement<HTMLButtonElement>(".closeSidebarBtn");
const dashboardContent = getElement<HTMLDivElement>(".dashboardContent");
const dashboardHeader = getElement<HTMLDivElement>(".dashboardHeader");
const agentBtn = getElement<HTMLButtonElement>(".agentBtn");
const agentDiv = getElement<HTMLDivElement>(".agentDiv");
const agentItems = getAllElements<HTMLDivElement>(".agentItem");
const selectedAgentDiv = getElement<HTMLDivElement>(".selectedAgentDiv");
const defaultAgent = document.querySelector<HTMLDivElement>(
  ".agentItem[data-agent='plannerAgent']",
);
const agentInstructionsInput = getElement<HTMLTextAreaElement>(
  ".agentInstructionsTextarea",
);
const runAgentBtn = getElement<HTMLButtonElement>(".runAgentBtn");
const closeAgentBtn = getElement<HTMLButtonElement>(".closeAgentBtn");
const aiToggle =
  (document.getElementById("aiToggle") as HTMLInputElement | null) ||
  (() => {
    throw new Error("AI Toggle not found");
  })();
const apiKeyInput = getElement<HTMLInputElement>(".apiKeyInput");
const tavilyApiKeyInput = getElement<HTMLInputElement>(".tavilyApiKeyInput");
const avatarAccentToggle =
  (document.getElementById("avatarAccentToggle") as HTMLInputElement | null) ||
  (() => {
    throw new Error("Avatar Accent Toggle not found");
  })();
/** const scheduleSuggestionOption = getElement<HTMLButtonElement>(
  ".scheduleSuggestionOption",
); */
const customizeBtn = getElement<HTMLButtonElement>(".customizeBtn");
const customizeDiv = getElement<HTMLDivElement>(".customizeDiv");
const customizePresetsOptions = getAllElements<HTMLButtonElement>(
  ".customizePresetsOptions button",
);
const customizeBgOptions = getAllElements<HTMLButtonElement>(
  ".customizeBgOptions button",
);
const customizeAccentOptions = getAllElements<HTMLButtonElement>(
  ".customizeAccentOptions button",
);
const customBgColorInput = getElement<HTMLInputElement>(".customBgColorInput");
const customAccentColorInput = getElement<HTMLInputElement>(
  ".customAccentColorInput",
);
const currentDate = getElement<HTMLDivElement>(".currentDate");
const avatarIcon = getElement<HTMLImageElement>(".avatarIcon");
const dynamicGreeting = getElement<HTMLHeadingElement>(".greeting");
const miniAnalyticsDiv = getElement<HTMLDivElement>(".miniAnalyticsDiv");
const expandMiniAnalyticsBtn = getElement<HTMLButtonElement>(
  ".expandMiniAnalyticsBtn",
);
const expandMiniAnalyticsIcon = getElement<HTMLImageElement>(
  ".expandMiniAnalyticsIcon",
);
/* const miniAnalytics = getElement<HTMLDivElement>(".miniAnalytics");
const momentumItems = getElement<HTMLUListElement>(".momentumItems");
const momentumDivFooter = getElement<HTMLDivElement>(".momentumDivFooter"); */
const workAreaSplit = getElement<HTMLDivElement>(".workAreaSplit");
const section1 = getElement<HTMLDivElement>(".section1");
const section2 = getElement<HTMLDivElement>(".section2");
const toDoList = getElement<HTMLUListElement>(".toDoList");
const toDoListHeader = getElement<HTMLDivElement>(".toDoListHeader");
const taskSortSelector = getElement<HTMLSelectElement>(".taskSortSelector");
// const taskViewSelector = getElement<HTMLSelectElement>(".taskViewSelector");
const addBtn = getElement<HTMLButtonElement>(".addBtn");
const taskCreationDiv = getElement<HTMLDivElement>(".taskCreationDiv");
/** const actualTaskCreation = getElement<HTMLDivElement>(".actualTaskCreation"); */
const taskInput = getElement<HTMLInputElement>(".taskInput");
/** const taskAttrCreation = getElement<HTMLDivElement>(".taskAttrCreation"); */
const taskPrioritySelector = getElement<HTMLSelectElement>(
  ".taskPrioritySelector",
);
const taskDateInput = getElement<HTMLInputElement>(".taskDateInput");
const taskTimeInput = getElement<HTMLInputElement>(".taskTimeInput");
const taskStatusSelector = getElement<HTMLSelectElement>(".taskStatusSelector");
const taskRecurrenceSelector = getElement<HTMLSelectElement>(
  ".taskRecurrenceSelector",
);
const blockedByDiv = getElement<HTMLDivElement>(".blockedByDiv");
const blockedByInput = getElement<HTMLInputElement>(".blockedByInput");
/** const blockedByList = getElement<HTMLUListElement>(".blockedByList");
const addAndCancelButtons = getElement<HTMLDivElement>(".addAndCancelButtons");  */
const cancelTaskCreationBtn = getElement<HTMLButtonElement>(
  ".cancelTaskCreationBtn",
);
const addTaskBtn = getElement<HTMLButtonElement>(".addTaskBtn");
const taskList = getElement<HTMLUListElement>(".taskList");
const noTasksYetAlert = getElement<HTMLDivElement>(".noTasksYetAlert");
const dropZones = getElement<HTMLDivElement>(".dropZones");
const toDoDropZone = getElement<HTMLDivElement>(".toDoDropZone");
const inProgressDropZone = getElement<HTMLDivElement>(".inProgressDropZone");
const allDoneDropZone = getElement<HTMLDivElement>(".allDoneDropZone");
/* const projectsBtn = getElement<HTMLButtonElement>(".projectsBtn");
const projectsDiv = getElement<HTMLDivElement>(".projectsDiv");
const closeProjectsBtn = getElement<HTMLButtonElement>(".closeProjectsBtn");
const projectList = getElement<HTMLUListElement>(".projectList");
const addProjectBtn = getElement<HTMLButtonElement>(".addProjectBtn"); */
const focusTimer = getElement<HTMLDivElement>(".focusTimer");
const timerOptionsDropdown = getElement<HTMLSelectElement>(
  ".timerOptionsDropdown",
);
const taskSelectionDropdown = getElement<HTMLSelectElement>(
  ".taskSelectionDropdown",
);
const currentFocusedTask = getElement<HTMLDivElement>(".currentFocusedTask");
/** const timerMinutesDiv = getElement<HTMLDivElement>(".timerMinutesDiv"); */
const timerProgressRing = getElement<HTMLDivElement>(".timerProgressRing");
const timerMinutes = getElement<HTMLDivElement>(".timerMinutes");
const timerButtons = getElement<HTMLDivElement>(".timerButtons");
const lengthButtons = getAllElements<HTMLButtonElement>(
  ".timerLengthOptions button",
);
const startTimerBtn = getElement<HTMLButtonElement>(".startTimerBtn");
const pauseTimerBtn = getElement<HTMLButtonElement>(".pauseTimerBtn");
const restartTimerBtn = getElement<HTMLButtonElement>(".restartTimerBtn");
const themeBtn = getElement<HTMLButtonElement>(".themeBtn");
/** const notes = getElement<HTMLDivElement>(".notes"); */
const addBtn2 = getElement<HTMLButtonElement>(".addBtn2");
const notesList = getElement<HTMLUListElement>(".notesList");
/** const notesHeader = getElement<HTMLHeadingElement>(".notesHeader"); */
const noNotesYetAlert = getElement<HTMLDivElement>(".noNotesYetAlert");
const noteCreationDiv = getElement<HTMLDivElement>(".noteCreationDiv");
const noteInput = getElement<HTMLInputElement>(".noteInput");
const noteColorOptions = getAllElements<HTMLButtonElement>(
  ".noteColorOptions button",
);
const cancelNoteCreationBtn = getElement<HTMLButtonElement>(
  ".cancelNoteCreationBtn",
);
const addNoteBtn = getElement<HTMLButtonElement>(".addNoteBtn");
const activityList = getElement<HTMLUListElement>(".activityList");
/** const calendarSection = getElement<HTMLDivElement>(".calendar");
const settingsContent = getElement<HTMLDivElement>(".settingsContent");
const settingsNavigator = getElement<HTMLDivElement>(".settingsNavigator"); */
const settingsNavOptions =
  getAllElements<HTMLButtonElement>(".settingsNavItem");
const avatarPreviewIcon = getElement<HTMLImageElement>(".avatarPreviewIcon");
const avatarInput = getElement<HTMLInputElement>(".avatarInput");
const changeAvatarBtn = getElement<HTMLButtonElement>(".changeAvatarBtn");
const avatarPresetsBtn = getElement<HTMLButtonElement>(".avatarPresetsBtn");
const avatarPresetsDiv = getElement<HTMLDivElement>(".avatarPresetsDiv");
const closeAvatarPresets = getElement<HTMLButtonElement>(".closeAvatarPresets");
const avatarPresetItems = getAllElements<HTMLDivElement>(".avatarPresetItem");
const fullNameInput = getElement<HTMLInputElement>(".fullNameInput");
const preferredNameInput = getElement<HTMLInputElement>(".preferredNameInput");
const languageDropdown = getElement<HTMLSelectElement>(".languageDropdown");
const commandsHelpListDiv = getElement<HTMLDivElement>(".commandsHelpListDiv");
const closeCommandsHelpListBtn = getElement<HTMLButtonElement>(
  ".closeCommandsHelpList",
);
const projectsBtn = getElement<HTMLButtonElement>(".projectsBtn");
const automationsBtn = getElement<HTMLButtonElement>(".automationsBtn");
const ai_API_BASE = "http://127.0.0.1:5000";

function safeParse(key: string): any[] {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  } catch (e) {
    console.warn(`${key} corrupted, resetting...`);
    localStorage.removeItem(key);
    return [];
  }
}

function updateState(newState: string) {
  undoStack.push(currentState);
  currentState = newState;
  redoStack = [];
  localStorage.setItem("undoStack", JSON.stringify(undoStack));
  localStorage.setItem("redoStack", JSON.stringify(redoStack));
  localStorage.setItem("currentState", currentState);
}

function undo() {
  if (undoStack.length > 0) {
    redoStack.push(currentState);    
    currentState = undoStack.pop(); 
  }
}

function redo() {
  if (redoStack.length > 0) {
    undoStack.push(currentState);    
    currentState = redoStack.pop(); 
  }
}

let undoStack: any[] = [];
let redoStack: any[] = [];
let currentState = "Initial value";
let tasks: any[] = [];
let allNotes: any[] = [];
let isDraggable = false;
let editingNoteColor: string | null = null;
let activityLog: any[] = [];
let calendar: Calendar | null = null;
let editingTaskId: string | null = null;
let isEditing: boolean = false;
let isAddingSubtask = false;
let currentParentTaskId: string | null = null;
let currentTaskSort = "dueDate";
let focusMode = false;
let timerMode = "focus";
let activeFocusTask: string | undefined;
let selectedAgent = "plannerAgent";

type Priority = "High" | "Medium" | "Low" | "None";

type Status = "To Do" | "In Progress" | "Blocked" | "Done";

type Recurrence = "none" | "daily" | "weekly" | "monthly" | "yearly";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  dueDate: string | null;
  dueTime: string | null;
  status: Status;
  tags: string[];
  createdAt: number;
  recurrence: Recurrence;
  lastCompleted: string | null;
  // subtasks: Task[];
  blockedBy: string | null;
  projectId: string | null;
}

interface Note {
  id: string;
  text: string;
  color: string;
  createdAt: number;
  projectId: string | null;
}

interface Project {
  id: string;
  name: string;
  createdAt: number;
}

interface Activity {
  id: number;
  message: string;
  type: string;
  timestamp: number;
}

function showOverlay() {
  if (!overlay) return;
  overlay.style.display = "block";
  overlay.onclick = null;
}

function hideOverlay() {
  if (!overlay) return;
  overlay.style.display = "none";
  overlay.onclick = null;
}

async function createTaskElement(task: Task): Promise<HTMLLIElement | null> {
  if (noTasksYetAlert) noTasksYetAlert.style.display = "none";

  const taskId = task.id;

  const taskCheckbox = document.createElement("input") as HTMLInputElement;
  taskCheckbox.type = "checkbox";
  taskCheckbox.className = "taskCheckbox";
  taskCheckbox.checked = task.completed;

  const taskText = task.title;

  let taskPriority = task.priority;
  if (taskPriority === "None") taskPriority = "None";

  const taskDate = task.dueDate;

  let formattedDate = "";

  if (taskDate) {
    const dateObject = new Date(taskDate + "T00:00:00");
    formattedDate = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  const taskTime = task.dueTime;

  const taskStatus = task.status;

  const taskRecurrence = task.recurrence;

  const taskOptionsBtnDiv = document.createElement("div");
  taskOptionsBtnDiv.className = "taskOptionsBtnDiv";

  const taskOptionsBtn = document.createElement("button");
  taskOptionsBtn.className = "taskOptionsBtn";
  taskOptionsBtn.innerHTML = `<img class="taskOptionsBtnIcon" src="/images/Task-Options-Icon.png" alt="Task Options Icon">`;

  const taskOptions = document.createElement("div");
  taskOptions.className = "taskOptions";

  const editOption = document.createElement("div");
  editOption.className = "taskOption";
  editOption.textContent = "Edit";

  const addSubtaskOption = document.createElement("div");
  addSubtaskOption.className = "taskOption";
  addSubtaskOption.textContent = "Add Subtask";

  const deleteOption = document.createElement("div");
  deleteOption.className = "taskOption";
  deleteOption.textContent = "Delete";
  deleteOption.style.color = "red";

  taskOptions.append(editOption, addSubtaskOption, deleteOption);

  const listTask = document.createElement("li");
  listTask.className = "listTask";
  if (task.completed) listTask.classList.add("completed");
  listTask.dataset.dateNotified = "false";
  listTask.dataset.timeNotified = "false";
  listTask.dataset.priority = taskPriority;
  listTask.dataset.dueDate = taskDate ?? undefined;
  listTask.dataset.dueTime = taskTime ?? undefined;
  listTask.dataset.status = taskStatus ?? undefined;
  listTask.dataset.recurrence = taskRecurrence ?? undefined;
  listTask.id = taskId ? `task-${taskId}` : "";

  const mainTask = document.createElement("label") as HTMLLabelElement;
  mainTask.className = "mainTask";
  mainTask.draggable = isDraggable;
  mainTask.dataset.id = taskId ? String(taskId) : "";
  mainTask.addEventListener("mouseenter", () => {
    const taskOptionsBtn = mainTask.querySelector(".taskOptionsBtn");
    if (!taskOptionsBtn) return;

    taskOptionsBtn.classList.add("show");
  });

  mainTask.addEventListener("mouseleave", () => {
    const taskOptionsBtn = mainTask.querySelector(".taskOptionsBtn");
    if (!taskOptionsBtn) return;

    taskOptionsBtn.classList.remove("show");
  });

  mainTask.addEventListener("dragstart", (e) => {
    currentDraggedTask = mainTask;
    mainTask.classList.add("dragging");

    e.dataTransfer?.setData("text/plain", listTask.id);
  });
  mainTask.addEventListener("dragend", () => {
    currentDraggedTask = null;
    mainTask.classList.remove("dragging");
  });

  const taskContents = document.createElement("div");
  taskContents.className = "taskContents";

  const taskTextAndCheckbox = document.createElement("div");
  taskTextAndCheckbox.className = "taskTextAndCheckbox";

  const taskTextSpan = document.createElement("span");
  taskTextSpan.className = "taskTextSpan";
  taskTextSpan.textContent = taskText;
  taskTextSpan.dataset.taskText = taskText;
  taskTextSpan.dataset.originalTaskText = taskTextSpan.textContent;

  const taskAttributes = document.createElement("div");
  taskAttributes.className = "taskAttributes";

  const taskPrioritySpan = document.createElement("span");
  taskPrioritySpan.className = "taskPrioritySpan";
  taskPrioritySpan.textContent = taskPriority;

  const taskDateAndTime = document.createElement("div");
  taskDateAndTime.className = "taskDateAndTime";

  const taskDateAndTimeSpan = document.createElement("span");
  taskDateAndTimeSpan.className = "taskDateAndTimeSpan";

  const taskDateImg = document.createElement("img");
  taskDateImg.className = "taskDateImg";
  taskDateImg.src = "/images/Date-Icon.png";
  taskDateImg.alt = "Date Icon";

  taskDateAndTimeSpan.textContent =
    (formattedDate ? "Due " + formattedDate : "") +
    (taskTime ? " at " + taskTime : "");

  const taskStatusSpan = document.createElement("span");
  taskStatusSpan.className = "taskStatusSpan";
  taskStatusSpan.textContent = taskStatus;

  const taskRecurrenceSpan = document.createElement("span");
  taskRecurrenceSpan.className = "taskRecurrenceSpan";
  let recurrenceText = "";

  if (task.recurrence && task.recurrence !== "none") {
    const recurrenceMap = {
      none: "",
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      yearly: "Yearly",
    };
    recurrenceText = recurrenceMap[task.recurrence] || "";
  }

  if (recurrenceText) {
    const recurrenceImg = document.createElement("img");
    recurrenceImg.className = "taskRecurrenceImg";
    recurrenceImg.src = "/images/Restart-Timer-Icon.png";
    recurrenceImg.alt = "Recurrence Icon";

    taskRecurrenceSpan.appendChild(recurrenceImg);

    const recurrenceTextSpan = document.createElement("span");
    recurrenceTextSpan.className = "taskRecurrenceText";
    recurrenceTextSpan.textContent = recurrenceText;
    taskRecurrenceSpan.appendChild(recurrenceTextSpan);
    taskAttributes.appendChild(taskRecurrenceSpan);
  }

  const urgency = getTaskUrgency(task);
  applyUrgencyStyle(mainTask, urgency);

  /* const subtaskList = document.createElement("ul");
  subtaskList.className = "subtaskList";

  task.subtasks?.forEach((subtask) => {
    subtaskList.appendChild(createSubtaskElement(subtask));
  });
  listTask.appendChild(subtaskList); */

  taskTextAndCheckbox.prepend(taskCheckbox);
  taskCheckbox.addEventListener("change", () => {
    const t = tasks.find((t) => String(t.id) === String(taskId));
    if (!t) return;

    t.completed = taskCheckbox.checked;

    if (t.completed) {
      t.completedAt = Date.now();
    } else {
      t.completedAt = null;
    }

    if (t.completed && t.recurrence !== "none")
      t.lastCompleted = new Date().toISOString();

    listTask.classList.toggle("completed", t.completed);

    saveTasks();
    addActivity(`Completed task: ${task.title}`, "task");
    updateTasksDoneCount();
    renderWhatToFocusOn();
    renderUpcomingTasks();
    renderStaleTasks();
    updateTasksOverdueCount();
    updateTasksDueTodayCount();
    updateBlockedTasksCount();
  });

  taskTextAndCheckbox.appendChild(taskTextSpan);
  taskContents.appendChild(taskTextAndCheckbox);

  taskAttributes.appendChild(taskPrioritySpan);
  taskDateAndTime.appendChild(taskDateImg);
  taskDateAndTime.appendChild(taskDateAndTimeSpan);

  if (taskDate || taskTime) {
  }

  taskAttributes.appendChild(taskStatusSpan);
  taskAttributes.appendChild(taskRecurrenceSpan);
  taskContents.appendChild(taskAttributes);

  mainTask.appendChild(taskContents);

  taskOptionsBtnDiv.appendChild(taskOptionsBtn);

  taskOptionsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    disableScrolling();

    const rect = taskOptionsBtn.getBoundingClientRect();

    taskOptions.style.position = "fixed";
    taskOptions.style.top = `${rect.bottom}px`;
    taskOptions.style.left = `${rect.left}px`;

    taskOptions.classList.toggle("show");
  });

  document.body.appendChild(taskOptions);

  taskOptions.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  mainTask.appendChild(taskOptionsBtnDiv);
  listTask.appendChild(mainTask);
  updateTasksDoneCount();
  updateTasksOverdueCount();
  updateTasksDueTodayCount();
  updateBlockedTasksCount();

  editOption.addEventListener("click", () => {
    openEditTaskUI(taskId);
    taskOptions.classList.remove("show");
    enableScrolling();
  });

  addSubtaskOption.addEventListener("click", () => {
    isAddingSubtask = true;
    enableScrolling();
    const parentTask = tasks.find((t) => String(t.id) === String(taskId));
    if (!parentTask) return;

    console.log("Selected task:", parentTask);
    console.log("ID:", parentTask.id);
    currentParentTaskId = parentTask.id;

    if (taskInput) taskInput.blur();

    if (taskInput) taskInput.value = "";
    if (taskPrioritySelector) taskPrioritySelector.value = "None";
    if (taskDateInput) taskDateInput.value = "";
    if (taskTimeInput) taskTimeInput.value = "";
    if (taskStatusSelector) taskStatusSelector.value = "To Do";
    if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";

    if (taskCreationDiv) document.body.appendChild(taskCreationDiv);

    if (!taskCreationDiv) return;
    taskCreationDiv.style.display = "flex";
    taskCreationDiv.style.position = "fixed";
    taskCreationDiv.style.zIndex = "9999";
    taskCreationDiv.style.top = "50%";
    taskCreationDiv.style.left = "50%";
    taskCreationDiv.style.transform = "translate(-50%, -50%)";

    if (addTaskBtn) {
      addTaskBtn.textContent = "Add Subtask";
      addTaskBtn.style.padding = "0px 8px";
    }

    taskOptions.style.display = "none";

    showOverlay();
  });

  deleteOption.addEventListener("click", () => {
    enableScrolling();
    const taskIndex = tasks.findIndex((t) => String(t.id) === String(taskId));
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      refreshTaskDropdown();
    }
    saveTasks();

    updateTasksDoneCount();
    updateTasksOverdueCount();
    updateTasksDueTodayCount();
    updateBlockedTasksCount();
    showNoTasksYet();
    refreshTaskDropdown();
    showNoTasksYet();
    renderCalendarEvents();
    renderWhatToFocusOn();
    renderUpcomingTasks();
    renderStaleTasks();
    addActivity(`Deleted task: ${task.title}`, "delete");
    taskOptions.remove();
    listTask.remove();
    taskOptions.classList.remove("show");
  });
  if (taskList) taskList.appendChild(listTask);

  return listTask;
}

if (cancelTaskCreationBtn) {
  cancelTaskCreationBtn.addEventListener("click", () => {
    if (!taskCreationDiv) return;
    taskCreationDiv.style.display = "none";
    taskCreationDiv.style.position = "relative";
    taskCreationDiv.style.top = "0px";
    taskCreationDiv.style.left = "0px";
    taskCreationDiv.style.transform = "none";
    taskCreationDiv.style.order = "0";
    taskCreationDiv.style.zIndex = "0";

    hideOverlay();
    if (toDoList && taskCreationDiv && toDoListHeader)
      toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);

    if (taskInput) taskInput.value = "";
    if (taskPrioritySelector) taskPrioritySelector.value = "None";
    if (taskDateInput) taskDateInput.value = "";
    if (taskTimeInput) taskTimeInput.value = "";
    if (taskStatusSelector) taskStatusSelector.value = "To Do";
    if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
  });
}

function getEventColor(
  priority: "Low" | "Medium" | "High" | "None",
  isDark: boolean,
): string {
  if (priority === "Low") return "#90ee90";
  if (priority === "Medium") return "#ffcc00";
  if (priority === "High") return "#ff6b6b";
  if (!priority || priority === "None") {
    return isDark ? "#06bdf9" : "#a9d6fb";
  }
  return isDark ? "#06bdf9" : "#a9d6fb";
}

function addTaskToCalendar(
  task: Task,
  overrideDate: string | Date | null = null,
) {
  if (!task.dueDate || !calendar) return;

  const hasTime = !!task.dueTime;

  const baseDate =
    overrideDate instanceof Date
      ? overrideDate
      : new Date(overrideDate ?? task.dueDate ?? "");
  const dateValue = Number.isNaN(baseDate.getTime())
    ? task.dueDate
    : formatDateInputValue(baseDate);

  const startDate = hasTime ? `${dateValue}T${task.dueTime}:00` : dateValue;

  calendar.addEvent({
    id: `${task.id}-${startDate}`,
    title: task.title,
    start: startDate,
    allDay: !hasTime,
    backgroundColor: getEventColor(task.priority, isDark()),
    extendedProps: {
      taskId: task.id,
      priority: task.priority,
      status: task.status,
    },
  });
}

function getTaskOccurrenceStart(task: Task) {
  if (!task.dueDate) return null;

  const baseDate = task.dueTime
    ? `${task.dueDate}T${task.dueTime}:00`
    : `${task.dueDate}T00:00:00`;
  const date = new Date(baseDate);

  return Number.isNaN(date.getTime()) ? null : date;
}

function getCurrentOccurrence(task: Task, referenceDate = new Date()) {
  const taskOccurrence = getTaskOccurrenceStart(task);
  if (!taskOccurrence) return null;
  if (task.recurrence === "none") return taskOccurrence;

  let currentDate = new Date(taskOccurrence);

  while (currentDate <= referenceDate) {
    const next = addRecurrence(currentDate, task.recurrence);
    if (!next) break;
    currentDate = new Date(next);
  }

  return currentDate;
}

function syncRecurringTasks(now = new Date()) {
  let changed = false;

  tasks.forEach((task) => {
    if (!task?.dueDate || task.recurrence === "none" || !task.completed) return;

    const lastCompleted = task.lastCompleted
      ? new Date(task.lastCompleted)
      : getTaskOccurrenceStart(task);

    if (!lastCompleted || Number.isNaN(lastCompleted.getTime())) return;

    const nextOccurrence = getCurrentOccurrence(task, lastCompleted);
    if (nextOccurrence && now >= nextOccurrence) {
      task.completed = false;
      task.completedAt = null;
      changed = true;
    }
  });

  if (changed) {
    saveTasks();
    renderUpcomingTasks();
    renderStaleTasks();
    renderTasks(currentTaskSort);
    renderCalendarEvents();
    updateTasksDoneCount();
  }

  return changed;
}

function preventDefault(e: Event) {
  e.preventDefault();
}

function disableScrolling(): void {
  document.body.style.overflow = "hidden";
  window.addEventListener("wheel", preventDefault, { passive: false });
  window.addEventListener("touchmove", preventDefault, { passive: false });
}

function enableScrolling(): void {
  document.body.style.overflow = "auto";
  window.removeEventListener("wheel", preventDefault);
  window.removeEventListener("touchmove", preventDefault);
}

function getCalendarRange() {
  if (calendar?.view?.activeStart && calendar?.view?.activeEnd) {
    return {
      startDate: new Date(calendar.view.activeStart),
      endDate: new Date(calendar.view.activeEnd.getTime() - 1),
    };
  }

  const startDate = new Date();
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setHours(23, 59, 59, 999);
  return { startDate, endDate };
}

function getSortedTasks(mode: "dateCreated" | "priority" | "dueDate") {
  const copy = [...tasks];

  switch (mode) {
    case "dateCreated":
      return copy.sort(
        (a: Task, b: Task) =>
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime(),
      );

    case "priority": {
      const weight = { High: 3, Medium: 2, Low: 1, None: 0 };
      return copy.sort(
        (a: Task, b: Task) =>
          (weight[b.priority] ?? 0) - (weight[a.priority] ?? 0),
      );
    }

    case "dueDate": {
      return copy.sort((a: Task, b: Task) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
    }

    default:
      return copy;
  }
}

function addRecurrence(
  inputDate: Date | string,
  recurrence: "daily" | "weekly" | "monthly" | "yearly",
) {
  const date = new Date(inputDate);

  switch (recurrence) {
    case "daily":
      date.setDate(date.getDate() + 1);
      break;
    case "weekly":
      date.setDate(date.getDate() + 7);
      break;
    case "monthly":
      date.setMonth(date.getMonth() + 1);
      break;
    case "yearly":
      date.setFullYear(date.getFullYear() + 1);
      break;
    default:
      return null;
  }
  return date;
}

function isDifferentDay(a: Date, b: Date) {
  return (
    a.getFullYear() !== b.getFullYear() ||
    a.getMonth() !== b.getMonth() ||
    a.getDate() !== b.getDate()
  );
}

function isDifferentMonth(a: Date, b: Date) {
  return a.getFullYear() !== b.getFullYear() || a.getMonth() !== b.getMonth();
}

function isDifferentYear(a: Date, b: Date) {
  return a.getFullYear() !== b.getFullYear();
}

function daysSince(a: Date, b: Date) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diff = b.getTime() - a.getTime();
  return Math.floor(diff / msPerDay);
}

function isTaskDue(task: Task, date = new Date()) {
  if (task.recurrence === "none") return true;
  const last = task.lastCompleted ? new Date(task.lastCompleted) : null;
  const now = new Date(date);

  switch (task.recurrence) {
    case "daily":
      return !last || isDifferentDay(last, now);
    case "weekly":
      return !last || daysSince(last, now) >= 7;
    case "monthly":
      return !last || isDifferentMonth(last, now);
    case "yearly":
      return !last || isDifferentYear(last, now);
    default:
      return false;
  }
}

function getOccurrences(task: Task, start: Date, end: Date) {
  if (!task.dueDate) return [];
  if (task.recurrence === "none") {
    const date = new Date(task.dueDate);
    return date >= start && date <= end ? [date] : [];
  }
  const occurrences = [];
  let current: Date | null = new Date(task.dueDate);

  while (current && current <= end) {
    if (current >= start) {
      occurrences.push(new Date(current));
    }
    current = addRecurrence(
      current,
      task.recurrence as "daily" | "weekly" | "monthly" | "yearly",
    );
    if (!current) break;
  }

  return occurrences;
}

function getWeekRange(date = new Date()) {
  const startDate = new Date(date);
  startDate.setHours(0, 0, 0, 0);

  const day = startDate.getDay();
  startDate.setDate(startDate.getDate() - day);

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  endDate.setHours(23, 59, 59, 999);

  return { startDate, endDate };
}

const { startDate: weekStart, endDate: weekEnd } = getWeekRange();

tasks.forEach((task) => {
  const days = getOccurrences(task, weekStart, weekEnd);
  days.forEach((day) => {
    addTaskToCalendar(task, day);
  });
});

function moveRenderedTasksToKanban(listTask: HTMLElement | null = null) {
  const renderedTasks = document.querySelectorAll(".listTask");

  if (!renderedTasks) return;

  renderedTasks.forEach((listTask) => {
    const mainTask = listTask.querySelector<HTMLElement>(".mainTask");
    if (mainTask) {
      mainTask.draggable = isDraggable;
      mainTask.style.cursor = isDraggable ? "grab" : "default";
    }

    if (listTask instanceof HTMLElement && listTask.dataset.status === "done") {
      if (allDoneDropZone) allDoneDropZone.appendChild(listTask);
    } else if (
      listTask instanceof HTMLElement &&
      listTask.dataset.status === "in-progress"
    ) {
      if (inProgressDropZone) inProgressDropZone.appendChild(listTask);
    } else {
      if (toDoDropZone) toDoDropZone.appendChild(listTask);
    }
  });

  if (taskList) taskList.classList.toggle("drag-mode", isDraggable);
  if (dropZones) dropZones.style.display = isDraggable ? "flex" : "none";
  if (noTasksYetAlert) noTasksYetAlert.style.display = "none";
}

function renderTasks(mode = currentTaskSort) {
  if (taskList) taskList.innerHTML = "";
  if (toDoDropZone) toDoDropZone.innerHTML = "";
  if (inProgressDropZone) inProgressDropZone.innerHTML = "";
  if (allDoneDropZone) allDoneDropZone.innerHTML = "";

  if (!document) return;

  const sorted = getSortedTasks(mode as "dateCreated" | "priority" | "dueDate");
  sorted.forEach((task) => {
    createTaskElement(task);
  });

  if (document.documentElement.classList.contains("isKanbanView")) {
    moveRenderedTasksToKanban();
    if (inProgressDropZone && noTasksYetAlert)
      inProgressDropZone.appendChild(noTasksYetAlert);
  }

  showNoTasksYet();
  updateTasksDoneCount();
  renderWhatToFocusOn();
  renderUpcomingTasks();
  renderStaleTasks();
  renderStaleTasks();
}

/* function setTaskView(taskViewOption = "listView", shouldSave = true) {
  const taskViewOptions = ["listView", "KanbanView", "timelineView"];
  const selectedView = taskViewOptions.includes(taskViewOption)
    ? taskViewOption
    : "listView";
  const isKanbanView = selectedView === "KanbanView";

  if (taskViewSelector) taskViewSelector.value = selectedView;
  if (shouldSave) localStorage.setItem("taskViewOption", selectedView);

  if (!document) return;

  document.documentElement.classList.toggle("isKanbanView", isKanbanView);
  if (dropZones) dropZones.style.display = isKanbanView ? "flex" : "none";
  isDraggable = isKanbanView;
  if (taskList) taskList.classList.toggle("drag-mode", isKanbanView);

  currentTaskSort = taskSortSelector?.value || currentTaskSort || "dateCreated";
  renderTasks(currentTaskSort);
} */

if (taskSortSelector) {
  taskSortSelector.addEventListener("change", () => {
    currentTaskSort = taskSortSelector.value;
    renderTasks(currentTaskSort);
  });
}

function parseMarkdown(text: string): string {
  if (!text) return "";

  return text
    // 1. Escape HTML blocks securely
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

    // 2. Headings
    .replace(/^###### (.*$)/gim, "<h6 class=\"note-h6\">$1</h6>")
    .replace(/^##### (.*$)/gim, "<h5 class=\"note-h5\">$1</h5>")
    .replace(/^#### (.*$)/gim, "<h4 class=\"note-h4\">$1</h4>")
    .replace(/^### (.*$)/gim, "<h3 class=\"note-h3\">$1</h3>")
    .replace(/^## (.*$)/gim, "<h2 class=\"note-h2\">$1</h2>")
    .replace(/^# (.*$)/gim, "<h1 class=\"note-h1\">$1</h1>")

    // 3. Horizontal Lines (---)
    .replace(/^---\s*$/gim, "<hr class=\"note-hr\">")

    // 4. Links ([Text](URL))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\" target=\"_blank\" class=\"note-link\">$1</a>")

    // 5. Code, Bold, and Italics
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")

    .replace(/\n/g, "<br>");
}

function createNoteElement(note: Note) {
  if (noNotesYetAlert) noNotesYetAlert.style.display = "none";

  const listNote = document.createElement("li");
  listNote.className = "listNote";
  listNote.id = `note-${note.id}`;

  const mainNote = document.createElement("div");
  mainNote.className = "mainNote";
  if (note.color) mainNote.style.backgroundColor = note.color;
  const mainNoteText = document.createElement("span");
  mainNoteText.className = "mainNoteText";
  mainNoteText.innerHTML = parseMarkdown(note.text);  
  mainNoteText.dataset.originalNoteText = note.text;
  mainNote.appendChild(mainNoteText);

  const noteOptionsDiv = document.createElement("div");
  noteOptionsDiv.className = "noteOptionsDiv";
  mainNote.appendChild(noteOptionsDiv);
  listNote.appendChild(mainNote);
  if (notesList) notesList.appendChild(listNote);

  const editNoteBtn = document.createElement("button");
  editNoteBtn.className = "editNoteBtn";
  editNoteBtn.style.display = "none";
  editNoteBtn.innerHTML = `<img src="/images/Edit-Icon.png" class="editIcon" alt="Edit Icon">`;
  editNoteBtn.style.backgroundColor = "transparent";
  const deleteNoteBtn = document.createElement("button");
  deleteNoteBtn.className = "deleteNoteBtn";
  deleteNoteBtn.style.display = "none";
  deleteNoteBtn.innerHTML = `<img src="/images/Delete-Icon.png" class="deleteIcon" alt="Delete Icon">`;
  deleteNoteBtn.style.backgroundColor = "transparent";

  noteOptionsDiv.append(editNoteBtn, deleteNoteBtn);
}

/* normalizes priority so that it can be used for sorting */
function normalizeTaskPriority(priority: string | null) {
  const normalized = String(priority || "").toLowerCase();
  if (normalized === "high") return "High";
  if (normalized === "medium") return "Medium";
  if (normalized === "low") return "Low";
  return "None";
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return null;

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
  console.log("Formatted date:", formattedDate);
}

function formatTime(timeStr: string | null) {
  if (!timeStr) return null;

  const [hours, minutes] = timeStr.split(":").map(Number);
  if (isNaN(Number(hours)) || isNaN(Number(minutes))) return timeStr;

  const date = new Date();
  date.setHours(Number(hours), Number(minutes));

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function renderWhatToFocusOn(limit = 3) {
  if (!focusOnList) return;

  const priorityWeight = {
    High: 3,
    Medium: 2,
    Low: 1,
    None: 0,
  };

  const getDueTime = (task: Task) => {
    if (!task.dueDate) return Infinity;
    const time = task.dueTime || "23:59";
    return new Date(`${task.dueDate}T${time}`).getDate();
  };

  const sortedFocusTasks = [...tasks]
    .filter((t) => !t.completed)
    .sort((a, b) => {
      const priorityA = priorityWeight[normalizeTaskPriority(a.priority)] ?? 0;
      const priorityB = priorityWeight[normalizeTaskPriority(b.priority)] ?? 0;
      if (priorityB !== priorityA) return priorityB - priorityA;
      return getDueTime(a) - getDueTime(b);
    })
    .slice(0, limit);

  focusOnList.innerHTML = "";
  if (sortedFocusTasks.length === 0) {
    focusOnList.innerHTML = "<li>No urgent tasks to focus on</li>";
    return;
  }

  sortedFocusTasks.forEach((task) => {
    const focusTaskItem = document.createElement("li");

    const priority = normalizeTaskPriority(task.priority);

    const priorityMarker = document.createElement("img");
    priorityMarker.className = "priorityMarker";
    priorityMarker.src = `/images/Versatile Circle.png`;
    priorityMarker.alt = `${task.priority}`;

    if (priority === "High") {
      priorityMarker.style.filter =
        "invert(47%) sepia(35%) saturate(3501%) hue-rotate(325deg) brightness(105%) contrast(105%)";
      focusTaskItem.appendChild(priorityMarker);
    } else if (priority === "Medium") {
      priorityMarker.style.filter =
        "brightness(0) invert(80%) sepia(50%) saturate(4000%) hue-rotate(15deg) brightness(103%) contrast(105%)";
      focusTaskItem.appendChild(priorityMarker);
    } else if (priority === "Low") {
      priorityMarker.style.filter =
        "brightness(0) saturate(100%) invert(86%) sepia(8%) saturate(1478%) hue-rotate(85deg) brightness(97%) contrast(97%)";
      focusTaskItem.appendChild(priorityMarker);
    }

    const formattedDate = formatDate(task.dueDate);
    const formattedTime = formatTime(task.dueTime);

    const dueDate =
      task.dueDate || task.dueTime
        ? `Due ${formattedDate ? formattedDate : "today"}${formattedTime ? ` at  ${formattedTime}` : ""}`
        : "No due date";
    focusOnList.appendChild(focusTaskItem);

    const focusTaskText = document.createTextNode(`${task.title} (${dueDate})`);
    focusTaskItem.appendChild(focusTaskText);
  });
}

function renderUpcomingTasks(limit = 3) {
  if (!upcomingList) return;

  const upcomingTasks = [...tasks]
    .filter((t) => !t.completed && t.dueDate)
    .sort((a, b) => {
      const dateA = new Date(a.dueDate as string);
      const dateB = new Date(b.dueDate as string);
      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, limit);

  upcomingList.innerHTML = "";
  if (upcomingTasks.length === 0) {
    upcomingList.innerHTML = "<li>No upcoming tasks</li>";
    return;
  }

  upcomingTasks.forEach((task) => {
    const upcomingTaskItem = document.createElement("li");
    const formattedDate = formatDate(task.dueDate);
    const formattedTime = formatTime(task.dueTime);
    const dueDate =
      task.dueDate || task.dueTime
        ? `Due ${formattedDate ? formattedDate : "today"}${formattedTime ? ` at  ${formattedTime}` : ""}`
        : "No due date";
    upcomingTaskItem.textContent = `${task.title} (${dueDate})`;
    upcomingList.appendChild(upcomingTaskItem);
  });
}

function renderStaleTasks(limit = 3) {
  if (!staleTasksList) return;

  const staleTasks = [...tasks]
    .filter(
      (t) => !t.completed && t.dueDate && new Date(t.dueDate) < new Date(),
    )
    .sort((a, b) => {
      const dateA = new Date(a.dueDate as string);
      const dateB = new Date(b.dueDate as string);
      return dateA.getTime() - dateB.getTime();
    })
    .slice(0, limit);

  staleTasksList.innerHTML = "";
  if (staleTasks.length === 0) {
    staleTasksList.innerHTML = "<li>No stale tasks</li>";
    return;
  }

  staleTasks.forEach((task) => {
    const staleTaskItem = document.createElement("li");
    const formattedDate = formatDate(task.dueDate);
    const formattedTime = formatTime(task.dueTime);
    const dueDate =
      task.dueDate || task.dueTime
        ? `Due ${formattedDate ? formattedDate : "today"}${formattedTime ? ` at  ${formattedTime}` : ""}`
        : "No due date";
    staleTaskItem.textContent = `${task.title} (${dueDate})`;
    staleTasksList.appendChild(staleTaskItem);
  });
}

/* normalizes status so that it can be used for sorting */
function normalizeTaskStatusLabel(status: string | null) {
  const normalized = normalizeTaskStatus(status);
  if (normalized === "done") return "Done";
  if (normalized === "in-progress") return "In Progress";
  return "To Do";
}

/* normalizes date and time so that it can be used */
function normalizeTaskDateTime(dueDate: string | null, dueTime: string | null) {
  if (!dueDate) {
    return {
      dueDate: null,
      dueTime: dueTime || null,
    };
  }

  const dateText = String(dueDate);
  const dateTimeMatch = dateText.match(
    /^(\d{4}-\d{2}-\d{2})[T\s](\d{2}:\d{2})/,
  );
  if (dateTimeMatch) {
    return {
      dueDate: dateTimeMatch[1],
      dueTime: dueTime || dateTimeMatch[2],
    };
  }

  return {
    dueDate: dateText.slice(0, 10),
    dueTime: dueTime || null,
  };
}

function formatDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getNextWeekdayDate(dayName: string, forceNext = false) {
  const weekdays = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };
  const today = new Date();
  const targetDay =
    weekdays[dayName.toLowerCase() as keyof typeof weekdays] ?? 0;
  let daysAhead = (targetDay - today.getDay() + 7) % 7;
  if (forceNext && daysAhead === 0) daysAhead = 7;

  const due = new Date(today);
  due.setDate(today.getDate() + daysAhead);
  return formatDateInputValue(due);
}

function parseTimeText(match: RegExpExecArray) {
  if (match.groups?.hour24) {
    const hour = Number(match.groups?.hour24);
    const minute = Number(match.groups?.minute24);
    if (hour > 23 || minute > 59) return null;
    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }

  let hour = Number(match.groups?.hour);
  const minute = Number(match.groups?.minute || 0);
  const meridiem = match.groups?.meridiem?.toLowerCase().replaceAll(".", "");

  if (meridiem === "pm" && hour !== 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  if (hour > 23 || minute > 59) return null;

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function cleanParsedTaskTitle(text: string) {
  return text
    .replace(
      /^(remind me to|create a task where|remember to|need to|i need to|please|task to)\s+/i,
      "",
    )
    .replace(/\b(which is|that is|i need to|need to)\b\s*/gi, "")
    .replace(/^[\s,.;:-]+|[\s,.;:-]+$/g, "")
    .replace(/\s+/g, " ");
}

function parseTaskLocally(text: string) {
  let remaining = text.trim();
  let dueDate = null;
  let dueTime = null;
  let priority: "High" | "Medium" | "Low" | "None" = "None";

  const priorityMatch = remaining.match(
    /\b(high|medium|normal|low|important|urgent|critical)\s+priority\b|\bpriority\s+(high|medium|normal|low|important|urgent|critical)\b|\b(high|medium|low|important|urgent|critical)\b/i,
  );
  if (priorityMatch) {
    const word = (
      priorityMatch[1] ||
      priorityMatch[2] ||
      priorityMatch[3] ||
      ""
    ).toLowerCase();
    priority = ["urgent", "critical", "important", "high"].includes(word)
      ? "High"
      : word === "medium"
        ? "Medium"
        : word === "low"
          ? "Low"
          : "None";

    remaining =
      `${remaining.slice(0, priorityMatch.index)} ${remaining.slice((priorityMatch.index as number) + priorityMatch[0].length)}`.trim();
  }

  const relativeDateMatch = remaining.match(/\b(today|tomorrow)\b/i);
  if (relativeDateMatch) {
    const due = new Date();
    if (relativeDateMatch[1]?.toLowerCase() === "tomorrow")
      due.setDate(due.getDate() + 1);
    dueDate = formatDateInputValue(due);
    remaining =
      `${remaining.slice(0, relativeDateMatch.index)} ${remaining.slice((relativeDateMatch.index as number) + relativeDateMatch[0].length)}`.trim();
  }

  const weekdayMatch = remaining.match(
    /\b(?:(?:on|by|due|this|next)\s+)*(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
  );
  if (weekdayMatch) {
    const matchText = weekdayMatch[0].toLowerCase();
    const isNext = /\bnext\b/i.test(matchText);
    dueDate = getNextWeekdayDate((weekdayMatch[1] || "").toLowerCase(), isNext);
    remaining =
      `${remaining.slice(0, weekdayMatch.index)} ${remaining.slice((weekdayMatch.index as number) + matchText.length)}`.trim();
  }

  const timeMatch = remaining.match(
    /\b(?:at\s+)?(?<hour>\d{1,2})(?::(?<minute>[0-5]\d))?\s*(?<meridiem>a\.?m\.?|p\.?m\.?)\b|\b(?:at\s+)(?<hour24>\d{1,2}):(?<minute24>[0-5]\d)\b/i,
  );
  if (timeMatch) {
    dueTime = parseTimeText(timeMatch as RegExpExecArray);
    remaining =
      `${remaining.slice(0, timeMatch.index)} ${remaining.slice((timeMatch.index as number) + timeMatch[0].length)}`.trim();
  }

  const title = cleanParsedTaskTitle(remaining) || text.trim();

  return {
    parsed: Boolean(dueDate || dueTime || priority !== "None"),
    task: {
      title,
      dueDate,
      dueTime,
      priority,
      status: "todo",
      completed: false,
      tags: [],
    },
  };
}

function createTask(taskData: Partial<Task>) {
  const title = String(taskData.title || "").trim();
  if (!title) return null;

  const { dueDate, dueTime } = normalizeTaskDateTime(
    taskData.dueDate as string | null,
    taskData.dueTime as string | null,
  );
  const recurrence = dueDate ? taskData.recurrence || "none" : "none";
  const task = {
    id: taskData.id || crypto.randomUUID(),
    title,
    priority: normalizeTaskPriority(taskData.priority || "None"),
    dueDate,
    dueTime,
    status: normalizeTaskStatus(taskData.status || "To Do"),
    completed: Boolean(taskData.completed),
    tags: taskData.tags || [],
    createdAt: taskData.createdAt || Date.now(),
    recurrence,
    lastCompleted: taskData.lastCompleted || null,
  };

  tasks.push(task);
  saveTasks();
  renderTasks(currentTaskSort);
  renderCalendarEvents();
  refreshTaskDropdown();
  updateTasksDoneCount();
  addActivity(`Added task: ${title}`, "task");

  return task;
}

async function addTask() {
  const task = createTask({
    title: taskInput?.value,
    priority: taskPrioritySelector?.value as Priority,
    dueDate: taskDateInput?.value || null,
    dueTime: taskTimeInput?.value || null,
    status: taskStatusSelector?.value as Status,
    recurrence: taskRecurrenceSelector?.value as Recurrence,
  });
  if (!task) return;

  checkTaskNotifications();
  if (task.dueDate && task.dueTime) {
    const due = new Date(`${task.dueDate}T${task.dueTime}:00`);
    const delay = due.getTime() - Date.now();
    if (delay > 0) setTimeout(checkTaskNotifications, delay);
  }

  if (toDoList) toDoList.style.height = "328.5px";
  if (focusTimer) focusTimer.style.height = "330px";
  if (taskCreationDiv) taskCreationDiv.style.display = "none";
  if (taskInput) taskInput.value = "";
  if (taskPrioritySelector) taskPrioritySelector.value = "None";
  if (taskDateInput) taskDateInput.value = "";
  if (taskTimeInput) taskTimeInput.value = "";
  if (taskStatusSelector) taskStatusSelector.value = "To Do";
  if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
  if (blockedByInput) blockedByInput.value = "disabled";

  await saveTasks();
}

function addNote() {
  const note = {
    id: crypto.randomUUID(),
    text: noteInput?.value.trim(),
    color: selectedNoteColor || null,
  };
  if (!note.text) return;

  allNotes.push(note);
  saveNotes();
  renderNotes();
  addActivity("Added a note", "note");

  if (noteCreationDiv) noteCreationDiv.style.display = "none";
  if (noteInput) noteInput.value = "";
  if (noteInput) noteInput.style.backgroundColor = "";
  selectedNoteColor = null;
}

async function saveTasks() {
  try {
    await db.tasks.clear();
    await db.tasks.bulkPut(tasks);
    console.log("Tasks saved to IndexedDB!");
  } catch (error) {
    console.error("Error saving tasks to IndexedDB.", error);
  }
  renderWhatToFocusOn();
  renderUpcomingTasks();
  renderStaleTasks();
  refreshTaskDropdown();
}

async function saveNotes() {
  try {
    await db.notes.clear();
    await db.notes.bulkAdd(allNotes);
    console.log("Notes saved to IndexedDB!");
  } catch (error) {
    console.error("Error saving notes to IndexedDB.", error);
  }
}

async function saveActivityLog() {
  try {
    await db.activity.clear();
    await db.activity.bulkAdd(activityLog);
    console.log("Activity log saved to IndexedDB!");
    loadActivities();
  } catch (error) {
    console.error("Error saving activity log to IndexedDB.", error);
  }
}

async function getSettings<T>(key: string, defaultValue: T): Promise<T> {
  const settings = await db.settings.get(key);
  return settings ? settings.value : defaultValue;
}

async function saveSettings<T>(key: string, defaultValue: T) {
  await db.settings.put({
    key,
    value: defaultValue,
  });
}

if (languageDropdown) {
  languageDropdown.addEventListener("change", (event) => {
    const selectedLanguage = (event.target as HTMLSelectElement)
      .value as SupportedLanguage;
    updateAppLanguage(selectedLanguage);
  });
}

function loadActivities() {
  if (activityList) activityList.innerHTML = "";
  activityLog.forEach((activity) => {
    renderActivity(activity);
  });
}

function openEditTaskUI(taskId: string | null) {
  editingTaskId = String(taskId);
  isEditing = true;

  taskInput?.blur();

  if (taskInput) taskInput.value = "";
  taskInput?.focus();
  if (taskPrioritySelector) taskPrioritySelector.value = "None";
  if (taskDateInput) taskDateInput.value = "";
  if (taskTimeInput) taskTimeInput.value = "";
  if (taskStatusSelector) taskStatusSelector.value = "To Do";
  if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";

  const task = tasks.find((t) => String(t.id) === editingTaskId);

  const taskOptions = document.getElementById("taskOptions");
  if (taskOptions) taskOptions.classList.remove("show");

  if (taskCreationDiv) document.body.appendChild(taskCreationDiv);

  if (!taskCreationDiv) return;
  taskCreationDiv.style.display = "flex";
  taskCreationDiv.style.position = "fixed";
  taskCreationDiv.style.zIndex = "9999";
  taskCreationDiv.style.top = "50%";
  taskCreationDiv.style.left = "50%";
  taskCreationDiv.style.transform = "translate(-50%, -50%)";

  if (addTaskBtn) {
    addTaskBtn.textContent = "Save Task";
    addTaskBtn.style.padding = "0px 8px";
  }

  showOverlay();

  if (task) {
    if (taskInput) taskInput.value = task.title;
    if (taskPrioritySelector)
      taskPrioritySelector.value = task.priority || "None";
    if (taskDateInput) taskDateInput.value = task.dueDate || "";
    if (taskTimeInput) taskTimeInput.value = task.dueTime || "";
    if (taskStatusSelector) taskStatusSelector.value = task.status || "To Do";
    if (taskRecurrenceSelector)
      taskRecurrenceSelector.value = task.dueDate
        ? task.recurrence || "none"
        : "none";
  }
}

function openEditNoteUI(note: Note) {
  showOverlay();

  const isEditingNote =
    document.documentElement.classList.toggle("editingNote");

  if (!isEditingNote) return;

  editingNoteColor = note.color || null;

  const noteEditDiv = document.createElement("div");
  noteEditDiv.className = "noteEditDiv";

  const noteEditInput = document.createElement("textarea");
  noteEditInput.className = "noteEditInput";
  noteEditInput.value = note.text || "";
  noteEditInput.placeholder = "Edit your note...";
  noteEditInput.style.backgroundColor = note.color || "";

  const editNoteColorOptions = (document
    .querySelector(".noteColorOptions")
    ?.cloneNode(true) ?? null) as HTMLElement | null;

  if (!editNoteColorOptions) return;

  editNoteColorOptions.style.flexDirection = "column";
  editNoteColorOptions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button && button.dataset.color) {
        editingNoteColor = button.dataset.color;
        noteEditInput.style.backgroundColor = editingNoteColor;
      }
    });
  });

  const editNoteOptions = document.createElement("div");
  editNoteOptions.className = "editNoteOptions";

  const cancelNoteEditBtn = document.createElement("button");
  cancelNoteEditBtn.className = "cancelNoteEditBtn";
  cancelNoteEditBtn.textContent = "Cancel";

  const saveNoteBtn = document.createElement("button");
  saveNoteBtn.className = "saveNoteBtn";
  saveNoteBtn.textContent = "Save";

  noteEditDiv.appendChild(noteEditInput);
  noteEditDiv.appendChild(editNoteColorOptions);

  editNoteOptions.appendChild(cancelNoteEditBtn);
  cancelNoteEditBtn.addEventListener("click", () => {
    document.documentElement.classList.remove("editingNote");
    noteEditDiv.remove();
    editingNoteColor = null;
    hideOverlay();
  });

  editNoteOptions.appendChild(saveNoteBtn);
  saveNoteBtn.addEventListener("click", () => {
    const newNoteText = noteEditInput.value.trim();
    if (!newNoteText) return;

    note.text = newNoteText;
    note.color = editingNoteColor ?? note.color;

    editingNoteColor = null;

    saveNotes();
    renderNotes();
    document.documentElement.classList.remove("editingNote");
    noteEditDiv.remove();
    hideOverlay();
  });
  noteEditDiv.appendChild(editNoteOptions);
  document.body.appendChild(noteEditDiv);
}

let selectedIndex = -1;

function updateHighlightedResult(searchResults: NodeListOf<HTMLElement>) {
  searchResults.forEach((item, index) => {
    if (index === selectedIndex) {
      item.style.backgroundColor = isDark() ? "#17171c" : "#f8f8f8";
    } else {
      item.style.backgroundColor = "";
    }
  });

  if (searchResults[selectedIndex]) {
    (searchResults[selectedIndex] as HTMLElement).scrollIntoView({
      block: "nearest",
    });
  }
}

const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
const modifierKey = isMac ? "⌘K" : "Ctrl+K";

const searchBarPlaceholders = [
  `Search for tasks and notes... (${modifierKey})`,
  `Create tasks with ":a <task description>" (${modifierKey})`,
  `Create notes with ":n <note content>" (${modifierKey})`,
  `Complete tasks with ":c <task>" (${modifierKey})`,
  `Start focus timer with ":f <duration>, <task>" (${modifierKey})`,
  `Need help with the commands? Type ":h" (${modifierKey})`,
];

let currentIndex = 0;
if (searchBar) searchBar.placeholder = searchBarPlaceholders[0] ?? "";

function rotatePlaceholder() {
  searchBar.classList.add("fade-out");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % searchBarPlaceholders.length;
    searchBar.placeholder = searchBarPlaceholders[currentIndex] ?? "";
    searchBar.classList.remove("fade-out");
  }, 300);
}
setInterval(rotatePlaceholder, 5000);

async function handleSearchKeys(e: KeyboardEvent) {
  const searchResults = document.querySelectorAll<HTMLElement>(".searchResult");
  const isUsingSearch =
    document.activeElement === searchBar ||
    (searchResultsMenu && searchResultsMenu.classList.contains("show"));

  if (!isUsingSearch) return;

  if (e.key === "ArrowDown" && searchResults.length > 0) {
    e.preventDefault();
    selectedIndex = (selectedIndex + 1) % searchResults.length;
  }

  if (e.key === "ArrowUp" && searchResults.length > 0) {
    e.preventDefault();
    selectedIndex =
      (selectedIndex - 1 + searchResults.length) % searchResults.length;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    const input = searchBar?.value.trim();
    if (input && input.startsWith(":a ")) {
      console.log("create task triggered");
      const text = input.slice(3).trim();
      if (!text) return;
      let taskCreated = false;
      const localParse = parseTaskLocally(text);

      if (localParse.parsed)
        taskCreated = Boolean(createTask(localParse.task as Partial<Task>));

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);
      try {
        if (!taskCreated) {
          const res = await fetch(`${ai_API_BASE}/api/ai/parse-task`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
            signal: controller.signal,
          });
          if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
          }
          const task = await res.json();
          console.log(task);
          if (!task || task.error) {
            console.error("ai returned bad task:", task);
          } else {
            taskCreated = Boolean(
              createTask({
                title: task.title,
                priority: task.priority,
                dueDate: task.dueDate,
                dueTime: task.dueTime,
                status: task.status,
                completed: false,
                tags: task.tags || [],
              }),
            );
          }
        }
      } catch (err) {
        console.error("ai task creation failed:", err);
      } finally {
        clearTimeout(timeoutId);
      }

      if (!taskCreated) createTask(localParse.task as Partial<Task>);

      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":n ")) {
      console.log("create note triggered");
      const text = input.slice(3).trim();
      if (!text) return;
      const note = {
        id: crypto.randomUUID(),
        text,
        color: selectedNoteColor || null,
      };
      allNotes.push(note);
      saveNotes();
      renderNotes();
      addActivity("Added a note", "note");
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":c ")) {
      console.log("complete task triggered");
      const text = input.slice(3).trim();
      if (!text) return;
      const matchingTask = tasks.find((task) =>
        task.title.toLowerCase().includes(text.toLowerCase()),
      );
      if (matchingTask) {
        matchingTask.completed = true;
        matchingTask.completedAt = new Date().toISOString();
        saveTasks();
        renderTasks(currentTaskSort);
        renderCalendarEvents();
        updateTasksDoneCount();
        addActivity(`Completed task: ${matchingTask.title}`, "task");
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":uc ")) {
      console.log("uncomplete task triggered");
      const text = input.slice(4).trim();
      if (!text) return;
      const matchingTask = tasks.find((task) =>
        task.title.toLowerCase().includes(text.toLowerCase()),
      );
      if (matchingTask) {
        matchingTask.completed = false;
        matchingTask.completedAt = null;
        saveTasks();
        renderTasks(currentTaskSort);
        renderCalendarEvents();
        updateTasksDoneCount();
        addActivity(`Uncompleted task: ${matchingTask.title}`, "task");
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":dt ")) {
      console.log("delete task triggered");
      const text = input.slice(3).trim();
      if (!text) return;
      const matchingTaskIndex = tasks.findIndex((task) => {
        return task.title.toLowerCase().includes(text.toLowerCase());
      });
      if (matchingTaskIndex !== -1) {
        const deletedTask = tasks.splice(matchingTaskIndex, 1)[0];
        saveTasks();
        renderTasks(currentTaskSort);
        renderCalendarEvents();
        updateTasksDoneCount();
        if (tasks.length === 0 && noTasksYetAlert) showNoTasksYet();
        addActivity(`Deleted task: ${deletedTask.title}`, "task");
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":dn ")) {
      console.log("delete note triggered");
      const text = input.slice(3).trim();
      if (!text) return;
      const matchingNoteIndex = allNotes.findIndex((note) => {
        return note.text.toLowerCase().includes(text.toLowerCase());
      });
      if (matchingNoteIndex !== -1) {
        allNotes.splice(matchingNoteIndex, 1)[0];
        saveNotes();
        renderNotes();
        if (allNotes.length === 0 && noNotesYetAlert) showNoNotesYet();
        addActivity("Deleted a note", "note");
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":f ")) {
      console.log("start focus timer triggered");
      const match = input
        .slice(3)
        .trim()
        .match(/^(\d+)(?:\s*,\s*(.+))?$/);
      if (match) {
        const duration = parseInt(match[1], 10);
        const taskTitle = match[2] ? match[2].trim() : null;
        if (!isNaN(duration) && duration > 0)
          startTimerFromCommandBar(duration, taskTitle || undefined);
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":pt")) {
      console.log("pause timer triggered");
      pauseTimer();
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":dd ")) {
      console.log("add due date to task or update due date triggered");
      const match = input
        .slice(4)
        .trim()
        .match(/^(.+?)(?:\s*,\s*(.+))?$/);
      if (match) {
        const taskTitle = match[1].trim();
        const newDueDate = match[2] ? match[2].trim() : null;
        const matchingTask = tasks.find((task) =>
          task.title.toLowerCase().includes(taskTitle.toLowerCase()),
        );
        if (matchingTask && newDueDate) {
          matchingTask.dueDate = newDueDate;
          saveTasks();
          renderTasks(currentTaskSort);
          renderCalendarEvents();
          addActivity(
            `Updated due date of task: ${matchingTask.title} to ${matchingTask.dueDate}`,
            "task",
          );
        }
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":rst")) {
      console.log("resume timer triggered");
      startTimer();
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":rt")) {
      console.log("restart timer triggered");
      restartTimer();
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":x")) {
      console.log("clear and delete all completed tasks triggered");
      const completedTasks = tasks.filter((task) => task.completed);
      completedTasks.forEach((task) => {
        const taskIndex = tasks.findIndex((t) => t.id === task.id);
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
          addActivity("Deleted all completed tasks", "task");
          saveTasks();
          renderTasks(currentTaskSort);
          renderCalendarEvents();
          updateTasksDoneCount();
        }
      });
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":p ")) {
      console.log("prioritize task triggered");
      const match = input
        .slice(3)
        .trim()
        .match(/^(.+?)(?:\s*,\s*(high|medium|low))?$/i);
      if (match) {
        const taskTitle = match[1].trim();
        const newPriority = match[2] ? match[2].toLowerCase() : null;
        const matchingTask = tasks.find((task) =>
          task.title.toLowerCase().includes(taskTitle.toLowerCase()),
        );
        if (matchingTask && newPriority) {
          matchingTask.priority = normalizeTaskPriority(newPriority);
          saveTasks();
          renderTasks(currentTaskSort);
          renderCalendarEvents();
          addActivity(
            `Updated priority of task: ${matchingTask.title} to ${matchingTask.priority}`,
            "task",
          );
        }
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":et ")) {
      console.log("edit task triggered");
      const match = input
        .slice(4)
        .trim()
        .match(/^(.+?)(?:\s*,\s*(.+))?$/);
      if (match) {
        const taskTitle = match[1].trim();
        const matchingTask = tasks.find((task) =>
          task.title.toLowerCase().includes(taskTitle.toLowerCase()),
        );
        if (matchingTask) openEditTaskUI(matchingTask.id);
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":en ")) {
      console.log("edit note triggered");
      const match = input
        .slice(4)
        .trim()
        .match(/^(.+)$/);
      if (match) {
        const noteText = match[1].trim();
        const matchingNote = allNotes.find((note) =>
          note.text.toLowerCase().includes(noteText.toLowerCase()),
        );
        if (matchingNote) openEditNoteUI(matchingNote);
      }
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (input && input.startsWith(":h")) {
      console.log("help triggered");
      showCommandsHelpList();
      closeSearchBar();
      if (searchBar) searchBar.value = "";
      return;
    }

    if (selectedIndex >= 0) {
      (searchResults[selectedIndex] as HTMLElement).click();
      closeSearchBar();
      return;
    }
    console.log({ input, selectedIndex, hasResults: searchResults.length });
    closeSearchBar();
    return;
  }

  if (e.key === "Escape") {
    closeSearchBar();
    return;
  }

  updateHighlightedResult(searchResults);
}

function showCommandsHelpList() {
  commandsHelpListDiv.classList.add("show");
  showOverlay();
  document.querySelectorAll("body > *").forEach((el) => {
    if (el !== overlay && el !== commandsHelpListDiv)
      (el as HTMLElement).inert =
        commandsHelpListDiv?.classList.contains("show");
  });
}

closeCommandsHelpListBtn.addEventListener("click", () => {
  commandsHelpListDiv.classList.remove("show");
  hideOverlay();
  document
    .querySelectorAll("body >  *")
    .forEach((el) => ((el as HTMLElement).inert = false));
});

function closeSearchBar() {
  if (searchBar) {
    searchBar.blur();
    searchBar.value = "";
  }
  if (searchResultsMenu) searchResultsMenu.classList.remove("show");
  selectedIndex = -1;
}

function normalizeStr(str: string) {
  return str.toLowerCase().trim();
}

function isWordStart(text: string, index: number) {
  return index === 0 || text[index - 1] === " ";
}

function fuzzyScore(query: string, text: string) {
  const searchQuery = normalizeStr(query);
  const searchText = normalizeStr(text);

  let score = 0;
  let queryIndex = 0;
  let lastMatchIndex = -1;
  let gapPenalty = 0;

  for (let i = 0; i < searchText.length; i++) {
    if (searchText[i] === searchQuery[queryIndex]) {
      score += 2;

      if (lastMatchIndex !== -1) {
        gapPenalty += i - lastMatchIndex - 1;
      }

      lastMatchIndex = i;

      if (isWordStart(searchText, i)) score += 5;

      if (i > 0 && searchText[i - 1] === searchQuery[queryIndex - 1])
        score += 3;

      queryIndex++;

      if (queryIndex === searchQuery.length) break;
    }
  }

  return queryIndex === searchQuery.length
    ? Math.max(score - gapPenalty, 1)
    : 0;
}

function highlightMatch(text: string, query: string) {
  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.toLowerCase();

  let result = "";
  let queryIndex = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      queryIndex < normalizedQuery.length &&
      normalizedText[i] === normalizedQuery[queryIndex]
    ) {
      result += `<mark class="matchHighlight">${text[i]}</mark>`;
      queryIndex++;
    } else {
      result += text[i];
    }
  }

  return result;
}

interface SearchResult {
  type: "task" | "note";
  text: string;
  element: HTMLElement;
  score: number;
}

function searchBarMagic() {
  selectedIndex = -1;

  if (!searchBar) return;
  const searchQuery = normalizeStr(searchBar.value);

  if (searchResultsMenu) searchResultsMenu.innerHTML = "";

  if (!searchQuery) {
    searchResultsMenu.style.display = "none";
    return;
  }

  let searchResults: SearchResult[] = [];

  document.querySelectorAll(".listTask").forEach((task) => {
    const taskTextSpanEl = task.querySelector(".taskTextSpan");
    if (!taskTextSpanEl) return;
    const taskText = (taskTextSpanEl as HTMLElement).dataset.originalTaskText;
    if (!taskText) return;

    let score = 0;

    if (taskText.toLowerCase().includes(searchQuery)) {
      score = 1000;
    } else {
      score = fuzzyScore(searchQuery, taskText);
    }

    if (score > 0) {
      searchResults.push({
        type: "task",
        text: taskText,
        element: task as HTMLElement,
        score,
      });
    }
  });

  document.querySelectorAll(".listNote").forEach((note) => {
    const noteText = (note.querySelector(".mainNoteText") as HTMLElement)
      .dataset.originalNoteText;
    if (!noteText) return;

    let score = 0;

    if (noteText.toLowerCase().includes(searchQuery)) {
      score = 1000;
    } else {
      score = fuzzyScore(searchQuery, noteText);
    }

    if (score > 0) {
      searchResults.push({
        type: "note",
        text: noteText,
        element: note as HTMLElement,
        score,
      });
    }
  });

  if (searchResults.length === 0) {
    searchResultsMenu.style.display = "none";
    return;
  }

  searchResults.sort((a, b) => b.score - a.score);
  selectedIndex = Math.min(selectedIndex, searchResults.length - 1);
  if (selectedIndex < 0) selectedIndex = 0;

  if (searchResultsMenu) searchResultsMenu.style.display = "block";

  searchResults.slice(0, 6).forEach((result) => {
    const searchResult = document.createElement("li");
    searchResult.className = "searchResult";

    const searchResultIcon = document.createElement("img");
    searchResultIcon.className = `searchResultIcon searchResultIcon--${result.type}`;

    if (result.type === "task") {
      searchResultIcon.src = "/images/Checkmark.png";
      searchResultIcon.alt = "Task Icon";
    } else if (result.type === "note") {
      searchResultIcon.src = "/images/Note-Icon.png";
      searchResultIcon.alt = "Note Icon";
    } else {
      searchResultIcon.src = "";
      searchResultIcon.alt = "";
    }

    const searchResultText = document.createElement("span");
    searchResultText.className = "searchResultText";
    searchResultText.innerHTML = highlightMatch(result.text, searchQuery);

    searchResult.appendChild(searchResultIcon);
    searchResult.appendChild(searchResultText);

    searchResult.addEventListener("click", () => {
      result.element.scrollIntoView({ behavior: "smooth", block: "center" });
      searchResultsMenu.style.display = "none";
    });

    searchResultsMenu.appendChild(searchResult);
  });

  if (!searchResultsMenu) return;
  const renderedResults =
    searchResultsMenu.querySelectorAll<HTMLElement>(".searchResult");
  updateHighlightedResult(renderedResults);

  console.log("Search results:", searchResults);

  if (searchResultsMenu) searchResultsMenu.classList.add("show");
}

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    event.preventDefault();
    searchBar.focus();
    searchBar.click();
  }
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".taskOptions").forEach((menu) => {
    menu.classList.remove("show");
  });
  enableScrolling();

  if (!searchDiv.contains(e.target as Node))
    searchResultsMenu.classList.remove("show");
});

document.addEventListener("keydown", handleSearchKeys);
console.log("keydown listener attached");

function debounce(func: (...args: any[]) => void, delay: number) {
  let timeout: number | undefined;

  return function (...args: any[]) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function updateFavicon() {
  const favicon = document.querySelector<HTMLLinkElement>(
    'link[rel="icon"]',
  ) as HTMLLinkElement | null;
  if (!favicon) return;

  const isDarkMode = isDark();
  const newFaviconUrl = isDarkMode
    ? "/images/Dewen-Dark-Favicon.ico"
    : "/images/Dewen-Favicon.ico";

  if (favicon.href !== newFaviconUrl) favicon.href = newFaviconUrl;
}

updateFavicon();

function updateAppLogo() {
  const div = document.querySelector<HTMLDivElement>(
    ".appLogo",
  ) as HTMLDivElement | null;
  const img = div?.querySelector<HTMLImageElement>(
    ".appLogoIcon",
  ) as HTMLImageElement | null;
  if (!div || !img) return;
  const isDarkMode = isDark();
  const newLogoUrl = isDarkMode
    ? "/images/Dewen-Logo-Dark.png"
    : "/images/Dewen-Logo.png";

  if (img.src !== newLogoUrl) img.src = newLogoUrl;
}

updateAppLogo();

searchBar?.addEventListener("input", debounce(searchBarMagic, 150));

searchBar?.addEventListener("focus", () => {
  selectedIndex = -1;
});

function isDark() {
  return document.documentElement.dataset.mode === "dark";
}

function getTaskUrgency(task: Task) {
  if (!task.dueDate || task.completed) return 0;

  const now = Date.now();
  const due = new Date(
    task.dueDate + (task.dueTime ? `T${task.dueTime}:00` : "T23:59:59"),
  ).getTime();

  const diff = due - now;
  if (diff <= 0) return 1;

  const hoursLeft = diff / (1000 * 60 * 60);
  if (hoursLeft <= 0) return 1;

  const urgency = Math.pow(Math.max(0, 1 - hoursLeft / 72), 2);

  return Math.min(Math.max(urgency, 0), 1);
}

function applyUrgencyStyle(el: HTMLElement | null, urgency: number) {
  if (!el) return;
  el.style.setProperty("--urgency", urgency.toFixed(3));

  const r = Math.round(45 + urgency * 210);
  const g = Math.round(58 - urgency * 38);
  const b = Math.round(200 - urgency * 160);

  el.style.setProperty("--urgency-r", String(r));
  el.style.setProperty("--urgency-g", String(g));
  el.style.setProperty("--urgency-b", String(b));

  const duration = 2.4 - urgency * 1.4;
  el.style.animationDuration = `${duration.toFixed(2)}s`;
}

customizeBtn?.addEventListener("click", () => {
  customizeDiv.classList.add("show");
  customizeDiv.classList.remove("closing");
});

const closeCustomizeBtn = document.querySelector(".closeCustomizeBtn");
closeCustomizeBtn?.addEventListener("click", () => {
  customizeDiv.classList.add("closing");
  setTimeout(() => {
    customizeDiv.classList.remove("show", "closing");
  }, 300);
});

const colorPresets = [
  {
    name: "default",
    bg: "white",
    accent: "white",
    darkMode: false,
  },
  {
    name: "ocean",
    bg: "teal",
    accent: "aqua",
    darkMode: false,
  },
  {
    name: "forest",
    bg: "green",
    accent: "lightGreen",
    darkMode: false,
  },
  {
    name: "sunset",
    bg: "gold",
    accent: "red",
    darkMode: false,
  },
  {
    name: "rose",
    bg: "pink",
    accent: "violet",
    darkMode: false,
  },
  {
    name: "midnight",
    bg: "black",
    accent: "purple",
    darkMode: true,
  },
  {
    name: "terminal",
    bg: "black",
    accent: "lightGreen",
    darkMode: true,
  },
  {
    name: "slate",
    bg: "white",
    accent: "teal",
    darkMode: false,
  },
];

const bgThemes = [
  {
    name: "default",
    light: "linear-gradient(65deg, white, #fafafa)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, #7c7c7c, black 100%)",
  },
  {
    name: "red",
    light: "linear-gradient(65deg, maroon, #f8dce5)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(62, 0, 0), black 100%)",
  },
  {
    name: "gold",
    light: "linear-gradient(65deg, rgb(226, 160, 57), #fff6d6)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(79, 56, 19), black 100%)",
  },
  {
    name: "lightGreen",
    light: "linear-gradient(65deg, green, #f1fff1)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, green, black 100%)",
  },
  {
    name: "green",
    light: "linear-gradient(65deg, #2a4b2a, rgb(18, 77, 18), #e6f7e6)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(18, 77, 18), black 100%)",
  },
  {
    name: "teal",
    light: "linear-gradient(65deg, rgb(0, 110, 120), #e6f9f9)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(0, 110, 120), black 100%)",
  },
  {
    name: "aqua",
    light: "linear-gradient(65deg, #008ca2, rgb(0, 213, 255), #ecfdff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(0, 102, 123), black 100%)",
  },
  {
    name: "blue",
    light: "linear-gradient(65deg, rgb(0, 149, 255), #eef8ff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(0, 77, 132), black 100%)",
  },
  {
    name: "violet",
    light: "linear-gradient(65deg, rgb(198, 130, 238), #f6efff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(105, 68, 126), black 100%)",
  },
  {
    name: "purple",
    light: "linear-gradient(65deg, rgb(142, 0, 185), #f5ebff)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, rgb(87, 0, 114), black 100%)",
  },
  {
    name: "pink",
    light: "linear-gradient(65deg, pink, #fff2f7)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, #a3627b, black 100%)",
  },
  {
    name: "white",
    light: "linear-gradient(65deg, white, #fafafa)",
    dark: "linear-gradient(65deg, rgb(18, 18, 18) 25%, #7c7c7c, black 100%)",
  },
  {
    name: "black",
    light: "linear-gradient(65deg, rgb(18, 18, 18), #f2f2f2)",
    dark: "linear-gradient(65deg, rgb(60, 60, 60) 0%, rgb(18, 18, 18) 25%, black 100%)",
  },
];

const accentThemes = [
  {
    name: "red",
    light: "rgb(212, 146, 146)",
    dark: "rgb(62, 0, 0)",
  },
  {
    name: "gold",
    light: "rgb(231, 196, 139)",
    dark: "rgb(79, 56, 19)",
  },
  {
    name: "lightGreen",
    light: "rgb(155, 203, 121)",
    dark: "rgb(38, 60, 25)",
  },
  {
    name: "green",
    light: "#7fd77f",
    dark: "rgb(18, 77, 18)",
  },
  {
    name: "teal",
    light: "rgb(152, 209, 215)",
    dark: "rgb(0, 58, 64)",
  },
  {
    name: "aqua",
    light: "rgb(123, 201, 217)",
    dark: "rgb(0, 91, 109)",
  },
  {
    name: "blue",
    light: "rgb(140, 187, 221)",
    dark: "rgb(0, 51, 88)",
  },
  {
    name: "violet",
    light: "rgb(205, 161, 231)",
    dark: "rgb(77, 50, 92)",
  },
  {
    name: "purple",
    light: "rgb(201, 136, 221)",
    dark: "rgb(66, 0, 86)",
  },
  {
    name: "pink",
    light: "pink",
    dark: "#a3627b",
  },
  {
    name: "white",
    light: "rgb(212, 212, 212)",
    dark: "#7c7c7c",
  },
  {
    name: "black",
    light: "#4d4d4d",
    dark: "rgb(37, 37, 37)",
  },
];

const profilePictureFiltersMap: Record<
  string,
  { light: string; dark: string }
> = {
  red: {
    light:
      "invert(12%) sepia(18%) saturate(560%) hue-rotate(318deg) brightness(1.04) contrast(0.8)",
    dark: "invert(12%) sepia(22%) saturate(620%) hue-rotate(318deg) brightness(0.56) contrast(1.18)",
  },
  gold: {
    light:
      "sepia(0.5) saturate(2.5) hue-rotate(332deg) brightness(1.06) contrast(0.88)",
    dark: "sepia(0.62) saturate(2.8) hue-rotate(332deg) brightness(0.58) contrast(1.12)",
  },
  lightGreen: {
    light:
      "sepia(0.45) saturate(2.8) hue-rotate(78deg) brightness(1.07) contrast(0.9)",
    dark: "sepia(0.58) saturate(3.2) hue-rotate(78deg) brightness(0.6) contrast(1.1)",
  },
  green: {
    light:
      "sepia(0.5) saturate(3) hue-rotate(96deg) brightness(1.03) contrast(0.91)",
    dark: "sepia(0.62) saturate(3.4) hue-rotate(96deg) brightness(0.58) contrast(1.12)",
  },
  teal: {
    light:
      "sepia(0.52) saturate(3) hue-rotate(150deg) brightness(1.02) contrast(0.91)",
    dark: "sepia(0.64) saturate(3.4) hue-rotate(150deg) brightness(0.57) contrast(1.12)",
  },
  aqua: {
    light:
      "sepia(0.55) saturate(3.2) hue-rotate(164deg) brightness(1.07) contrast(0.9)",
    dark: "sepia(0.66) saturate(3.6) hue-rotate(164deg) brightness(0.6) contrast(1.1)",
  },
  blue: {
    light:
      "sepia(0.52) saturate(3.1) hue-rotate(186deg) brightness(1.05) contrast(0.9)",
    dark: "sepia(0.64) saturate(3.5) hue-rotate(186deg) brightness(0.58) contrast(1.12)",
  },
  violet: {
    light:
      "sepia(0.5) saturate(2.8) hue-rotate(226deg) brightness(1.03) contrast(0.91)",
    dark: "sepia(0.62) saturate(3.2) hue-rotate(226deg) brightness(0.59) contrast(1.1)",
  },
  purple: {
    light:
      "sepia(0.58) saturate(3) hue-rotate(280deg) brightness(1) contrast(0.92)",
    dark: "sepia(0.7) saturate(3.4) hue-rotate(280deg) brightness(0.55) contrast(1.15)",
  },
  pink: {
    light:
      "sepia(0.5) saturate(2.8) hue-rotate(304deg) brightness(1.07) contrast(0.9)",
    dark: "sepia(0.62) saturate(3.1) hue-rotate(304deg) brightness(0.62) contrast(1.08)",
  },
  white: {
    light: "sepia(0.04) saturate(0.2) brightness(1.1) contrast(0.88)",
    dark: "sepia(0.03) saturate(0.15) brightness(0.66) contrast(1.04)",
  },
  black: {
    light: "sepia(0.05) saturate(0.1) brightness(0.82) contrast(0.92)",
    dark: "sepia(0.02) saturate(0.08) brightness(0.38) contrast(1.15)",
  },
};

const colorPresetsMap = Object.fromEntries(
  colorPresets.map((t) => [t.name, t]),
);
const bgThemesMap = Object.fromEntries(bgThemes.map((t) => [t.name, t]));
const accentThemesMap = Object.fromEntries(
  accentThemes.map((t) => [t.name, t]),
);

customizePresetsOptions.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("preset button clicked:", button.dataset.preset);
    const preset = button.dataset.preset;
    if (!preset) return;
    applyColorPreset(preset);
    customizePresetsOptions.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    resetCustomTextColors();
    if (customBgColorInput) customBgColorInput.value = "";
    if (customAccentColorInput) customAccentColorInput.value = "";
  });
});

customizeBgOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const preset = button.dataset.theme;
    if (!preset) return;
    applyBgTheme(String(preset));
    customizeBgOptions.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    resetCustomTextColors();
    if (customBgColorInput) customBgColorInput.value = "";
    if (customAccentColorInput) customAccentColorInput.value = "";
  });
});

customizeAccentOptions.forEach((button) => {
  button.addEventListener("click", () => {
    const accentThemeName = button.dataset.theme;
    applyAccentTheme(String(accentThemeName));
    customizeAccentOptions.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    resetCustomTextColors();
    if (customBgColorInput) customBgColorInput.value = "";
    if (customAccentColorInput) customAccentColorInput.value = "";
  });
});

function resetCustomTextColors() {
  const textColor = isDark() ? "white" : "black";
  document.documentElement.style.setProperty("--bg-text-color", textColor);
  document.documentElement.style.setProperty("--accent-text-color", textColor);
}

function applyColorPreset(presetName: string) {
  const preset = colorPresetsMap[presetName];
  if (!preset) return;
  if (preset.darkMode !== isDark()) {
    document.documentElement.dataset.mode = preset.darkMode ? "dark" : "light";
    localStorage.setItem("mode", preset.darkMode ? "dark" : "light");
    if (themeBtn) {
      themeBtn.querySelector("img")!.src = preset.darkMode
        ? "/images/Light-Mode-Icon.png"
        : "/images/Dark-Mode-Icon.png";
      themeBtn.querySelector("img")!.alt = preset.darkMode
        ? "Light Mode Icon"
        : "Dark Mode Icon";
    }
  }

  applyBgTheme(preset.bg);
  applyAccentTheme(preset.accent);

  customizeBgOptions.forEach((b) => b.classList.remove("active"));
  customizeAccentOptions.forEach((b) => b.classList.remove("active"));

  const bgButton = Array.from(customizeBgOptions).find(
    (b) => b.dataset.theme === preset.bg,
  );

  const accentButton = Array.from(customizeAccentOptions).find(
    (b) => b.dataset.theme === preset.accent,
  );

  if (bgButton) bgButton.classList.add("active");
  if (accentButton) accentButton.classList.add("active");
  localStorage.setItem("customColorPreset", presetName);
}

function applyBgTheme(themeName: string) {
  const theme = bgThemesMap[themeName];
  if (!theme) return;
  const darkMode = isDark();
  const bg = darkMode ? theme.dark : theme.light;
  document.body.style.background = bg;
  localStorage.removeItem("customColorPreset");
  localStorage.removeItem("customBgColor");
  localStorage.setItem("customBgTheme", themeName);
}

function applyAccentTheme(themeName: string) {
  const theme = accentThemesMap[themeName];
  if (!theme) return;
  const darkMode = isDark();
  const accent = darkMode ? theme.dark : theme.light;
  document.documentElement.style.setProperty("--accent-color", accent);
  document.documentElement.style.setProperty(
    "--accent-text-color",
    darkMode || themeName === "black" ? "white" : "black",
  );
  if (timerProgressRing && themeName === "white")
    timerProgressRing.style.stroke = "rgb(151, 151, 151)";
  updateAvatarAccentFilter(String(themeName));
  localStorage.removeItem("customColorPreset");
  localStorage.removeItem("customAccentColor");
  localStorage.setItem("customAccentTheme", themeName);
}

function getTextForCustomBgAndAccentColors(color: string): string {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const toLinear = (value: number) =>
    value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);

  const red = toLinear(r);
  const green = toLinear(g);
  const blue = toLinear(b);

  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  return luminance < 0.5 ? "white" : "black";
}

function applyCustomBgColor(color: string) {
  document.body.style.background = color;
  document.documentElement.style.setProperty(
    "--bg-text-color",
    getTextForCustomBgAndAccentColors(color),
  );
  localStorage.removeItem("customColorPreset");
  localStorage.setItem("customBgColor", color);
  localStorage.removeItem("customBgTheme");
  customizeBgOptions.forEach((b) => b.classList.remove("active"));
  customBgColorInput.style.background = color;
  customBgColorInput.value = color;
}

function applyCustomAccentColor(color: string) {
  document.documentElement.style.setProperty("--accent-color", color);
  document.documentElement.style.setProperty(
    "--accent-text-color",
    getTextForCustomBgAndAccentColors(color),
  );
  // add a check with the getTextForCustomBgAndAccentColors function to change the color of the expandMiniAnalyticsBtn icon based on the luminance of the custom accent color
  if (expandMiniAnalyticsBtn) {
    const textColor = getTextForCustomBgAndAccentColors(color);
    const icon = expandMiniAnalyticsBtn.querySelector("img");
    if (icon) {
      icon.style.filter =
        textColor === "white"
          ? "invert(1) sepia(0) saturate(0) hue-rotate(0deg) brightness(1)"
          : "invert(0) sepia(0) saturate(0) hue-rotate(0deg) brightness(1)";
    }
  }
  updateAvatarAccentFilter();
  localStorage.removeItem("customColorPreset");
  localStorage.setItem("customAccentColor", color);
  localStorage.removeItem("customAccentTheme");
  customizeAccentOptions.forEach((b) => b.classList.remove("active"));
  customAccentColorInput.style.background = color;
  customAccentColorInput.value = color;
}

customBgColorInput?.addEventListener("input", () => {
  applyCustomBgColor(customBgColorInput.value);
});

customAccentColorInput?.addEventListener("input", () => {
  applyCustomAccentColor(customAccentColorInput.value);
});

function updateAvatarAccentFilter(
  themeName: string = localStorage.getItem("customAccentTheme") || "",
) {
  const darkMode = isDark();
  const avatarAccentTrue = avatarAccentToggle?.checked;
  const profileFilter = profilePictureFiltersMap[themeName];

  if (avatarPreviewIcon && avatarIcon && avatarAccentTrue && profileFilter) {
    const filterValue = darkMode ? profileFilter.dark : profileFilter.light;
    avatarPreviewIcon.style.filter = filterValue;
    avatarIcon.style.filter = filterValue;
  } else {
    avatarPreviewIcon.style.filter = "none";
    avatarIcon.style.filter = "none";
  }
}

avatarAccentToggle?.addEventListener("change", () => {
  localStorage.setItem(
    "avatarAccentEnabled",
    String(avatarAccentToggle.checked),
  );
  updateAvatarAccentFilter();
});

const sidebarHidden =
  window.innerWidth <= 1240
    ? true
    : localStorage.getItem("sidebarHidden") === "true";
let isSidebarVisible = !sidebarHidden;

hamburgerBtn?.addEventListener("click", () => {
  const isMobile = window.innerWidth <= 1240;
  if (isSidebarVisible) {
    if (isMobile) {
      sidebar?.classList.remove("show", "closing");
      if (sidebar?.parentNode) document.body.removeChild(sidebar);
      hideOverlay();
      document
        .querySelectorAll("body >  *")
        .forEach((el) => ((el as HTMLElement).inert = false));
    } else {
      sidebar?.classList.add("closing");
      setTimeout(() => {
        sidebar?.classList.remove("show", "closing");
        if (sidebar?.parentNode) document.body.removeChild(sidebar);
      }, 200);
    }
    if (!isMobile) localStorage.setItem("sidebarHidden", "true");
    document.documentElement.classList.add("sidebarHidden");
    isSidebarVisible = false;
  } else {
    if (!sidebar?.parentNode) document.body.appendChild(sidebar);
    sidebar.offsetHeight;
    sidebar.classList.add("show");
    sidebar.classList.remove("closing");
    if (isMobile) {
      showOverlay();
      document.querySelectorAll("body > *").forEach((el) => {
        if (el !== overlay && el !== sidebar)
          (el as HTMLElement).inert = sidebar?.classList.contains("show");
      });
    }
    if (!isMobile) localStorage.setItem("sidebarHidden", "false");
    document.documentElement.classList.remove("sidebarHidden");
    isSidebarVisible = true;
  }
});

function sidebarInMobile() {
  const isMobile = window.innerWidth <= 1240;
  if (!hamburgerBtn || !sidebar) return;
  if (isMobile) {
    if (hamburgerBtn.parentNode !== document.body)
      document.body.prepend(hamburgerBtn);
  } else {
    if (hamburgerBtn.parentNode !== sidebar) sidebar.prepend(hamburgerBtn);
  }
}

sidebarInMobile();
window.addEventListener("resize", () => {
  sidebarInMobile();
});

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth <= 1240) return;
  if (e.clientX <= 20) {
    if (!sidebar?.parentNode) document.body.appendChild(sidebar);
    sidebar?.classList.add("show");
    sidebar?.classList.remove("closing");
  } else if (
    e.clientX > 250 &&
    sidebar?.classList.contains("show") &&
    !sidebar?.classList.contains("closing") &&
    !isSidebarVisible
  ) {
    sidebar?.classList.add("closing");
    setTimeout(() => {
      if (!isSidebarVisible && sidebar?.parentNode) {
        sidebar?.classList.remove("show", "closing");
        document.body.removeChild(sidebar);
      }
    }, 200);
  }
});

closeSidebarBtn?.addEventListener("click", () => {
  if (sidebar?.classList.contains("show")) {
    sidebar?.classList.add("closing");
    setTimeout(() => {
      if (!isSidebarVisible && sidebar?.parentNode) {
        sidebar?.classList.remove("show", "closing");
        document.body.removeChild(sidebar);
      }
    }, 200);
    hideOverlay();
    document
      .querySelectorAll("body >  *")
      .forEach((el) => ((el as HTMLElement).inert = false));
    sidebarInMobile();
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  if (taskCreationDiv) taskCreationDiv.style.display = "none";

  const savedAvatar = localStorage.getItem("avatar");
  if (savedAvatar && avatarPreviewIcon && avatarIcon) {
    avatarPreviewIcon.src = savedAvatar;
    avatarIcon.src = savedAvatar;
  }

  const avatarAccentEnabled =
    localStorage.getItem("avatarAccentEnabled") === "true";
  if (avatarAccentToggle) avatarAccentToggle.checked = avatarAccentEnabled;
  updateAvatarAccentFilter();

  const savedColorPreset = localStorage.getItem("customColorPreset");
  const savedBgTheme = localStorage.getItem("customBgTheme");
  const savedAccentTheme = localStorage.getItem("customAccentTheme");
  const savedCustomBgColor = localStorage.getItem("customBgColor");
  const savedCustomAccentColor = localStorage.getItem("customAccentColor");

  if (savedColorPreset) {
    applyColorPreset(savedColorPreset);
    const presetButton = Array.from(customizePresetsOptions).find(
      (b) => b.dataset.preset === savedColorPreset,
    );
    if (presetButton) presetButton.classList.add("active");
  } else {
    if (savedBgTheme) applyBgTheme(savedBgTheme);
    if (savedAccentTheme) applyAccentTheme(savedAccentTheme);
    else updateAvatarAccentFilter();
  }

  if (savedBgTheme) {
    const bgButton = Array.from(customizeBgOptions).find(
      (b) => b.dataset.theme === savedBgTheme,
    );
    if (bgButton) bgButton.classList.add("active");
  }

  if (savedAccentTheme) {
    const accentButton = Array.from(customizeAccentOptions).find(
      (b) => b.dataset.theme === savedAccentTheme,
    );
    if (accentButton) accentButton.classList.add("active");
  }

  if (savedCustomBgColor) {
    applyCustomBgColor(savedCustomBgColor);
  }
  if (savedCustomAccentColor) {
    applyCustomAccentColor(savedCustomAccentColor);
  }

  const savedMode = localStorage.getItem("mode");
  if (savedMode) {
    document.documentElement.dataset.mode = savedMode;
    updateFavicon();
    updateAppLogo();
  }

  const savedLanguage =
    (localStorage.getItem("appLanguage") as SupportedLanguage) || "en";
  updateAppLanguage(savedLanguage);
  if (languageDropdown) languageDropdown.value = savedLanguage;

  const lastActiveView = localStorage.getItem("lastActiveView");
  if (lastActiveView) {
    if (lastActiveView === "calendar") {
      document.documentElement.classList.add("calendarView");
      document.documentElement.classList.remove("dashboardActive");
      document.documentElement.classList.remove("isSettingsView");
      // if (calendarBtn) calendarBtn.classList.add("active");
      /* } else if (lastActiveView === "settiings") {
      document.documentElement.classList.add("isSettingsView");
      document.documentElement.classList.remove("dashboardActive");
      document.documentElement.classList.remove("calendarView");
      if (settingsBtn) settingsBtn.classList.add("active"); */
    } else {
      document.documentElement.classList.add("dashboardActive");
      document.documentElement.classList.remove("calendarView");
      document.documentElement.classList.remove("isSettingsView");
      if (dashboardBtn) dashboardBtn.classList.add("active");
    }
  }

  const isAnalyticsExpanded =
    localStorage.getItem("miniAnalyticsExpanded") === "true";

  if (
    isAnalyticsExpanded &&
    workAreaSplit &&
    miniAnalyticsDiv &&
    expandMiniAnalyticsIcon
  ) {
    miniAnalyticsDiv.classList.add("expanded");
    workAreaSplit.style.marginTop = "20px";
    expandMiniAnalyticsIcon.style.setProperty("rotate", "-90deg");
  } else {
    miniAnalyticsDiv.classList.remove("expanded");
    workAreaSplit.style.marginTop = "0px";
    expandMiniAnalyticsIcon.style.setProperty("rotate", "90deg");
  }

  currentTaskSort = taskSortSelector?.value || "dateCreated";
  // setTaskView(localStorage.getItem("taskViewOption") || "listView", false);

  const personalSettingsOption = document.querySelector(
    ".settingsNavList a[href='#personal']",
  );
  personalSettingsOption?.classList.add("active");

  const savedAskForNotiDisplay = localStorage.getItem("askForNotiDisplay");
  if (savedAskForNotiDisplay) {
    if (askForNotifications) askForNotifications.remove();
    if (sidebar) sidebar.style.marginTop = "0px";
    if (toDoList) toDoList.style.marginTop = "0px";
  } else {
    if (askForNotifications) document.body.appendChild(askForNotifications);
    if (sidebar) sidebar.style.marginTop = "0px";
    if (toDoList) toDoList.style.marginTop = "0px";
  }

  const sidebarHidden = localStorage.getItem("sidebarHidden") === "true";
  let isSidebarVisible = !sidebarHidden;
  if (sidebarHidden) {
    document.documentElement.classList.add("sidebarHidden");
    sidebar?.classList.remove("show");
    if (sidebar?.parentNode) sidebar?.remove();
  } else {
    document.documentElement.classList.remove("sidebarHidden");
    if (!sidebar?.parentNode) document.body.appendChild(sidebar);
    sidebar?.classList.add("show");
  }

  try {
    await db.open();
    await Promise.all([loadSavedItems()]);
  } catch (error) {
    console.error(
      "Database initialization failed. Reverting to memory fallback.",
      error,
    );
    tasks = safeParse("tasks");
    allNotes = safeParse("notes");
    activityLog = safeParse("activityLog");
  }

  if (searchBar) searchBar.value = "";
  if (taskPrioritySelector) taskPrioritySelector.value = "None";
  if (taskDateInput) taskDateInput.value = "";
  if (taskTimeInput) taskTimeInput.value = "";
  if (taskStatusSelector) taskStatusSelector.value = "To Do";
  if (blockedByInput) blockedByInput.value = "disabled";
  if (blockedByDiv) blockedByDiv.style.display = "none";
  if (noteInput) noteInput.value = "";

  renderTasks(currentTaskSort);
  renderWhatToFocusOn();
  renderUpcomingTasks();
  renderStaleTasks();
  refreshTaskDropdown();
  renderCalendarEvents();
  syncRecurringTasks(new Date());
  updateTasksOverdueCount();
  updateTasksDueTodayCount();
  updateBlockedTasksCount();
  loadTimerState();
  loadActivities();

  allNotes.forEach((note) => {
    createNoteElement(note);
  });

  const calendarEl = document.getElementById("calendar");
  if (calendarEl) {
    calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "",
        center: "prev,title,next",
        right: "dayGridMonth,dayGridWeek,dayGridDay",
      },
      datesSet() {
        renderCalendarEvents();
      },
      eventDidMount(info: EventMountArg) {
        const taskId = info.event.extendedProps?.taskId || info.event.id;
        const taskMap = new Map(tasks.map((t) => [String(t.id), t]));
        const task = taskMap.get(String(taskId));
        if (!task) return;

        const urgency = getTaskUrgency(task);
        applyUrgencyStyle(info.el.closest(".fc-event") || info.el, urgency);
      },
      dateClick: function (info: DateClickArg) {
        if (!taskCreationDiv) return;
        taskCreationDiv.style.display = "flex";
        taskCreationDiv.style.position = "fixed";
        taskCreationDiv.style.zIndex = "9999";
        taskCreationDiv.style.top = "50%";
        taskCreationDiv.style.left = "50%";
        taskCreationDiv.style.transform = "translate(-50%, -50%)";

        showOverlay();

        taskDateInput.value = info.dateStr;
        if (taskInput) taskInput.focus();

        document.body.appendChild(taskCreationDiv);

        (
          document.querySelector(".cancelTaskCreationBtn") as HTMLButtonElement
        ).addEventListener("click", () => {
          if (!taskCreationDiv) return;
          taskCreationDiv.style.display = "none";
          taskCreationDiv.style.position = "relative";
          taskCreationDiv.style.zIndex = "0";
          taskCreationDiv.style.top = "0px";
          taskCreationDiv.style.left = "0px";
          taskCreationDiv.style.transform = "none";

          hideOverlay();

          if (taskInput) taskInput.value = "";
          if (taskInput) taskInput.focus();
          if (taskDateInput) taskDateInput.value = "";

          if (toDoList && toDoListHeader)
            toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
        });

        (
          document.querySelector(".addTaskBtn") as HTMLButtonElement
        ).addEventListener("click", () => {
          addTask();

          if (
            !taskCreationDiv ||
            !addTaskBtn ||
            !taskInput ||
            !taskDateInput ||
            !toDoList ||
            !toDoListHeader
          )
            return;
          taskCreationDiv.style.display = "none";
          taskCreationDiv.style.position = "relative";
          taskCreationDiv.style.top = "0px";
          taskCreationDiv.style.left = "0px";
          taskCreationDiv.style.transform = "none";
          taskCreationDiv.style.order = "0";

          addTaskBtn.textContent = "Add Task";
          addTaskBtn.style.padding = "0px 10px";

          hideOverlay();

          if (taskInput) taskInput.value = "";
          if (taskInput) taskInput.focus();
          if (taskDateInput) taskDateInput.value = "";

          toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
        });
      },
    });
    if (calendar) calendar.render();
  } else {
    console.error("Calendar error");
  }
});

async function loadSavedItems() {
  const savedTasks = await db.tasks.toArray();
  const savedNotes = await db.notes.toArray();
  const savedActivities = await db.activity.toArray();

  if (savedTasks.length > 0) {
    tasks = savedTasks;
  } else {
    const legacyTasks = safeParse("tasks");
    if (legacyTasks.length > 0) {
      await db.tasks.bulkAdd(legacyTasks);
      tasks = legacyTasks;
    }
  }

  if (savedNotes.length > 0) {
    allNotes = savedNotes;
  } else {
    const legacyNotes = safeParse("notes");
    if (legacyNotes.length > 0) {
      await db.notes.bulkAdd(legacyNotes);
      allNotes = legacyNotes;
    }
  }

  if (savedActivities.length > 0) {
    activityLog = savedActivities;
  } else {
    const legacyActivities = safeParse("activity");
    if (legacyActivities.length > 0) {
      await db.activity.bulkAdd(legacyActivities);
      activityLog = legacyActivities;
    }
  }
}

function renderCalendarEvents() {
  if (!calendar) return;

  calendar.getEvents().forEach((event) => event.remove());

  const { startDate, endDate } = getCalendarRange();

  tasks.forEach((task) => {
    if (!task.dueDate) return;

    const dates =
      task.recurrence !== "none"
        ? getOccurrences(task, startDate, endDate)
        : [getTaskOccurrenceStart(task)];

    dates.filter(Boolean).forEach((date) => {
      addTaskToCalendar(task, date);
    });
  });
}

taskStatusSelector?.addEventListener("change", () => {
  const blockedTask = taskStatusSelector.value === "Blocked";

  if (blockedByDiv) blockedByDiv.style.display = blockedTask ? "block" : "none";

  if (blockedTask) {
    if (blockedByInput) blockedByInput.innerHTML = "";

    tasks.forEach((task) => {
      if (!task.completed && task.id !== editingTaskId) {
        const option = document.createElement("option");
        option.value = task.id;
        option.textContent = task.title;
        blockedByInput.appendChild(option);
      }
    });
  }
});

function saveEditedTask() {
  const task = tasks.find((t) => String(t.id) === String(editingTaskId));
  if (!task) return;

  if (taskInput) task.title = taskInput.value.trim();
  if (taskPrioritySelector) task.priority = taskPrioritySelector.value;
  if (taskDateInput) task.dueDate = taskDateInput.value || null;
  if (taskTimeInput) task.dueTime = taskTimeInput.value || null;
  if (taskStatusSelector)
    task.status = normalizeTaskStatus(taskStatusSelector.value);
  if (task.blockedByInput) task.blockedBy = task.blockedByInput.value || null;
  if (taskRecurrenceSelector)
    task.recurrence = task.dueDate ? taskRecurrenceSelector.value : "none";

  saveTasks();
  renderTasks(currentTaskSort);
  renderCalendarEvents();
  refreshTaskDropdown();
  editingTaskId = null;
  isEditing = false;
  if (taskCreationDiv) {
    taskCreationDiv.style.display = "none";
    taskCreationDiv.style.position = "relative";
    taskCreationDiv.style.top = "0px";
    taskCreationDiv.style.left = "0px";
    taskCreationDiv.style.transform = "none";
    taskCreationDiv.style.order = "0";
    taskCreationDiv.style.zIndex = "0";
  }

  hideOverlay();
  if (toDoList && taskCreationDiv && toDoListHeader)
    toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
}

/* function createSubtask() {
  return {
    id: crypto.randomUUID(),
    title: taskInput?.value.trim(),
    completed: false,
    priority: taskPrioritySelector?.value,
    dueDate: taskDateInput?.value || null,
    dueTime: taskTimeInput?.value || null,
    status: taskStatusSelector?.value,
    recurrence: taskRecurrenceSelector?.value,
    createdAt: Date.now(),
  };
}

function addSubtask(parentTaskId: string) {
  const parentTask = tasks.find((t) => String(t.id) === String(parentTaskId));
  if (!parentTask) return;

  if (!parentTask.subtasks) parentTask.subtasks = [];

  const subtask = createSubtask();
  parentTask.subtasks.push(subtask);
  saveTasks();

  if (!taskCreationDiv) return;
  taskCreationDiv.style.display = "none";
  taskCreationDiv.style.position = "relative";
  taskCreationDiv.style.top = "0px";
  taskCreationDiv.style.left = "0px";
  taskCreationDiv.style.transform = "none";
  taskCreationDiv.style.order = "0";
  taskCreationDiv.style.zIndex = "0";

  hideOverlay();
  toDoList.insertBefore(taskCreationDiv, toDoListHeader.nextSibling);
  renderTasks(currentTaskSort);
}

/* function createSubtaskElement(subtask: Task) {
  const subtaskEl = document.createElement("li");
  subtaskEl.className = "subtask";

  const subtaskCheckbox = document.createElement("input");
  subtaskCheckbox.type = "checkbox";
  subtaskCheckbox.className = "subtaskCheckbox";
  subtaskCheckbox.checked = subtask.completed;

  const subtaskTitle = document.createElement("span");
  subtaskTitle.textContent = subtask.title;

  const subtaskDate = document.createElement("span");
  subtaskDate.className = "subtaskDate";
  if (subtask.dueDate) {
    const dueDate = new Date(subtask.dueDate);
    const options = { month: "short", day: "numeric" } as const;
    subtaskDate.textContent = dueDate.toLocaleDateString("en-US", options);
  }

  const subtaskTime = document.createElement("span");
  subtaskTime.className = "subtaskTime";
  if (subtask.dueTime) {
    const [hour, minute] = subtask.dueTime.split(":");
    const date = new Date();
    date.setHours(Number(hour), Number(minute));
    const options = { hour: "numeric", minute: "numeric" } as const;
    subtaskTime.textContent = date.toLocaleTimeString("en-US", options);
  }

  subtaskCheckbox.addEventListener("change", () => {
    subtask.completed = subtaskCheckbox.checked;
    saveTasks();
    renderTasks(currentTaskSort);
  });

  subtaskEl.append(subtaskCheckbox, subtaskTitle);

  return subtaskEl;
} */

sidebarBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebarBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

dashboardBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("dashboardActive");
  document.documentElement.classList.remove("isSettingsView");
  document.documentElement.classList.remove("calendarView");
  document.documentElement.classList.remove("automationsActive");
  document.documentElement.classList.remove("projectsActive");

  localStorage.setItem("lastActiveView", "dashboard");
});

projectsBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("projectsActive");
  document.documentElement.classList.remove("isSettingsView");
  document.documentElement.classList.remove("calendarView");
  document.documentElement.classList.remove("automationsActive");
  document.documentElement.classList.remove("dashboardActive");

  localStorage.setItem("lastActiveView", "projects");
});

automationsBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("automationsActive");
  document.documentElement.classList.remove("dashboardActive");
  document.documentElement.classList.remove("isSettingsView");
  document.documentElement.classList.remove("calendarView");
  document.documentElement.classList.remove("projectsActive");

  localStorage.setItem("lastActiveView", "automations");
});

/* calendarBtn?.addEventListener("click", () => {
  /* document.documentElement.classList.add("calendarView");
  document.documentElement.classList.remove("dashboardActive");
  document.documentElement.classList.remove("isSettingsView");
  document.documentElement.classList.remove("automationsActive");

  localStorage.setItem("lastActiveView", "calendar");
  alert("Calendar view coming soon!");
  dashboardBtn?.click();
}); */

settingsBtn?.addEventListener("click", () => {
  document.documentElement.classList.add("isSettingsView");
  document.documentElement.classList.remove("dashboardActive");
  document.documentElement.classList.remove("calendarView");
  document.documentElement.classList.remove("automationsActive");
  document.documentElement.classList.remove("projectsActive");

  localStorage.setItem("lastActiveView", "settings");

  preferredNameInput.value = localStorage.getItem("preferredName") || "";
  fullNameInput.value = localStorage.getItem("fullName") || "";
});

const settingsSections = document.querySelectorAll<HTMLDivElement>(
  ".actualSettings > div",
);

settingsNavOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.preventDefault();

    settingsNavOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");

    settingsSections.forEach((section) => {
      section.style.display = "none";
    });

    const target = option.getAttribute("href")?.substring(1);
    if (target)
      (
        document.querySelector(`.${target}Section`) as HTMLDivElement
      ).style.display = "flex";
  });
});

function setupDate(language?: SupportedLanguage) {
  const now = new Date();
  const activeLang =
    language || (localStorage.getItem("appLanguage") as SupportedLanguage) || "en";
  currentDate.textContent = now.toLocaleDateString(activeLang, {
    dateStyle: "full",
  });
}

function getGreeting(hour: number, language?: SupportedLanguage) {
  const activeLang = language || "en";
  const greetingMap: Record<"morning" | "afternoon" | "evening", Record<SupportedLanguage, string>> = {
    morning: { 
      en: "Good morning", es: "Buenos días", fr: "Bonjour", de: "Guten Morgen", 
      zh: "早上好", ja: "おはようございます", ko: "좋은 아침입니다", ru: "Доброе утро", 
      ar: "صباح الخير", pt: "Bom dia", hi: "सुप्रभात" 
    },
    afternoon: { 
      en: "Good afternoon", es: "Buenas tardes", fr: "Bon après-midi", de: "Guten Tag", 
      zh: "下午好", ja: "こんにちは", ko: "안녕하세요", ru: "Добрый день", 
      ar: "مساء الخير", pt: "Boa tarde", hi: "नमस्कार" 
    },
    evening: { 
      en: "Good evening", es: "Buenas noches", fr: "Bonsoir", de: "Guten Abend", 
      zh: "晚上好", ja: "こんばんは", ko: "좋은 저녁입니다", ru: "Добрый вечер", 
      ar: "مساء الخير", pt: "Boa noite", hi: "शुभ संध्या" 
    }
  };
  if (hour < 12) return greetingMap.morning[activeLang];
  else if (hour < 18) return greetingMap.afternoon[activeLang];
  else return greetingMap.evening[activeLang];
}

function setupGreeting(language?: SupportedLanguage) {
  const activeLang =
    language || (localStorage.getItem("appLanguage") as SupportedLanguage) || "en";
  const preferredName =
    localStorage.getItem("preferredName") ||
    preferredNameInput.value.trim() ||
    "";
  const fullName =
    localStorage.getItem("fullName") || fullNameInput.value.trim() || "";

  const hour = new Date().getHours();
  const greeting = getGreeting(hour, activeLang);

  const name = preferredName || fullName;

  dynamicGreeting.textContent = name ? `${greeting}, ${name}` : greeting;
}

changeAvatarBtn?.addEventListener("click", () => {
  avatarInput.click();
});

avatarInput?.addEventListener("change", () => {
  const file = avatarInput.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target?.result as string;
    localStorage.setItem("avatar", dataUrl);
    avatarPreviewIcon.src = dataUrl;
  };
  reader.readAsDataURL(file);

  if (avatarIcon) avatarIcon.src = URL.createObjectURL(file);
  localStorage.setItem("avatar", URL.createObjectURL(file));
});

avatarPresetsBtn?.addEventListener("click", () => {
  if (avatarPresetsDiv) avatarPresetsDiv.classList.toggle("show");
  if (overlay)
    overlay.style.display = avatarPresetsDiv?.classList.contains("show")
      ? "block"
      : "none";
  document.querySelectorAll("body > *").forEach((el) => {
    if (el !== overlay && el !== avatarPresetsDiv)
      (el as HTMLElement).inert = avatarPresetsDiv?.classList.contains("show");
  });
});

closeAvatarPresets?.addEventListener("click", () => {
  if (avatarPresetsDiv) avatarPresetsDiv.classList.remove("show");
  if (overlay) overlay.style.display = "none";
  document
    .querySelectorAll("body >  *")
    .forEach((el) => ((el as HTMLElement).inert = false));
});

avatarPresetItems?.forEach((item) => {
  item.addEventListener("click", () => {
    const presetSrc = item.querySelector("img")?.src;
    if (!presetSrc) return;

    avatarPreviewIcon.src = presetSrc;
    avatarIcon.src = presetSrc;
    localStorage.setItem("avatar", presetSrc);

    if (avatarPresetsDiv) avatarPresetsDiv.classList.remove("show");
    if (overlay) overlay.style.display = "none";
    document
      .querySelectorAll("body >  *")
      .forEach((el) => ((el as HTMLElement).inert = false));
  });
});

fullNameInput?.addEventListener("input", () => {
  localStorage.setItem("fullName", fullNameInput.value.trim());
  setupGreeting();
});

preferredNameInput?.addEventListener("input", () => {
  localStorage.setItem("preferredName", preferredNameInput.value.trim());
  setupGreeting();
});

setupDate(localStorage.getItem("appLanguage") as SupportedLanguage || "en");
setupGreeting(localStorage.getItem("appLanguage") as SupportedLanguage || "en");

enableNotificationsBtn?.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      askForNotifications.style.display = "none";
      localStorage.setItem("askForNotiDisplay", "none");
    } else {
      askForNotifications.style.display = "inline";
      localStorage.setItem("askForNotiDisplay", "visible");
    }
  });
});

closeNotiPopup?.addEventListener("click", () => {
  askForNotifications.remove();
  localStorage.setItem("askForNotiDisplay", "none");

  const notiReminderDiv = document.createElement("div");
  notiReminderDiv.className = "notiReminderDiv";

  const notiReminderText = document.createElement("div");
  notiReminderText.className = "notiReminderText";
  notiReminderText.textContent =
    "You can always setup notifications in settings.";
  notiReminderDiv.appendChild(notiReminderText);

  notiReminderDiv.classList.add("show");
  document.body.appendChild(notiReminderDiv);
  setTimeout(() => {
    if (notiReminderDiv.parentNode) {
      notiReminderDiv.parentNode.removeChild(notiReminderDiv);
    }
  }, 4000);
});

const savedMode = localStorage.getItem("mode");
if (savedMode) {
  document.documentElement.dataset.mode = savedMode;
}

themeBtn?.addEventListener("click", () => {
  const currentMode = document.documentElement.dataset.mode;
  const newMode = currentMode === "dark" ? "light" : "dark";
  document.documentElement.dataset.mode = newMode;
  localStorage.setItem("mode", newMode);
  updateFavicon();
  updateAppLogo();

  const savedBgTheme = localStorage.getItem("customBgTheme") || "default";
  if (savedBgTheme) applyBgTheme(savedBgTheme);

  const savedAccentTheme = localStorage.getItem("customAccentTheme");
  if (savedAccentTheme) applyAccentTheme(savedAccentTheme);

  if (newMode === "dark") {
    themeBtn.innerHTML = `<img src="/images/Light-Mode-Icon.png" alt="Light Mode Icon" class="themeIcon">`;
    console.log("theme icon updated to:", themeBtn.querySelector("img")!.src);
  } else {
    themeBtn.innerHTML = `<img src="/images/Dark-Mode-Icon.png" alt="Dark Mode Icon" class="themeIcon">`;
    console.log("theme icon updated to:", themeBtn.querySelector("img")!.src);
  }
  resetCustomTextColors();
});

window.addEventListener("load", () => {
  if (isDark() && themeBtn) {
    themeBtn.innerHTML = `<img src="/images/Light-Mode-Icon.png" alt="Light Mode Icon" class="themeIcon">`;
  } else {
    if (themeBtn)
      themeBtn.innerHTML = `<img src="/images/Dark-Mode-Icon.png" alt="Dark Mode Icon" class="themeIcon">`;
  }
});

if (noTasksYetAlert && noNotesYetAlert) {
  noTasksYetAlert.style.display = "inline";
  noNotesYetAlert.style.display = "inline";
}

function normalizeTaskStatus(status: string | null): string {
  if (!status) return "To Do";
  const normalized = status.toLowerCase().replace(/\s/g, "-");

  if (normalized === "todo") return "To Do";
  if (normalized === "in-progress") return "In Progress";
  if (normalized === "blocked") return "Blocked";
  if (normalized === "done") return "Done";

  return status;
}

/* taskViewSelector?.addEventListener("change", () => {
  setTaskView(taskViewSelector.value);
}); */

let currentDraggedTask = null;

[toDoDropZone, inProgressDropZone, allDoneDropZone].forEach((zone) => {
  zone?.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone?.classList.add("drag-over-active");
  });

  zone?.addEventListener("dragleave", () => {
    zone?.classList.remove("drag-over-active");
  });

  zone?.addEventListener("drop", (e) => {
    e.preventDefault();
    zone?.classList.remove("drag-over-active");

    const taskId = e.dataTransfer?.getData("text/plain");
    if (!taskId) return;

    const draggedTaskCard = document.querySelector(`[data-id="${taskId}"]`);
    if (!draggedTaskCard) return;

    const draggedTask = draggedTaskCard.closest(".listTask") as HTMLElement;
    if (!draggedTask) return;

    const task = tasks.find((t) => String(t.id) === String(taskId));
    if (!task) return;

    const newStatus = normalizeTaskStatusLabel(zone.dataset.status ?? "");
    task.status = newStatus;

    draggedTask.dataset.status = normalizeTaskStatus(newStatus);
    draggedTask.classList.toggle("completed", newStatus === "Done");
    if (zone) zone.appendChild(draggedTask);

    saveTasks();
  });
});

addBtn?.addEventListener("click", () => {
  if (taskCreationDiv) taskCreationDiv.style.display = "flex";
  if (taskInput) taskInput.value = "";
  taskInput?.focus();
  if (taskPrioritySelector) taskPrioritySelector.value = "None";
  if (taskDateInput) taskDateInput.value = "";
  if (taskTimeInput) taskTimeInput.value = "";
  if (taskStatusSelector) taskStatusSelector.value = "To Do";
  if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
  if (toDoList) toDoList.style.height = "495px";
  if (focusTimer) focusTimer.style.height = "496.5px";
});

cancelTaskCreationBtn?.addEventListener("click", () => {
  if (taskCreationDiv) taskCreationDiv.style.display = "none";
  if (toDoList) toDoList.style.height = "328.5px";
  if (focusTimer) focusTimer.style.height = "330px";
  if (taskRecurrenceSelector) taskRecurrenceSelector.value = "none";
});

addTaskBtn?.addEventListener("click", async () => {
  if (currentParentTaskId) {
    // addSubtask(String(currentParentTaskId));
    currentParentTaskId = null;
  } else if (isEditing) {
    await saveEditedTask();
  } else {
    await addTask();
  }
  showNoTasksYet();
  renderWhatToFocusOn();
  renderUpcomingTasks();
  renderStaleTasks();
});

function showNoTasksYet() {
  if (noTasksYetAlert)
    noTasksYetAlert.style.display = tasks.length === 0 ? "inline" : "none";
}

function showNoNotesYet() {
  if (notesList?.children.length === 0 && noNotesYetAlert) {
    noNotesYetAlert.style.display = "inline";
  } else {
    if (noNotesYetAlert) noNotesYetAlert.style.display = "none";
  }
}

function updateTasksOverdueCount() {
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  const overdueTasks = tasks.filter((t) => {
    if (!t.dueDate) return false;

    const currentOccurrence = getCurrentOccurrence(t, now);
    if (!currentOccurrence) return false;

    const dueDate = formatDateInputValue(currentOccurrence);
    if (today) return dueDate < today && !t.completed;
    return false;
  }).length;

  const overdueDisplay = document.querySelector(".numberOfTasksOverdue");
  if (!overdueDisplay) return;
  overdueDisplay.textContent = `${overdueTasks} task${overdueTasks === 1 ? "" : "s"} overdue`;
}

function updateTasksDueTodayCount() {
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  const dueTodayTasks = tasks.filter((t) => {
    if (!t.dueDate) return false;

    const currentOccurrence = getCurrentOccurrence(t, now);
    if (!currentOccurrence) return false;

    const dueDate = formatDateInputValue(currentOccurrence);
    return dueDate === today && !t.completed;
  }).length;

  const dueTodayDisplay = document.querySelector(".numberOfTasksDueToday");
  if (!dueTodayDisplay) return;
  dueTodayDisplay.textContent = `${dueTodayTasks} task${dueTodayTasks === 1 ? "" : "s"} due today`;
}

function updateBlockedTasksCount() {
  const blockedTasks = tasks.filter(
    (t) => t.status === "Blocked" && !t.completed,
  ).length;

  const blockedDisplay = document.querySelector(".numberOfBlockedTasks");
  if (blockedDisplay)
    blockedDisplay.textContent = `${blockedTasks} blocked task${blockedTasks === 1 ? "" : "s"}`;
}

function updateTasksDoneCount() {
  const doneTasks = tasks.filter((t) => t.completed).length;

  const doneDisplay = document.querySelector(".taskCount");
  if (doneDisplay)
    doneDisplay.textContent = `${doneTasks} task${doneTasks === 1 ? "" : "s"} done`;
}

function checkTaskDue(listTask: HTMLElement, taskText: string, task: Task) {
  const checkbox = listTask.querySelector(".taskCheckbox");
  if (Notification.permission !== "granted" || task.completed) return;

  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");

  if (!listTask) return;
  const currentOccurrence = getCurrentOccurrence(task, now);
  if (!currentOccurrence) return;

  const dueDate = formatDateInputValue(currentOccurrence);
  const dueTime = listTask.dataset.dueTime || task.dueTime;
  if (dueDate === today && listTask.dataset.dateNotified !== "true") {
    new Notification("Task Due Today", {
      body: `Your task "${taskText}" is due today.`,
    });
    listTask.dataset.dateNotified = "true";
  }

  if (
    dueDate === today &&
    dueTime &&
    listTask.dataset.timeNotified !== "true"
  ) {
    const [hour, minute] = dueTime.split(":").map(Number);

    const due = new Date(now);
    due.setHours(Number(hour), Number(minute), 0, 0);
    if (now >= due) {
      new Notification("Task Due Now", {
        body: `Your task "${taskText}" is due now.`,
      });
      listTask.dataset.timeNotified = "true";
    }
  }
}

async function toggleAI() {
  const isChecked = aiToggle?.checked ?? false;
  await saveSettings("aiEnabled", isChecked);
  if (agentBtn) agentBtn.style.display = isChecked ? "flex" : "none";
  if (apiKeyInput) apiKeyInput.disabled = !isChecked;
}

async function loadAIState() {
  const aiEnabled = await getSettings("aiEnabled", false);
  const savedApiKey = await getSettings<string | null>("apiKey", null);
  const savedTavilyApiKey = await getSettings<string | null>(
    "tavilyApiKey",
    null,
  );
  if (aiToggle) aiToggle.checked = aiEnabled;
  if (agentBtn) agentBtn.style.display = aiEnabled ? "flex" : "none";
  if (apiKeyInput) {
    apiKeyInput.disabled = !aiEnabled;
    apiKeyInput.value = savedApiKey ?? "";
  }
  if (tavilyApiKeyInput) {
    tavilyApiKeyInput.disabled = !aiEnabled;
    tavilyApiKeyInput.value = savedTavilyApiKey ?? "";
  }
}

aiToggle?.addEventListener("change", toggleAI);
loadAIState();

apiKeyInput?.addEventListener("input", async () => {
  const apiKey = apiKeyInput.value.trim();
  await saveSettings("apiKey", apiKey);
});

tavilyApiKeyInput?.addEventListener("input", async () => {
  const tavilyApiKey = tavilyApiKeyInput.value.trim();
  await saveSettings("tavilyApiKey", tavilyApiKey);
});

agentBtn?.addEventListener("click", () => {
  defaultAgent?.classList.add("selected");
  selectedAgentDiv.textContent = `Selected Agent: ${agentConfig[selectedAgent as keyof typeof agentConfig].name}`;
  if (agentDiv) agentDiv.classList.toggle("show");
  if (overlay)
    overlay.style.display = agentDiv?.classList.contains("show")
      ? "block"
      : "none";
  document.querySelectorAll("body > *").forEach((el) => {
    if (el !== overlay && el !== agentDiv)
      (el as HTMLElement).inert = agentDiv?.classList.contains("show");
  });
});

closeAgentBtn?.addEventListener("click", () => {
  agentItems?.forEach((i) => i.classList.remove("selected"));
  if (agentDiv) agentDiv.classList.remove("show");
  if (!overlay) return;
  overlay.style.display = "none";
  document
    .querySelectorAll("body > *")
    .forEach((el) => ((el as HTMLElement).inert = false));
  agentInstructionsInput.value = "";
});

const agentConfig = {
  plannerAgent: {
    name: "Planner Agent",
    placeholder: "Tell Dewen what you want to plan...",
  },
  researcherAgent: {
    name: "Researcher Agent",
    placeholder: "Tell Dewen what you want to research...",
  },
  prioritizerAgent: {
    name: "Prioritizer Agent",
    placeholder: "Tell Dewen what you want to prioritize...",
  },
  organizerAgent: {
    name: "Organizer Agent",
    placeholder: "Tell Dewen what you want to organize...",
  },
};

agentItems?.forEach((item) => {
  item.addEventListener("click", () => {
    selectedAgent = item.getAttribute("data-agent") ?? "Planner Agent";

    agentItems?.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");
    selectedAgentDiv.textContent = `Selected Agent: ${agentConfig[selectedAgent as keyof typeof agentConfig].name}`;
    console.log("Selected Agent:", selectedAgent);
    if (agentInstructionsInput) {
      agentInstructionsInput.placeholder =
        agentConfig[selectedAgent as keyof typeof agentConfig].placeholder;
    }
  });
});

runAgentBtn?.addEventListener("click", async () => {
  const instructions = agentInstructionsInput?.value.trim();
  if (!instructions) return;

  const btn = document.querySelector(".runAgentBtn") as HTMLButtonElement;
  const btnText = document.querySelector(".runAgentBtnText") as HTMLSpanElement;
  const btnSpinner = document.querySelector(
    ".runAgentSpinner",
  ) as HTMLDivElement;

  btn.disabled = true;
  if (btnText) btnText.textContent = "Running...";
  if (btnSpinner) btnSpinner.style.display = "inline-block";

  try {
    switch (selectedAgent) {
      case "plannerAgent":
        await runPlannerAgent(instructions);
        break;
      case "researcherAgent":
        await runResearcherAgent(instructions);
        break;
      case "prioritizerAgent":
        await runPrioritizerAgent(instructions);
        break;
      default:
        throw new Error("Unknown agent selected.");
    }
    agentInstructionsInput.value = "";
  } catch (error) {
    console.error("Error running planner agent:", error);

    if (agentInstructionsInput) {
      agentInstructionsInput.value = "";
      agentInstructionsInput.placeholder =
        error instanceof Error
          ? error.message
          : "The planner agent failed to run.";
    }
  } finally {
    btn.disabled = false;
    if (btnText) btnText.textContent = "Run Agent";
    if (btnSpinner) btnSpinner.style.display = "none";
  }
});

function getTimeAgo(timestamp: number) {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  if (days === 1) return "yesterday";
  return `${days} days ago`;
}

function getActivityIcon(type: string) {
  const activityIcons = {
    task: "/images/Checkmark.png",
    note: "/images/Note-Icon.png",
    focus: "/images/Clock.png",
    delete: "/images/Delete-Icon.png",
  };
  const normalizedActivityType = type?.toLowerCase().trim();
  if (normalizedActivityType && normalizedActivityType in activityIcons)
    return (
      activityIcons[normalizedActivityType as keyof typeof activityIcons] || ""
    );
  return "";
}

function renderActivity(activity: Activity) {
  const activityItem = document.createElement("li");
  activityItem.className = `activityItem activityItem--${activity.type}`;

  const activityIcon = document.createElement("img");
  activityIcon.className = `activityIcon activityIcon--${activity.type}`;
  activityIcon.src = getActivityIcon(activity.type);
  activityIcon.alt = activity.type;
  activityIcon.onerror = () => {
    activityIcon.style.display = "none";
  };

  const activityMainContent = document.createElement("div");
  activityMainContent.className = "activityMainContent";

  const activityMessage = document.createElement("div");
  activityMessage.className = "activityMessage";
  activityMessage.textContent = activity.message;

  const activityTime = document.createElement("div");
  activityTime.className = "activityTime";
  activityTime.textContent = getTimeAgo(activity.timestamp);

  activityItem.appendChild(activityIcon);
  activityMainContent.appendChild(activityMessage);
  activityMainContent.appendChild(activityTime);
  activityItem.appendChild(activityMainContent);
  if (activityList) activityList.appendChild(activityItem);
}

function addActivity(message: string, type = "info") {
  if (!message) return;

  const activity = {
    id: crypto.randomUUID(),
    message,
    type,
    timestamp: Date.now(),
  };

  if (activityLog.length > 50) activityLog.pop();

  activityLog.unshift(activity);
  saveActivityLog();
}

function refreshTaskDropdown() {
  if (taskSelectionDropdown)
    taskSelectionDropdown.innerHTML = `<option value="" disabled selected>Choose a task to focus on...</option>`;

  tasks.forEach((task) => {
    if (!task.completed) {
      const option = document.createElement("option");
      option.value = task.id;
      option.textContent = task.title;
      if (taskSelectionDropdown) taskSelectionDropdown.appendChild(option);
    }
  });
}

function renderNotes() {
  if (!notesList) return;
  notesList.innerHTML = "";
  allNotes.forEach(createNoteElement);
}

function checkTaskNotifications() {
  syncRecurringTasks();
  tasks.forEach((task) => {
    const listTask = document.getElementById(`task-${task.id}`);
    if (!listTask) return;
    checkTaskDue(listTask, task.title, task);
  });
}

checkTaskNotifications();
setInterval(checkTaskNotifications, 60 * 1000);

const circumference = 283;
let totalTime = 25 * 60;
let totalSeconds = totalTime;
let intervalId: number | null = null;
let isRunning = false;

if (pauseTimerBtn) pauseTimerBtn.style.display = "none";

function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (timerMinutes)
    timerMinutes.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function updateRing(timeLeft: number) {
  const fraction = timeLeft / totalTime;
  const offset = circumference - fraction * circumference;
  if (timerProgressRing)
    timerProgressRing.style.strokeDashoffset = String(offset);
}

lengthButtons.forEach((button) => {
  button.addEventListener("click", () => {
    saveTimerState();
    if (timerOptionsDropdown) timerMode = timerOptionsDropdown.value;
    const minutes = parseInt(button.textContent);
    if (!Number.isFinite(minutes)) return;
    totalTime = minutes * 60;
    restartTimer();
  });
});

timerOptionsDropdown?.addEventListener("change", () => {
  timerMode = timerOptionsDropdown.value;
  if (timerMode === "focus") {
    totalTime = 25 * 60;
  } else if (timerMode === "decrastinator") {
    totalTime = 3 * 60;
  } else {
    totalTime = 10 * 60;
  }

  restartTimer();
});

function enterFocusMode() {
  if (!taskSelectionDropdown?.value) return;
  focusMode = true;
  const selectedOption =
    taskSelectionDropdown.options[taskSelectionDropdown.selectedIndex];
  if (!selectedOption) return;
  activeFocusTask = selectedOption.text;
  startTimer();
}

function startTimerFromCommandBar(duration: number, taskTitle?: string | null) {
  if (taskTitle) {
    const task = tasks.find((t) => t.title === taskTitle);
    if (task) {
      focusMode = true;
      activeFocusTask = task.title;
      if (taskSelectionDropdown) {
        const optionToSelect = Array.from(taskSelectionDropdown.options).find(
          (option) => option.text === task.title,
        );
        if (optionToSelect) taskSelectionDropdown.value = optionToSelect.value;
      }
    }
  }

  totalTime = duration * 60;
  totalSeconds = totalTime;
  updateTimerDisplay();
  updateRing(totalTime);
  startTimer();
}
// create a function where it local storages the timer state and mode so that if the user refreshes the page, the timer continues from where it left off

function saveTimerState(endTime: number | null = null) {
  const timerState = {
    totalSeconds,
    totalTime,
    timerMode,
    isRunning,
    focusMode,
    activeFocusTask,
    endTime,
  };
  localStorage.setItem("timerState", JSON.stringify(timerState));
}

function loadTimerState() {
  const savedState = localStorage.getItem("timerState");
  if (savedState) {
    const {
      totalSeconds: savedTotalSeconds,
      totalTime: savedTotalTime,
      timerMode: savedTimerMode,
      isRunning: savedIsRunning,
      focusMode: savedFocusMode,
      activeFocusTask: savedActiveFocusTask,
      endTime: savedEndTime,
    } = JSON.parse(savedState);
    totalTime = savedTotalTime;
    timerMode = savedTimerMode;
    if (timerOptionsDropdown) timerOptionsDropdown.value = timerMode;
    isRunning = savedIsRunning;
    focusMode = savedFocusMode;
    activeFocusTask = savedActiveFocusTask;

    totalSeconds = savedIsRunning
      ? Math.max(
          0,
          Math.round(
            ((savedEndTime ?? Date.now() + savedTotalSeconds * 1000) -
              Date.now()) /
              1000,
          ),
        )
      : savedTotalSeconds;

    if (savedIsRunning && activeFocusTask && currentFocusedTask) {
      currentFocusedTask.textContent = "Focusing on: " + activeFocusTask;
      currentFocusedTask.style.display = "inline";
      currentFocusedTask.dataset.order = "2";
      if (taskSelectionDropdown) taskSelectionDropdown.style.display = "none";
    }

    if (timerMode === "decrastinator") {
      if (currentFocusedTask) {
        currentFocusedTask.textContent = "Decrastinating";
        currentFocusedTask.style.display = "inline";
      }
      if (taskSelectionDropdown) taskSelectionDropdown.style.display = "none";
    } else if (timerMode === "break") {
      if (currentFocusedTask) {
        currentFocusedTask.textContent = "Taking a break";
        currentFocusedTask.style.display = "inline";
      }
      if (taskSelectionDropdown) taskSelectionDropdown.style.display = "none";
    }

    updateTimerDisplay();
    updateRing(totalSeconds);

    if (savedIsRunning && totalSeconds > 0) {
      isRunning = false;
      startTimer(false);
    } else if (savedIsRunning && totalSeconds <= 0) {
      restartTimer();
    } else {
      isRunning = false;
      // Keep a paused timer's remaining time, but restore the controls for its
      // mode instead of leaving behind the previous running layout.
      focusMode = false;
      activeFocusTask = undefined;
      if (currentFocusedTask) currentFocusedTask.style.display = "none";
      if (taskSelectionDropdown) {
        taskSelectionDropdown.style.display =
          timerMode === "focus" ? "block" : "none";
        if (timerMode === "focus" && savedActiveFocusTask) {
          const savedTaskOption = Array.from(taskSelectionDropdown.options).find(
            (option) => option.text === savedActiveFocusTask,
          );
          if (savedTaskOption) taskSelectionDropdown.value = savedTaskOption.value;
        }
      }
      lengthButtons.forEach((button) => {
        button.style.display = "";
      });
      if (timerButtons) timerButtons.style.marginTop = "0px";
      if (startTimerBtn) startTimerBtn.style.display = "flex";
      if (pauseTimerBtn) pauseTimerBtn.style.display = "none";
    }
  }
}

function startTimer(logActivity = true) {
  if (isRunning) return;

  if (timerMode === "focus") {
    if (!taskSelectionDropdown?.value && !focusMode) return;
    const selectedFocusedTask = focusMode
      ? activeFocusTask
      : (taskSelectionDropdown?.selectedOptions?.[0]?.textContent as string) ||
        "Unknown task";
    activeFocusTask = selectedFocusedTask;
    if (currentFocusedTask) {
      currentFocusedTask.textContent = "Focusing on: " + selectedFocusedTask;
      currentFocusedTask.style.display = "inline";
      currentFocusedTask.dataset.order = "2";
    }
    if (taskSelectionDropdown) taskSelectionDropdown.style.display = "none";
    addActivity(`Started focus session: ${selectedFocusedTask}`, "focus");
    if (logActivity)
      addActivity(`Started focus session: ${selectedFocusedTask}`, "focus");
    const currentFocusedTaskDiv = document.querySelector<HTMLDivElement>(
      ".currentFocusedTaskDiv",
    );
    if (currentFocusedTaskDiv && taskSelectionDropdown) {
      currentFocusedTaskDiv.style.gap = "5px";
      currentFocusedTaskDiv.style.display = "flex";
      taskSelectionDropdown.style.display = "none";
    }
  } else if (timerMode === "decrastinator") {
    if (currentFocusedTask) {
      currentFocusedTask.textContent = "Decrastinating";
      currentFocusedTask.style.display = "inline";
    }
  } else {
    if (currentFocusedTask) {
      currentFocusedTask.textContent = "Taking a break";
      currentFocusedTask.style.display = "inline";
    }
  }

  if (timerButtons) timerButtons.style.marginTop = "15px";

  isRunning = true;
  saveTimerState();
  if (startTimerBtn) startTimerBtn.style.display = "none";
  if (pauseTimerBtn) pauseTimerBtn.style.display = "flex";

  const endTime = Date.now() + totalSeconds * 1000;

  intervalId = setInterval(() => {
    const remaining = Math.max(0, Math.round((endTime - Date.now()) / 1000));
    totalSeconds = remaining;
    updateTimerDisplay();
    updateRing(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(intervalId as number);
      intervalId = null;
      isRunning = false;
      if (
        typeof Notification !== "undefined" &&
        Notification.permission === "granted"
      ) {
        if (timerMode === "focus") {
          new Notification("Focus session finished! Take a break.");
        } else if (timerMode === "decrastinator") {
          new Notification("Decrastination session finished! Ready to focus.");
        } else {
          new Notification("Break time is over! Ready to focus.");
        }
      }
      const currentFocusedTaskDiv = document.querySelector<HTMLDivElement>(
        ".currentFocusedTaskDiv",
      );
      if (currentFocusedTaskDiv) currentFocusedTaskDiv.style.display = "none";
      if (taskSelectionDropdown) taskSelectionDropdown.style.display = "block";
      if (startTimerBtn) startTimerBtn.style.display = "flex";
      if (pauseTimerBtn) pauseTimerBtn.style.display = "none";
      restartTimer();
    }
    saveTimerState(endTime);
  }, 1000);
  saveTimerState(endTime);
}

function pauseTimer() {
  clearInterval(intervalId as number);
  isRunning = false;
  saveTimerState(null);
  if (startTimerBtn) startTimerBtn.style.display = "flex";
  if (pauseTimerBtn) pauseTimerBtn.style.display = "none";
}

function restartTimer() {
  clearInterval(intervalId as number);
  isRunning = false;
  focusMode = false;
  activeFocusTask = undefined;
  totalSeconds = totalTime;
  updateTimerDisplay();
  updateRing(totalTime);
  if (startTimerBtn) startTimerBtn.style.display = "flex";
  if (pauseTimerBtn) pauseTimerBtn.style.display = "none";
  if (!focusMode) {
    if (currentFocusedTask) currentFocusedTask.style.display = "none";
  }
  focusMode = false;
  activeFocusTask = undefined;

  if (timerMode === "focus") {
    const currentFocusedTaskDiv = document.querySelector<HTMLDivElement>(
      ".currentFocusedTaskDiv",
    );
    if (taskSelectionDropdown) taskSelectionDropdown.style.display = "block";
    if (currentFocusedTaskDiv) currentFocusedTaskDiv.style.display = "flex";
    if (currentFocusedTask) currentFocusedTask.style.display = "none";
    if (timerButtons) timerButtons.style.marginTop = "0px";
  } else if (timerMode === "decrastinator") {
    if (taskSelectionDropdown) taskSelectionDropdown.style.display = "none";
    if (currentFocusedTask) currentFocusedTask.style.display = "none";
    if (timerButtons) timerButtons.style.marginTop = "0px";
  } else {
    if (taskSelectionDropdown) taskSelectionDropdown.style.display = "none";
    if (currentFocusedTask) currentFocusedTask.style.display = "none";
    if (timerButtons) timerButtons.style.marginTop = "0px";
  }
  saveTimerState(null);
}

startTimerBtn?.addEventListener("click", () => {
  if (timerOptionsDropdown) timerMode = timerOptionsDropdown.value;
  if (timerMode === "focus") {
    enterFocusMode();
  } else {
    startTimer();
  }
});
pauseTimerBtn?.addEventListener("click", pauseTimer);
restartTimerBtn?.addEventListener("click", restartTimer);

updateTimerDisplay();

addBtn2?.addEventListener("click", () => {
  if (noteCreationDiv) noteCreationDiv.style.display = "flex";
  if (noteInput) noteInput.focus();
});

let selectedNoteColor: string | null = null;

noteColorOptions.forEach((button) => {
  button.addEventListener("click", () => {
    if (button && button.dataset.color) {
      selectedNoteColor = button.dataset.color;
      if (noteInput) noteInput.style.backgroundColor = selectedNoteColor;
    }
  });
});

cancelNoteCreationBtn?.addEventListener("click", () => {
  if (noteCreationDiv) noteCreationDiv.style.display = "none";
  if (noteInput) noteInput.style.backgroundColor = "";
  selectedNoteColor = null;
});

addNoteBtn?.addEventListener("click", () => {
  addNote();
  showNoNotesYet();
});

notesList?.addEventListener("mouseover", (e) => {
  const targetEl = e.target as HTMLElement | null;
  if (!targetEl) return;
  const closestMainNote = targetEl.closest(".mainNote");
  if (!closestMainNote) return;

  const editNoteBtn = closestMainNote.querySelector(".editNoteBtn");
  const deleteNoteBtn = closestMainNote.querySelector(".deleteNoteBtn");
  if (editNoteBtn) (editNoteBtn as HTMLButtonElement).style.display = "flex";
  if (deleteNoteBtn)
    (deleteNoteBtn as HTMLButtonElement).style.display = "flex";

  (closestMainNote as HTMLDivElement).style.boxShadow =
    "0 4px 8px rgba(0, 0, 0, 0.2)";
});

notesList?.addEventListener("mouseout", (e) => {
  const targetEl = e.target as HTMLElement | null;
  if (!targetEl) return;
  const closestMainNote = targetEl.closest(".mainNote");
  if (!closestMainNote) return;
  const editNoteBtn = closestMainNote.querySelector(".editNoteBtn");
  const deleteNoteBtn = closestMainNote.querySelector(".deleteNoteBtn");
  if (editNoteBtn) (editNoteBtn as HTMLButtonElement).style.display = "none";
  if (deleteNoteBtn)
    (deleteNoteBtn as HTMLButtonElement).style.display = "none";
  (closestMainNote as HTMLDivElement).style.boxShadow = "none";
});

notesList?.addEventListener("click", (e) => {
  const targetEl = e.target as HTMLElement | null;
  if (!targetEl) return;
  const closestMainNote = targetEl.closest(".mainNote");
  if (!closestMainNote) return;

  if (targetEl?.closest(".editNoteBtn")) {
    const noteId =
      closestMainNote.closest(".listNote")?.id.replace("note-", "") || null;

    const note = allNotes.find((n) => n.id === noteId);
    if (!note) return;

    openEditNoteUI(note);
  }

  if (targetEl?.closest(".deleteNoteBtn")) {
    const listNote = targetEl?.closest(".listNote");
    if (!listNote) return;
    const noteId = listNote.id.replace("note-", "");

    const noteIndex = allNotes.findIndex((n) => n.id === noteId);
    if (noteIndex !== -1) {
      allNotes.splice(noteIndex, 1);
      saveNotes();
      renderNotes();
      showNoNotesYet();
      addActivity("Deleted a note", "delete");
    }
  }
});

expandMiniAnalyticsBtn?.addEventListener("click", () => {
  if (!miniAnalyticsDiv || !expandMiniAnalyticsIcon || !workAreaSplit) return;
  miniAnalyticsDiv.classList.toggle("expanded");
  loadActivities();
  const isExpanded = miniAnalyticsDiv.classList.contains("expanded");
  localStorage.setItem("miniAnalyticsExpanded", String(isExpanded));
  workAreaSplit.style.marginTop = isExpanded ? "20px" : "0px";
  expandMiniAnalyticsIcon.style.rotate = isExpanded ? "-90deg" : "90deg";
});

function getTasksAsData() {
  const items = tasks;
  return items.map((task) => ({
    title: task.title,
    dueDate: task.dueDate || null,
    dueTime: task.dueTime || null,
    priority: task.priority || null,
    status: task.status || null,
    done: task.completed || false,
  }));
}

type AgentAction =
  | {
      action: "createTask";
      task: Partial<Task>;
    }
  | {
      action: "updateTask";
      taskId: string;
      changes: Partial<Task>;
    }
  | {
      action: "scheduleTask";
      taskId: string;
      dueDate: string | null;
      dueTime: string | null;
    }
  | {
      action: "deleteTask";
      taskId: string;
    }
  | {
      action: "createNote";
      note: Partial<Note>;
    }
  | {
      action: "prioritizeTask";
      taskId: string;
      priority: Priority;
    };

function executeAgentAction(action: AgentAction) {
  switch (action.action) {
    case "createTask":
      createTask(action.task);
      break;

    case "updateTask": {
      const task = tasks.find((t) => String(t.id) === String(action.taskId));
      if (!task) return;
      console.log("Applying update:", action.changes);
      Object.assign(task, action.changes);
      saveTasks();
      renderTasks(currentTaskSort);
      renderCalendarEvents();
      refreshTaskDropdown();
      updateTasksDoneCount();
      break;
    }

    case "scheduleTask": {
      const task = tasks.find((t) => String(t.id) === String(action.taskId));
      if (!task) return;
      task.dueDate = action.dueDate;
      task.dueTime = action.dueTime;
      saveTasks();
      renderTasks(currentTaskSort);
      renderCalendarEvents();
      refreshTaskDropdown();
      break;
    }

    case "deleteTask": {
      const taskIndex = tasks.findIndex(
        (t) => String(t.id) === String(action.taskId),
      );
      if (taskIndex === -1) return;
      tasks.splice(taskIndex, 1);
      saveTasks();
      renderTasks(currentTaskSort);
      renderCalendarEvents();
      refreshTaskDropdown();
      updateTasksDoneCount();
      updateTasksOverdueCount();
      updateTasksDueTodayCount();
      updateBlockedTasksCount();
      showNoTasksYet();
      break;
    }

    case "createNote": {
      allNotes.push(action.note);
      saveNotes();
      renderNotes();
      addActivity("Added a note", "note");
      break;
    }

    case "prioritizeTask": {
      const task = tasks.find((t) => String(t.id) === String(action.taskId));
      if (!task) return;
      task.priority = action.priority;
      saveTasks();
      renderTasks(currentTaskSort);
      refreshTaskDropdown();
      break;
    }

    default:
      console.error("Unknown agent action:", action);
      break;
  }
}

async function runPlannerAgent(instructions: string) {
  const apiKey = await getSettings<string | null>("apiKey", null);
  if (!apiKey) {
    console.error(
      "API key is not set. Please set your API key in the settings.",
    );
    agentInstructionsInput.placeholder =
      "Please set your API key in the settings.";
    return;
  }

  const response = await fetch("https://dewen-backend.onrender.com/plan", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      instruction: instructions,
      tasks,
      apiKey,
      currentDate: new Date().toISOString(),
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to run planner agent");
  }

  const data = await response.json();
  console.log("Planner Agent input:", {
    instructions,
    tasks,
  });
  console.log("Planner Agent response:", data);
  for (const action of data.plan) executeAgentAction(action);
}

async function runResearcherAgent(instructions: string) {
  const apiKey = await getSettings<string | null>("apiKey", null);
  if (!apiKey) {
    console.error(
      "API key is not set. Please set your API key in the settings.",
    );
    agentInstructionsInput.placeholder =
      "Please set your API key in the settings.";
    return;
  }
  const tavilyApiKey = await getSettings<string | null>("tavilyApiKey", null);
  if (!tavilyApiKey) {
    console.error(
      "Tavily API key is not set. Please set your Tavily API key in the settings.",
    );
    agentInstructionsInput.placeholder =
      "Please set your Tavily API key in the settings.";
    return;
  }

  const response = await fetch("https://dewen-backend.onrender.com/research", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      instruction: instructions,
      apiKey,
      tavilyApiKey,
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to run researcher agent");
  }

  const data = await response.json();
  console.log("Researcher Agent input:", {
    instructions,
  });
  console.log("Researcher Agent response:", data);
  for (const action of data.research) executeAgentAction(action);
}

async function runPrioritizerAgent(instructions: string) {
  const apiKey = await getSettings<string | null>("apiKey", null);
  if (!apiKey) {
    console.error(
      "API key is not set. Please set your API key in the settings.",
    );
    agentInstructionsInput.placeholder =
      "Please set your API key in the settings.";
    return;
  }

  const response = await fetch(
    "https://dewen-backend.onrender.com/prioritize",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instruction: instructions,
        tasks,
        apiKey,
      }),
    },
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to run prioritizer agent");
  }

  const data = await response.json();
  console.log("Prioritizer Agent input:", {
    instructions,
    tasks,
  });
  console.log("Prioritizer Agent response:", data);
  for (const action of data.priorities) executeAgentAction(action);
}
