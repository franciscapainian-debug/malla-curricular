/* Base de datos de Malla Curricular
  Estructura: { id: string, sem: number, nombre: string, req: array of strings }
*/

const malla = [
    // --- SEMESTRE 1 ---
    { id: 'biocel', sem: 1, nombre: 'Biología Celular', req: [] },
    { id: 'quimica', sem: 1, nombre: 'Química General y Orgánica', req: [] },
    { id: 'bases_fis', sem: 1, nombre: 'Bases Físico-Matemáticas', req: [] },
    { id: 'bases_fund', sem: 1, nombre: 'Bases y Fundamentos de la Medicina', req: [] },
    { id: 'historia', sem: 1, nombre: 'Historia de la Medicina', req: ['bases_fund'] }, // Req en mismo semestre
    { id: 'morfo1', sem: 1, nombre: 'Morfología Integrada I', req: ['abp1'] }, // Req de ABP1 (mismo sem)
    { id: 'abp1', sem: 1, nombre: 'Integración ABP I', req: [] },
    { id: 'estrategias', sem: 1, nombre: 'Estrategias para el Aprendizaje', req: [] },

    // --- SEMESTRE 2 ---
    { id: 'biomol', sem: 2, nombre: 'Biología Molecular y Genética', req: ['biocel'] },
    { id: 'bioquim', sem: 2, nombre: 'Bioquímica General', req: ['biocel', 'quimica'] },
    { id: 'soporte', sem: 2, nombre: 'Soporte Básico Vital', req: ['biocel'] },
    { id: 'psico', sem: 2, nombre: 'Psicología Aplicada', req: ['historia'] },
    { id: 'salud_pob', sem: 2, nombre: 'Salud Poblacional', req: ['bioest', 'mbe'] }, // OJO: Requiere materias de Sem 3 (bloqueo lógico temporal)
    { id: 'morfo2', sem: 2, nombre: 'Morfología Integrada II', req: ['morfo1', 'biomol'] },
    { id: 'abp2', sem: 2, nombre: 'Integración ABP II', req: ['abp1'] },
    { id: 'antropo', sem: 2, nombre: 'Antropología', req: [] },

    // --- SEMESTRE 3 ---
    { id: 'micro', sem: 3, nombre: 'Microbiología Médica', req: ['soporte', 'biomol'] },
    { id: 'fisio', sem: 3, nombre: 'Fisiología Médica', req: ['biomol', 'morfo1', 'bioquim'] },
    { id: 'bioest', sem: 3, nombre: 'Bioestadística', req: [] }, // Separado para cumplir req de Salud Pob
    { id: 'mbe', sem: 3, nombre: 'Principios de MBE', req: [] }, // Separado para cumplir req
    { id: 'bioetica_sem3', sem: 3, nombre: 'Bioética', req: ['antropo'] }, // Nota: Hay otra Bioética en Sem 5 en prereqs, pero Sem 3 en lista. Usamos nombre Sem 3.
    { id: 'morfo3', sem: 3, nombre: 'Morfología Integrada III', req: ['fisio', 'morfo2'] }, // Fisio es corequisito (mismo sem)
    { id: 'pueblos', sem: 3, nombre: 'Salud Pueblos Originarios', req: ['razona2'] }, // OJO: Req Razona 2 (Sem 5). Bloqueo temporal.
    { id: 'electivo1', sem: 3, nombre: 'Electivo Integral I', req: ['bioetica_sem3'] }, // Req Ética (asumimos la de sem 3)

    // --- SEMESTRE 4 ---
    { id: 'pato', sem: 4, nombre: 'Patología Médica', req: ['micro', 'morfo3'] },
    { id: 'fisiopato', sem: 4, nombre: 'Fisiopatología Médica', req: ['fisio'] },
    { id: 'epidemio', sem: 4, nombre: 'Epidemiología', req: ['salud_pob'] },
    { id: 'salud_dig', sem: 4, nombre: 'Salud Digital', req: ['semio1'] }, // OJO: Semio 1 es Sem 5. Bloqueo temporal.
    { id: 'salud_pob_ap', sem: 4, nombre: 'Salud Pob. Aplicada', req: ['legal'] }, // OJO: Legal es Sem 5. Bloqueo temporal.
    { id: 'razona1', sem: 4, nombre: 'Razonamiento Clinico I', req: ['fisio', 'morfo2'] },
    { id: 'electivo2', sem: 4, nombre: 'Electivo Integral II', req: [] },

    // --- SEMESTRE 5 ---
    { id: 'farma', sem: 5, nombre: 'Farmacología General', req: ['pato'] }, // Pato es Sem 4
    { id: 'semio1', sem: 5, nombre: 'Semiología I', req: ['fisiopato', 'morfo3', 'razona1', 'bases_fund'] },
    { id: 'metodologia', sem: 5, nombre: 'Metodología Inv.', req: ['bioest', 'mbe'] },
    { id: 'legal', sem: 5, nombre: 'Medicina Legal', req: ['pueblos'] }, // Pueblos es Sem 3 (OK)
    { id: 'razona2', sem: 5, nombre: 'Razonamiento Clinico II', req: ['semio1', 'pato'] }, // Semio 1 es corequisito
    { id: 'electivo3', sem: 5, nombre: 'Electivo Integral III', req: [] },

    // --- SEMESTRE 6 ---
    { id: 'semio2', sem: 6, nombre: 'Semiología II', req: ['semio1', 'pato'] },
    { id: 'med_int1', sem: 6, nombre: 'Medicina Interna I', req: ['semio2', 'razona2', 'micro'] },
    { id: 'cirugia1', sem: 6, nombre: 'Cirugía I', req: ['semio2', 'razona2', 'micro'] },
    { id: 'psiq1', sem: 6, nombre: 'Psiquiatría I', req: ['semio2', 'razona2', 'micro'] },
    { id: 'med_fam', sem: 6, nombre: 'Med. Familiar y Com.', req: ['med_int2'] }, // OJO: Med Int 2 es Sem 7. Bloqueo temporal.
    { id: 'razona3', sem: 6, nombre: 'Razonamiento Clinico III', req: ['med_fam', 'paliativos'] }, // Paliativos es Sem 8. Bloqueo temporal.
    { id: 'electivo4', sem: 6, nombre: 'Electivo Integral IV', req: [] },

    // --- SEMESTRE 7 ---
    { id: 'med_int2', sem: 7, nombre: 'Medicina Interna II', req: ['med_int1'] },
    { id: 'cirugia2', sem: 7, nombre: 'Cirugía II', req: ['cirugia1'] },
    { id: 'gine1', sem: 7, nombre: 'Ginecología y Obs. I', req: ['med_int2', 'cirugia2', 'legal'] }, // Med Int 2 es corequisito
    { id: 'psiq2', sem: 7, nombre: 'Psiquiatría II', req: ['psiq1'] },
    { id: 'urgencia_trauma', sem: 7, nombre: 'Urgencia y Trauma', req: ['pedia1', 'gine1', 'paliativos'] }, // OJO: Pedia 1 (Sem 8), Paliativos (Sem 8). Bloqueo.
    { id: 'razona4', sem: 7, nombre: 'Razonamiento Clinico IV', req: ['int_esp', 'int_ciru', 'int_elec2'] }, // OJO: Requisitos de internado (Sem 12+). Bloqueo fuerte.

    // --- SEMESTRE 8 ---
    { id: 'pedia1', sem: 8, nombre: 'Pediatría I', req: ['med_int2', 'psiq2', 'legal'] },
    { id: 'gine2', sem: 8, nombre: 'Ginecología y Obs. II', req: ['gine1'] },
    { id: 'especial1', sem: 8, nombre: 'Especialidades I', req: ['med_int2'] },
    { id: 'paliativos', sem: 8, nombre: 'Cuidados Paliativos', req: ['med_int2', 'cirugia2', 'psiq2', 'legal'] },

    // --- SEMESTRE 9 ---
    { id: 'pedia2', sem: 9, nombre: 'Pediatría II', req: ['pedia1'] },
    { id: 'especial2', sem: 9, nombre: 'Especialidades II', req: ['med_fam', 'paliativos'] },

    // --- CICLO INTERNADOS (Asumimos "Licenciatura" = Aprobar todo hasta Sem 9) ---
    // Usaremos una logica especial: Requieren haber pasado los ramos troncales de sem 9.
    
    // --- SEMESTRE 10 ---
    { id: 'int_med_int', sem: 10, nombre: 'Int. Medicina Interna', req: ['pedia2', 'especial2', 'gine2', 'urgencia_trauma'] },

    // --- SEMESTRE 11 ---
    { id: 'int_salud_men', sem: 11, nombre: 'Int. Salud Mental', req: ['int_med_int'] }, // Simplificado por licenciatura

    // --- SEMESTRE 12 ---
    { id: 'int_esp', sem: 12, nombre: 'Int. Especialidades', req: ['int_med_int', 'int_salud_men'] },

    // --- SEMESTRE 13 ---
    { id: 'int_gine', sem: 13, nombre: 'Int. Ginecología', req: ['int_esp'] }, // Ajustado logica flujo
    { id: 'int_pedia', sem: 13, nombre: 'Int. Pediatría', req: ['int_med_int'] },

    // --- SEMESTRE 14 ---
    { id: 'int_fam', sem: 14, nombre: 'Int. Med. Familiar', req: ['int_med_int'] },
    { id: 'int_ciru', sem: 14, nombre: 'Int. Cirugía y Urología', req: ['int_med_int'] },
    { id: 'int_urg', sem: 14, nombre: 'Int. Urgencia y Trauma', req: ['int_med_int', 'int_pedia', 'int_ciru', 'int_fam'] },
    { id: 'int_elec1', sem: 14, nombre: 'Int. Electivo I', req: ['int_med_int'] },
    { id: 'int_elec2', sem: 14, nombre: 'Int. Electivo II', req: ['int_pedia', 'int_fam'] }
];

let aprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderizarMalla();
});

// Función Principal: Dibuja la malla
function renderizarMalla() {
    const contenedor = document.getElementById('malla-container');
    contenedor.innerHTML = '';

    // Crear 14 columnas
    for (let i = 1; i <= 14; i++) {
        const columna = document.createElement('div');
        columna.className = 'columna-semestre';
        
        // Header del semestre
        const header = document.createElement('div');
        header.className = 'semestre-header';
        header.innerText = i >= 10 ? `Semestre ${i} (Int)` : `Semestre ${i}`;
        columna.appendChild(header);

        // Filtrar ramos de este semestre
        const ramosSemestre = malla.filter(r => r.sem === i);

        ramosSemestre.forEach(ramo => {
            const card = document.createElement('div');
            card.className = 'ramo';
            card.innerText = ramo.nombre;

            // Verificar estado
            const estado = verificarEstado(ramo);

            if (estado.aprobado) {
                card.classList.add('approved');
            } else if (estado.bloqueado) {
                card.classList.add('locked');
            } else {
                card.classList.add('available');
            }

            // Click event
            card.onclick = () => toggleRamo(ramo, estado);

            columna.appendChild(card);
        });

        contenedor.appendChild(columna);
    }
}

// Verifica si un ramo está aprobado, bloqueado o disponible
function verificarEstado(ramo) {
    const estaAprobado = aprobados.includes(ramo.id);
    
    // Buscar objetos completos de los requisitos
    const requisitosObj = ramo.req.map(reqId => malla.find(r => r.id === reqId)).filter(Boolean);
    
    // Filtrar los que FALTAN por aprobar
    const faltantes = requisitosObj.filter(req => !aprobados.includes(req.id));

    return {
        aprobado: estaAprobado,
        bloqueado: faltantes.length > 0 && !estaAprobado,
        faltantes: faltantes
    };
}

// Maneja el clic en un ramo
function toggleRamo(ramo, estado) {
    const modal = document.getElementById('modal');
    const listaReq = document.getElementById('lista-requisitos');
    const closeBtn = document.querySelector('.close-btn');
    const okBtn = document.querySelector('.btn-ok');

    // 1. Si está bloqueado, mostrar alerta con requisitos faltantes
    if (estado.bloqueado) {
        listaReq.innerHTML = '';
        estado.faltantes.forEach(r => {
            const li = document.createElement('li');
            li.innerText = `• ${r.nombre} (Sem ${r.sem})`;
            listaReq.appendChild(li);
        });
        modal.style.display = 'block';

        // Cerrar modal
        const cerrar = () => modal.style.display = 'none';
        closeBtn.onclick = cerrar;
        okBtn.onclick = cerrar;
        window.onclick = (e) => { if (e.target == modal) cerrar(); };
        return;
    }

    // 2. Si está disponible o aprobado, alternar estado
    if (estado.aprobado) {
        // Desaprobar (remover del array)
        aprobados = aprobados.filter(id => id !== ramo.id);
    } else {
        // Aprobar (agregar al array)
        aprobados.push(ramo.id);
    }

    // Guardar en navegador y redibujar
    guardarProgreso();
    renderizarMalla();
}

function guardarProgreso() {
    localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
}

function resetMalla() {
    if (confirm("¿Estás seguro de que quieres borrar todo tu progreso?")) {
        aprobados = [];
        guardarProgreso();
        renderizarMalla();
    }
}
