const fs = require('fs');
const titleCase = require('title-case').titleCase;
const perf = require('execution-time')(console.log);

exports.readyTemplates = function readyTemplates(tests) {
	const inputSample = require('lodash').keyBy(tests, 'TestName');

	const name = titleCase(tests[0].PName);

	if (name.length > 22 || tests[0].DoctorName.length > 22) {
		throw new Error('patient name or ref by too long');
	}

	const ageRecord = tests[0].Age;
	const approvedDate = tests[0].ApprovedDate;
	let genderRecord = "Male"
	if (titleCase(tests[0].Gender.substring(0, 1)) === 'M') {
		genderRecord = "Male"
	} else {
		genderRecord = "Female"
	}
	const testname0 = tests[0].TestName,testname1=tests[1].TestName,testname2=tests[2].TestName;const testname3=tests[3].TestName;const testname4=tests[4].TestName,testname5 = tests[5].TestName;const testname6=tests[6].TestName;const testname7=tests[7].TestName;const testname8=tests[8].TestName;const testname9=tests[9].TestName;const testname10=tests[10].TestName,testname11=tests[11].TestName,testname12=tests[12].TestName;
	const testval0=tests[0].TestResultValue,testval1=tests[1].TestResultValue,testval2=tests[2].TestResultValue,testval3=tests[3].TestResultValue,testval4=tests[4].TestResultValue,testval5=tests[5].TestResultValue,testval6=tests[6].TestResultValue,testval7=tests[7].TestResultValue,testval8=tests[8].TestResultValue,testval9=tests[9].TestResultValue,testval10=tests[10].TestResultValue,testval11=tests[11].TestResultValue,testval12=tests[12].TestResultValue;
	const low0=tests[0].TestParameterLowValue,low1=tests[1].TestParameterLowValue,low2=tests[2].TestParameterLowValue,low3=tests[3].TestParameterLowValue,low4=tests[4].TestParameterLowValue,low5=tests[5].TestParameterLowValue,low6=tests[6].TestParameterLowValue,low7=tests[7].TestParameterLowValue,low8=tests[8].TestParameterLowValue,low9=tests[9].TestParameterLowValue,low10=tests[10].TestParameterLowValue,low11=tests[11].TestParameterLowValue,low12=tests[12].TestParameterLowValue;
	const high0=tests[0].TestParameterHighValue,high1=tests[1].TestParameterHighValue,high2=tests[2].TestParameterHighValue,high3=tests[3].TestParameterHighValue,high4=tests[4].TestParameterHighValue,high5=tests[5].TestParameterHighValue,high6=tests[6].TestParameterHighValue,high7=tests[7].TestParameterHighValue,high8=tests[8].TestParameterHighValue,high9=tests[9].TestParameterHighValue,high10=tests[10].TestParameterHighValue,high11=tests[11].TestParameterHighValue,high12=tests[12].TestParameterHighValue;
	const unit0=tests[0].TestMeasuringUnit,unit1=tests[1].TestMeasuringUnit,unit2=tests[2].TestMeasuringUnit,unit3=tests[3].TestMeasuringUnit,unit4=tests[4].TestMeasuringUnit,unit5=tests[5].TestMeasuringUnit,unit6=tests[6].TestMeasuringUnit,unit7=tests[7].TestMeasuringUnit,unit8=tests[8].TestMeasuringUnit,unit9=tests[9].TestMeasuringUnit,unit10=tests[10].TestMeasuringUnit,unit11=tests[11].TestMeasuringUnit,unit12=tests[12].TestMeasuringUnit;
	const abt0=tests[0].AboutTest,abt1=tests[1].AboutTest,abt2=tests[2].AboutTest,abt3=tests[3].AboutTest,abt4=tests[4].AboutTest,abt5=tests[5].AboutTest,abt6=tests[6].AboutTest,abt7=tests[7].AboutTest,abt8=tests[8].AboutTest,abt9=tests[9].AboutTest,abt10=tests[10].AboutTest,abt11=tests[11].AboutTest,abt12=tests[12].AboutTest;
	let youX0=0;let youX1=0;let youX2=0;let youX3=0;let youX4=0;let youX5=0;let youX6=0;let youX7=0;let youX8=0;let youX9=0;let youX10=0,youX11=0,youX12=0;
	
	if(testval0<low0){
		youX0 = (250/low0)*testval0;
	}else if(testval0<high0){
		youX0 = (250/(high0-low0)*(testval0-low0))+360;
	}else{
		youX0 = (250/(high0*99)*(testval0-low0))+620;
	}

	if(testval1<low1){
		youX1 = (250/low1)*testval1;
	}else if(testval1<high1){
		youX1 = (250/(high1-low1)*(testval1-low1))+360;
	}else{
		youX1 = (250/(high1*99)*(testval1-low1))+620;
	}

	if(testval2<low2){
		youX2 = (250/low2)*testval2;
	}else if(testval2<high2){
		youX2 = (250/(high2-low2)*(testval2-low2))+360;
	}else{
		youX2 = (250/(high2*99)*(testval2-low2))+620;
	}

	if(testval3<low3){
		youX3 = (250/low3)*testval3;
	}else if(testval3<high3){
		youX3 = (250/(high3-low3)*(testval3-low3))+360;
	}else{
		youX3 = (250/(high3*99)*(testval3-low3))+620;
	}

	if(testval4<low4){
		youX4 = (250/low4)*testval4;
	}else if(testval4<high4){
		youX4 = (250/(high4-low4)*(testval4-low4))+360;
	}else{
		youX4 = (250/(high4*99)*(testval4-low4))+620;
	}

	if(testval5<low5){
		youX5 = (250/low5)*testval5;
	}else if(testval5<high5){
		youX5 = (250/(high5-low5)*(testval5-low5))+360;
	}else{
		youX5 = (250/(high5*99)*(testval5-low5))+620;
	}

	if(testval6<low6){
		youX6 = (250/low6)*testval6;
	}else if(testval6<high6){
		youX6 = (250/(high6-low6)*(testval6-low6))+360;
	}else{
		youX6 = (250/(high6*99)*(testval6-low6))+620;
	}

	if(testval7<low7){
		youX7 = (250/low7)*testval7;
	}else if(testval7<high7){
		youX7 = (250/(high7-low7)*(testval7-low7))+360;
	}else{
		youX7 = (250/(high7*99)*(testval7-low7))+620;
	}

	if(testval8<low8){
		youX8 = (250/low8)*testval8;
	}else if(testval8<high8){
		youX8 = (250/(high8-low8)*(testval8-low8))+360;
	}else{
		youX8 = (250/(high8*99)*(testval8-low8))+620;
	}

	if(testval9<low9){
		youX9 = (250/low9)*testval9;
	}else if(testval9<high9){
		youX9 = (250/(high9-low9)*(testval9-low9))+360;
	}else{
		youX9 = (250/(high9*99)*(testval9-low9))+620;
	}

	if(testval10<low10){
		youX10 = (250/low10)*testval10;
	}else if(testval10<high10){
		youX10 = (250/(high10-low10)*(testval10-low10))+360;
	}else{
		youX10 = (250/(high10*99)*(testval10-low10))+620;
	}

	if(testval11<low11){
		youX11 = (250/low11)*testval11;
	}else if(testval11<high11){
		youX11 = (250/(high11-low11)*(testval11-low11))+360;
	}else{
		youX11 = (250/(high11*99)*(testval11-low11))+620;
	}

	if(testval12<low12){
		youX12 = (250/low12)*testval12;
	}else if(testval12<high12){
		youX12 = (250/(high12-low12)*(testval12-low12))+360;
	}else{
		youX12 = (250/(high12*99)*(testval12-low12))+620;
	}
	
	if (tests[0].BarcodeNo.length > 10) {
		throw new Error('barcode longer than 10');
	}


	const PROFILE_TRS = {
		'Abs. Neutrophil Count':'bloodcount.svg',
	};
	let originalTemplate = 0

	originalTemplate = fs.readFileSync('covid.html', 'utf8').replace(/{{barcode}}/, tests[0].BarcodeNo);


	// console.log(Object.keys(inputSample).filter(x => x.startsWith("Erythrocyte"))[0].codePointAt(11));
   // global.count = 0;
	let digitalTemplate = originalTemplate;
	let printTemplate = originalTemplate;
   
	
	//Ensure that order of declaration of placeholders is same as their placement in liver.html
	// [
	   
	// 	{
	// 		placeholder: '{{covid}}', result: inputSample['Covid'] && Covidfunc(
	// 		{
	// 			x: inputSample['Covid']['TestResultValue'], CenterID: inputSample['Covid']['CenterID'], sampleID: inputSample['Covid']['sampleID'],
	// 			specimentype: inputSample['Covid']['specimentype'], date: inputSample['Covid']['DoctorApprovedDateTime'],

	// 			biomarker: 'Covid'
				
	// 		},) || {colored: '', grayscaled: ''}
	// 	},

	// 	{
	// 		placeholder: '{{later}}', result: inputSample['Covid'] && laterfunc(
	// 		{
	// 			x: inputSample['Covid']['TestResultValue']
				
	// 		},) || {colored: '', grayscaled: ''}
	// 	}
	
	   

	// ].forEach(prPair => {
	// 	digitalTemplate = digitalTemplate.replace(prPair.placeholder, prPair.result.colored);
	// 	printTemplate = printTemplate.replace(prPair.placeholder, prPair.result.grayscaled);
	// });

	digitalTemplate = digitalTemplate.replace(/{{header-details}}/g, `
		<dl style="padding-top: 25px; margin-bottom: 30px;">
			<div style="display: inline-block; vertical-align: top; margin-right: 5%; width: 38%;">
				<dt style="font-family: Nunito Sans;font-style: normal;font-weight: normal;font-size: 20px;line-height: 16px;color: #A0A0A0;">NAME</dt>
				<dd class="font-large" style="display: block;">${name}</dd>
			</div>
			<div style="display: inline-block; vertical-align: top; margin-right: 5%; width: 23%;">
		  <dt style="
				font-family: Nunito Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 20px;
				line-height: 16px;
				color: #A0A0A0;">AGE/GENDER</dt>
				<dd class="font-large" style="display: block;">${ageRecord}/${genderRecord}</dd>
			</div>
			<div style="display: inline-block; vertical-align: top; margin-right: 5%; width: 23%;">
		  <dt style="
				font-family: Nunito Sans;
				font-style: normal;
				font-weight: normal;
				font-size: 20px;
				line-height: 16px;
				color: #A0A0A0;">LAB ID</dt>
				<dd style="display: block; font-size:40px;">11100011</dd>
			</div>
			<br>
			<div style="padding-top: 25px;">
				<div style="display: inline-block; vertical-align: top; margin-right: 5%; width: 38%;">
					<dt style="
					font-family: Nunito Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 20px;
					line-height: 16px;
					color: #A0A0A0;">DATE</dt>
					<dd class="font-large" style="display: block;">${approvedDate.substring(0, approvedDate.indexOf(' '))}</dd>
				</div>
				<div style="display: inline-block; vertical-align: top; margin-right: 5%; width: 23%;">
				<dt style="
					font-family: Nunito Sans;
					font-style: normal;
					font-weight: normal;
					font-size: 20px;
					line-height: 16px;
					color: #A0A0A0;">REFERRAL</dt>
					<dd class="font-large" style="display: block;">SELF</dd>
				</div>
			</div>
		</dl>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails0}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname0}</span>
		<span style="display: inline-block;width: 400px;height: 70px;font-weight:bold;font-size:50px;">${testval0}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit0}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX0}" cy="30" r="23" fill="#252525" />
				<text x="${youX0-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low0}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low0}-${high0}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high0}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt0}</p>
		</div>
		<div>
			<p style="font-size:30px;"><strong>Foods that help increasing haemoglobin</strong></p>
			&emsp;&emsp;<span style="display: inline-block;vertical-align:middle;width: 160px;height: 160px;"><object data="spinach.svg" type="image/svg+xml"></object></span>
			&emsp;&emsp;&emsp;<span style="display: inline-block;width: 600px;height: 50px; font-size: 30px;">Spinach, Broccoli, Green Beans</span>
			&emsp;&emsp;<span style="display: inline-block;vertical-align:middle;width: 160px;height: 160px;"><object data="fruit.svg" type="image/svg+xml"></object></span>
			&emsp;&emsp;&emsp;<span style="display: inline-block;width: 600px;height: 50px; font-size: 30px;">Orange, Lemon, Kiwifruit</span>
			&emsp;&emsp;<span style="display: inline-block;vertical-align:middle;width: 160px;height: 160px;"><object data="potato.svg" type="image/svg+xml"></object></span>
			&emsp;&emsp;&emsp;<span style="display: inline-block;width: 600px;height: 50px; font-size: 30px;">Sweet Potatoes, Carrots</span>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails1}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname1}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval1}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit1}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX1}" cy="30" r="23" fill="#252525" />
				<text x="${youX1-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low1}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low1}-${high1}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high1}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt1}</p>
		</div>
	`);
	digitalTemplate = digitalTemplate.replace(/{{testdetails2}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname2}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval2}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit2}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX2}" cy="30" r="23" fill="#252525" />
				<text x="${youX2-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low2}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low2}-${high2}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high2}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt2}</p>
		</div>
	`);
	digitalTemplate = digitalTemplate.replace(/{{testdetails3}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname3}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval3}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit3}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX3}" cy="30" r="23" fill="#252525" />
				<text x="${youX3-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low3}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low3}-${high3}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high3}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt3}</p>
		</div>

	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails4}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname4}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval4}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit4}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX4}" cy="30" r="23" fill="#252525" />
				<text x="${youX4-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low4}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low4}-${high4}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high4}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt4}</p>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails5}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname5}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval5}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit5}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX5}" cy="30" r="23" fill="#252525" />
				<text x="${youX5-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low5}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low5}-${high5}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high5}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt5}</p>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails6}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname6}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval6}<br><div style="font-size:30px;line-height: 0px;font-weight: normal;">${unit6}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX6}" cy="30" r="23" fill="#252525" />
				<text x="${youX6-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low6}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low6}-${high6}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high6}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt6}</p>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails7}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname7}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval7}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit7}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX7}" cy="30" r="23" fill="#252525" />
				<text x="${youX7-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low7}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low7}-${high7}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high7}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt7}</p>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails8}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname8}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval8}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit8}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX8}" cy="30" r="23" fill="#252525" />
				<text x="${youX8-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low8}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low8}-${high8}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high8}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt8}</p>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails9}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname9}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval9}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit9}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX9}" cy="30" r="23" fill="#252525" />
				<text x="${youX9-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low9}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low9}-${high9}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high9}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt9}</p>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails10}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname10}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval10}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit10}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX10}" cy="30" r="23" fill="#252525" />
				<text x="${youX10-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low10}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low10}-${high10}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high10}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt10}</p>
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails11}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname11}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval11}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit11}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX11}" cy="30" r="23" fill="#252525" />
				<text x="${youX11-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low11}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low11}-${high11}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high11}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt11}</p>
		</div>
		<div>
			<p><strong>Foods that help increasing platelet count</strong></p>
			&emsp;&emsp;<span style="display: inline-block;vertical-align:middle;width: 160px;height: 160px;"><object data="fruit.svg" type="image/svg+xml"></object></span>
			&emsp;&emsp;&emsp;<span style="display: inline-block;width: 600px;height: 50px; font-size: 30px;">Orange, Lemon, Kiwifruit</span>
			&emsp;&emsp;<span style="display: inline-block;vertical-align:middle;width: 160px;height: 160px;"><object data="animal.svg" type="image/svg+xml"></object></span>
			&emsp;&emsp;&emsp;<span style="display: inline-block;width: 600px;height: 50px; font-size: 30px;">Fish, Eggs, Poultry</span>		
		</div>
	`);

	digitalTemplate = digitalTemplate.replace(/{{testdetails12}}/g,`
		<span style="font-weight: bold;display: inline-block;width: 400px;padding-left:50px;height: 50px;vertical-align:top;">${testname12}</span>
		<span style="display: inline-block;width: 450px;height: 70px;font-weight:bold;font-size:50px;">${testval12}<br><div style="font-size:30px;line-height: 0.5%;font-weight: normal;">${unit12}</div></span>
		<span style="display: inline-block; vertical-align:top;background: #52BD5F; height: 45px; width: 45px; margin-right: 0px; border-radius: 50%"> </span>
		<br><br>
		<div class="slider">
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="display: block; margin-top: 0px;border-radius: 25px;" height="125" width="1113">
				<path d="M 100 20, 350 20, 350 40, 100 40 S 70 30 100 20z" fill="#E46B4D" />
				<path d="M 360 20 L 610 20, 610 40, 360 40 z" fill="#52BD5F" />
				<path d="M 620 20 L 870 20 S 900 30 870 40 L 620 40 z" fill="#E46B4D" />
				<circle cx="${youX12}" cy="30" r="23" fill="#252525" />
				<text x="${youX12-15}" y="35" font-size="20" fill="white">you</text>
				<text x="200" y="80" text-anchor="middle" style="dominant-baseline: middle;"><${low12}</text>
				<text x="500" y="80" text-anchor="middle" style="dominant-baseline: middle;">${low12}-${high12}</text>
				<text x="750" y="80" text-anchor="middle" style="dominant-baseline: middle;">>${high12}</text>
			</svg>      
		</div>
		<div>
			<p style=" width: 100%;font-size:30px;">${abt12}</p>
		</div>
	`);

	printTemplate = printTemplate.replace(/{{header-details}}/g, `
		<dl style="border-style: solid; border-color: #666; border-width: 1px 0; padding-top: 4px; padding-bottom: 4px; width: 100%;">
			<div style="display: inline-block; vertical-align: top; margin-right: 32px; width: 36%;">
				<dt>Patient</dt>
				<dd class="font-large" style="display: block;">${name}</dd>
				<dd>${genderRecord}, ${ageRecord} years old</dd>
			</div>
			<div style="display: inline-table; vertical-align: top; margin-right: 32px;">
				<div style="display: table-row;">
					<dt>Date</dt>
					<dd>${approvedDate.substring(0, approvedDate.indexOf(' '))}</dd>
				</div>
				<div style="display: table-row;">
					<dt>Ref. By</dt>
					<dd>Self</dd>
				</div>
				<div style="display: table-row;">
					<dt>Lab Id</dt>
					<dd>${tests[0].WorkOrderID}</dd>
				</div>
			</div>
		
		</dl>
	`);


	return {
		digitalTemplate: digitalTemplate, printTemplate: printTemplate
	};
};