<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>Cardápio de Serviços - Mecânico Delivery</title>
<meta name="viewport" content="width=device-width, initial-scale=1">


<style>
:root{--blue:#005c99;--bg:#f8f9fa}
body{font-family:Arial,Helvetica,sans-serif;margin:0;background:var(--bg);color:#222}


header{
  background:var(--blue);
  text-align:center;
  padding:20px;
  color:#fff;
}
header img{
  max-height:120px;
  display:block;
  margin:0 auto 10px;
}


.container{max-width:980px;margin:18px auto;padding:16px}


.controls{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  align-items:center;
  margin-bottom:12px
}
.controls input[type=text]{
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
  width:260px
}


.services-category{
  background:#fff;
  border-radius:8px;
  padding:14px;
  margin-bottom:12px;
  box-shadow:0 1px 3px rgba(0,0,0,.06)
}


h2{margin:6px 0 12px}


label{
  display:flex;
  justify-content:space-between;
  padding:6px 0;
  border-bottom:1px dashed #eee
}


textarea{
  width:100%;
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
  margin-top:8px
}


.total-box{
  background:#fff;
  border-radius:8px;
  padding:14px;
  margin-top:12px;
  box-shadow:0 1px 3px rgba(0,0,0,.06)
}


.big-total{font-size:18px;font-weight:700}


.wa-btn{
  display:inline-block;
  background:#25d366;
  color:#fff;
  padding:12px 16px;
  border-radius:8px;
  text-decoration:none;
  font-weight:700;
  margin-top:10px
}


footer{
  margin-top:16px;
  font-size:13px;
  color:#444;
  text-align:center;
  padding:14px
}


@media(max-width:720px){
  .controls input[type=text]{width:100%}
}
</style>
</head>


<body>


<header>
  <img src="enhanced_logo.png" alt="Mecânico Delivery">
  <div>Atendimento Sorocaba e Região</div>
  <div>Faça um orçamento ou tire suas dúvidas, sem compromisso.</div>
</header>


<div class="container">


<!-- DADOS DO VEÍCULO -->
<div class="services-category">
  <h2>Dados do Veículo</h2>
  <input type="text" id="veiculo" placeholde