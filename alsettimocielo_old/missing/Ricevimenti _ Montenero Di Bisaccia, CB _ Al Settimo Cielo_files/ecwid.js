
let kelkooPlanIds = new Set(['1007', '1017', '1008', '1018', '1009', '1019']);

if (kelkooPlanIds.has(dmAPI.getSitePlanID())) {
    dmAPI.runOnReady('kelkooScripts', () => {    
        addLeadTagScript();
        addKelkooScript();
    });
}

function addLeadTagScript() {
    let scriptElement = document.createElement('script');
    scriptElement.async = true;
    scriptElement.type = 'text/javascript';
    scriptElement.src = 'https://s.kk-resources.com/leadtag.js';
    document.body.appendChild(scriptElement);       
}

function addKelkooScript() {
    let scriptBodyText = `
    (async function() {
        function initializeEcwidScript() {
            if (typeof Ecwid !== 'undefined') {
                Ecwid.OnOrderPlaced.add(async function (order) {
                    var orderId = order.orderNumber;
                    var total = order.total;
    
                    total = total.toString().replace(/,/g, '.').replace('€', '').replace(/s/g, '');
    
                    const storeId = Ecwid.getOwnerId();
    
                    const url = 'https://iolstoreappclicks.italiaonline.it/cookie/getMerchantId?storeId=' + storeId;
                    try {
                        const response = await fetch(url, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer eyJraWQiOiIzYzI0MTlkMS0zOWQ2LTRjMTQtOWI0Yi1kMzE2NzcyY2MyZTkiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJLZWxrb28gR3JvdXAiLCJzdWIiOiIxMjQ3MDQiLCJpYXQiOjE2NzkwNTA2NjcsImF6cCI6Ik1lcmNoYW50UHVibGljQVBJIiwianRpIjoiMDBkNDg0NzYtMmE5Ni00NTFhLWI2NDItNDU1Y2VlNDM3ZDI4In0.PYOVOeGowV91rnS_pJ22gVcnfDzXoZ9HFpqdpDhnB8Bl-QfnQs6o1frT5dqcfFX4ccrh4OVHz4NkcFG7yxWXZzsZZxgUn4G9EEUG9gas0fU7NeTicb0CWoLd1yvrezqqfXThCQXNWKWfmTK1GT86ZFyd_1wVK5GFykZgXcxtv3vm3OReH9BosEuKPwELo19ZtD1zyY2ZF7EQp8qdV7gWqxNNeDA-KJ3iDUnUqET7uktNFB_qZMypHzMztBf-qhXT7YugWJtMI_SN9aXAMQ10tn5GBZHBa3g-wAEKDAYo7t-P2Grk70c0bwpaXhG-434sni7EcaBVKLikOWTM0SMSwakUpNKZoMZHzRkmOvRhec1Kiw-E3js4fAsnqtWZ0tqdH-lzLGW4CjpNjVz2RI7tq6kJrM1KSi0he3p8ZgmJD215oRgV4EYRxGoJNIoi-kyCtdRFRxiYKAOIsZJlhD7TFpX4A4kDLQ3_t-iAVGZ7v_uOCt8IRL7kVSNlSStmj9dEPGWDggYX8tMLJIzSBm0lwUsd4_qz_kZsYCFoHQ8KQuu0p8CjscfCzQUUibzym5tFJGiyrEoSzo3tL8053uIknDvnqizY5ft2x3CO_7jLFNfol0x1Yr30vf4musdljXLBZ_X2bkFW3mS3Ew6Hr-OcEaMoUps4Vrd8K4ESdmOKkfk'
                            }
                        });
                        if (!response.ok) {
                            console.log("Error retrieving MerchantId");
                            throw new Error('Response status: ' + response.status);
                        }
    
                        const json = await response.json();
    
                        _kkstrack = {
                            merchantInfo: [
                                { country: "it", merchantId: json }
                            ],
                            orderValue: total,
                            orderId: orderId
                        };
    
                        console.log(_kkstrack);
    
                        (function () {
                            var s = document.createElement('script');
                            s.type = 'text/javascript';
                            s.async = true;
                            s.src = 'https://s.kk-resources.com/ks.js';
                            var x = document.getElementsByTagName('script')[0];
                            x.parentNode.insertBefore(s, x);
                            console.log("Logged informations sent to Kelkoo successfully");
                        })();
                    } catch (e) {
                        throw new Error(e);
                    }
                });
            } else {
                setTimeout(initializeEcwidScript, 100);
            }
        }
    
        window.addEventListener('load', initializeEcwidScript);
    
        if (document.readyState === 'complete') {
        initializeEcwidScript();
    }
    })();
    `

    let scriptElement = document.createElement('script');
    try {
        scriptElement.appendChild(document.createTextNode(scriptBodyText));
    } catch (e) {
        scriptElement.text = scriptBodyText;
    }
    document.body.appendChild(scriptElement);    
}