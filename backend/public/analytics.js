(()=>{
    fetch("https://tracker-production-25f3.up.railway.app/api/v1/analytics/version")
    .then(r=>r.json())
    .then(({version})=>{
        const script=document.createElement('script')
        script.src=`https://tracker-production-25f3.up.railway.app/api/v1/analytics.v${version}.js`;
        script.defer=true;
        document.head.appendChild(script);
    })
    .catch(()=>{})
})();