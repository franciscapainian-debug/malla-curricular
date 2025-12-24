/* Base de datos de la Malla.
  Estructura: { id: string, nombre: string, sem: numero, req: [array de ids] }
*/

const mallaData = [
    // --- SEMESTRE 1 ---
    { id: 'bio_cel', nombre: 'Biología Celular', sem: 1, req: [] },
    { id: 'quim_gen', nombre: 'Química General y Orgánica', sem: 1, req: [] },
    { id: 'bases_fis', nombre: 'Bases Físico-Matemáticas', sem: 1, req: [] },
    { id: 'morf_1', nombre: 'Morfología I', sem: 1, req: [] },
    { id: 'estrategias', nombre: 'Estrategias para el Aprendizaje', sem: 1, req: [] },

    // --- SEMESTRE 2 ---
    { id: 'bio_mol', nombre: 'Biología Molecular y Genética', sem: 2, req: ['bio_cel'] },
    { id: 'bioquim', nombre: 'Bioquímica General', sem: 2, req: ['bio_cel', 'quim_gen'] },
    { id: 'soporte', nombre: 'Soporte Básico Vital y P.A.', sem: 2, req: ['bio_cel'] },
    { id: 'morf_2', nombre: 'Morfología II', sem: 2, req: ['morf_1'] }, // Ajustado req lógico
    { id: 'antropo', nombre: 'Antropología', sem: 2, req: [] },

    // --- SEMESTRE 3 ---
    { id: 'bioest', nombre: 'Bioestadística y MBE', sem: 3, req: [] },
    { id: 'microbio', nombre: 'Microbiología Médica', sem: 3, req: ['soporte', 'bio_mol'] },
    { id: 'fisio', nombre: 'Fisiología Médica', sem: 3, req: ['bio_mol', 'morf_1', 'bioquim'] },
    { id: 'morf_3', nombre: 'Morfología III', sem: 3, req: ['morf_2', 'fisio'] }, // Req fisio movido aquí por lógica común
    { id: 'etica', nombre: 'Ética', sem: 3, req: ['antropo'] },

    // --- SEMESTRE 4 ---
    { id: 'pato_med', nombre: 'Patología Médica', sem: 4, req: ['microbio'] }, // Ajustado
    { id: 'fisiopato', nombre: 'Fisiopatología', sem: 4, req: ['fisio'] },
    { id: 'psico', nombre: 'Psicología Aplicada', sem: 4, req: [] },
    { id: 'abp_1', nombre: 'Integración ABP I', sem: 4, req: [] },
    { id: 'elec_1', nombre: 'Electivo I', sem: 4, req: ['etica'] },

    // --- SEMESTRE 5 ---
    { id: 'semio_1', nombre: 'Semiología I', sem: 5, req: ['fisiopato', 'morf_3'] }, // + Razonamiento 1 si existiera antes
    { id: 'farma', nombre: 'Farmacología General', sem: 5, req: ['pato_med'] }, // Ajustado sem de pato
    { id: 'epidemio', nombre: 'Epidemiología', sem: 5, req: ['bioest'] }, // Ajustado a bioest o Salud Pob si fuera antes
    { id: 'abp_2', nombre: 'Integración ABP II', sem: 5, req: ['abp_1'] },
    { id: 'elec_2', nombre: 'Electivo II', sem: 5, req: [] },

    // --- SEMESTRE 6 ---
    { id: 'semio_2', nombre: 'Semiología II', sem: 6, req: ['semio_1', 'pato_med'] },
    { id: 'metodologia', nombre: 'Metodología Inv.', sem: 6, req: ['bioest'] },
    { id: 'historia', nombre: 'Historia de la Medicina', sem: 6, req: [] },
    { id: 'razona_1', nombre: 'Razonamiento Med. Clínico I', sem: 6, req: ['fisiopato'] }, // Ajuste de nombre/semestre
    { id: 'elec_3', nombre: 'Electivo III', sem: 6, req: [] },

    // --- SEMESTRE 7 ---
    { id: 'med_int_1', nombre: 'Medicina Interna I', sem: 7, req: ['semio_2', 'microbio'] },
    { id: 'cirugia_1', nombre: 'Cirugía I', sem: 7, req: ['semio_2'] },
    { id: 'psiq_1', nombre: 'Psiquiatría I', sem: 7, req: ['semio_2', 'psico'] },
    { id: 'salud_pob', nombre: 'Salud Poblacional', sem: 7, req: ['bioest'] }, // Movido según orden lógico
    { id: 'elec_4', nombre: 'Electivo IV', sem: 7, req: [] },

    // --- SEMESTRE 8 ---
    { id: 'med_int_2', nombre: 'Medicina Interna II', sem: 8, req: ['med_int_1'] },
    { id: 'cirugia_2', nombre: 'Cirugía II', sem: 8, req: ['cirugia_1'] },
    { id: 'psiq_2', nombre: 'Psiquiatría II', sem: 8, req: ['psiq_1'] },
    { id: 'bioetica', nombre: 'Bioética', sem: 8, req: ['etica'] },
    { id: 'razona_2', nombre: 'Razonamiento Med. Clínico II', sem: 8, req: ['razona_1'] },

    // --- SEMESTRE 9 ---
    { id: 'pedia_1', nombre: 'Pediatría I', sem: 9, req: ['med_int_2'] }, // Ajustado simple
    { id: 'gine_1', nombre: 'Ginecología I', sem: 9, req: ['med_int_2', 'cirugia_2'] },
    { id: 'especial_1', nombre: 'Especialidades I', sem: 9, req: ['med_int_2'] },
    { id: 'salud_dig', nombre: 'Salud Digital', sem: 9, req: ['semio_1'] },

    // --- SEMESTRE 10 ---
    { id: 'pedia_2', nombre: 'Pediatría II', sem: 10, req: ['pedia_1'] },
    { id: 'gine_2', nombre: 'Ginecología II', sem: 10, req: ['gine_1'] },
    { id: 'especial_2', nombre: 'Especialidades II', sem: 10, req: ['especial_1'] },
    { id: 'pueblos', nombre: 'Salud Pueblos Orig.', sem: 10, req: [] },

    // --- SEMESTRE 11 ---
    { id: 'legal', nombre: 'Medicina Legal', sem: 11, req: ['pueblos'] },
    { id: 'fam_com', nombre: 'Med. Familiar y Com.', sem: 11, req: ['med_int_2'] },
    { id: 'urgencia_trauma', nombre: 'Urgencia y Trauma', sem: 11, req: ['pedia_1', 'gine_1'] },
    { id: 'paliativos', nombre: 'Cuidados Paliativos', sem: 11, req: ['med_int_2', 'cirugia_2', 'psiq_2'] },
    { id: 'salud_pob_ap', nombre: 'Salud Pob. Aplicada', sem: 11, req: ['legal'] },

    // --- SEMESTRE 12 (INTERNADOS) ---
    // Req "Licenciatura": asumiremos aprobar todo Semestre 11
    { id: 'int_med_int', nombre: 'Int. Medicina Interna', sem: 12, req: ['legal', 'fam_com', 'urgencia_trauma'] },
    { id: 'int_salud_men', nombre: 'Int. Salud Mental', sem: 12, req: ['legal'] },
    { id: 'razona_3', nombre: 'Razonamiento III', sem: 12, req: ['fam_com'] },

    // --- SEMESTRE 13 ---
    { id: 'int_pedia', nombre: 'Int. Pediatría', sem: 13, req: ['int_med_int'] },
    { id: 'int_esp_int', nombre: 'Int. Esp. Med. Interna', sem: 13, req: ['int_med_int', 'int_salud_men'] },
    { id: 'int_gine', nombre: 'Int. Ginecología', sem: 13, req: ['int_med_int'] }, // simplificado
    { id: 'razona_4', nombre: 'Razonamiento IV', sem: 13, req: ['razona_3'] },

    // --- SEMESTRE 14 ---
    { id: 'int_fam', nombre: 'Int. Med. Familiar', sem: 14, req: ['int_med_int'] },
    { id: 'int_ciru', nombre: 'Int. Cirugía y Uro', sem: 14, req: ['int_med_int'] },
    { id: 'int_elec', nombre: 'Int. Electivo', sem: 14, req: ['int_pedia'] },
    { id: 'int_urg', nombre: 'Int. Urgencia', sem: 14, req: ['int_med_int', 'int_pedia', 'int_ciru'] }
];

// Estado de ramos aprobados (Set para evitar duplicados)
let aprobados = new Set();

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', () => {
    cargarProgreso();
    renderizarMalla();
});

// Cargar desde LocalStorage
function cargarProgreso() {
    const guardados = localStorage.getItem('malla_aprobados');
    if (guardados) {
        aprobados = new Set(JSON.parse(guardados));
    }
}

// Guardar en LocalStorage
function guardarProgreso() {
    localStorage.setItem('malla_aprobados', JSON.stringify([...aprobados]));
}

// Función principal de renderizado
function renderizarMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = ''; // Limpiar

    // Crear columnas para 14 semestres
    for (let i = 1; i <= 14; i++) {
        const columna = document.createElement('div');
        columna.className = 'semestre-column';

        const header = document.createElement('div');
        header.className = 'semestre-header';
        header.innerText = `Semestre ${i}`;
        columna.appendChild(header);

        const lista = document.createElement('div');
        lista.className = 'asignaturas-list';

        // Filtrar ramos del semestre actual
        const ramosSemestre = mallaData.filter(r => r.sem === i);

        ramosSemestre.forEach(ramo => {
            const card = document.createElement('div');
            card.className = 'ramo-card';
            card.innerText = ramo.nombre;
            
            // Verificar estado
            const esAprobado = aprobados.has(ramo.id);
            const requisitosFaltantes = verificarRequisitos(ramo);
            const estaBloqueado = requisitosFaltantes.length > 0 && !esAprobado;

            if (esAprobado) {
                card.classList.add('approved');
            } else if (estaBloqueado) {
                card.classList.add('locked');
                card.title = `Falta aprobar: ${requisitosFaltantes.map(r => r.nombre).join(', ')}`;
            } else {
                card.classList.add('available');
            }

            // Evento click
            card.onclick = () => toggleRamo(ramo, estaBloqueado, requisitosFaltantes);

            lista.appendChild(card);
        });

        columna.appendChild(lista);
        container.appendChild(columna);
    }
}

// Verificar requisitos devuelve array de objetos requisito faltantes
function verificarRequisitos(ramo) {
    if (ramo.req.length === 0) return [];
    
    // Obtener objetos completos de los requisitos
    const reqs = ramo.req.map(reqId => mallaData.find(r => r.id === reqId));
    
    // Filtrar los que NO están en el set de aprobados
    return reqs.filter(r => r && !aprobados.has(r.id));
}

// Manejar click en ramo
function toggleRamo(ramo, estaBloqueado, requisitosFaltantes) {
    if (estaBloqueado) {
        const nombresFaltantes = requisitosFaltantes.map(r => r.nombre).join('\n- ');
        alert(`🚫 Ramo Bloqueado.\n\nDebes aprobar primero:\n- ${nombresFaltantes}`);
        return;
    }

    if (aprobados.has(ramo.id)) {
        // Desaprobar: Verificar si este ramo es requisito de otro ya aprobado
        // (Opcional: lógica compleja, aquí permitiremos desmarcar simple)
        aprobados.delete(ramo.id);
    } else {
        // Aprobar
        aprobados.add(ramo.id);
    }

    guardarProgreso();
    renderizarMalla(); // Re-renderizar para actualizar bloqueos de siguientes ramos
}

// Reiniciar todo
function resetMalla() {
    if(confirm("¿Estás seguro de querer borrar todo el progreso?")) {
        aprobados.clear();
        guardarProgreso();
        renderizarMalla();
    }
}
