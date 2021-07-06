    const login = document.querySelector(".login");
    const signUp = document.querySelector(".sign-up");
    const visitsInner = document.querySelector(".visits-inner");
    const filterText = document.querySelector(".filter-search");
    const filterStatus = document.getElementById("status");
    const filterImportance = document.getElementById("urgency");
    const resetFilters = document.getElementById("resetFilters");

    const loginButton = document.getElementById("loginButton");
    const signUpButton = document.getElementById("signUpButton");
    const modalButton = document.querySelector(".modal-button");
    const modalHeader = document.querySelector(".modal-header");
    const addVisitButton = document.querySelector(".add-visit");
    const addVisitModal = document.querySelector(".add-visit-modal");
    const noItems = document.querySelector(".info-text");

    const token = sessionStorage.getItem('token');
    const API = 'https://xtended.studio';
    let sessionStatus = "";
    let modal;

export  {
    login,
    signUp,
    visitsInner,
    filterImportance,
    filterStatus,
    filterText,
    resetFilters,

    loginButton,
    signUpButton,
    modalButton,
    modalHeader,
    addVisitButton,
    addVisitModal,
    noItems,

    token,
    API,
    sessionStatus,
    modal
}

