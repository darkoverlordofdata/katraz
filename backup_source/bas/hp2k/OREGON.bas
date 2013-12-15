REM OREGON

8  REM       MINNESOTA EDUCATIONAL COMPUTING CONSORTIUM STAFF
9  REM  PROGRAMMING REVISIONS BY DON RAWITSCH - 1975
11  REM  CURRENT VERSION - 3/27/75
15  REM  **FOR THE MEANING OF THE VARIABLES USED, LIST LINES 4900-4960**
25  PRINT "DO YOU NEED INSTRUCTIONS  (YES/NO)";
30  DIM C$[5]
35  INPUT C$
40  IF C$="NO" THEN 400
45  PRINT LIN(2)
59  REM ***INSTRUCTIONS***
60  PRINT "THIS PROGRAM SIMULATES A TRIP OVER THE OREGON TRAIL FROM"
65  PRINT "INDEPENDENCE, MISSOURI TO OREGON CITY, OREGON IN 1847."
70  PRINT "YOUR FAMILY OF FIVE WILL COVER THE 2000 MILE OREGON TRAIL"
75  PRINT "IN 5-6 MONTHS --- IF YOU MAKE IT ALIVE."
80  PRINT
85  PRINT "YOU HAD SAVED $900 TO SPEND FOR THE TRIP, AND YOU'VE JUST"
90  PRINT "   PAID $200 FOR A WAGON."
95  PRINT "YOU WILL NEED TO SPEND THE REST OF YOUR MONEY ON THE"
100  PRINT "   FOLLOWING ITEMS:"
105  PRINT
110  PRINT "     OXEN - YOU CAN SPEND $200-$300 ON YOUR TEAM"
115  PRINT "            THE MORE YOU SPEND, THE FASTER YOU'LL GO"
120  PRINT "               BECAUSE YOU'LL HAVE BETTER ANIMALS"
125  PRINT
130  PRINT "     FOOD - THE MORE YOU HAVE, THE LESS CHANCE THERE"
135  PRINT "               IS OF GETTING SICK"
140  PRINT
145  PRINT "     AMMUNITION - $1 BUYS A BELT OF 50 BULLETS"
150  PRINT "            YOU WILL NEED BULLETS FOR ATTACKS BY ANIMALS"
155  PRINT "               AND BANDITS, AND FOR HUNTING FOOD"
160  PRINT
165  PRINT "     CLOTHING - THIS IS ESPECIALLY IMPORTANT FOR THE COLD"
170  PRINT "               WEATHER YOU WILL ENCOUNTER WHEN CROSSING"
175  PRINT "               THE MOUNTAINS"
180  PRINT
185  PRINT "     MISCELLANEOUS SUPPLIES - THIS INCLUDES MEDICINE AND"
190  PRINT "               OTHER THINGS YOU WILL NEED FOR SICKNESS"
195  PRINT "               AND EMERGENCY REPAIRS"
205  PRINT LIN(2)
210  PRINT "YOU CAN SPEND ALL YOUR MONEY BEFORE YOU START YOUR TRIP -"
215  PRINT "OR YOU CAN SAVE SOME OF YOUR CASH TO SPEND AT FORTS ALONG"
220  PRINT "THE WAY WHEN YOU RUN LOW.  HOWEVER, ITEMS COST MORE AT"
225  PRINT "THE FORTS.  YOU CAN ALSO GO HUNTING ALONG THE WAY TO GET"
230  PRINT "MORE FOOD."
235  PRINT "WHENEVER YOU HAVE TO USE YOUR TRUSTY RIFLE ALONG THE WAY,"
240  PRINT "YOU WILL SEE THE WORDS: TYPE BANG.  THE FASTER YOU TYPE"
245  PRINT "IN THE WORD 'BANG' AND HIT THE 'RETURN' KEY, THE BETTER"
250  PRINT "LUCK YOU'LL HAVE WITH YOUR GUN."
260  PRINT
262  PRINT "WHEN ASKED TO ENTER MONEY AMOUNTS, DON'T USE A '$'."
263  PRINT
265  PRINT "GOOD LUCK!!!"
399  REM ***INITIAL PURCHASES***
400  X1=-1
405  K8=S4=F1=F2=M=M9=D3=0
410  PRINT LIN(2)
415  PRINT "HOW MUCH DO YOU WANT TO SPEND ON YOUR OXEN TEAM";
420  INPUT A
425  IF A >= 200 THEN 440
430  PRINT "NOT ENOUGH"
435  GOTO 415
440  IF A <= 300 THEN 455
445  PRINT "TOO MUCH"
450  GOTO 415
455  PRINT "HOW MUCH DO YOU WANT TO SPEND ON FOOD";
460  INPUT F
470  IF F >= 0 THEN 485
475  PRINT "IMPOSSIBLE"
480  GOTO 455
485  PRINT "HOW MUCH DO YOU WANT TO SPEND ON AMMUNITION";
490  INPUT B
495  IF B >= 0 THEN 510
500  PRINT "IMPOSSIBLE"
505  GOTO 485
510  PRINT "HOW MUCH DO YOU WANT TO SPEND ON CLOTHING";
515  INPUT C
520  IF C >= 0 THEN 535
525  PRINT "IMPOSSIBLE"
530  GOTO 510
535  PRINT "HOW MUCH DO YOU WANT TO SPEND ON MISCELANEOUS SUPPLIES";
540  INPUT M1
545  IF M1 >= 0 THEN 560
550  PRINT "IMPOSSIBLE"
555  GOTO 535
560  T=700-A-F-B-C-M1
565  IF T >= 0 THEN 580
570  PRINT "YOU OVERSPENT--YOU ONLY HAD $700 TO SPEND.  BUY AGAIN"
575  GOTO 410
580  B=50*B
585  PRINT "AFTER ALL YOUR PURCHASES, YOU NOW HAVE";T;"DOLLARS LEFT"
590  PRINT
595  PRINT "MONDAY MARCH 29 1847"
600  PRINT
605  GOTO 1000
700  IF M >= 2040 OR D3>17 THEN 4000
709  REM ***SETTING DATE***
710  D3=D3+1
715  PRINT
720  PRINT "MONDAY ";
725  IF D3>10 THEN 735
730  GOTO D3 OF 740,750,760,770,780,790,800,810,820,830
735  GOTO D3-10 OF 840,850,860,870,880,890,900
740  PRINT "APRIL 12 ";
744  GOTO 910
750  PRINT "APRIL 26 ";
755  GOTO 910
760  PRINT "MAY 10 ";
765  GOTO 910
770  PRINT "MAY 24 ";
775  GOTO 910
780  PRINT "JUNE 7 ";
785  GOTO 910
790  PRINT "JUNE 21 ";
795  GOTO 910
800  PRINT "JULY 5 ";
805  GOTO 910
810  PRINT "JULY 19 ";
815  GOTO 910
820  PRINT "AUGUST 2 ";
825  GOTO 910
830  PRINT "AUGUST 16 ";
835  GOTO 910
840  PRINT "AUGUST 31 ";
845  GOTO 910
850  PRINT "SEPTEMBER 13 ";
855  GOTO 910
860  PRINT "SEPTEMBER 27 ";
865  GOTO 910
870  PRINT "OCTOBER 11 ";
875  GOTO 910
880  PRINT "OCTOBER 25 ";
885  GOTO 910
890  PRINT "NOVEMBER 8 ";
895  GOTO 910
900  PRINT "NOVEMBER 22 ";
910  PRINT "1847"
915  PRINT
999  REM ***BEGINNING EACH TURN***
1000  IF F >= 0 THEN 1015
1010  F=0
1015  IF B >= 0 THEN 1025
1020  B=0
1025  IF C >= 0 THEN 1035
1030  C=0
1035  IF M1 >= 0 THEN 1045
1040  M1=0
1045  IF F >= 12 THEN 1055
1050  PRINT "YOU'D BETTER DO SOME HUNTING OR BUY FOOD AND SOON!!!!"
1055  F=INT(F)
1060  B=INT(B)
1065  C=INT(C)
1070  M1=INT(M1)
1075  T=INT(T)
1080  M=INT(M)
1085  M2=M
1090  IF S4=1 THEN 1105
1095  IF K8=1 THEN 1105
1100  GOTO 1130
1105  T=T-20
1110  IF T<0 THEN 3520
1115  PRINT "DOCTOR'S BILL IS $20"
1120  LET K8=S4=0
1130  IF M9=1 THEN 1145
1135  PRINT "TOTAL MILEAGE IS";M
1140  GOTO 1160
1145  PRINT "TOTAL MILEAGE IS 950"
1150  M9=0
1160  PRINT "FOOD","BULLETS","CLOTHING","MISC. SUPP.","CASH"
1165  PRINT F,B,C,M1,T
1300  IF X1=-1 THEN 1350
1305  X1=X1*-1
1310  PRINT "DO YOU WANT TO (1) STOP AT THE NEXT FORT, (2) HUNT, ";
1315  PRINT "OR (3) CONTINUE"
1320  INPUT X
1325  IF X>2 THEN 1340
1330  IF X<1 THEN 1340
1332  LET X=INT(X)
1335  GOTO 1400
1340  LET X=3
1345  GOTO 1400
1350  PRINT "DO YOU WANT TO (1) HUNT, OR (2) CONTINUE"
1355  INPUT X
1360  IF X=1 THEN 1370
1365  LET X=2
1370  LET X=X+1
1375  IF X=3 THEN 1395
1380  IF B>39 THEN 1395
1385  PRINT "TOUGH---YOU NEED MORE BULLETS TO GO HUNTING"
1390  GOTO 1350
1395  X1=X1*-1
1400  GOTO X OF 1500,1700,1800
1499  REM ***STOPPING AT FORT***
1500  PRINT "ENTER WHAT YOU WISH TO SPEND ON THE FOLLOWING"
1505  PRINT "FOOD";
1510  GOSUB 1520
1515  GOTO 1555
1520  INPUT P
1525  IF P<0 THEN 1550
1530  T=T-P
1535  IF T >= 0 THEN 1550
1537  PRINT "YOU DON'T HAVE THAT MUCH--KEEP YOUR SPENDING DOWN"
1540  T=T+P
1545  P=0
1550  RETURN
1555  F=F+2/3*P
1560  PRINT "AMMUNITION";
1565  GOSUB 1520
1570  LET B=INT(B+2/3*P*50)
1575  PRINT "CLOTHING";
1580  GOSUB 1520
1585  C=C+2/3*P
1590  PRINT "MISCELLANEOUS SUPPLIES";
1595  GOSUB 1520
1600  M1=M1+2/3*P
1605  M=M-45
1610  GOTO 1800
1699  REM ***HUNTING***
1700  IF B>39 THEN 1715
1705  PRINT "TOUGH---YOU NEED MORE BULLETS TO GO HUNTING"
1710  GOTO 1310
1715  M=M-45
1720  GOSUB 4500
1725  IF B1 <= 1 THEN 1755
1730  IF 100*RND(0)<13*B1 THEN 1780
1735  F=F+48-2*B1
1740  PRINT "NICE SHOT--RIGHT THROUGH THE NECK--FEAST TONIGHT!!"
1745  B=B-10-3*B1
1750  GOTO 1800
1752  REM **BELLS IN LINE 1755**
1755  PRINT "RI"'7"GHT BETWEE"'7"N THE EYE"'7"S---YOU GOT A"'7" BIG ONE!!"'7"!!"
1765  F=F+52+RND(0)*6
1770  B=B-10-RND(0)*4
1775  GOTO 1800
1780  PRINT "SORRY---NO LUCK TODAY"
1800  IF F >= 13 THEN 1900
1805  GOTO 3500
1899  REM ***EATING***
1900  PRINT "DO YOU WANT TO EAT (1) POORLY  (2) MODERATELY"
1902  PRINT "OR (3) WELL";
1905  INPUT E
1910  IF E>3 THEN 1900
1915  IF E<1 THEN 1900
1920  LET E=INT(E)
1930  LET F=F-8-5*E
1935  IF F >= 0 THEN 2000
1940  F=F+8+5*E
1945  PRINT "YOU CAN'T EAT THAT WELL"
1950  GOTO 1900
2000  LET M=M+200+(A-220)/5+10*RND(0)
2005  L1=C1=0
2099  REM ***RIDERS ATTACK***
2100  IF RND(0)*10>((M/100-4)^2+72)/((M/100-4)^2+12)-1 THEN 2500
2105  PRINT "RIDERS AHEAD.  THEY ";
2110  S5=0
2115  IF RND(0)<.8 THEN 2130
2120  PRINT "DON'T ";
2125  S5=1
2130  PRINT "LOOK HOSTILE"
2135  PRINT "TACTICS"
2140  PRINT "(1) RUN  (2) ATTACK  (3) CONTINUE  (4) CIRCLE WAGONS"
2145  PRINT "IF YOU RUN YOU'LL GAIN TIME BUT WEAR DOWN YOUR OXEN"
2150  PRINT "IF YOU CIRCLE YOU'LL LOSE TIME"
2155  IF RND(0)>.2 THEN 2165
2160  S5=1-S5
2165  INPUT T1
2170  IF T1<1 THEN 2140
2175  IF T1>4 THEN 2140
2180  T1=INT(T1)
2185  IF S5=1 THEN 2330
2190  IF T1>1 THEN 2220
2195  M=M+20
2200  M1=M1-15
2205  B=B-150
2210  A=A-40
2215  GOTO 2395
2220  IF T1>2 THEN 2285
2225  GOSUB 4500
2230  B=B-B1*40-80
2235  IF B1>1 THEN 2250
2240  PRINT "NICE SHOOTING---YOU DROVE THEM OFF"
2245  GOTO 2395
2250  IF B1 <= 4 THEN 2275
2255  PRINT "LOUSY SHOT---YOU GOT KNIFED"
2260  K8=1
2265  PRINT "YOU HAVE TO SEE OL' DOC BLANCHARD"
2270  GOTO 2395
2275  PRINT "KINDA SLOW WITH YOUR COLT .45"
2280  GOTO 2395
2285  IF T1>3 THEN 2310
2290  IF RND(0)>.8 THEN 2390
2295  LET B=B-150
2300  M1=M1-15
2305  GOTO 2395
2310  GOSUB 4500
2315  B=B-B1*30-80
2320  M=M-25
2325  GOTO 2235
2330  IF T1>1 THEN 2350
2335  M=M+15
2340  A=A-10
2345  GOTO 2395
2350  IF T1>2 THEN 2370
2355  M=M-5
2360  B=B-100
2365  GOTO 2395
2370  IF T1>3 THEN 2380
2375  GOTO 2395
2380  M=M-20
2385  GOTO 2395
2390  PRINT "THEY DID NOT ATTACK"
2392  GOTO 2500
2395  IF S5=0 THEN 2410
2400  PRINT "RIDERS WERE FRIENDLY, BUT CHECK FOR POSSIBLE LOSSES"
2405  GOTO 2500
2410  PRINT "RIDERS WERE HOSTILE--CHECK FOR LOSSES"
2415  IF B >= 0 THEN 2500
2420  PRINT "YOU RAN OUT OF BULLETS AND GOT MASSACRED BY THE RIDERS"
2425  GOTO 3600
2499  REM ***SELECTION OF EVENTS***
2500  LET D1=0
2505  RESTORE
2510  R1=100*RND(TIM(0))
2515  LET D1=D1+1
2520  IF D1=16 THEN 3020
2525  READ D
2530  IF R1>D THEN 2515
2535  DATA 6,11,13,15,17,22,32,35,37,42,44,54,64,69,95
2537  IF D1>10 THEN 2545
2540  GOTO D1 OF 2550,2570,2590,2615,2630,2645,2660,2690,2785,2810
2545  GOTO D1-10 OF 2825,2860,2885,2970,2990,3020
2550  PRINT "WAGON BREAKS DOWN--LOSE TIME AND SUPPLIES FIXING IT"
2555  LET M=M-15-5*RND(0)
2560  LET M1=M1-8
2565  GOTO 3100
2570  PRINT "OX INJURES LEG---SLOWS YOU DOWN REST OF TRIP"
2575  LET M=M-25
2580  LET A=A-20
2585  GOTO 3100
2590  PRINT "BAD LUCK---YOUR DAUGHTER BROKE HER ARM"
2595  PRINT "YOU HAD TO STOP AND USE SUPPLIES TO MAKE A SLING"
2600  M=M-5-4*RND(0)
2605  M1=M1-2-3*RND(0)
2610  GOTO 3100
2615  PRINT "OX WANDERS OFF---SPEND TIME LOOKING FOR IT"
2620  M=M-17
2625  GOTO 3100
2630  PRINT "YOUR SON GETS LOST---SPEND HALF THE DAY LOOKING FOR HIM"
2635  M=M-10
2640  GOTO 3100
2645  PRINT "UNSAFE WATER--LOSE TIME LOOKING FOR CLEAN SPRING"
2650  LET M=M-10*RND(0)-2
2655  GOTO 3100
2660  IF M>950 THEN 2935
2665  PRINT "HEAVY RAINS---TIME AND SUPPLIES LOST"
2670  F=F-10
2672  B=B-500
2675  M1=M1-15
2680  M=M-10*RND(0)-5
2685  GOTO 3100
2690  PRINT "BANDITS ATTACK"
2700  GOSUB 4500
2705  B=B-20*B1
2715  IF B >= 0 THEN 2735
2720  PRINT "YOU RAN OUT OF BULLETS---THEY GET LOTS OF CASH"
2725  T=T/3
2730  GOTO 2740
2735  IF B1 <= 1 THEN 2770
2740  PRINT "YOU GOT SHOT IN THE LEG AND THEY TOOK ONE OF YOUR OXEN"
2745  K8=1
2750  PRINT "BETTER HAVE A DOC LOOK AT YOUR WOUND"
2755  M1=M1-5
2760  A=A-20
2765  GOTO 3100
2770  PRINT "QUICKEST DRAW OUTSIDE OF DODGE CITY!!!"
2775  PRINT "YOU GOT 'EM!"
2780  GOTO 3100
2785  PRINT "THERE WAS A FIRE IN YOUR WAGON--FOOD AND SUPPLIES DAMAGED"
2790  F=F-40
2792  B=B-400
2795  LET M1=M1-RND(0)*8-3
2800  M=M-15
2805  GOTO 3100
2810  PRINT "LOSE YOUR WAY IN HEAVY FOG---TIME IS LOST"
2815  M=M-10-5*RND(0)
2820  GOTO 3100
2825  PRINT "YOU KILLED A POISONOUS SNAKE AFTER IT BIT YOU"
2830  B=B-10
2835  M1=M1-5
2840  IF M1 >= 0 THEN 2855
2845  PRINT "YOU DIE OF SNAKEBITE SINCE YOU HAVE NO MEDICINE"
2850  GOTO 3600
2855  GOTO 3100
2860  PRINT "WAGON GETS SWAMPED FORDING RIVER--LOSE FOOD AND CLOTHES"
2865  F=F-30
2870  C=C-20
2875  M=M-20-20*RND(0)
2880  GOTO 3100
2885  PRINT "WILD ANIMALS ATTACK!"
2887  GOSUB 4500
2889  IF B>39 THEN 2895
2890  PRINT "YOU WERE TOO LOW ON BULLETS--"
2891  PRINT "THE WOLVES OVERPOWERED YOU"
2892  K8=1
2893  GOTO 3555
2895  IF B1>2 THEN 2910
2900  PRINT "NICE SHOOTIN' PARDNER---THEY DIDN'T GET MUCH"
2905  GOTO 2915
2910  PRINT "SLOW ON THE DRAW---THEY GOT AT YOUR FOOD AND CLOTHES"
2915  B=B-20*B1
2920  C=C-B1*4
2925  F=F-B1*8
2930  GOTO 3100
2935  PRINT "COLD WEATHER---BRRRRRRR!---YOU ";
2940  IF C>22+4*RND(0) THEN 2955
2945  PRINT "DON'T ";
2950  C1=1
2955  PRINT "HAVE ENOUGH CLOTHING TO KEEP YOU WARM"
2960  IF C1=0 THEN 3100
2965  GOTO 4700
2970  PRINT "HAIL STORM---SUPPLIES DAMAGED"
2975  M=M-5-RND(0)*10
2977  B=B-200
2980  M1=M1-4-RND(0)*3
2985  GOTO 3100
2990  IF E=1 THEN 4700
2995  IF E=3 THEN 3010
3000  IF RND(0)>.25 THEN 4700
3005  GOTO 3100
3010  IF RND(0)<.5 THEN 4700
3015  GOTO 3100
3020  PRINT "HELPFUL INDIANS SHOW YOU WHERE TO FIND MORE FOOD"
3025  F=F+14
3030  GOTO 3100
3099  REM ***MOUNTAINS***
3100  IF M <= 950 THEN 700
3105  IF RND(0)*10>9-((M/100-15)^2+72)/((M/100-15)^2+12) THEN 3175
3110  PRINT "RUGGED MOUNTAINS"
3115  IF RND(0)>.1 THEN 3135
3120  PRINT "YOU GOT LOST---LOSE VALUABLE TIME TRYING TO FIND TRAIL!"
3125  M=M-60
3130  GOTO 3175
3135  IF RND(0)>.11 THEN 3160
3140  PRINT "WAGON DAMAGED!---LOSE TIME AND SUPPLIES"
3145  M1=M1-5
3147  B=B-200
3150  M=M-20-30*RND(0)
3155  GOTO 3175
3160  PRINT "THE GOING GETS SLOW"
3165  M=M-45-RND(0)/.02
3175  IF F1=1 THEN 3195
3180  F1=1
3185  IF RND(0)<.8 THEN 3300
3190  PRINT "YOU MADE IT SAFELY THROUGH SOUTH PASS--NO SNOW"
3195  IF M<1700 THEN 3215
3200  IF F2=1 THEN 3215
3205  F2=1
3210  IF RND(0)<.7 THEN 3300
3215  IF M>950 THEN 700
3220  M9=1
3225  GOTO 700
3300  PRINT "BLIZZARD IN MOUNTAIN PASS--TIME AND SUPPLIES LOST"
3305  L1=1
3310  F=F-25
3315  M1=M1-10
3317  B=B-300
3320  M=M-30-40*RND(0)
3325  IF C<18+2*RND(0) THEN 4700
3330  GOTO 3215
3499  REM ***DYING***
3500  PRINT "YOU RAN OUT OF FOOD AND STARVED TO DEATH"
3505  GOTO 3600
3520  LET T=0
3525  PRINT "YOU CAN'T AFFORD A DOCTOR"
3530  GOTO 3555
3550  PRINT "YOU RAN OUT MEDICAL SUPPLIES"
3555  PRINT "YOU DIED OF ";
3560  IF K8=1 THEN 3575
3565  PRINT "PNEUMONIA"
3570  GOTO 3600
3575  PRINT "INJURIES"
3600  PRINT
3602  PRINT "DO TO YOUR UNFORTUNATE SITUATION, THERE ARE A FEW"
3605  PRINT "FORMALITIES WE MUST GO THROUGH"
3610  PRINT
3615  PRINT "WOULD YOU LIKE A MINISTER?"
3620  INPUT C$
3630  PRINT "WOULD YOU LIKE A FANCY FUNERAL?"
3635  INPUT C$
3650  PRINT "WOULD YOU LIKE US TO INFORM YOUR NEXT OF KIN?"
3652  INPUT C$
3654  IF C$="YES" THEN 3670
3656  PRINT "YOUR AUNT NELLIE IN ST. LOUIS IS ANXIOUS TO HEAR"
3658  PRINT
3670  PRINT "WE THANK YOU FOR THIS INFORMATION AND WE ARE SORRY YOU"
3675  PRINT "DIDN'T MAKE IT TO THE GREAT TERRITORY OF OREGON"
3680  PRINT "BETTER LUCK NEXT TIME"
3685  PRINT
3690  PRINT
3695  PRINT TAB(30);"SINCERELY"
3700  PRINT
3705  PRINT TAB(17);"THE OREGON CITY CHAMBER OF COMMERCE"
3710  STOP
3999  REM ***FINAL TURN***
4000  F9=(2040-M2)/(M-M2)
4005  F=F+(1-F9)*(8+5*E)
4010  PRINT
4012  REM *BELLS IN LINES 4015, 4020*
4015  PRINT "YOU"'7" FINALLY ARRI"'7"VED AT ORE"'7"GON CITY"'7
4020  PRINT "AFTER"'7" 2040 LONG MILES"'7"---HOORAY!!"'7"!!!"
4025  PRINT
4030  F9=INT(F9*14)
4035  D3=D3*14+F9
4040  F9=F9+1
4045  IF F9<8 THEN 4055
4050  F9=F9-7
4055  GOTO F9 OF 4060,4070,4080,4090,4100,4110,4120
4060  PRINT "MONDAY ";
4065  GOTO 4125
4070  PRINT "TUESDAY ";
4075  GOTO 4125
4080  PRINT "WEDNESDAY ";
4085  GOTO 4125
4090  PRINT "THURSDAY ";
4095  GOTO 4125
4100  PRINT "FRIDAY ";
4105  GOTO 4125
4110  PRINT "SATURDAY ";
4115  GOTO 4125
4120  PRINT "SUNDAY ";
4125  IF D3>124 THEN 4145
4130  D3=D3-93
4135  PRINT "JULY ";D3;" 1847"
4140  GOTO 4215
4145  IF D3>155 THEN 4165
4150  D3=D3-124
4155  PRINT "AUGUST ";D3;" 1847"
4160  GOTO 4215
4165  IF D3>185 THEN 4185
4170  D3=D3-155
4175  PRINT "SEPTEMBER ";D3;" 1847"
4180  GOTO 4215
4185  IF D3>216 THEN 4205
4190  D3=D3-185
4195  PRINT "OCTOBER ";D3;" 1847"
4200  GOTO 4215
4205  D3=D3-216
4210  PRINT "NOVEMBER ";D3;" 1847"
4215  PRINT
4220  PRINT "FOOD","BULLETS","CLOTHING","MISC. SUPP.","CASH"
4230  IF B>0 THEN 4240
4235  LET B=0
4240  IF C>0 THEN 4250
4245  LET C=0
4250  IF M1>0 THEN 4260
4255  LET M1=0
4260  IF T>0 THEN 4270
4265  LET T=0
4270  IF F>0 THEN 4285
4275  LET F=0
4285  PRINT INT(F),INT(B),INT(C),INT(M1),INT(T)
4290  PRINT
4295  PRINT "PRESIDENT JAMES K. POLK SENDS YOU HIS"
4297  PRINT "      HEARTIEST CONGRATULATIONS"
4300  PRINT
4305  PRINT TAB(11);"AND WISHES YOU A PROSPEROUS LIFE AHEAD"
4310  PRINT
4315  PRINT TAB(22);"AT YOUR NEW HOME"
4320  STOP
4499  REM ***SHOOTING SUB-ROUTINE***
4500  PRINT "TYPE BANG";
4505  B2=7
4510  C$=""
4515  ENTER #P,B2,B1,C$
4520  PRINT
4525  IF C$="BANG" THEN 4535
4530  B1=7
4535  RETURN
4699  REM ***ILLNESS SUB-ROUTINE***
4700  IF 100*RND(0)<10+35*(E-1) THEN 4740
4705  IF 100*RND(0)<100-(40/4^(E-1)) THEN 4760
4715  PRINT "SERIOUS ILLNESS---"
4720  PRINT "YOU MUST STOP FOR MEDICAL ATTENTION"
4725  M1=M1-10
4730  S4=1
4735  GOTO 4780
4740  PRINT "MILD ILLNESS---MEDICINE USED"
4745  M=M-5
4750  M1=M1-2
4755  GOTO 4780
4760  PRINT "BAD ILLNESS---MEDICINE USED"
4765  M=M-5
4770  M1=M1-5
4780  IF M1<0 THEN 3550
4785  IF L1=1 THEN 3215
4790  GOTO 3100
4900  REM ***IDENDIFICATION OF VARIABLES IN THE PROGRAM***
4902  REM A = AMOUNT SPENT ON ANIMALS
4904  REM B = AMOUNT SPENT ON AMMUNITION
4906  REM B1 = ACTUAL RESPONSE TIME FOR INPUTING 'BANG'
4908  REM B2 = MAXIMUM RESPONSE TIME FOR INPUTING 'BANG'
4910  REM C = AMOUNT SPENT ON CLOTHING
4912  REM C1 = FLAG FOR INSUFFICIENT CLOTHING IN COLD WEATHER
4914  REM C$ = YES/NO RESPONSE TO QUESTIONS
4916  REM D1 = COUNTER IN GENERATING EVENTS
4918  REM D3 = TURN NUMBER FOR SETTING DATE
4920  REM D4 = CURRENT DATE
4922  REM E = CHOICE OF EATING
4924  REM F = AMOUNT SPENT ON FOOD
4926  REM F1 = FLAG FOR CLEARING SOUTH PASS
4928  REM F2 = FLAG FOR CLEARING BLUE MOUNTAINS
4930  REM F9 = FRACTION OF 2 WEEKS TRAVELED ON FINAL TURN
4932  REM K8 = FLAG FOR INJURY
4934  REM L1 = FLAG FOR BLIZZARD
4936  REM M = TOTAL MILEAGE WHOLE TRIP
4938  REM M1 = AMOUNT SPENT ON MISCELLANEOUS SUPPLIES
4940  REM M2 = TOTAL MILEAGE UP THROUGH PREVIOUS TURN
4942  REM M9 = FLAG FOR CLEARING SOUTH PASS IN SETTING MILEAGE
4944  REM P = AMOUNT SPENT ON ITEMS AT FORT
4946  REM R1 = RANDOM NUMBER IN CHOOSING EVENTS
4948  REM S4 = FLAG FOR ILLNESS
4950  REM S5 = 'HOSTILITY OF RIDERS' FACTOR
4952  REM T = CASH LEFT OVER AFTER INITIAL PURCHASES
4954  REM T1 = CHOICE OF TACTICS WHEN ATTACKED
4956  REM X = CHOICE OF ACTION FOR EACH TURN
4958  REM X1 = FLAG FOR FORT OPTION
5000  END
