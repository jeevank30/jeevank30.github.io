var names=new Array();
names[0]="yash";
names[1]="darshan";
names[2]="johny";
names[3]="sharuk";
names[4]="salman";
names[5]="anna";
names[6]="akka";
names[7]="bvc";
names[8]="thamma";
names[9]="nin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}