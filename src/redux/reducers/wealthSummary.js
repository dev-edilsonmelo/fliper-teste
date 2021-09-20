const defaultWealthSummary = {
    id: '0',
    cdi: '0',
    gain: '0',
    hasHistory: '0',
    profitability: '0',
    total: '0',
}

const wealthSummary = (state = defaultWealthSummary, action) => {
    const { type, payload = {} } = action
    switch (type) {
        case 'SET_wealthSummary':
            return payload
        default:
            return state
    }
}

export default wealthSummary