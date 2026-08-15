const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const sales=[165,245,255,240,325,310,405,370,430,490,390,475];
const salesCtx=document.getElementById("salesChart");
const categoryCtx=document.getElementById("categoryChart");
new Chart(salesCtx,{type:"line",data:{labels:months,datasets:[{label:"Net Sales ($K)",data:sales,borderColor:"#4f91ff",backgroundColor:"rgba(79,145,255,.18)",fill:true,tension:.35,pointRadius:3}]},options:{responsive:true,plugins:{legend:{labels:{color:"#b8c8df"}}},scales:{x:{ticks:{color:"#8396b3"},grid:{color:"#162640"}},y:{ticks:{color:"#8396b3"},grid:{color:"#162640"}}}}});
new Chart(categoryCtx,{type:"doughnut",data:{labels:["Technology","Office","Home"],datasets:[{data:[42,33,25],backgroundColor:["#4f91ff","#7d5cff","#39c58a"],borderWidth:0}]},options:{responsive:true,plugins:{legend:{labels:{color:"#b8c8df"}}}}});
function updateDashboard(){document.getElementById("gross").textContent="$4.82M";document.getElementById("net").textContent="$4.08M";document.getElementById("qty").textContent="29,354";document.getElementById("transactions").textContent="6,143";}
function resetDashboard(){document.getElementById("yearFilter").value="all";document.getElementById("categoryFilter").value="all";updateDashboard();}
function downloadResume(){alert("Add your resume PDF to the repository and update this button to its filename.");}
