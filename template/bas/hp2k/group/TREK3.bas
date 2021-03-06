REM TREK3


10  COM A$[20],B$[20],C$[20],M$[20],O$[20],P$[20]
12  COM Q$[20],R$[20],S$[20],V$[20],X$[72],Y$[72],Z$[72]
14  COM A[50],B[50],C[50],D[50],E[50],F[50],G[10],H[10],I[50],J[50]
16  COM K[50],L[50],M[10,6],N[10,4],O[10],P[10],Q[10,4],R[10,4]
18  COM S[10,8],T[10,9],U[10,6],V[10,6],W[10],X[50],Y[50],Z[10,10]
20  COM A,D1,D2,I,I1,I2,K1,K2,K3,K4,N,N1,N2,O,O1,O2,P1,P2,P3,P4
22  COM T0,T1,T2,T3,T4,T5,T6,T7,T8,T9
24  REM
26  REM    TREK73:  AN ADVANCED STAR TREK BATTLE SIMULATION
28  REM  PROGRAMMED BY WILLIAM K. CHAR AND ASSOCIATES, WILSON
30  REM  EDP, 400 MANSELL, SAN FRAN, CA 94134, (415) 230-6460
32  REM  26 NOVEMBER 1973 ***FOR AUTHORISED PERSONNEL ONLY***
34  REM
36  DEF FNA(X)=X*1.74533E-02
38  DEF FNB(X)=X*57.2958
40  DEF FNC(X)=X-INT(X*2.77778E-03)*360
42  DEF FNR(X)=INT(X*RND(1))+1
44  REM
87  GOTO O-20 OF 2100,2200,2300,2400,2500,2600,2700,2800,2900,3000
2100 REM  ----- (21) JETTISON ENGINEERING -----
2102  PRINT"   MR. SCOTT, JETTISON OUR ENGINEERING SECTION!"
2104  IF Z[I,5] THEN 4014
2106  PRINT "SCOTT:  JETTISONNING ENGINEERING."
2108  GOSUB 9200
2110  A[I3]=A[I]
2111  B[I]=.999999
2112  B[I3]=0
2114  C[I3]=D[I3]=C[I]
2116  F[I3]=F[I]
2118  F[I]=G[I]=H[I]=0
2120  J[I3]=J[I]+10
2122  K[I3]=10000-15/D1
2124  Z[I,3]=Z[I,4]=Z[I,5]=1
2126  GOTO 4100
2200  REM  ----- (22) DETONATE ENGINEERING -----
2202  PRINT "   SCOTTY, DETONATE ENGINEERING!"
2204  PRINT "SCOTT:  ";
2206  IF Z[I,5] THEN 2212
2208  PRINT "WHAT?  IT'S STILL ATTACHED."
2210  GOTO 4100
2212  FOR J=1 TO I1
2214  IF I[J]=I[I]+10 THEN 2222
2216  NEXT J
2218  PRINT "OURS HAS ALREADY DETONATED."
2220  GOTO 4100
2222  PRINT "AYE, "O$"."
2224  K[J]=10000
2226  GOTO 4100
2300  REM  ----- (23) PLAY DEAD -----
2302  PRINT "   WEAPONS OFFICER, DROP SHILEDS ..."
2310  IF P1 THEN 2346
2316  PRINT "   TRANSFER POWER TO [ENGINES OR PHASERS] ";
2318  ENTER T3,T,X$
2320  PRINT
2322  L=-10
2324  IF X$[1,1]="E" THEN 2330
2326  L=10
2328  IF X$[1,1]#"P" THEN 4006
2330  FOR K=1 TO 4
2332  S[I,K]=0
2334  NEXT K
2336  FOR K=1 TO K1
2338  R[I,K]=L
2340  NEXT K
2342  P1=1
2344  GOTO 4100
2346  PRINT "SPOCK:  "O$", THE "R$"S ARE NOT THAT STUPID."
2348  GOTO 4100
2400  REM  ----- (24) CORBOMITE BLUFF(S) -----
2432  IF P2 THEN 2457
2439  PRINT "   MR. SULU.  STAND BY."
2440  PRINT "SULU:  STANDING BY."
2441  P2=1
2456  GOTO 4100
2457  PRINT "SPOCK:  I DON'T BELIEVE THAT THEY WILL FALL FOR THAT MANOUEVRE"
2458  PRINT "   AGAIN, "O$"."
2459  GOTO 4100
2500  REM  ----- (25) SURRENDER ATTEMPT -----
2506  PRINT N$":  THIS IS CAPTAIN "N$" OF THE U.S.S. "R$".  WILL"
2508  PRINT "   YOU ACCEPT MY UNCONDITIONAL SURRENDER?"
2510  IF P3 THEN 2522
2512  IF R$#"ROMULAN" THEN 2518
2514  PRINT "SPOCK:  THE "R$"S HAVE NOT BEEN KNOWN TO HAVE TAKEN"
2516  PRINT "   SURVIVORS."
2518  P3=1
2520  GOTO 4100
2522  PRINT "SPOCK:  THE "R$"S HAVE ALREADY REFUSED."
2524  GOTO 4100
2600  REM  ----- (26) ASK ENEMY TO SURRENDER -----
2606  PRINT N$":  THIS IS CAPTAIN "N$" OF THE U.S.S. "R$".  I GIVE YOU"
2608  PRINT "   ONE LAST CHANCE TO SURRENDER BEFORE WE RESUME OUR ATTACK."
2610  IF P4 THEN 2616
2612  P4=1
2614  GOTO 4100
2616  PRINT "SPOCK:  "O$", OUR OFFER HAS ALL READY BEEN REFUSED."
2618  GOTO 4100
2700  REM  ----- (27) SELF-DESTRUCT SEQUENCE -----
2702  PRINT "   LIEUTENANT UHURA, TIE IN THE BRIDGE TO THE MASTER"
2704  PRINT "   COMPUTER."
2705  IF Z[I,1] THEN 4010
2706  PRINT "UHURA:  AYE, "O$"."
2746  PRINT N$":  COMPUTER, THIS IS CAPTAIN "N$" OF THE U.S.S. "R$"."
2748  PRINT "  BEGIN TWENTY-SECOND COUNTDOWN, CODE O-O-O, DESTRUCT O."
2750  PRINT "COMPUTER:  20   SECONDS TO SELF-DESTRUCT."
2752  K[I]=10000-20/D1
2754  GOTO 4100
2800  REM  ----- (28) ABORT SELF-DESTRUCT -----
2802  PRINT "   COMPUTER, THIS IS CAPTAIN "N$" OF THE U.S.S. "R$"."
2804  PRINT "   CODE 1-2-3 CONTINUITY ABORT DESTRUCT ORDER, REPEAT:"
2806  PRINT "   CODE 1-2-3 CONTINUITY ABORT DESTRUCT ORDER!"
2808  IF Z[I,1] THEN 4010
2810  IF K[I]>10000-20/D1 THEN 2818
2812  PRINT "COMPUTER:  SELF-DESTRUCT SEQUENCE CODE 1 HAS NOT BEEN"
2814  PRINT "   INITIATED."
2816  GOTO 4100
2818  PRINT "COMPUTER:  DESTRUCT ORDER ... ";
2820  ENTER T5,R,X$
2822  IF K[I]<10000-5/D1 THEN 2830
2824  PRINT
2826  PRINT "SPOCK:  TOO LATE, CAPTAIN..."
2828  GOTO 4100
2830  PRINT "ABORTED.  DESTRUCT ORDER ABORTED."
2832  K[I]=60
2834  GOTO 4100
2900  REM  ----- (29) BRIEFING -----
2902  RESTORE 2804
2904  DATA "FIRE PHASERS","FIRE PHOTON TORPEDOES"
2906  DATA "LOCK PHASERS ONTO TARGET","LOCK TUBES ONTO TARGET"
2908  DATA "MANUALLY ROTATE PHASERS","MANUALLY ROTATE TUBES"
2910  DATA "PHASER STATUS","TUBE STATUS"
2912  DATA "LOAD/UNLOAD TORPEDO TUBES"
2914  DATA "LAUNCH ANTIMATTER PROBE"
2916  DATA "PROBE CONTROL (DETONATE"," DIRECT"," LOCK)"
2918  DATA "*POSITION REPORT","*POSITION DISPLAY"
2920  DATA "PURSUE AN ENEMY VESSEL","RUN FROM AN ENEMY VESSEL"
2922  DATA "MANUALLY CHANGE COURSE AND SPEED"
2924  DATA "DAMAGE REPORT","SCAN ENEMY (DAMAGE REPORT OF ENEMY)"
2926  DATA "ALTER POWER DISTRIBUTION"
2928  DATA "ALTER TORPEDO AND PHASER FIRING PARAMETERS"
2930  DATA "JETTISON ENGINEERING","DETONATE ENGINEERING"
2932  DATA "ATTEMPT DEFENCELESS RUSE","ATTEMPT CORBOMITE BLUFF(S)"
2934  DATA "SURRENDER","ASK ENEMY OT SURRENDER"
2936  DATA "INITIATE SELF-DESTRUCT SEQUENCE","ABORT SELF-DESTRUCT"
2938  DATA "*REPRINTS ABOVE LIST"
2940  PRINT
2942  PRINT "CODE        COMMAND"
2944  PRINT
2946  FOR K=1 TO 29
2948  READ X$
2950  PRINT K;X$
2952  IF K-INT(K/10)*10 THEN 2956
2954  PRINT
2956  NEXT K
2958  PRINT
2960  PRINT "*DOES NOT USE A TURN"
2962  PRINT
2964  I=0
2966  CHAIN "*TREK0"
3000  REM  ----- (30) RESET SHIELDS -----
3010  PRINT "SCOTTY, RESET THE SHIELDS TO FULL!"
3020  PRINT "SCOTT:  AYE, "O$"."
3030  FOR K=1 TO 4
3040  S[I,K]=1
3050  S[I,K+4]=100
3060  NEXT K
3070  GOTO 4100
4000  REM     ----- ERROR MESSAGES -----
4002  PRINT "**TIME**"
4004  GOTO 4100
4006  PRINT "CHEKOV:  WHAT?"
4008  GOTO 4100
4010  PRINT "SPOCK:  OUR COMPUTER IS DOWN."
4012  GOTO 4100
4014  PRINT "SCOTT:  ENGINEERING HAS ALREADY BEEN JETTISONED."
4018  REM
4020  REM     ----- EXIT -----
4022  REM
4100  CHAIN "*TREK0"
9200  REM	 ----- SLOT I SUBROUTINE -----
9202  FOR I3=1 TO I2
9204  IF I[I3]=0 THEN 9216
9206  NEXT I3
9208  PRINT
9210  PRINT "GAME WILL TERMINATE BECAUSE OF INABILITY TO COPE WITH"
9212  PRINT "ALL THE JUNK (VESSELS, PROBES, TORPEDOES, ETC) IN SPACE."
9214  STOP
9216  I[I3]=1000
9218  A[I3]=B[I3]=C[I3]=D[I3]=E[I3]=F[I3]=J[I3]=K[I3]=L[I3]=0
9220  X[I3]=X[I]
9222  Y[I3]=Y[I]
9224  FOR I1=I2 TO 1 STEP -1
9226  IF I[I1]>0 THEN 9232
9228  NEXT I1
9230  I[I3]=0
9232  RETURN
9999  END


