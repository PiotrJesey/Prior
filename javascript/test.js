<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Signatures Required</title>
    <style>
        .signature-container {
            margin-bottom: 20px;
        }
        canvas {
            border: 2px solid #000;
            width: 100%;
            max-width: 400px;
            height: 200px;
            background-color: #f9f9f9;
            cursor: crosshair;
        }
    </style>
</head>
<body>

    <h2>Sign Below (All Required)</h2>

    <div class="signature-container">
        <h3>Signature 1 (Required)</h3>
        <canvas id="signature-pad-1"></canvas>
        <button onclick="clearSignature('signature-pad-1')">Clear</button>
        <p id="error-signature-1" style="color: red; display: none;">Signature 1 is required!</p>
    </div>

    <div class="signature-container">
        <h3>Signature 2 (Required)</h3>
        <canvas id="signature-pad-2"></canvas>
        <button onclick="clearSignature('signature-pad-2')">Clear</button>
        <p id="error-signature-2" style="color: red; display: none;">Signature 2 is required!</p>
    </div>

    <button onclick="sendToPowerAutomate(event)">Submit</button>

    <script>
        // Function to initialize signature pads
        function initializeSignaturePad(canvasId) {
            const canvas = document.getElementById(canvasId);
            const ctx = canvas.getContext("2d");
            let isDrawing = false;

            // Resize canvas to fit container
            function resizeCanvas() {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);

            // Event listeners for drawing
            canvas.addEventListener("mousedown", (e) => {
                isDrawing = true;
                ctx.beginPath();
                ctx.moveTo(e.offsetX, e.offsetY);
            });

            canvas.addEventListener("mousemove", (e) => {
                if (isDrawing) {
                    ctx.lineTo(e.offsetX, e.offsetY);
                    ctx.stroke();
                }
            });

            canvas.addEventListener("mouseup", () => isDrawing = false);
            canvas.addEventListener("mouseleave", () => isDrawing = false);
        }

        // Initialize multiple signature pads
        initializeSignaturePad("signature-pad-1");
        initializeSignaturePad("signature-pad-2");

        // Function to clear a specific signature pad
        function clearSignature(canvasId) {
            const canvas = document.getElementById(canvasId);
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        // Function to check if a signature is empty
        function isSignatureEmpty(canvasId) {
            const canvas = document.getElementById(canvasId);
            const blankCanvas = document.createElement("canvas");
            blankCanvas.width = canvas.width;
            blankCanvas.height = canvas.height;
            return canvas.toDataURL() === blankCanvas.toDataURL();
        }

        // Async function to send multiple signatures to Power Automate
        async function sendToPowerAutomate(event) {
            event.preventDefault(); // Prevent default form submission

            let valid = true;

            // Check if Signature 1 is empty
            if (isSignatureEmpty("signature-pad-1")) {
                document.getElementById("error-signature-1").style.display = "block";
                valid = false;
            } else {
                document.getElementById("error-signature-1").style.display = "none";
            }

            // Check if Signature 2 is empty
            if (isSignatureEmpty("signature-pad-2")) {
                document.getElementById("error-signature-2").style.display = "block";
                valid = false;
            } else {
                document.getElementById("error-signature-2").style.display = "none";
            }

            // Stop submission if any signature is missing
            if (!valid) {
                alert("Please fill in all required signatures.");
                return;
            }

            // Capture signatures as Base64
            const signature1 = document.getElementById("signature-pad-1").toDataURL();
            const signature2 = document.getElementById("signature-pad-2").toDataURL();

            // Data to send (modify exportData as needed)
            let data = {
                ...exportData,  // Existing form data
                signatures: {
                    signer1: signature1,
                    signer2: signature2
                }
            };

            try {
                let response = await fetch("https://prod-28.westeurope.logic.azure.com:443/workflows/0cf0be27d4504b8aa24c7389183d902c/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8Pj7td5CpvRMxlaDrj1ATtbrywxcvgq_JoqHiJ1kyHo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data) // Send data as JSON
                });

                if (response.ok) {
                    alert("Data sent successfully!");
                    clearSignature("signature-pad-1");
                    clearSignature("signature-pad-2");
                } else {
                    alert("Error sending data.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An unexpected error occurred.");
            }
        }
    </script>

</body>
</html>
