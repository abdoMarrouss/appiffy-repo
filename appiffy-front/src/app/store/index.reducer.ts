export const initialState = {
    isShowMainLoader: true,
    theme: 'light', // light|dark
    direction: 'ltr', // ltr|rtl
};

export function indexReducer(state = initialState, action: any) {
    const type = action.type;
    const payload = action.payload;
    if (type === 'toggleTheme') {
        localStorage.setItem('theme', payload);
        if (payload === 'dark') {
            document.querySelector('body')?.classList.add('dark');
        } else {
            document.querySelector('body')?.classList.remove('dark');
        }

        return { ...state, ...{ theme: payload } };
    } else if (type === 'toggleDirection') {
        localStorage.setItem('direction', payload);
        document.querySelector('html')?.setAttribute('dir', payload || 'ltr');
        return { ...state, ...{ direction: payload } };
    } else if (type === 'toggleMainLoader') {
        return { ...state, ...{ isShowMainLoader: payload } };
    }

    return state;
}
