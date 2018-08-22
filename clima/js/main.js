$(document).ready(function(){
	//variaveis Globais
	dayCont = 0;
	porCont = 0;
	var slideCont = 0;
	var atuTime = 10;
	var botaoFodaMenuBoolean = true;
	var boolqualquerparaevitarumbuglocoqueacontecequandoapertaenter = true;
	//Variavel historico muito importante para o armazenamento das informações digitadas
	var historico = {
		"indicator" : -1,
		"hist" : [

		]
	};
	//Abre discovery 
	$('#target2').tapTarget('open');

	//Coloca o obejto estado_cidade com as informações do autocomplete (estado-cidade gerado no arquivo "cidadestado.js")
	$('input#cidade').autocomplete({

	    data: estado_cidade,

	    onAutocomplete: function(val) {

	    	boolqualquerparaevitarumbuglocoqueacontecequandoapertaenter = false;
	    	val = val.substr(0,(val.length - 5));
	    	$("input#cidade").val(val);
	    	Materialize.updateTextFields();
	    	getTempo();


	    },
	    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.

	  });
	

	//Evento para deletar o feed de cidades (acionado com o bootão direito)
	$(".botaoFoda").contextmenu(function() {

		botaoFodaMenuBoolean = false;

		iziToast.info({
          title: 'Excluir todas as cidades?',
          position: 'topRight',
          buttons: [
          ['<button id="exSim">Sim</button>', function (instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp',
                  }, toast);
          }],
          ['<button id="exNao">Não</button>', function (instance, toast) {
            instance.hide({
              transitionOut: 'fadeOutUp',
                  }, toast);
          }]
          ]

        });

		$("#exSim").click(function() {

			 historico = {
				"indicator" : -1,
				"hist" : [
				]
			};

			$("#princDiv").html(`
				<div class="slider">
		    		<ul class="slides white diaPrincipal"></ul>
		    	</div>

		    	<ul class="cards">
		    		
		    	</ul>

		    	<div class="drops">
		    		
		    	</div>
			`);



		});
	});

	//Ativa ou desativa as atualizações automaticas
	$(".atSwitch").click(function() {
		switchAtu();
	});
	//input para mudar o tempo das atualizações automativas(com tratamento de erros)
	$(".atbtn").click(function() {
		var at = $("#atInput").val();
		if (!at) {
			iziToast.error({
				title: "Digite um valor"
			});
		}
		else if (at<=0) {
			iziToast.warning({
				title: "Digite um valor maior que 0!"
			})
		}
		else {
			iziToast.success({
				title: "Valor atualizado, será usado no proximo ciclo",
				position: "topRight"
			})
			atuTime = at;
		}
	});

	
	//Mudar input de pais para seletor
	$(".switchFoda").click(function() {
		switchReg();
	});

	//Chama a função para gerar 1 feed do tempo
	$(".botaoFoda").click(function() {
		getTempo();

	});


	//Chama a mesma função porem quando voce aperta a tecla enter
	$(document).keyup(function(e) {

		if(e.which == 13) {
			 if (!boolqualquerparaevitarumbuglocoqueacontecequandoapertaenter) {
			 	boolqualquerparaevitarumbuglocoqueacontecequandoapertaenter = true;
			 }
			 else {
				getTempo();
				
			}
		} 

	});

	//funçõa mais foda do site, essa aqui cuida de tudo para gerar os feed bonitinhos(E ainda trata erros)
	function getTempo() {

		//Declaraçõa das variaveis de dados, para serem requesitadas		
		var units = $("select[id='sistema']").val();
		var lang = $("select[id='lang']").val();
		var cidade = $("#cidade").val();
		var regiao = (bool) ? $("select[id='regiao2']").val():$("#regiao").val();

		//Essa variavel aqui verifica se já tem a cidade requisitada no feed
		var boolJaTemCidade = jaTemCidade(cidade);
		
		//Tratamentos de erros
		if (!units) {
			iziToast.error ({
				title: "Selecione a unidade de temperatura"
			});
		}
		else if (cidade.length == 0) {
			iziToast.error({
				title: "Digite a cidade!"
			});
		}
		else if (regiao.length != 2 && !bool) {
			iziToast.error({
				title: "Digite dois caracteres na regiao!"
			})
		}
		else if (boolJaTemCidade) {
			iziToast.warning({
				title: "A cidade já esta no feed!"
			})
		}

		//Sem erros, sem problemas
		else {
			//Faz uma pré requesição para poder pegar dados que sera colocadas no slide principal, dados esses que não conseguem ser pegados na requisição de 1 dia
			$.ajax({
				url: "http://api.openweathermap.org/data/2.5/forecast",
				method: "GET",
				data: {
					q: cidade+","+regiao,
					lang: lang,
					units: units,
					APPID: "da586d7c48ae9f648872f85dc3e5aa64"
				},
				//Errinhos bonitinhos
				statusCode: {
					404: function() {
						iziToast.warning({
							title: "Cidade não encontrada!",
							position: "topRight"
						})
					}
				},
				//Aqui é tratada e separada algumas informações uteis, elas serão colocadas na variavel historico
				success: function(tempo) {

					//Outro discovery
					if (botaoFodaMenuBoolean) {
						botaoFodaMenuBoolean = false;
						$('#target1').tapTarget('open');
					}	
					//declaração de variaveis para armazer as medias da temperatura
					var temMedia = 0, temMinMediam = 0, temMaxMediam = 0, superCont = 0;

					//soma os dados
					for (var i = 0; i < tempo.list.length; i++) {
						temMedia += tempo.list[i].main.temp;
						temMaxMediam += tempo.list[i].main.temp_max;
						temMinMediam += tempo.list[i].main.temp_min;	
						superCont++;
					}

					//divide os dados
					temMedia /= superCont;
					temMaxMediam /= superCont;
					temMinMediam /= superCont;
					//formata os dados
					temMedia = numeral(temMedia).format('0.00');
					temMaxMediam = numeral(temMaxMediam).format('0.00');
					temMinMediam = numeral(temMinMediam).format('0.00');
					//mais variaveis de dados
					var dataGraf = [];
					var hojeMed = 0;
					var hojeHumi = 0;
					var contt = 0;
					var outroCont = -1;
					var maisUmSoQueParaNaoBugar = 0;
					var index = 0;
					var meds = [0, 0, 0, 0];
					var humi = [0, 0, 0, 0];
					var nomeds = [];

					//Pega os dados de humidade e temperatura media de cada dia
					for (var i = 0; i < tempo.list.length; i++) {

						var data = returnDay(tempo.list[i].dt_txt, "day-year");

						if (returnDay(tempo.list[0].dt_txt, "day-year") == data) {
							hojeMed += tempo.list[i].main.temp;
							hojeHumi += tempo.list[i].main.humidity;
							contt++;
						}
						else if (maisUmSoQueParaNaoBugar <= 4) {

							outroCont++;
							if (outroCont % 8 == 0) {
								if (outroCont == 32) {
									break;
								}
								index++;
								maisUmSoQueParaNaoBugar++;
								nomeds[index-1] = data;
							}

							meds[index-1] = meds[index-1] + tempo.list[i].main.temp; 
							humi[index-1] = humi[index-1] + tempo.list[i].main.humidity;

						}						

					}
					//adiciona os dados que sera usados para fazer o grafico
					dataGraf[0] = {
						day : "Hoje",
						MedTemp : parseFloat(numeral(hojeMed/contt).format('0.00')),
						MedHumi: parseFloat(numeral(hojeHumi/contt).format('0.00'))
					};
					//adiciona o resto dos dados
					for (var i = 1; i <= meds.length; i++) {
						meds[i-1] /= 8;
						humi[i-1] /= 8;
						dataGraf[i] = {
							day: nomeds[i-1],
							MedTemp: parseFloat(numeral(meds[i-1]).format('0.00')),
							MedHumi: parseFloat(numeral(humi[i-1]).format('0.00'))
						}
					}

			
					//Adiciona todos os dados na varivel/vetor historico
					historico.hist[historico.indicator+1] = {
						"units" : units,
						"lang" : lang,
						"cidade" : cidade,
						"regiao" : regiao,
						"mediaVet" : {
							"max" : temMaxMediam,
							"min" : temMinMediam,
							"tempe" : temMedia
						},
						"dataGraf" : dataGraf

					}

					historico.indicator = historico.indicator + 1;

					//Uma boa e tranquila mensagem de sucesso
					iziToast.success({
						title: cidade+" adicionada com sucesso",
						position: "topRight"
					})



					//Agora depois de ter tratado alguns dados, eles serão mandados para a funçao "GENERATOR" que ira gerar tudo com base naquelas informações, e colocara no site
					GENERATOR(historico.hist[historico.indicator]);

				}


			});

			

		}
	}
	//algumas outras variaveis globais
	bool = false;
	bool2 = false;

	//função essa talvez a mais complexa desse codigo, ela é a responsavel por gerar toda a parte visual (AVISO: podem existir algumas gambiaras muito nada a ver aqui)
	function GENERATOR(dados) {

		//Essa variavel se eu não me engano está ai só quando o site estava em teste...
		var sla = dados.dataGraf[0].MedHumi;

		//pega dados do historico
		var units = dados.units;
		var lang = dados.lang;
		var cidade = dados.cidade;
		var regiao = dados.regiao;
		//Pega os dados e separa as unidades
		var un, marquinhos;
		if (units == "metric") {
			un = "°C";
			marquinhos = "Km/h"
		}
		else if (units == "imperial") {
			un = "°F";
			marquinhos = "M/h"
		}
		else {
			un = "K";
			marquinhos = "Km/h"
		}

		//requisição do slide principal
		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/weather",
			method: "GET",
			data: {
				q: cidade+","+regiao,
				lang: lang,
				units: units,
				APPID: "da586d7c48ae9f648872f85dc3e5aa64"
			},

			success: function(tempo) {
				//Removendo esse indicadores e resetando o slide permite adicionar "Dinamicamente" outros slides
				$("ul").remove(".indicators");
				var prop = $(".diaPrincipal").html();
				//Gera o Slide da cidade
				prop += `<li class='slideCont`+slideCont+`'>
							<img src='img/`+tempo.weather[0].icon+`.jpg'>
							<div class='caption center-align'>
								<h3>`+tempo.name+`</h3>
								<h5>`+tempo.weather[0].description+`</h5>
								<p>temperatura = `+tempo.main.temp+` `+un+`
								<a class='btn-floating waves-effect halfway-fab waves-light red modal-trigger' href='#day`+(dayCont+1)+`'>
									<i class='material-icons'>add</i>
								</a>
								</div>
							</li>`;

				//coloca os slides no site e inicializa o mesmo
				$(".diaPrincipal").html(prop);
				$('.slider').slider();
				//isso serve para deixar certinho o slide, senão ele pode ficar em transição congelada
				setTimeout(function(){ $('.slider').slider('next');}, 1000);
				//Gera o modal do slide
				$(".drops").append(`<div id='day`+(dayCont+1)+`' class='modal modal-fixed-footer'> 
										<div class='modal-content'> 
											<h4>`+tempo.name+`</h4>
											<div id="grafGer`+slideCont+`"></div>
											<p>Nuvens: `+tempo.clouds.all+`%</p>
											<p>Humidade: `+tempo.main.humidity+`%</p>
											<p>Pressão da atmosfera: `+tempo.main.pressure+` hPa</p>
											<p>Nivel do mar: `+tempo.main.sea_level+` m</p>
											<p>Temperatura minima: `+tempo.main.temp_min+` `+un+`</p>
											<p>Temperatura maxima: `+tempo.main.temp_max+` `+un+`</p>
											<p>Temperatura Media = `+dados.mediaVet.tempe+` `+un+`</p>       
											<p>Temperatura minima Media = `+dados.mediaVet.min+` `+un+`</p> 
											<p>Temperatura maxima Media = `+dados.mediaVet.max+` `+un+`</p>           
											<p>Velocidade do vento: `+tempo.wind.speed+` `+marquinhos+`</p>
											<p>Direção do vento: `+tempo.wind.deg+` º</p>     
											<h5>Cordenadas: </h5>
											<p>Continente: `+tempo.sys.country+`</p>
											<p>Latitude: `+tempo.coord.lat+`</p>
											<p>Longitude: `+tempo.coord.lon+`</p>
										</div> 
										<div class='modal-footer'> 
										<a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat '>Sair</a> 
										</div> 
									</div>`);

				$('.modal').modal();

				//Aqui é gerado o grafico
				Highcharts.chart('grafGer'+slideCont+'', {
		            chart: {
		                zoomType: 'xy'
		            },
		            title: {
		                text: 'Temperatura Media e Humidade dos proximos 4 dias'
		            },
		            xAxis: [{
		                categories: [dados.dataGraf[0].day, dados.dataGraf[1].day, dados.dataGraf[2].day, dados.dataGraf[3].day],
		                crosshair: true
		            }],
		            yAxis: [{ // Primary yAxis
		                labels: {
		                    format: '{value} %',
		                    style: {
		                        color: Highcharts.getOptions().colors[0]
		                    }
		                },
		                title: {
		                    text: 'Humidade',
		                    style: {
		                        color: Highcharts.getOptions().colors[0]
		                    }
		                },
		                opposite: true

		            }, { // Secondary yAxis
		                gridLineWidth: 0,
		                title: {
		                    text: 'Temperatura',
		                    style: {
		                        color: Highcharts.getOptions().colors[1]
		                    }
		                },
		                labels: {
		                    format: '{value} '+un,
		                    style: {
		                        color: Highcharts.getOptions().colors[1]
		                    }
		                }

		            }],
		            tooltip: {
		                shared: true
		            },
		            legend: {
		                layout: 'vertical',
		                align: 'left',
		                x: 80,
		                verticalAlign: 'top',
		                y: 55,
		                floating: true,
		                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
		            },
		            series: [{
		                name: 'Humidade',
		                type: 'column',
		                yAxis: 0,
		                data: [dados.dataGraf[0].MedHumi, dados.dataGraf[1].MedHumi, dados.dataGraf[2].MedHumi, dados.dataGraf[3].MedHumi],
		                tooltip: {
		                    valueSuffix: ' %'
		                }

		            }, {
		                name: 'Temperatura Media',
		                type: 'spline',
		                yAxis: 1,
		                data: [dados.dataGraf[0].MedTemp, dados.dataGraf[1].MedTemp, dados.dataGraf[2].MedTemp, dados.dataGraf[3].MedTemp],
		                marker: {
		                    enabled: false
		                },
		                dashStyle: 'shortdot',
		                tooltip: {
		                    valueSuffix: ' '+un
		                }

		            }]
		        });

		        slideCont++;

			}

		});

		$.ajax({
			url: "http://api.openweathermap.org/data/2.5/forecast",
			method: "GET",

			data: {
				q: cidade+","+regiao,
				lang: lang,
				units: units,
				APPID: "da586d7c48ae9f648872f85dc3e5aa64"
			},

			success: function(tempoVariosDias) {
				var contCard = 0;
				dayCont++;
				var contNumberNotErrorBugDayBecauseHalfDay = 0;
				var cont = -1;
				var propcard = "<li class='row dataRow"+(+dayCont-1)+"'>"
				var propDrop = ""
				var day = returnDay(tempoVariosDias.list[0].dt_txt, "day-year");
				var inutil = true

				for (var i = 0; i < tempoVariosDias.list.length; i++) {
					if (day != returnDay(tempoVariosDias.list[i].dt_txt, "day-year") && contNumberNotErrorBugDayBecauseHalfDay <= 4) {
						cont ++;
						if (cont % 8 == 0) {

							contNumberNotErrorBugDayBecauseHalfDay++;

							propcard += `<div class='card col s3 card`+contNumberNotErrorBugDayBecauseHalfDay+`'> 
										 	<div class='card-tabs'>
										 		<div class='card-image'>
										 			<img src='img2/`+tempoVariosDias.list[i].weather[0].icon+`.jpg'>
										 			<span class='card-title'>`+tempoVariosDias.city.name+`:<br> Dia `+returnDay(tempoVariosDias.list[i].dt_txt, `day`)+`</span>
										 			<a class='btn-floating halfway-fab waves-effect waves-light red dropdown-button' data-activates='drop`+dayCont+`card`+cont+`'>
										 				<i class='material-icons'>add</i>
										 			</a>
										 		</div>
										 		<div class='card-content'> <p>`+tempoVariosDias.list[i].weather[0].description+`</p>
										 	</div>
										 </div>
									</div>
									`;

							if (!inutil) {
								propDrop += "</ul>"
							}
							else {
								inutil = false;
							}

							propDrop += `<ul id='drop`+dayCont+`card`+cont+`' class='dropdown-content'>`

						}

						propDrop += `<li>
										<a class='modal-trigger' href='#modalL`+dayCont+`C`+cont+`'>`+returnDay(tempoVariosDias.list[i].dt_txt, `hour`)+` : `+tempoVariosDias.list[i].weather[0].description+` : `+tempoVariosDias.list[i].main.temp+` `+un+`</a>
									</li>`

						$(".drops").append(`<div id='modalL`+dayCont+`C`+cont+`' class='modal'>
												<div class='modal-content'>
													<h4>`+tempoVariosDias.city.name+`: `+returnDay(tempoVariosDias.list[i].dt_txt, `day-mes`)+`, `+returnDay(tempoVariosDias.list[i].dt_txt, `hour`)+`</h4>
													<p>Nuvens: `+tempoVariosDias.list[i].clouds.all+`%</p>
													<p>Humidade: `+tempoVariosDias.list[i].main.humidity+`%</p>
													<p>Pressão da atmosfera: `+tempoVariosDias.list[i].main.pressure+` hPa</p>
													<p>Nivel do mar: `+tempoVariosDias.list[i].main.sea_level+` m</p>
													<p>Temperatura minima: `+tempoVariosDias.list[i].main.temp_min+` `+un+`</p>
													<p>Temperatura maxima: `+tempoVariosDias.list[i].main.temp_max+` `+un+`</p>
													<p>Velocidade do vento: `+tempoVariosDias.list[i].wind.speed+` `+marquinhos+`</p>
													<p>Direção do vento: `+tempoVariosDias.list[i].wind.deg+` º</p>
													<h5>Cordenadas: </h5>
													<p>Continente: `+tempoVariosDias.city.country+`</p>
													<p>Latitude: `+tempoVariosDias.city.coord.lat+`</p>
													<p>Longitude: `+tempoVariosDias.city.coord.lon+`</p>
												</div> 
												<div class='modal-footer'> 
													<a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat'>Sair</a>
												</div>
											</div>`);


					}
				}


				propcard += `<div class='right-align'>
								<a class='btn-floating waves-effect waves-light red' id='deleteBtn`+(dayCont-1)+`' indexMark='`+(dayCont-1)+`'>
									<i class='material-icons'>delete</i>
								</a>
							</div>
							<div class="divider"></div>
							</div>`;

				$(".cards").append(propcard);
				$(".drops").append(propDrop);
				$(".card5").remove();
				$('.modal').modal();

				$("#deleteBtn"+(dayCont-1)+"").click(function() {

					delete historico.hist[$(this).attr("indexMark")];


					$(".dataRow"+$(this).attr("indexMark")+"").hide(1000);
					$(".slideCont"+$(this).attr("indexMark")+"").remove();

					$(".diaPrincipal").html($(".diaPrincipal").html());

					$("ul").remove(".indicators");
					$('.slider').slider();

					setTimeout(function(){ $('.slider').slider('next');}, 1000);
				});

				


				$('.dropdown-button').dropdown({
					inDuration: 300,
					outDuration: 225,
					constrainWidth: false,
					hover: false,
					gutter: 0,
					belowOrigin: false,
					alignment: 'left',
					stopPropagation: false
				}
				);



			}
		})

	}

	function returnDay(notDay, change) {
		if (change == "day-year") {
			var propday = "";
			for (var i = 0; i < 10; i++) {
				propday += notDay.charAt(i);
			}
			return propday;
		}
		else if (change == "day") {
			return notDay.slice(8, 10);
		}
		else if (change == "hour") {
			return notDay.slice(11, 16);
		}
		else if ("day-mes") {
			return notDay.slice(8, 10)+"/"+notDay.slice(5, 7);
		}
	}

	function switchReg( ) {
		bool = !bool;
		if (!bool) {
			$("#regInput2").hide();
			$("#regInput").show();
		}
		else if (bool) {
			$("#regInput").hide();
			$("#regInput2").show();
		}
	}

	function contPorg( ) {
		porCont++;
		$(".determinate").css("width", porCont+"%");
		if (porCont == 100) {
			clearPorg();

			$("#princDiv").html(`
				<div class="slider">
		    		<ul class="slides white diaPrincipal"></ul>
		    	</div>

		    	<ul class="cards">
		    		
		    	</ul>

		    	<div class="drops">
		    		
		    	</div>
			`);


			for(var i = 0; i < historico.hist.length; i++) {
				if (historico.hist[i]) {
					GENERATOR(historico.hist[i]);
				}
			}

			setTimeout(function(){ $('.slider').slider('next');}, 1000);

			iziToast.info({
				title: "Seu feed foi atualizado",
				position: "topRight"
			});

			interval = setInterval(contPorg, minutesToMilisecunds(calcPor(atuTime)));
		}
	}

	function clearPorg() {
		clearInterval(interval);
		porCont = 0;
		$(".determinate").css("width", porCont+"%");
	}


	function calcPor(n) {
		return n/100;
	}

	function minutesToMilisecunds(n) {
		return n*60000;
	}

	function switchAtu( ) {
		bool2 = !bool2;
		if (!bool2) {
			clearPorg();
			iziToast.warning({
				title: "Atualizações de Feed desativadas",
				position: "topRight"
			});
		}
		else if (bool2) {
			interval = setInterval(contPorg, minutesToMilisecunds(calcPor(atuTime)));
			iziToast.success({
				title: "Atualizações automaticas de Feed Ativadas<br>",
				message: "Tempo de atualização = "+atuTime+" minutos",
				position: "topRight"
			});
		}
	}

	function jaTemCidade(cidade) {
		var proplala = false;

		for (var i = 0; i < historico.hist.length; i++) {
			if (historico.hist[i]) {
				if (historico.hist[i].cidade.toLocaleLowerCase() == cidade.toLocaleLowerCase()) {
					proplala = true;
				}	
			}
			
		}
	return proplala;
	}

});