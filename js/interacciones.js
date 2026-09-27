/* ==========================================================================
   INTERACCIONES.JS - LÓGICA DE INTERACCIÓN DE USUARIO (Codigo-Futbol)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initMvpSelection();
    initFeedbackSection();
});

/**
 * Gestión de la selección visual del MVP
 */
function initMvpSelection() {
    const radioInputs = document.querySelectorAll('input[name="mvp-option"]');
    const mvpSection = document.getElementById('mvp');

    if (!radioInputs.length) return;

    radioInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            // El cambio de estilo principal lo maneja el CSS con :checked,
            // pero podemos añadir una ligera animación o feedback al seleccionar.
            const parentLabel = e.target.closest('.mvp-card-option');
            if (parentLabel) {
                parentLabel.classList.add('scale-[1.02]');
                setTimeout(() => parentLabel.classList.remove('scale-[1.02]'), 200);
            }
        });
    });

    // Evento para el botón de confirmar voto
    const voteBtn = mvpSection?.querySelector('button');
    if (voteBtn) {
        voteBtn.addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="mvp-option"]:checked');
            if (selectedOption) {
                const playerName = selectedOption.closest('.mvp-card-option').querySelector('.font-bold').textContent;
                
                // Feedback de éxito
                voteBtn.textContent = '¡Voto Registrado!';
                voteBtn.classList.remove('bg-emerald-500', 'hover:bg-emerald-400');
                voteBtn.classList.add('bg-slate-700', 'text-emerald-400');
                voteBtn.disabled = true;

                console.log(`Voto MVP guardado para: ${playerName} (ID: ${selectedOption.value})`);
            }
        });
    }
}

/**
 * Gestión de la sección de comentarios / feedback
 */
function initFeedbackSection() {
    const communitySection = document.getElementById('comunidad');
    if (!communitySection) return;

    const textarea = communitySection.querySelector('textarea');
    const sendBtn = communitySection.querySelector('button:last-of-type');
    const reactionBtns = communitySection.querySelectorAll('button[title]');

    let activeReaction = null;

    // Control de reacción (Me gusta / No me gusta)
    reactionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            reactionBtns.forEach(b => {
                b.classList.remove('border-emerald-500', 'text-emerald-400', 'border-rose-500', 'text-rose-400', 'bg-emerald-950/40', 'bg-rose-950/40');
            });

            const isPositive = btn.getAttribute('title') === 'Me gustó';
            activeReaction = isPositive ? 'like' : 'dislike';

            if (isPositive) {
                btn.classList.add('border-emerald-500', 'text-emerald-400', 'bg-emerald-950/40');
            } else {
                btn.classList.add('border-rose-500', 'text-rose-400', 'bg-rose-950/40');
            }
        });
    });

    // Envío del comentario
    if (sendBtn && textarea) {
        sendBtn.addEventListener('click', () => {
            const commentText = textarea.value.trim();

            if (!commentText) {
                textarea.classList.add('border-rose-500');
                textarea.placeholder = 'Por favor escribe un comentario antes de enviar...';
                return;
            }

            // Simulación de publicación exitosa
            textarea.value = '';
            textarea.classList.remove('border-rose-500');
            textarea.placeholder = '¿Qué te ha parecido el planteamiento táctico de esta jornada?...';

            alert('¡Gracias por tu opinión! Tu comentario ha sido publicado en la comunidad.');

            // Resetear reacciones
            reactionBtns.forEach(b => {
                b.classList.remove('border-emerald-500', 'text-emerald-400', 'border-rose-500', 'text-rose-400', 'bg-emerald-950/40', 'bg-rose-950/40');
            });
            activeReaction = null;
        });
    }
}