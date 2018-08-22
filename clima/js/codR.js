//codigos de regioes
var codRe = [
  "AD"
 ,"AE"
 ,"AF"
 ,"AG"
 ,"AI"
 ,"AL"
 ,"AM"
 ,"AN"
 ,"AO"
 ,"AQ"
 ,"AR"
 ,"AS"
 ,"AT"
 ,"AU"
 ,"AW"
 ,"AZ"
 ,"BA"
 ,"BB"
 ,"BD"
 ,"BE"
 ,"BF"
 ,"BG"
 ,"BH"
 ,"BI"
 ,"BJ"
 ,"BL"
 ,"BM"
 ,"BN"
 ,"BO"
 ,"BR"
 ,"BS"
 ,"BT"
 ,"BW"
 ,"BY"
 ,"BZ"
 ,"CA"
 ,"CC"
 ,"CD"
 ,"CF"
 ,"CG"
 ,"CH"
 ,"CI"
 ,"CK"
 ,"CL"
 ,"CM"
 ,"CN"
 ,"CO"
 ,"CR"
 ,"CU"
 ,"CV"
 ,"CW"
 ,"CX"
 ,"CY"
 ,"CZ"
 ,"DE"
 ,"DJ"
 ,"DK"
 ,"DM"
 ,"DO"
 ,"DZ"
 ,"EC"
 ,"EE"
 ,"EG"
 ,"EH"
 ,"ER"
 ,"ES"
 ,"ET"
 ,"FI"
 ,"FJ"
 ,"FK"
 ,"FM"
 ,"FO"
 ,"FR"
 ,"GA"
 ,"GB"
 ,"GD"
 ,"GE"
 ,"GG"
 ,"GH"
 ,"GI"
 ,"GL"
 ,"GM"
 ,"GN"
 ,"GQ"
 ,"GR"
 ,"GT"
 ,"GU"
 ,"GW"
 ,"GY"
 ,"HK"
 ,"HN"
 ,"HR"
 ,"HT"
 ,"HU"
 ,"ID"
 ,"IE"
 ,"IL"
 ,"IM"
 ,"IN"
 ,"IO"
 ,"IQ"
 ,"IR"
 ,"IS"
 ,"IT"
 ,"JE"
 ,"JM"
 ,"JO"
 ,"JP"
 ,"KE"
 ,"KG"
 ,"KH"
 ,"KI"
 ,"KM"
 ,"KN"
 ,"KP"
 ,"KR"
 ,"KW"
 ,"KY"
 ,"KZ"
 ,"LA"
 ,"LB"
 ,"LC"
 ,"LI"
 ,"LK"
 ,"LR"
 ,"LS"
 ,"LT"
 ,"LU"
 ,"LV"
 ,"LY"
 ,"MA"
 ,"MC"
 ,"MD"
 ,"ME"
 ,"MF"
 ,"MG"
 ,"MH"
 ,"MK"
 ,"ML"
 ,"MM"
 ,"MN"
 ,"MO"
 ,"MP"
 ,"MR"
 ,"MS"
 ,"MT"
 ,"MU"
 ,"MV"
 ,"MW"
 ,"MX"
 ,"MY"
 ,"MZ"
 ,"NA"
 ,"NC"
 ,"NE"
 ,"NG"
 ,"NI"
 ,"NL"
 ,"NO"
 ,"NP"
 ,"NR"
 ,"NU"
 ,"NZ"
 ,"OM"
 ,"PA"
 ,"PE"
 ,"PF"
 ,"PG"
 ,"PH"
 ,"PK"
 ,"PL"
 ,"PM"
 ,"PN"
 ,"PR"
 ,"PS"
 ,"PT"
 ,"PW"
 ,"PY"
 ,"QA"
 ,"RE"
 ,"RO"
 ,"RS"
 ,"RU"
 ,"RW"
 ,"SA"
 ,"SB"
 ,"SC"
 ,"SD"
 ,"SE"
 ,"SG"
 ,"SH"
 ,"SI"
 ,"SJ"
 ,"SK"
 ,"SL"
 ,"SM"
 ,"SN"
 ,"SO"
 ,"SR"
 ,"SS"
 ,"ST"
 ,"SV"
 ,"SX"
 ,"SY"
 ,"SZ"
 ,"TC"
 ,"TD"
 ,"TG"
 ,"TH"
 ,"TJ"
 ,"TK"
 ,"TL"
 ,"TM"
 ,"TN"
 ,"TO"
 ,"TR"
 ,"TT"
 ,"TV"
 ,"TW"
 ,"TZ"
 ,"UA"
 ,"UG"
 ,"US"
 ,"UY"
 ,"UZ"
 ,"VA"
 ,"VC"
 ,"VE"
 ,"VG"
 ,"VI"
 ,"VN"
 ,"VU"
 ,"WF"
 ,"WS"
 ,"XK"
 ,"YE"
 ,"YT"
 ,"ZA"
 ,"ZM"
 ,"ZW"
];

var codMame = [
	"Afghanistan"
	,"Albania"
	,"Algeria"
	,"American Samoa"
	,"Andorra"
	,"Angola"
	,"Anguilla"
	,"Antarctica"
	,"Antigua and Barbuda"
	,"Argentina"
	,"Armenia"
	,"Aruba"
	,"Australia"
	,"Austria"
	,"Azerbaijan"
	,"Bahamas"
	,"Bahrain"
	,"Bangladesh"
	,"Barbados"
	,"Belarus"
	,"Belgium"
	,"Belize"
	,"Benin"
	,"Bermuda"
	,"Bhutan"
	,"Bolivia"
	,"Bosnia and Herzegovina"
	,"Botswana"
	,"Brazil"
	,"British Indian Ocean Territory"
	,"British Virgin Islands"
	,"Brunei"
	,"Bulgaria"
	,"Burkina Faso"
	,"Burundi"
	,"Cambodia"
	,"Cameroon"
	,"Canada"
	,"Cape Verde"
	,"Cayman Islands"
	,"Central African Republic"
	,"Chad"
	,"Chile"
	,"China"
	,"Christmas Island"
	,"Cocos Islands"
	,"Colombia"
	,"Comoros"
	,"Cook Islands"
	,"Costa Rica"
	,"Croatia"
	,"Cuba"
	,"Curacao"
	,"Cyprus"
	,"Czech Republic"
	,"Democratic Republic of the Congo"
	,"Denmark"
	,"Djibouti"
	,"Dominica"
	,"Dominican Republic"
	,"East Timor"
	,"Ecuador"
	,"Egypt"
	,"El Salvador"
	,"Equatorial Guinea"
	,"Eritrea"
	,"Estonia"
	,"Ethiopia"
	,"Falkland Islands"
	,"Faroe Islands"
	,"Fiji"
	,"Finland"
	,"France"
	,"French Polynesia"
	,"Gabon"
	,"Gambia"
	,"Georgia"
	,"Germany"
	,"Ghana"
	,"Gibraltar"
	,"Greece"
	,"Greenland"
	,"Grenada"
	,"Guam"
	,"Guatemala"
	,"Guernsey"
	,"Guinea"
	,"Guinea-Bissau"
	,"Guyana"
	,"Haiti"
	,"Honduras"
	,"Hong Kong"
	,"Hungary"
	,"Iceland"
	,"India"
	,"Indonesia"
	,"Iran"
	,"Iraq"
	,"Ireland"
	,"Isle of Man"
	,"Israel"
	,"Italy"
	,"Ivory Coast"
	,"Jamaica"
	,"Japan"
	,"Jersey"
	,"Jordan"
	,"Kazakhstan"
	,"Kenya"
	,"Kiribati"
	,"Kosovo"
	,"Kuwait"
	,"Kyrgyzstan"
	,"Laos"
	,"Latvia"
	,"Lebanon"
	,"Lesotho"
	,"Liberia"
	,"Libya"
	,"Liechtenstein"
	,"Lithuania"
	,"Luxembourg"
	,"Macau"
	,"Macedonia"
	,"Madagascar"
	,"Malawi"
	,"Malaysia"
	,"Maldives"
	,"Mali"
	,"Malta"
	,"Marshall Islands"
	,"Mauritania"
	,"Mauritius"
	,"Mayotte"
	,"Mexico"
	,"Micronesia"
	,"Moldova"
	,"Monaco"
	,"Mongolia"
	,"Montenegro"
	,"Montserrat"
	,"Morocco"
	,"Mozambique"
	,"Myanmar"
	,"Namibia"
	,"Nauru"
	,"Nepal"
	,"Netherlands"
	,"Netherlands Antilles"
	,"New Caledonia"
	,"New Zealand"
	,"Nicaragua"
	,"Niger"
	,"Nigeria"
	,"Niue"
	,"North Korea"
	,"Northern Mariana Islands"
	,"Norway"
	,"Oman"
	,"Pakistan"
	,"Palau"
	,"Palestine"
	,"Panama"
	,"Papua New Guinea"
	,"Paraguay"
	,"Peru"
	,"Philippines"
	,"Pitcairn"
	,"Poland"
	,"Portugal"
	,"Puerto Rico"
	,"Qatar"
	,"Republic of the Congo"
	,"Reunion"
	,"Romania"
	,"Russia"
	,"Rwanda"
	,"Saint Barthelemy"
	,"Saint Helena"
	,"Saint Kitts and Nevis"
	,"Saint Lucia"
	,"Saint Martin"
	,"Saint Pierre and Miquelon"
	,"Saint Vincent and the Grenadines"
	,"Samoa"
	,"San Marino"
	,"Sao Tome and Principe"
	,"Saudi Arabia"
	,"Senegal"
	,"Serbia"
	,"Seychelles"
	,"Sierra Leone"
	,"Singapore"
	,"Sint Maarten"
	,"Slovakia"
	,"Slovenia"
	,"Solomon Islands"
	,"Somalia"
	,"South Africa"
	,"South Korea"
	,"South Sudan"
	,"Spain"
	,"Sri Lanka"
	,"Sudan"
	,"Suriname"
	,"Svalbard and Jan Mayen"
	,"Swaziland"
	,"Sweden"
	,"Switzerland"
	,"Syria"
	,"Taiwan"
	,"Tajikistan"
	,"Tanzania"
	,"Thailand"
	,"Togo"
	,"Tokelau"
	,"Tonga"
	,"Trinidad and Tobago"
	,"Tunisia"
	,"Turkey"
	,"Turkmenistan"
	,"Turks and Caicos Islands"
	,"Tuvalu"
	,"U.S. Virgin Islands"
	,"Uganda"
	,"Ukraine"
	,"United Arab Emirates"
	,"United Kingdom"
	,"United States"
	,"Uruguay"
	,"Uzbekistan"
	,"Vanuatu"
	,"Vatican"
	,"Venezuela"
	,"Vietnam"
	,"Wallis and Futuna"
	,"Western Sahara"
	,"Yemen"
	,"Zambia"
	,"Zimbabwe"
];

// <option value="AD">AD</option>
// <option value="AE">AE</option>
// <option value="AF">AF</option>
// <option value="AG">AG</option>
// <option value="AI">AI</option>
// <option value="AL">AL</option>
// <option value="AM">AM</option>
// <option value="AN">AN</option>
// <option value="AO">AO</option>
// <option value="AQ">AQ</option>
// <option value="AR">AR</option>
// <option value="AS">AS</option>
// <option value="AT">AT</option>
// <option value="AU">AU</option>
// <option value="AW">AW</option>
// <option value="AZ">AZ</option>
// <option value="BA">BA</option>
// <option value="BB">BB</option>
// <option value="BD">BD</option>
// <option value="BE">BE</option>
// <option value="BF">BF</option>
// <option value="BG">BG</option>
// <option value="BH">BH</option>
// <option value="BI">BI</option>
// <option value="BJ">BJ</option>
// <option value="BL">BL</option>
// <option value="BM">BM</option>
// <option value="BN">BN</option>
// <option value="BO">BO</option>
// <option value="BR">BR</option>
// <option value="BS">BS</option>
// <option value="BT">BT</option>
// <option value="BW">BW</option>
// <option value="BY">BY</option>
// <option value="BZ">BZ</option>
// <option value="CA">CA</option>
// <option value="CC">CC</option>
// <option value="CD">CD</option>
// <option value="CF">CF</option>
// <option value="CG">CG</option>
// <option value="CH">CH</option>
// <option value="CI">CI</option>
// <option value="CK">CK</option>
// <option value="CL">CL</option>
// <option value="CM">CM</option>
// <option value="CN">CN</option>
// <option value="CO">CO</option>
// <option value="CR">CR</option>
// <option value="CU">CU</option>
// <option value="CV">CV</option>
// <option value="CW">CW</option>
// <option value="CX">CX</option>
// <option value="CY">CY</option>
// <option value="CZ">CZ</option>
// <option value="DE">DE</option>
// <option value="DJ">DJ</option>
// <option value="DK">DK</option>
// <option value="DM">DM</option>
// <option value="DO">DO</option>
// <option value="DZ">DZ</option>
// <option value="EC">EC</option>
// <option value="EE">EE</option>
// <option value="EG">EG</option>
// <option value="EH">EH</option>
// <option value="ER">ER</option>
// <option value="ES">ES</option>
// <option value="ET">ET</option>
// <option value="FI">FI</option>
// <option value="FJ">FJ</option>
// <option value="FK">FK</option>
// <option value="FM">FM</option>
// <option value="FO">FO</option>
// <option value="FR">FR</option>
// <option value="GA">GA</option>
// <option value="GB">GB</option>
// <option value="GD">GD</option>
// <option value="GE">GE</option>
// <option value="GG">GG</option>
// <option value="GH">GH</option>
// <option value="GI">GI</option>
// <option value="GL">GL</option>
// <option value="GM">GM</option>
// <option value="GN">GN</option>
// <option value="GQ">GQ</option>
// <option value="GR">GR</option>
// <option value="GT">GT</option>
// <option value="GU">GU</option>
// <option value="GW">GW</option>
// <option value="GY">GY</option>
// <option value="HK">HK</option>
// <option value="HN">HN</option>
// <option value="HR">HR</option>
// <option value="HT">HT</option>
// <option value="HU">HU</option>
// <option value="ID">ID</option>
// <option value="IE">IE</option>
// <option value="IL">IL</option>
// <option value="IM">IM</option>
// <option value="IN">IN</option>
// <option value="IO">IO</option>
// <option value="IQ">IQ</option>
// <option value="IR">IR</option>
// <option value="IS">IS</option>
// <option value="IT">IT</option>
// <option value="JE">JE</option>
// <option value="JM">JM</option>
// <option value="JO">JO</option>
// <option value="JP">JP</option>
// <option value="KE">KE</option>
// <option value="KG">KG</option>
// <option value="KH">KH</option>
// <option value="KI">KI</option>
// <option value="KM">KM</option>
// <option value="KN">KN</option>
// <option value="KP">KP</option>
// <option value="KR">KR</option>
// <option value="KW">KW</option>
// <option value="KY">KY</option>
// <option value="KZ">KZ</option>
// <option value="LA">LA</option>
// <option value="LB">LB</option>
// <option value="LC">LC</option>
// <option value="LI">LI</option>
// <option value="LK">LK</option>
// <option value="LR">LR</option>
// <option value="LS">LS</option>
// <option value="LT">LT</option>
// <option value="LU">LU</option>
// <option value="LV">LV</option>
// <option value="LY">LY</option>
// <option value="MA">MA</option>
// <option value="MC">MC</option>
// <option value="MD">MD</option>
// <option value="ME">ME</option>
// <option value="MF">MF</option>
// <option value="MG">MG</option>
// <option value="MH">MH</option>
// <option value="MK">MK</option>
// <option value="ML">ML</option>
// <option value="MM">MM</option>
// <option value="MN">MN</option>
// <option value="MO">MO</option>
// <option value="MP">MP</option>
// <option value="MR">MR</option>
// <option value="MS">MS</option>
// <option value="MT">MT</option>
// <option value="MU">MU</option>
// <option value="MV">MV</option>
// <option value="MW">MW</option>
// <option value="MX">MX</option>
// <option value="MY">MY</option>
// <option value="MZ">MZ</option>
// <option value="NA">NA</option>
// <option value="NC">NC</option>
// <option value="NE">NE</option>
// <option value="NG">NG</option>
// <option value="NI">NI</option>
// <option value="NL">NL</option>
// <option value="NO">NO</option>
// <option value="NP">NP</option>
// <option value="NR">NR</option>
// <option value="NU">NU</option>
// <option value="NZ">NZ</option>
// <option value="OM">OM</option>
// <option value="PA">PA</option>
// <option value="PE">PE</option>
// <option value="PF">PF</option>
// <option value="PG">PG</option>
// <option value="PH">PH</option>
// <option value="PK">PK</option>
// <option value="PL">PL</option>
// <option value="PM">PM</option>
// <option value="PN">PN</option>
// <option value="PR">PR</option>
// <option value="PS">PS</option>
// <option value="PT">PT</option>
// <option value="PW">PW</option>
// <option value="PY">PY</option>
// <option value="QA">QA</option>
// <option value="RE">RE</option>
// <option value="RO">RO</option>
// <option value="RS">RS</option>
// <option value="RU">RU</option>
// <option value="RW">RW</option>
// <option value="SA">SA</option>
// <option value="SB">SB</option>
// <option value="SC">SC</option>
// <option value="SD">SD</option>
// <option value="SE">SE</option>
// <option value="SG">SG</option>
// <option value="SH">SH</option>
// <option value="SI">SI</option>
// <option value="SJ">SJ</option>
// <option value="SK">SK</option>
// <option value="SL">SL</option>
// <option value="SM">SM</option>
// <option value="SN">SN</option>
// <option value="SO">SO</option>
// <option value="SR">SR</option>
// <option value="SS">SS</option>
// <option value="ST">ST</option>
// <option value="SV">SV</option>
// <option value="SX">SX</option>
// <option value="SY">SY</option>
// <option value="SZ">SZ</option>
// <option value="TC">TC</option>
// <option value="TD">TD</option>
// <option value="TG">TG</option>
// <option value="TH">TH</option>
// <option value="TJ">TJ</option>
// <option value="TK">TK</option>
// <option value="TL">TL</option>
// <option value="TM">TM</option>
// <option value="TN">TN</option>
// <option value="TO">TO</option>
// <option value="TR">TR</option>
// <option value="TT">TT</option>
// <option value="TV">TV</option>
// <option value="TW">TW</option>
// <option value="TZ">TZ</option>
// <option value="UA">UA</option>
// <option value="UG">UG</option>
// <option value="US">US</option>
// <option value="UY">UY</option>
// <option value="UZ">UZ</option>
// <option value="VA">VA</option>
// <option value="VC">VC</option>
// <option value="VE">VE</option>
// <option value="VG">VG</option>
// <option value="VI">VI</option>
// <option value="VN">VN</option>
// <option value="VU">VU</option>
// <option value="WF">WF</option>
// <option value="WS">WS</option>
// <option value="XK">XK</option>
// <option value="YE">YE</option>
// <option value="YT">YT</option>
// <option value="ZA">ZA</option>
// <option value="ZM">ZM</option>
// <option value="ZW">ZW</option>

// <option value='AF'>Afghanistan \ AF</option>
// <option value='AL'>Albania \ AL</option>
// <option value='DZ'>Algeria \ DZ</option>
// <option value='AS'>American Samoa \ AS</option>
// <option value='AD'>Andorra \ AD</option>
// <option value='AO'>Angola \ AO</option>
// <option value='AI'>Anguilla \ AI</option>
// <option value='AQ'>Antarctica \ AQ</option>
// <option value='AG'>Antigua and Barbuda \ AG</option>
// <option value='AR'>Argentina \ AR</option>
// <option value='AM'>Armenia \ AM</option>
// <option value='AW'>Aruba \ AW</option>
// <option value='AU'>Australia \ AU</option>
// <option value='AT'>Austria \ AT</option>
// <option value='AZ'>Azerbaijan \ AZ</option>
// <option value='BS'>Bahamas \ BS</option>
// <option value='BH'>Bahrain \ BH</option>
// <option value='BD'>Bangladesh \ BD</option>
// <option value='BB'>Barbados \ BB</option>
// <option value='BY'>Belarus \ BY</option>
// <option value='BE'>Belgium \ BE</option>
// <option value='BZ'>Belize \ BZ</option>
// <option value='BJ'>Benin \ BJ</option>
// <option value='BM'>Bermuda \ BM</option>
// <option value='BT'>Bhutan \ BT</option>
// <option value='BO'>Bolivia \ BO</option>
// <option value='BA'>Bosnia and Herzegovina \ BA</option>
// <option value='BW'>Botswana \ BW</option>
// <option value='BR'>Brazil \ BR</option>
// <option value='IO'>British Indian Ocean Territory \ IO</option>
// <option value='VG'>British Virgin Islands \ VG</option>
// <option value='BN'>Brunei \ BN</option>
// <option value='BG'>Bulgaria \ BG</option>
// <option value='BF'>Burkina Faso \ BF</option>
// <option value='BI'>Burundi \ BI</option>
// <option value='KH'>Cambodia \ KH</option>
// <option value='CM'>Cameroon \ CM</option>
// <option value='CA'>Canada \ CA</option>
// <option value='CV'>Cape Verde \ CV</option>
// <option value='KY'>Cayman Islands \ KY</option>
// <option value='CF'>Central African Republic \ CF</option>
// <option value='TD'>Chad \ TD</option>
// <option value='CL'>Chile \ CL</option>
// <option value='CN'>China \ CN</option>
// <option value='CX'>Christmas Island \ CX</option>
// <option value='CC'>Cocos Islands \ CC</option>
// <option value='CO'>Colombia \ CO</option>
// <option value='KM'>Comoros \ KM</option>
// <option value='CK'>Cook Islands \ CK</option>
// <option value='CR'>Costa Rica \ CR</option>
// <option value='HR'>Croatia \ HR</option>
// <option value='CU'>Cuba \ CU</option>
// <option value='CW'>Curacao \ CW</option>
// <option value='CY'>Cyprus \ CY</option>
// <option value='CZ'>Czech Republic \ CZ</option>
// <option value='CD'>Democratic Republic of the Congo \ CD</option>
// <option value='DK'>Denmark \ DK</option>
// <option value='DJ'>Djibouti \ DJ</option>
// <option value='DM'>Dominica \ DM</option>
// <option value='DO'>Dominican Republic \ DO</option>
// <option value='TL'>East Timor \ TL</option>
// <option value='EC'>Ecuador \ EC</option>
// <option value='EG'>Egypt \ EG</option>
// <option value='SV'>El Salvador \ SV</option>
// <option value='GQ'>Equatorial Guinea \ GQ</option>
// <option value='ER'>Eritrea \ ER</option>
// <option value='EE'>Estonia \ EE</option>
// <option value='ET'>Ethiopia \ ET</option>
// <option value='FK'>Falkland Islands \ FK</option>
// <option value='FO'>Faroe Islands \ FO</option>
// <option value='FJ'>Fiji \ FJ</option>
// <option value='FI'>Finland \ FI</option>
// <option value='FR'>France \ FR</option>
// <option value='PF'>French Polynesia \ PF</option>
// <option value='GA'>Gabon \ GA</option>
// <option value='GM'>Gambia \ GM</option>
// <option value='GE'>Georgia \ GE</option>
// <option value='DE'>Germany \ DE</option>
// <option value='GH'>Ghana \ GH</option>
// <option value='GI'>Gibraltar \ GI</option>
// <option value='GR'>Greece \ GR</option>
// <option value='GL'>Greenland \ GL</option>
// <option value='GD'>Grenada \ GD</option>
// <option value='GU'>Guam \ GU</option>
// <option value='GT'>Guatemala \ GT</option>
// <option value='GG'>Guernsey \ GG</option>
// <option value='GN'>Guinea \ GN</option>
// <option value='GW'>Guinea-Bissau \ GW</option>
// <option value='GY'>Guyana \ GY</option>
// <option value='HT'>Haiti \ HT</option>
// <option value='HN'>Honduras \ HN</option>
// <option value='HK'>Hong Kong \ HK</option>
// <option value='HU'>Hungary \ HU</option>
// <option value='IS'>Iceland \ IS</option>
// <option value='IN'>India \ IN</option>
// <option value='ID'>Indonesia \ ID</option>
// <option value='IR'>Iran \ IR</option>
// <option value='IQ'>Iraq \ IQ</option>
// <option value='IE'>Ireland \ IE</option>
// <option value='IM'>Isle of Man \ IM</option>
// <option value='IL'>Israel \ IL</option>
// <option value='IT'>Italy \ IT</option>
// <option value='CI'>Ivory Coast \ CI</option>
// <option value='JM'>Jamaica \ JM</option>
// <option value='JP'>Japan \ JP</option>
// <option value='JE'>Jersey \ JE</option>
// <option value='JO'>Jordan \ JO</option>
// <option value='KZ'>Kazakhstan \ KZ</option>
// <option value='KE'>Kenya \ KE</option>
// <option value='KI'>Kiribati \ KI</option>
// <option value='XK'>Kosovo \ XK</option>
// <option value='KW'>Kuwait \ KW</option>
// <option value='KG'>Kyrgyzstan \ KG</option>
// <option value='LA'>Laos \ LA</option>
// <option value='LV'>Latvia \ LV</option>
// <option value='LB'>Lebanon \ LB</option>
// <option value='LS'>Lesotho \ LS</option>
// <option value='LR'>Liberia \ LR</option>
// <option value='LY'>Libya \ LY</option>
// <option value='LI'>Liechtenstein \ LI</option>
// <option value='LT'>Lithuania \ LT</option>
// <option value='LU'>Luxembourg \ LU</option>
// <option value='MO'>Macau \ MO</option>
// <option value='MK'>Macedonia \ MK</option>
// <option value='MG'>Madagascar \ MG</option>
// <option value='MW'>Malawi \ MW</option>
// <option value='MY'>Malaysia \ MY</option>
// <option value='MV'>Maldives \ MV</option>
// <option value='ML'>Mali \ ML</option>
// <option value='MT'>Malta \ MT</option>
// <option value='MH'>Marshall Islands \ MH</option>
// <option value='MR'>Mauritania \ MR</option>
// <option value='MU'>Mauritius \ MU</option>
// <option value='YT'>Mayotte \ YT</option>
// <option value='MX'>Mexico \ MX</option>
// <option value='FM'>Micronesia \ FM</option>
// <option value='MD'>Moldova \ MD</option>
// <option value='MC'>Monaco \ MC</option>
// <option value='MN'>Mongolia \ MN</option>
// <option value='ME'>Montenegro \ ME</option>
// <option value='MS'>Montserrat \ MS</option>
// <option value='MA'>Morocco \ MA</option>
// <option value='MZ'>Mozambique \ MZ</option>
// <option value='MM'>Myanmar \ MM</option>
// <option value='NA'>Namibia \ NA</option>
// <option value='NR'>Nauru \ NR</option>
// <option value='NP'>Nepal \ NP</option>
// <option value='NL'>Netherlands \ NL</option>
// <option value='AN'>Netherlands Antilles \ AN</option>
// <option value='NC'>New Caledonia \ NC</option>
// <option value='NZ'>New Zealand \ NZ</option>
// <option value='NI'>Nicaragua \ NI</option>
// <option value='NE'>Niger \ NE</option>
// <option value='NG'>Nigeria \ NG</option>
// <option value='NU'>Niue \ NU</option>
// <option value='KP'>North Korea \ KP</option>
// <option value='MP'>Northern Mariana Islands \ MP</option>
// <option value='NO'>Norway \ NO</option>
// <option value='OM'>Oman \ OM</option>
// <option value='PK'>Pakistan \ PK</option>
// <option value='PW'>Palau \ PW</option>
// <option value='PS'>Palestine \ PS</option>
// <option value='PA'>Panama \ PA</option>
// <option value='PG'>Papua New Guinea \ PG</option>
// <option value='PY'>Paraguay \ PY</option>
// <option value='PE'>Peru \ PE</option>
// <option value='PH'>Philippines \ PH</option>
// <option value='PN'>Pitcairn \ PN</option>
// <option value='PL'>Poland \ PL</option>
// <option value='PT'>Portugal \ PT</option>
// <option value='PR'>Puerto Rico \ PR</option>
// <option value='QA'>Qatar \ QA</option>
// <option value='CG'>Republic of the Congo \ CG</option>
// <option value='RE'>Reunion \ RE</option>
// <option value='RO'>Romania \ RO</option>
// <option value='RU'>Russia \ RU</option>
// <option value='RW'>Rwanda \ RW</option>
// <option value='BL'>Saint Barthelemy \ BL</option>
// <option value='SH'>Saint Helena \ SH</option>
// <option value='KN'>Saint Kitts and Nevis \ KN</option>
// <option value='LC'>Saint Lucia \ LC</option>
// <option value='MF'>Saint Martin \ MF</option>
// <option value='PM'>Saint Pierre and Miquelon \ PM</option>
// <option value='VC'>Saint Vincent and the Grenadines \ VC</option>
// <option value='WS'>Samoa \ WS</option>
// <option value='SM'>San Marino \ SM</option>
// <option value='ST'>Sao Tome and Principe \ ST</option>
// <option value='SA'>Saudi Arabia \ SA</option>
// <option value='SN'>Senegal \ SN</option>
// <option value='RS'>Serbia \ RS</option>
// <option value='SC'>Seychelles \ SC</option>
// <option value='SL'>Sierra Leone \ SL</option>
// <option value='SG'>Singapore \ SG</option>
// <option value='SX'>Sint Maarten \ SX</option>
// <option value='SK'>Slovakia \ SK</option>
// <option value='SI'>Slovenia \ SI</option>
// <option value='SB'>Solomon Islands \ SB</option>
// <option value='SO'>Somalia \ SO</option>
// <option value='ZA'>South Africa \ ZA</option>
// <option value='KR'>South Korea \ KR</option>
// <option value='SS'>South Sudan \ SS</option>
// <option value='ES'>Spain \ ES</option>
// <option value='LK'>Sri Lanka \ LK</option>
// <option value='SD'>Sudan \ SD</option>
// <option value='SR'>Suriname \ SR</option>
// <option value='SJ'>Svalbard and Jan Mayen \ SJ</option>
// <option value='SZ'>Swaziland \ SZ</option>
// <option value='SE'>Sweden \ SE</option>
// <option value='CH'>Switzerland \ CH</option>
// <option value='SY'>Syria \ SY</option>
// <option value='TW'>Taiwan \ TW</option>
// <option value='TJ'>Tajikistan \ TJ</option>
// <option value='TZ'>Tanzania \ TZ</option>
// <option value='TH'>Thailand \ TH</option>
// <option value='TG'>Togo \ TG</option>
// <option value='TK'>Tokelau \ TK</option>
// <option value='TO'>Tonga \ TO</option>
// <option value='TT'>Trinidad and Tobago \ TT</option>
// <option value='TN'>Tunisia \ TN</option>
// <option value='TR'>Turkey \ TR</option>
// <option value='TM'>Turkmenistan \ TM</option>
// <option value='TC'>Turks and Caicos Islands \ TC</option>
// <option value='TV'>Tuvalu \ TV</option>
// <option value='VI'>U.S. Virgin Islands \ VI</option>
// <option value='UG'>Uganda \ UG</option>
// <option value='UA'>Ukraine \ UA</option>
// <option value='AE'>United Arab Emirates \ AE</option>
// <option value='GB'>United Kingdom \ GB</option>
// <option value='US'>United States \ US</option>
// <option value='UY'>Uruguay \ UY</option>
// <option value='UZ'>Uzbekistan \ UZ</option>
// <option value='VU'>Vanuatu \ VU</option>
// <option value='VA'>Vatican \ VA</option>
// <option value='VE'>Venezuela \ VE</option>
// <option value='VN'>Vietnam \ VN</option>
// <option value='WF'>Wallis and Futuna \ WF</option>
// <option value='EH'>Western Sahara \ EH</option>
// <option value='YE'>Yemen \ YE</option>
// <option value='ZM'>Zambia \ ZM</option>
// <option value='ZW'>Zimbabwe \ ZW</option>
//BY ERIK BORELLA
