let signaturePads = {};
        for (let i = 1; i <= 3; i++) {
            let canvas = document.getElementById(`signatureCanvas${i}`);
            signaturePads[i] = new SignaturePad(canvas);
        }

        function saveSignature(id) {
            if (!signaturePads[id].isEmpty()) {
                var signatureData = signaturePads[id].toDataURL();
                localStorage.setItem(`savedSignature${id}`, signatureData);
                alert(`Signature ${id} saved!`);
            } else {
                alert(`Please sign before saving Signature ${id}.`);
            }
        }

        function clearSignature(id) {
            signaturePads[id].clear();
            localStorage.removeItem(`savedSignature${id}`);
        }

        function clearAllSignatures() {
            for (let i = 1; i <= 3; i++) {
                signaturePads[i].clear();
                localStorage.removeItem(`savedSignature${i}`);
            }
        }

        function generatePrefilledLink(id) {
            var savedSignature = localStorage.getItem(`savedSignature${id}`);
            if (savedSignature) {
                var encodedSignature = encodeURIComponent(savedSignature);
                var prefilledLink = window.location.origin + window.location.pathname + `?signature${id}=` + encodedSignature;
                prompt(`Copy this link to share Signature ${id}:`, prefilledLink);
            } else {
                alert(`No saved signature ${id} found.`);
            }
        }

        window.onload = function() {
            for (let i = 1; i <= 3; i++) {
                var urlParams = new URLSearchParams(window.location.search);
                var signatureFromURL = urlParams.get(`signature${i}`);
                var savedSignature = signatureFromURL ? decodeURIComponent(signatureFromURL) : localStorage.getItem(`savedSignature${i}`);

                if (savedSignature) {
                    let img = new Image();
                    img.src = savedSignature;
                    img.onload = (function(canvasId) {
                        return function () {
                            let ctx = document.getElementById(canvasId).getContext("2d");
                            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear canvas before drawing
                            ctx.drawImage(img, 0, 0);
                        };
                    })(`signatureCanvas${i}`);
                }
            }
        };