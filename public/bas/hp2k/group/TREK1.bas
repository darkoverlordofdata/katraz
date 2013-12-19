REM TREK1


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
95  GOTO O OF 100,200,300,400,500,600,700,800,900,1000
100  REM  ----- (1) FIRE BANKS -----
102  PRINT "   FIRE PHASERS [1-4] ";
104  GOSUB 9300
106  IF W=0 THEN 4002
108  PRINT "   SPREAD [05-45] ";
110  ENTER T3,T,B
112  PRINT
114  IF T<0 THEN 4002
116  IF B<5 OR B>45 THEN 4006
118  M[I,K1+1]=B
120  L1=0
122  FOR L=1 TO W
124  K=W[L]
126  IF K<1 OR K>K1 THEN 136
128  IF M[I,K]<0 THEN 136
129  IF M[I,K] >= 100 THEN 144
130  M[I,K]=M[I,K]+100
132  GOSUB 9400
134  IF M[I,K] >= 100 THEN 144
136  IF L1 THEN 142
138  PRINT "COMPUTER:  PHASER(S)  ";
140  L1=1
142  PRINT K;
144  NEXT L
146  IF L1=0 THEN 4100
148  PRINT "UNABLE TO FIRE."
150  GOTO 4100
200  REM  ----- (2) FIRE TUBES -----
202  PRINT "   FIRE TUBES [1-6] ";
204  GOSUB 9300
206  IF W=0 THEN 4002
208  L1=0
210  FOR L=1 TO W
212  K=W[L]
214  IF K<1 OR K>K2 THEN 232
216  IF T[I,K]<0 OR V[I,K]=0 THEN 224
217  IF T[I,K] >= 100 THEN 232
218  T[I,K]=T[I,K]+100
220  GOSUB 9500
222  IF T[I,K] >= 100 THEN 232
224  IF L1 THEN 230
226  PRINT "COMPUTER:  TUBE(S)  ";
228  L1=1
230  PRINT K;
232  NEXT L
234  IF L1=0 THEN 4100
236  PRINT "UNABLE TO FIRE."
238  GOTO 4100
300  REM  ----- (3) LOCK PHASERS -----
302  IF Z[I,1] THEN 4014
304  PRINT "   LOCK PHASERS [1-4] ";
306  GOSUB 9300
308  IF W=0 THEN 4002
310  PRINT "   ON [WHOM] ";
312  GOSUB 9000
314  IF V1>10 THEN 4010
316  L1=0
318  FOR L=1 TO W
320  K=W[L]
322  IF K<1 OR K>K1 THEN 332
324  IF M[I,K]<0 THEN 332
326  M[I,K]=V1
328  GOSUB 9400
330  IF M[I,K]>0 THEN 340
332  IF L1 THEN 338
334  PRINT "COMPUTER:  PHASER(S)  ";
336  L1=1
338  PRINT K;
340  NEXT L
342  IF L1=0 THEN 4100
344  PRINT "UNABLE TO LOCK."
346  GOTO 4100
400  REM  ----- (4) LOCK TUBES -----
402  IF Z[I,1] THEN 4014
404  PRINT "   LOCK TUBES [1-6] ";
406  GOSUB 9300
408  IF W=0 THEN 4002
410  PRINT "   ON [WHOM] ";
412  GOSUB 9000
414  IF V1>10 THEN 4010
416  L1=0
418  FOR L=1 TO W
420  K=W[L]
422  IF K<1 OR K>K2 THEN 432
424  IF T[I,K]<0 THEN 432
426  T[I,K]=V1
428  GOSUB 9500
430  IF T[I,K]>0 THEN 440
432  IF L1 THEN 438
434  PRINT "COMPUTER:  TUBE(S)  ";
436  L1=1
438  PRINT K;
440  NEXT L
442  IF L1=0 THEN 4100
444  PRINT "UNABLE TO LOCK."
446  GOTO 4100
500  REM  ----- (5) TURN PHASERS -----
502  PRINT "   TURN PHASERS [1-4] ";
504  GOSUB 9300
506  PRINT "   TO [0-360] ";
508  ENTER T2,T,B
510  PRINT
512  IF T<0 THEN 4002
514  IF B<0 OR B >= 360 THEN 4010
516  L1=0
518  FOR L=1 TO W
520  K=W[L]
521  IF K<1 OR K>K1 THEN 530
522  IF M[I,K]<0 THEN 530
524  M[I,K]=0
526  N[I,K]=B
528  GOTO 538
530  IF L1 THEN 536
532  PRINT "COMPUTER:  PHASER(S)  ";
534  L1=1
536  PRINT K;
538  NEXT L
540  IF L1=0 THEN 4100
542  PRINT "UNABLE TO TURN."
544  GOTO 4100
600  REM  ----- (6) TURN TUBES -----
602  PRINT "   TURN TUBES [1-4] ";
604  GOSUB 9300
606  PRINT "   TO [0-360] ";
608  ENTER T2,T,B
610  PRINT
612  IF T<0 THEN 4002
614  IF B<0 OR B >= 360 THEN 4010
616  L1=0
618  FOR L=1 TO W
620  K=W[L]
621  IF K<1 OR K>K2 THEN 630
622  IF T[I,K]<0 THEN 630
624  T[I,K]=0
626  U[I,K]=B
628  GOTO 638
630  IF L1 THEN 636
632  PRINT "COMPUTER:  TUBE(S)  ";
634  L1=1
636  PRINT K;
638  NEXT L
640  IF L1=0 THEN 4100
642  PRINT "UNABLE TO TURN."
644  GOTO 4100
700  REM  ----- (7) PHASER STATUS -----
702  PRINT '14"PHASERS"'14
704  PRINT "CONTROL";
706  FOR K=1 TO K1
708  PRINT TAB(8*K+2);
710  IF M[I,K]>0 THEN 722
712  IF M[I,K]=0 THEN 718
714  PRINT "DAMAGED";
716  GOTO 728
718  PRINT "MANUAL";
720  GOTO 728
722  V=I[M[I,K]]
724  GOSUB 9050
726  PRINT V$[1,7]
728  NEXT K
730  PRINT
732  PRINT "TURNED";
734  FOR K=1 TO K1
736  PRINT TAB(8*K+2);INT(N[I,K]);
738  NEXT K
740  PRINT "  FIRING %S="M[I,K1+2]
752  PRINT "LEVEL";
754  FOR K=1 TO K1
756  PRINT TAB(8*K+2);INT(Q[I,K]);
758  NEXT K
760  PRINT
762  PRINT "CHARGE";
764  FOR K=1 TO K1
766  PRINT TAB(8*K+2);INT(R[I,K]);
768  NEXT K
770  PRINT
772  GOTO 4100
800  REM  ----- (8) TUBE STATUS -----
802  PRINT '14"TORPEDOES"'14
804  PRINT "CONTROL";
806  FOR K=1 TO K2
808  PRINT TAB(8*K+2);
810  IF T[I,K]>0 THEN 822
812  IF T[I,K]=0 THEN 818
814  PRINT "DAMAGED";
816  GOTO 828
818  PRINT "MANUAL";
820  GOTO 828
822  V=I[T[I,K]]
824  GOSUB 9050
826  PRINT V$[1,7]
828  NEXT K
830  PRINT
832  PRINT "TURNED";
834  FOR K=1 TO K2
836  PRINT TAB(8*K+2);INT(U[I,K]);
838  NEXT K
840  PRINT
842  PRINT "LEVELS";
844  FOR K=1 TO K2
846  PRINT TAB(8*K+2);INT(V[I,K]);
848  NEXT K
850  PRINT
852  PRINT "LAUNCH SPEED"T[I,K2+1]
854  PRINT "  TIME DELAY"T[I,K2+2]
856  PRINT "  PROX DELAY"T[I,K2+3]
858  GOTO 4100
900  REM  ----- (9) LOAD/UNLOAD TUBES -----
902  PRINT "   [LOAD OR UNLOAD?] ";
904  ENTER T3,T,X$
906  PRINT
908  X=1
910  IF X$[1,1]="L" THEN 918
912  X=-1
914  IF X$[1,1]#"U" THEN 4006
916  IF X<0 THEN 938
918  PRINT "   [T*,UNITS (10-15)] ";
920  GOSUB 9300
922  IF W=0 THEN 930
924  K0=(W[1]*10)+W[2]
926  IF K0<10 OR K0>15 THEN 938
928  GOTO 936
930  IF LEN(X$)=0 THEN 938
932  IF X$[1,1]#"T" THEN 4006
934  GOTO 938
936  X=2
938  PRINT "   TUBES [1-6] ";
940  GOSUB 9300
942  IF W=0 THEN 4006
944  FOR L=1 TO W
946  K=W[L]
948  IF K<1 OR K>2 THEN 978
950  IF T[I,K]<0 THEN 978
952  IF X>0 THEN 964
954  Y=V[I,K] MIN H[I]-F[I]
956  V[I,K]=V[I,K]-Y
958  F[I]=F[I]+Y
960  H[I]=H[I]+Y
962  GOTO 978
964  IF X>1 THEN 970
966  Y=10-V[I,K] MIN F[I]
968  GOTO 972
970  Y=K0-V[I,K] MIN F[I]
972  V[I,K]=V[I,K]+Y
974  F[I]=F[I]-Y
976  H[I]=H[I]-Y
978  NEXT L
980  PRINT "SCOTT:  TUBE UNITS NOW  ";
982  FOR K=1 TO K2
984  IF T[I,K]<0 THEN 990
986  PRINT INT(V[I,K]);
988  GOTO 992
990  PRINT " --   ";
992  NEXT K
994  PRINT "FUEL @ "INT(F[I])
996  GOTO 4100
1000  REM  ----- (10) LAUNCH PROBE -----
1002  IF Z[I,3] THEN 4018
1004  PRINT "SCOTT:  "F[I]"PODS AVAILABLE."
1006  IF F[I]<10 THEN 4022
1008  PRINT N$":  NUMBER OF PODS TO LAUNCH [10-40] IS ";
1010  ENTER T3,T,Q1
1012  PRINT
1014  IF T<0 THEN 4002
1016  PRINT "   SET TIME DELAY TO [0-15] ";
1018  ENTER T3,T,Q2
1020  PRINT
1022  IF T<0 THEN 4002
1024  PRINT "   SET PROXIMITY DELAY TO [50-2000] ";
1026  ENTER T3,T,Q3
1028  PRINT
1030  IF T<0 THEN 4002
1032  IF Q1<10 OR Q1>50 OR Q1>F[I] OR Q2<0 OR Q2>15 THEN 4010
1033  IF Q3<0 OR Q3>2000 THEN 4010
1034  GOSUB 9200
1036  PRINT "   LAUNCH TOWARDS [WHOM, IF ANYONE] ";
1038  GOSUB 9000
1040  IF V1>10 THEN 1052
1042  J=V1
1044  GOSUB 9100
1046  J[I3]=V1
1048  C[I3]=D[I3]=B
1050  GOTO 1062
1052  PRINT "   COURSE [0-360] ";
1054  ENTER T3,T,D[I3]
1056  PRINT
1058  IF T<0 THEN 4002
1060  IF D[I3]<0 OR D[I3] >= 360 THEN 4010
1062  A[I3]=B[I3]=2
1064  F[I3]=O1
1066  F[I]=F[I]-Q1
1068  H[I]=H[I]-Q1
1070  I[I3]=I[I3]+20
1102  K[I3]=10000-Q2/D1
1105  L[I3]=Q3
1108  X[I3]=X[I3]+A[I3]*COS(C[I3]*100*D1)
1111  Y[I3]=Y[I3]+A[I3]*SIN(C[I3]*100*D1)
1114  PRINT "SCOTT:  PROBE #  "I3"AWAY."
1117  GOTO 4100
4000  REM     ----- ERROR MESSAGES -----
4002  PRINT "**TIME**"
4004  GOTO 4100
4006  PRINT "CHEKOV:  WHAT?"
4008  GOTO 4100
4010  PRINT "SPOCK:  BAD PARAMETER(S)."
4012  GOTO 4100
4014  PRINT "SPOCK:  QUITE IMPOSSIBLE, "O$", OUR COMPUTER IS DEAD."
4016  GOTO 4100
4018  PRINT "SCOTT:  PROBE LAUNCHER DESTROYED."
4020  GOTO 4100
4022  PRINT "SCOTT:  WE'VE NOT ENOUGH POWER."
4024  REM
4026  REM     ----- EXIT -----
4028  REM
4100  CHAIN "*TREK0"
9000  REM          ----- NAME COMPARISON SUBROUTINE -----
9002  ENTER T3,T,X$
9004  PRINT
9006  IF LEN(X$)=0 THEN 9020
9008  FOR V1=2 TO 10
9010  V=I[V1]
9012  IF  NOT V OR V>10 THEN 9018
9014  GOSUB 9050
9016  IF X$[1,1]=V$[1,1] THEN 9022
9018  NEXT V1
9020  V1=11
9022  RETURN
9050  REM          ----- NAME SELECTION SUBROUTINE -----
9052  RESTORE 9054
9054  DATA "BISMARK","CENTUAR","DRADDOCK","FORBIN","KREIGER","SHLURG"
9056  DATA "TRAKKA","VARNOR","WARRIOR"
9058  IF V>1 THEN 9064
9060  V$=P$
9062  RETURN
9064  FOR V2=2 TO V
9066  READ V$
9068  NEXT V2
9070  RETURN
9100  REM          ----- BEARING SUBROUTINE -----
9102  X=X[J]-X[I]
9104  Y=Y[J]-Y[I]
9106  IF X=0 THEN 9112
9108  B=ATN(Y/X)*57.2958
9110  GOTO 9114
9112  B=90
9114  IF X >= 0 AND Y >= 0 THEN 9122
9116  B=B+180
9118  IF X<0 THEN 9122
9120  B=B+180
9122  RETURN
9200  REM          ----- SLOT I SUBROUTINE -----
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
9226  IF I[I1]>0 THEN 9230
9228  NEXT I1
9230  I[I3]=0
9232  RETURN
9300  REM          ----- CONVERSION SUBROUTINE -----
9302  ENTER T3,T,X$
9304  PRINT
9306  IF LEN(X$)=0 THEN 9336
9308  Y$="0123456789"
9310  MAT W=ZER[10]
9312  W=0
9314  FOR V2=1 TO LEN(X$)
9316  IF X$[V2,V2]=" " THEN 9332
9318  IF X$[V2,V2]="," THEN 9332
9320  FOR V3=1 TO 10
9322  IF X$[V2,V2]=Y$[V3,V3] THEN 9328
9324  NEXT V3
9326  GOTO 9332
9328  W=W+1
9330  W[W]=V3-1
9332  NEXT V2
9334  RETURN
9336  W=0
9338  RETURN
9400  REM          ----- PHASER TRACKING SUBROUTINE -----
9402  J=M[I,K]
9404  IF J<100 THEN 9408
9406  J=J-100
9408  IF J=0 THEN 9416
9410  IF I[J]=0 THEN 9422
9412  GOSUB 9100
9414  N[I,K]=FNC(B-C[I])
9416  IF N[I,K]<125 OR N[I,K]>235 OR Z[I,5] THEN 9420
9418  M[I,K]=J
9420  RETURN
9422  V=I[I]
9424  IF V>1 THEN 9430
9426  GOSUB 9050
9428  PRINT "   PHASER  "K"DISENGAGING."
9430  M[I,K]=0
9432  RETURN
9500  REM          ----- TORPEDO TRACKING ROUTINE -----
9502  J=T[I,K]
9504  IF J<100 THEN 9508
9506  J=J-100
9508  IF J=0 THEN 9516
9510  IF I[J]=0 THEN 9522
9512  GOSUB 9100
9514  U[I,K]=FNC(B-C[I])
9516  IF U[I,K]<135 OR U[I,K]>225 OR Z[I,5] THEN 9520
9518  T[I,K]=J
9520  RETURN
9522  V=I[I]
9524  IF V>1 THEN 9530
9526  GOSUB 9050
9528  PRINT "   TUBE  "K"DISENGAGING."
9530  T[I,K]=0
9532  RETURN
9999  END

