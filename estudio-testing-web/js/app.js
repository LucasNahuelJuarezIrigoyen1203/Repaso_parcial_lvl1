const tabs=[["t1","Conceptos"],["t2","Enfoques y técnicas"],["t3","Casos de prueba"],["t4","Defectos"],["p1","Práctica A–E"],["p2","Quiz"]];
const nav=document.getElementById("nav");
tabs.forEach(([id,n],i)=>{const b=document.createElement("button");b.textContent=n;b.onclick=()=>show(id);b.dataset.id=id;nav.appendChild(b)});
function show(id){document.querySelectorAll("section").forEach(s=>s.classList.toggle("on",s.id===id));nav.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.id===id));scrollTo(0,0)}
show("t1");
const cases=[
["A","Aplicar cupón DESC10 a $15.000 → total $13.500","Caja negra","Solo se mira entrada y salida en la pantalla, sin conocer el código. Técnica: caso de uso/escenario (camino feliz)."],
["B","Simular caída de red en db.connect() dentro de try-catch","Caja blanca","Se conoce el código interno (bloque try-catch) y se busca cubrir el camino del catch. Técnica: cobertura de sentencias/ramas."],
["C","Ejecutar calcularEnvio() para entrar a if, else if y else","Caja blanca","Busca 100% de decision coverage, es decir cobertura de decisiones/ramas."],
["D","Edad 17, 18 y 19 en el formulario","Caja negra","Se prueba solo desde la interfaz. Técnica: análisis de valores límite (límite de 18)."],
["E","processBatch() con 10.000 objetos monitoreando el puntero del bucle for","Caja blanca","Se analiza el estado interno y la estructura de un bucle en una función interna: es caja blanca (pruebas de bucles/caminos)."]];
const cls=document.getElementById("cls");
cases.forEach(([l,t,a,e])=>{const d=document.createElement("div");d.className="c";
d.innerHTML=`<h3>Caso ${l}</h3><p>${t}</p><select><option value="">Elegí…</option><option>Caja negra</option><option>Caja blanca</option><option>Caja gris</option></select> <button class="btn">Verificar</button><div class="fb"></div>`;
d.querySelector("button").onclick=()=>{const v=d.querySelector("select").value;if(!v)return;const f=d.querySelector(".fb");f.innerHTML=(v===a?"✅ Correcto. ":"❌ Era <b>"+a+"</b>. ")+e;f.style.color=v===a?"var(--ok)":"var(--ko)"};
cls.appendChild(d)});
const Q=[
["¿Qué enfoque NO requiere conocer el código fuente?",["Caja blanca","Caja negra","Cobertura de sentencias"],1,"En caja negra solo importan entradas, salidas y requisitos."],
["Un campo acepta 18–60. ¿Qué valores usa el análisis de valores límite?",["15, 30, 70","17, 18, 19, 59, 60, 61","0 y 100"],1,"Los errores aparecen en los bordes."],
["Si ejecutás siempre los mismos tests y ya no hallás errores, aplica…",["Paradoja del pesticida","Agrupación de defectos","Pruebas tempranas"],0,"Hay que renovar y ampliar los casos."],
["¿Qué prueba se asocia a 'Diseño detallado' en el Modelo V?",["Unitarias","Integración","Aceptación"],0,"Detallado ↔ unitarias; arquitectura ↔ integración."],
["Tras corregir un bug querés verificar solo esa zona, manualmente y en profundidad:",["Smoke test","Sanity test","UAT"],1,"Sanity: estrecho y profundo. Smoke: ancho y superficial."],
["Revisar requisitos sin ejecutar nada es enfoque…",["Dinámico","Estático","Exploratorio"],1,"Estático: revisiones, inspecciones, walkthroughs."],
["Verificar en la BD que el estado del pago sea APPROVED tras comprar desde la app es…",["Caja gris","Caja negra","Caja blanca"],0,"Conocimiento parcial de lo interno."],
["¿Cómo debe redactarse cada paso de un caso de prueba?",["En pasado","Verbo infinitivo (Ingresar, Hacer clic)","Con texto libre"],1,"Claridad y atomicidad."],
["¿Qué estado sigue a 'Retest' si el bug sigue ocurriendo?",["Cerrado","Reabierto","Nuevo"],1,"Si funciona se cierra; si no, se reabre."],
["Verificar que tras pagar se vea el pedido como aprobado es técnica de…",["Transición de estados","Valores límite","Cobertura de sentencias"],0,"Se valida el cambio correcto de un estado a otro."],
["Ventaja principal de las pruebas automatizadas frente a las manuales:",["Detectan mejor problemas de usabilidad","Son rápidas y repetibles en pruebas repetitivas","No requieren mantenimiento"],1,"Ideales para regresión; pero requieren inversión y mantenimiento de scripts."],
["Un buen reporte de defecto debe explicar…",["Solo el título","Qué pasó, pasos para reproducirlo, esperado vs obtenido, ambiente y evidencia","Quién tiene la culpa"],1,"Para que el dev entienda, reproduzca y corrija."]];
let ok=0,tot=0;
function initQ(){ok=0;tot=0;sc();const z=document.getElementById("qz");z.innerHTML="";
Q.forEach(([q,o,c,e])=>{const d=document.createElement("div");d.className="c";d.innerHTML=`<h3>${q}</h3>`;let done=false;
o.forEach((t,i)=>{const b=document.createElement("button");b.className="opt";b.textContent=t;
b.onclick=()=>{if(done)return;done=true;tot++;if(i===c)ok++;b.classList.add(i===c?"ok":"ko");d.querySelectorAll(".opt")[c].classList.add("ok");const f=document.createElement("div");f.className="fb";f.textContent=e;d.appendChild(f);sc()};d.appendChild(b)});z.appendChild(d)})}
function sc(){document.getElementById("sc").textContent=ok+"/"+tot+" de "+Q.length}
initQ();