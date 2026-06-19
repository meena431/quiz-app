export const navbarStyles = {
  // Main nav container
  nav: "w-full h-20 bg-gradient-to-r from-[#0b001a] via-[#1a0033] to-[#0b001a] border-b border-purple-500/3 shadow-[0_0_25px_rgba(139,92,246,0.25)] backdrop-blur-md px-3 sm:px-5 lg:px-10 h-16 sm:h-18 lg:h-20 flex items-center justify-between relative overflow-hidden z-50",

  // Main container
  container: "w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 relative z-10",

  // Logo section
  logoContainer: "flex items-center flex-shrink-0 height-full",
  logoButton: "inline-flex items-center p-0 bg-transparent focus:outline-none focus:ring-0",
  logoLink: "relative p-0",
  logoInner: "p-0",
  logoImage: "h-20 w-20 lg:h-24 lg:w-24 object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_22px_rgba(124,58,237,0.75)]",

  // Title section
  titleContainer: "flex-1 flex justify-center px-3",
  titleText: "text-3xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]",

  // Desktop buttons
  desktopButtonsContainer: "hidden md:flex items-center cursor-pointer flex-shrink-0 space-x-3",
  spacer: "hidden sm:block w-2",

  // Button styles
  resultsButton: "inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-violet-900/40 via-violet-800/30 to-violet-700/25 text-[#EDE9FE] border border-violet-900/50 text-sm font-medium shadow-[0_8px_30px_rgba(124,58,237,0.12)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500/40 hover:from-violet-900/50 hover:via-violet-800/40 hover:to-violet-700/35 hover:shadow-[0_12px_40px_rgba(91,33,182,0.3)] hover:scale-[1.02] transition-all duration-300",
  logoutButton: "inline-flex cursor-pointer items-center gap-2 px-3 py-2 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 text-sm font-medium shadow-[0_8px_30px_rgba(124,58,237,0.12)] transform transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500/40 hover:bg-rose-500/25 transition-all duration-300",
  loginButton: "inline-flex cursor-pointer items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-sm font-medium shadow-[0_8px_30px_rgba(34,197,94,0.12)] transform transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500/40 hover:bg-emerald-500/25 transition-all duration-300",
  buttonIcon: "h-4 w-4 flex-shrink-0",

  // Mobile menu
  mobileMenuContainer: "relative md:hidden flex items-center z-50",
  menuToggleButton: "inline-flex items-center justify-center p-2 rounded-full text-violet-300 hover:text-white bg-[#140C26]/80 border border-violet-900/30 shadow-[0_4px_20px_rgba(124,58,237,0.2)] hover:bg-[#1F1638] hover:shadow-[0_8px_30px_rgba(124,58,237,0.3)] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 ring-offset-1 ring-offset-[#0E0A1C]",
  menuIcon: "h-5 w-5",
  mobileMenuPanel: "absolute right-4 top-full mt-2 w-52 bg-[#0F0C20] border border-[#221A3D] rounded-2xl shadow-2xl p-2 z-[999] animate-fadeIn",
  mobileMenuList: "flex flex-col space-y-1 m-0 p-0 list-none",
  mobileMenuItem: "w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-300 hover:text-white rounded-xl hover:bg-indigo-600/20 hover:border-l-2 hover:border-indigo-500 transition-all text-left",
  mobileMenuIcon: "w-4 h-4 text-indigo-400 shrink-0",

  // Animations and utility styles
  animations: `
    @keyframes float-slow { 0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)} }
    @keyframes float-slower { 0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)} }
    @keyframes float-slowest { 0%{transform:translateY(0)}50%{transform:translateY(-4px)}100%{transform:translateY(0)} }
    .animate-float-slow{animation:float-slow 9s ease-in-out infinite}
    .animate-float-slower{animation:float-slower 11s ease-in-out infinite}
    .animate-float-slowest{animation:float-slowest 13s ease-in-out infinite}

    /* large faint hero text for FAQ pages */
    .hero-faint { font-size: 6rem; font-weight:700; color: rgba(15,23,42,0.04); white-space:nowrap; user-select:none; pointer-events:none; }

    @media (max-width:420px){ nav{padding-left:12px;padding-right:12px;} }
  `
};

export const loginStyles = {
  // Page container
  pageContainer: "min-h-screen bg-[#0E0A1C] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden",

  // Background bubbles
  bubble1: "pointer-events-none hidden md:block absolute -top-14 -left-28 w-72 h-72 bg-[#140C26] rounded-full blur-3xl opacity-24 animate-float-slow",
  bubble2: "pointer-events-none hidden md:block absolute bottom-12 right-12 w-56 h-56 bg-violet-900/40 rounded-full blur-3xl opacity-18 animate-float-slower",

  // Back button
  backButton: "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-[#C4B5FD] bg-[#140C26]/90 backdrop-blur-sm px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer: "w-full max-w-md pt-10 sm:max-w-lg md:max-w-xl relative z-20",
  form: "w-full",
  formWrapper: "relative",
  animatedBorder: "rounded-2xl p-1 sm:p-[2px] bg-transparent",
  formContent: "bg-[#140C26] rounded-2xl p-6 md:p-10 shadow-md border border-[#2A1F45]",

  // Heading
  heading: "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6",
  headingIcon: "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-900/40 text-violet-300 shadow-[0_8px_30px_rgba(124,58,237,0.12)]",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-[#EDE9FE]",

  // Subtitle
  subtitle: "text-sm text-[#9F8CD9] mb-4 sm:mb-6",

  // Form labels and inputs
  label: "block mb-3",
  labelText: "text-sm font-medium text-[#C4B5FD]",
  inputContainer: "mt-2 relative",
  inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA]",
  input: "w-full pl-12 py-3 rounded-md transition-shadow duration-150 border border-[#3A2C5E] focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:shadow-[0_8px_30px_rgba(124,58,237,0.12)] bg-[#140C26] text-[#DDD6FE]",
  inputNormal: "border-[#3A2C5E]",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center text-[#A78BFA]",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton: "w-full inline-flex items-center justify-center gap-3 py-3 rounded-md bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold shadow-lg transform transition disabled:opacity-60",
  submitButtonIcon: "w-4 h-4",
  submitButtonText: "text-sm sm:text-base",

  // Signup section
  signupContainer: "mt-6",
  signupContent: "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-full bg-[#140C26]/95 backdrop-blur-sm shadow",
  signupText: "text-sm text-[#C4B5FD]",
  signupLink: "text-violet-400 font-semibold hover:underline",

  // Animations and styles
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');:root{--card-radius:16px;}@keyframes gradient-anim{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes float-slow{0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)}}@keyframes float-slower{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}.animate-float-slow{animation:float-slow 9s ease-in-out infinite}.animate-float-slower{animation:float-slower 11s ease-in-out infinite}#login-heading,form,input,button,a,p,label,span{font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}@media(max-width:360px){.rounded-3xl{border-radius:10px}}@media(min-width:1024px){.rounded-3xl{border-radius:16px}}`
};

export const signupStyles = {
  // Page container
  pageContainer: "min-h-screen bg-[#0E0A1C] flex items-center justify-center p-4 sm:p-6 relative",

  // Back button
  backButton: "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-[#C4B5FD] bg-[#140C26]/90 backdrop-blur-sm px-2.5 sm:px-3 py-2 rounded-full shadow hover:scale-105 transform transition",
  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer: "w-full max-w-md pt-12 sm:max-w-lg md:max-w-xl relative z-10",
  animatedBorder: "rounded-2xl p-1 sm:p-[2px] bg-transparent",
  formContent: "bg-[#140C26] rounded-2xl p-6 md:p-10 shadow-md border border-[#2A1F45]",

  // Heading
  heading: "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4",
  headingIcon: "inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-900/40 text-violet-300 shadow-[0_8px_30px_rgba(124,58,237,0.12)]",
  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",
  headingText: "text-[#EDE9FE]",

  // Subtitle
  subtitle: "text-sm text-[#9F8CD9] mb-5 sm:mb-6",

  // Form labels and inputs
  label: "block mb-3 sm:mb-4",
  labelText: "text-sm font-medium text-[#C4B5FD]",
  inputContainer: "mt-2 relative",
  inputIcon: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIconInner: "w-4 h-4 sm:w-5 sm:h-5 text-[#A78BFA]",
  input: "w-full pl-12 py-3 rounded-md transition-shadow duration-150 border border-[#3A2C5E] focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:shadow-[0_8px_30px_rgba(124,58,237,0.12)] bg-[#140C26] text-[#DDD6FE]",
  inputNormal: "border-[#3A2C5E]",
  inputError: "border-red-300",
  passwordInput: "pr-12",
  passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center text-[#A78BFA]",
  passwordToggleIcon: "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText: "mt-2 text-xs text-red-600",
  submitError: "text-sm text-red-600 mb-3",

  // Buttons container
  buttonsContainer: "mt-4 grid gap-3",
  submitButton: "w-full inline-flex cursor-pointer items-center justify-center gap-3 py-3 rounded-md bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold shadow-lg transform transition hover:scale-[1.02] disabled:opacity-60",

  // Login prompt section
  loginPromptContainer: "mt-5 sm:mt-6",
  loginPromptContent: "flex flex-col sm:flex-row items-center justify-center gap-3 px-3 sm:px-4 py-3 rounded-full bg-[#140C26]/95 backdrop-blur-sm shadow",
  loginPromptText: "text-sm text-[#C4B5FD]",
  loginPromptLink: "text-violet-400 font-semibold hover:underline",

  // Animations and styles
  animations: `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');:root{--card-radius:16px;}@keyframes gradient-anim{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes float-slow{0%{transform:translateY(0)}50%{transform:translateY(-10px)}100%{transform:translateY(0)}}.animate-float-slow{animation:float-slow 9s ease-in-out infinite}#signup-heading,form,input,button,a,p,label,span{font-family:'Poppins',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}@media(max-width:360px){.rounded-3xl{border-radius:10px}}@media(min-width:1024px){.rounded-3xl{border-radius:16px}}`
};

export const sidebarStyles = {
  // Page container
  pageContainer: "min-h-screen bg-[#0E0A1C]",

  // Mobile overlay
  mobileOverlay: "fixed inset-0 bg-black/60 backdrop-blur-md z-[100] md:hidden",
  
  // Main container
  mainContainer: "flex w-full overflow-x-hidden xl:min-h-screen",

  // Sidebar styles
  // FIX: Shifted mobile rendering layer to z-[200] so it explicitly sits ABOVE the backdrop blur
  sidebar: "fixed h-screen z-[200] top-0 left-0 w-80 transform transition-transform duration-300 ease-in-out bg-[#140C26] shadow-[0_8px_30px_rgba(124,58,237,0.12)] rounded-r-2xl overflow-y-auto border-r border-[#2A1F45] md:relative md:translate-x-0 md:flex md:flex-col",
  
  // Sidebar header
  sidebarHeader: "top-0 z-20 p-6 bg-[#140C26] text-[#EDE9FE] relative overflow-hidden",
  headerDecoration1: "absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-[#140C26] opacity-6 rounded-full",
  headerDecoration2: "absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 bg-violet-900/40 opacity-18 rounded-full",
  headerContent: "flex font-[poppins] items-center justify-between relative z-10",
  logoContainer: "flex items-center space-x-3",
  logoIcon: "p-1 bg-transparent",
  logoTitle: "text-2xl font-semibold",
  logoSubtitle: "mt-1 text-[#A78BFA] text-sm",
  closeButton: "md:hidden p-2 rounded-md hover:bg-violet-900/50",

  // Sidebar content
  sidebarContent: "sidebar-content flex-1 overflow-y-auto p-4",
  technologiesHeader: "mb-4 flex items-center justify-between",
  technologiesTitle: "text-lg font-semibold text-[#DDD6FE]",
  technologiesCount: "text-xs bg-violet-900/40 text-violet-300 px-2 py-1 rounded-full",

  // Technology items
  techItem: "mb-3",
  techButton: "w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 border border-[#2A1F45] bg-[#140C26]",
  techButtonSelected: "border-violet-500 bg-violet-600/15 text-violet-100 shadow-md transform scale-[1.02]",
  techButtonNormal: "border-[#2A1F45] hover:border-[#3A2C5E] hover:bg-[#1F1638]",
  techButtonContent: "flex items-center space-x-3",
  techIcon: "p-2 rounded-lg border",
  techName: "font-medium text-[#EDE9FE] group-hover:text-white",

  // Levels container
  levelsContainer: "mt-3 ml-2 p-3 bg-[#140C26] rounded-lg border border-[#2A1F45]",
  levelsTitle: "text-sm font-medium text-[#DDD6FE] mb-2 flex items-center",
  techBadge: "ml-2 text-xs bg-violet-900/40 text-violet-300 px-2 py-0.5 rounded-full",

  // Level buttons
  levelButton: "w-full flex items-center justify-between cursor-pointer p-3 my-2 rounded-lg border transition-all",
  levelButtonSelected: "border-violet-500 bg-violet-600/20 text-white font-semibold shadow-[0_8px_30px_rgba(124,58,237,0.18)]",
  levelButtonNormal: "border-[#2A1F45] hover:bg-[#140C26]",
  levelButtonContent: "flex items-center space-x-2 text-[#EDE9FE]",
  levelIcon: "p-1.5 rounded-md bg-violet-900/50",
  levelQuestions: "text-xs bg-violet-900/60 text-violet-200 px-2 py-1 rounded-full",

  // Sidebar footer
  sidebarFooter: "sticky bottom-0 z-20 p-4 border-t border-[#2A1F45] bg-[#140C26]",
  footerContent: "flex items-center justify-center text-slate-500",
  footerContentCenter: "text-center text-xs",
  footerHighlight: "mt-1 text-violet-400 font-medium",

  // Main content
  mainContent: "flex-1 min-h-screen p-6 md:p-8 ml-0 md:ml-0",

  // Mobile header
  mobileHeader: "flex items-center justify-between mb-4 md:hidden",
  mobileTitle: "flex-1 mx-3",
  mobileTechInfo: "flex items-center font-[poppins] justify-center space-x-3",
  mobileTechIcon: "p-2 rounded-md border",
  mobileTechText: "text-center",
  mobileTechName: "text-sm font-semibold text-white",
  mobileTechLevel: "text-xs text-[#A78BFA]",
  mobilePlaceholder: "text-center text-sm text-[#A78BFA] text-white",

  // Mobile levels
  mobileLevels: "md:hidden mb-4 text-violet-200",
  mobileLevelsContainer: "flex gap-2 overflow-x-auto",
  mobileLevelButton: "flex-none px-4 py-2 rounded-xl border border-[#3A2C5E] bg-[#140C26] shadow-[0_8px_30px_rgba(124,58,237,0.12)] text-sm font-medium",

  // Welcome screen
  welcomeContainer: "min-h-[calc(100vh-5rem)] w-full font-[poppins] flex items-center justify-center",
  welcomeContent: "text-center font-[poppins] max-w-2xl mx-auto bg-[#140C26] p-6 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(124,58,237,0.12)] border border-[#2A1F45]",
  welcomeIcon: "inline-flex items-center justify-center p-4 bg-violet-900/40 rounded-full shadow mb-6",
  welcomeTitle: "text-2xl md:text-4xl font-bold text-[#EDE9FE] mb-4",
  welcomeDescription: "text-sm md:text-lg text-[#C4B5FD] mb-6 max-w-md mx-auto",

  // Features grid
  featuresGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6",
  featureCard: "bg-[#140C26] p-4 md:p-5 rounded-lg border border-[#2A1F45] text-center shadow-[0_8px_30px_rgba(124,58,237,0.12)]",
  featureIcon: "inline-flex items-center justify-center p-3 bg-violet-900/40 text-violet-300 rounded-full mb-3",
  featureTitle: "font-semibold text-[#DDD6FE] mb-2",
  featureDescription: "text-xs md:text-sm text-[#C4B5FD]",

  // Start Quiz Button
  startQuizButton: "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-[size:200%_auto] animate-shimmer text-white text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 ease-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50",
  
  // Welcome prompt
  welcomePrompt: "bg-[#140C26] p-3 md:p-4 rounded-lg shadow-inner",
  welcomePromptText: "text-[#DDD6FE] text-xs flex items-center justify-center",

  // Level selection
  levelSelectionContainer: "min-h-[calc(100vh-5rem)] py-10 flex items-center justify-center", levelSelectionContent: "text-center bg-[#140C26] p-6 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(124,58,237,0.12)] border border-[#2A1F45] max-w-md",
  techSelectionIcon: "p-5 rounded-2xl inline-flex mb-6 shadow-[0_8px_30px_rgba(124,58,237,0.12)]",
  techSelectionTitle: "text-2xl md:text-3xl font-bold text-[#EDE9FE] mb-2",
  techSelectionDescription: "text-[#C4B5FD] mb-6",
  techSelectionPrompt: "bg-[#140C26] p-4 rounded-xl border border-[#2A1F45]",
  techSelectionPromptText: "text-[#DDD6FE] font-medium",

  // Results screen
  resultsContainer: "min-h-[calc(100vh-5rem)] py-10 flex items-center justify-center",
  resultsContent: "bg-[#140C26] p-6 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(124,58,237,0.12)] border border-[#2A1F45] max-w-2xl w-full",
  resultsHeader: "text-center",
  performanceIcon: "p-4 rounded-2xl inline-flex mb-6 shadow-[0_8px_30px_rgba(124,58,237,0.12)]",
  resultsTitle: "text-2xl md:text-4xl font-bold text-[#EDE9FE] mb-2",
  resultsSubtitle: "text-[#C4B5FD] mb-2",
  performanceBadge: "inline-block text-violet-800 px-4 py-1 rounded-full text-sm font-medium mb-6",

  // Score grid
  scoreGrid: "grid grid-cols-2 gap-4 mb-6",
  scoreCard: "bg-[#140C26] p-4 rounded-2xl border border-[#2A1F45] text-center",
  scoreIcon: "inline-flex items-center justify-center w-12 h-12 bg-violet-900/40 text-violet-300 rounded-full mb-3 shadow-inner",
  scoreNumber: "text-2xl font-bold text-violet-300",
  scoreLabel: "text-violet-300 font-medium",

  // Score progress
  scoreProgress: "bg-[#140C26] p-4 rounded-2xl border border-[#2A1F45] mb-6",
  scoreProgressHeader: "flex items-center justify-between mb-4",
  scoreProgressTitle: "text-violet-300 font-semibold",
  scoreProgressPercentage: "text-violet-300 font-bold",
  scoreProgressBar: "w-full bg-[#2A1F45] rounded-full h-4",
  scoreProgressFill: "h-4 rounded-full transition-all duration-500",

  // Quiz container
  quizContainer: "max-w-3xl mx-auto",
  quizHeader: "mb-4 bg-[#140C26] p-4 md:p-6 rounded-2xl shadow-[0_8px_30px_rgba(124,58,237,0.12)] border border-[#2A1F45]",
  quizTitleContainer: "flex items-center justify-between mb-2",
  quizTitle: "text-xl md:text-2xl font-bold text-[#EDE9FE]",
  quizCounter: "text-sm bg-violet-900/40 text-violet-300 px-3 py-1 rounded-full font-medium",
  progressBar: "w-full bg-[#2A1F45] rounded-full h-2.5 mb-2",
  progressFill: `bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 h-2.5 rounded-full shadow-[0_0_15px_rgba(124,58,237,0.6)] transition-all duration-500`,

  // Question container
  questionContainer: `bg-gradient-to-br from-[#1A1030] to-[#140C26] p-6 md:p-8 rounded-2xl border border-violet-500/20 shadow-[0_10px_40px_rgba(124,58,237,0.18)]`,
  questionHeader: "flex items-center mb-2",
  questionIcon: "bg-violet-900/40 text-violet-300 p-2 rounded-lg mr-3",
  questionText: "text-lg md:text-xl font-semibold text-[#EDE9FE]",

  // Options container
  optionsContainer: "space-y-4 mt-6",
  optionButton: "w-full cursor-pointer text-left p-4 md:p-5 rounded-2xl border-2 transition-all duration-300",
  optionNormal: `bg-[#1A1030] border border-violet-500/20 hover:bg-[#22123A] hover:border-violet-400/50hover:shadow-[0_0_20px_rgba(124,58,237,0.25)] text-[#EDE9FE]`,
  optionCorrect: `bg-emerald-500/15 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]`,
  optionIncorrect: `bg-rose-500/15 border-rose-400 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.25)]`,
  optionContent: "flex items-center",
  optionIconCorrect: "mr-3 text-emerald-500 flex-shrink-0",
  optionIconIncorrect: "mr-3 text-rose-400 flex-shrink-0",
  optionIconEmpty: "w-5 h-5 rounded-full border-2 border-[#3A2C5E] mr-3 flex-shrink-0",
  optionText: "text-sm md:text-lg",

  // Loading container
  loadingContainer: "h-full flex items-center justify-center",
  loadingContent: "text-center bg-[#140C26] p-6 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(124,58,237,0.12)] border border-[#2A1F45]",
  loadingSpinner: "animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500/40 mx-auto mb-4",
  loadingTitle: "text-lg md:text-xl font-semibold text-[#EDE9FE] mb-2",
  loadingDescription: "text-sm md:text-base text-[#C4B5FD]",

  // Custom styles
  customStyles: `
    .sidebar-content { -webkit-overflow-scrolling: touch; }

    aside .sidebar-content::-webkit-scrollbar { width: 10px; }
    aside .sidebar-content::-webkit-scrollbar-track { background: transparent; }
    aside .sidebar-content::-webkit-scrollbar-thumb {
      background-color: rgba(124,58,237,0.18);
      border-radius: 999px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    aside .sidebar-content::-webkit-scrollbar-thumb:hover {
      background-color: rgba(124,58,237,0.26);
    }

    aside .sidebar-content { scrollbar-width: thin; scrollbar-color: rgba(124,58,237,0.18) transparent; }

    /* small cyan circular plus for accordion toggles (use where your UI renders the '+' icon) */
    .icon-plus {
      display:inline-flex; align-items:center; justify-content:center;
      width:34px; height:34px; border-radius:999px; background: rgba(124,58,237,0.18); color: #C4B5FD; box-shadow: 0 6px 18px rgba(124,58,237,0.16);
    }

    /* subtle card style used by FAQ items */
    .card-faq {
      background: #140C26; border-radius:12px; padding:14px 18px; border:1px solid rgba(124,58,237,0.18);
      box-shadow: 0 8px 30px rgba(124,58,237,0.12);
    }
  `
};

export const resultStyles = {
  // Page container
  pageContainer: "min-h-screen bg-[#0E0A1C] p-6",
  container: "max-w-6xl font-[poppins] mx-auto",

  // Header
  header: "mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4",
  title: "text-3xl md:text-4xl lg:text-3xl font-extrabold text-[#EDE9FE]",
  headerControls: "flex items-center gap-3",

  // Filter section
  filterContainer: "mb-4",
  filterContent: "flex items-center justify-between gap-3",
  filterButtons: "flex flex-wrap items-center gap-2",
  filterLabel: "text-sm text-[#A78BFA] mr-2",
  filterButton: "px-3 py-1 rounded-full text-sm font-medium border shadow-[0_8px_30px_rgba(124,58,237,0.12)] focus:outline-none",
  filterButtonActive: "bg-violet-600 text-white",
  filterButtonInactive: "bg-[#140C26] text-[#C4B5FD]",
  filterStatus: "text-sm text-[#9F8CD9]",

  // Loading state
  loadingContainer: "text-center py-20",
  loadingSpinner: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500/40 mb-4",
  loadingText: "text-[#A78BFA]",

  // Track sections
  trackSection: "mb-6",
  trackTitle: "text-lg md:text-xl lg:text-lg font-semibold mb-3 text-[#DDD6FE]",

  // Results grid
  resultsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-6",

  // Empty state
  emptyState: "text-center py-12 text-[#A78BFA]",

  // Badge styles
  badgeExcellent: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-violet-900/40 text-violet-300",
  badgeGood: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-800",
  badgeAverage: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-800",
  badgeNeedsWork: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-rose-500/20 text-rose-300",

  // Card styles
  card: "relative bg-[#140C26] rounded-lg overflow-hidden border border-[#2A1F45] hover:bg-[#1F1638] hover:shadow-[0_8px_30px_rgba(124,58,237,0.18)] transition",
  cardAccent: "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-fuchsia-500",
  cardContent: "p-4 md:p-5 lg:p-4 flex flex-col h-full",

  // Card header
  cardHeader: "flex items-start justify-between gap-3",
  cardInfo: "flex items-center gap-3 min-w-0",
  levelAvatar: "flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md font-semibold text-lg md:text-xl lg:text-lg bg-violet-900/40 text-violet-300",
  levelBasic: "bg-violet-900/40 text-violet-300",
  levelIntermediate: "bg-emerald-500/15 text-emerald-300",
  levelAdvanced: "bg-rose-500/15 text-rose-300",
  cardText: "min-w-0",
  cardTitle: "text-sm md:text-base lg:text-sm font-medium truncate text-[#EDE9FE]",
  cardMeta: "text-xs md:text-sm lg:text-xs text-[#9F8CD9]",

  // Card performance
  cardPerformance: "text-right",
  performanceLabel: "text-md md:text-md lg:text-md text-[#9F8CD9]",
  badgeContainer: "mt-1",

  // Card stats
  cardStats: "mt-4",
  statItem: "text-md md:text-md lg:text-md text-[#A78BFA]",
  statNumber: "font-semibold text-lg md:text-xl lg:text-lg text-[#DDD6FE]"
};