function generaSalones(n){for(var r=[],e=1;e<n.length;e++)r[e]=farma[e].salon;var a=unique(r);return a}function unique(n){for(var r={},e=[],a=0,u=n.length;u>a;++a)r.hasOwnProperty(n[a])||(e.push(n[a]),r[n[a]]=1);return e}