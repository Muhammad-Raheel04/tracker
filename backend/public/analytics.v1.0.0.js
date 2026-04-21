(() => {
    const API_URL = `https://tracker-production-25f3.up.railway.app/api/v1/analytics/track`;
    const script = document.querySelector(
        'script[src*="analytics.js"][data-token]'
    );

    if (!script) {
        console.warn('[Analytics] No analytics script found');
        return;
    }

    const token = script.getAttribute('data-token');

    if (!token) {
        console.warn('[Analytics] No data-token found');
        return;
    }

    const getSessionId = () => {
        let sid = localStorage.getItem('_sid');
        if (!sid) {
            sid = crypto.randomUUID();
            localStorage.setItem('_sid', sid);
        }
        return sid;
    }

    let timeout;
    const track = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token,
                    sessionId: getSessionId(),
                    pageUrl: window.location.pathname,
                    referrer: document.referrer || null,
                })
            }).catch(() => { })
        }, 300);
    }

    track();

    const _pushState = history.pushState.bind(history);
    history.pushState = (...args) => {
        _pushState(...args);
        track();
    };
    window.addEventListener("popstate", track);
})();