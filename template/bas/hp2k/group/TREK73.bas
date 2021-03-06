REM TREK73  --  re-typed by Pete Turnbull, November 2003.
REM         --  with corrections July 2009 - January 2010


1  COM A$[20],B$[20],C$[20],M$[20],O$[20],P$[20]
2  COM Q$[20],R$[20],S$[20],V$[20],X$[72],Y$[72],Z$[72]
3  COM A[50],B[50],C[50],D[50],E[50],F[50],G[10],H[10],I[50],J[50]
4  COM K[50],L[50],M[10,6],N[10,4],O[10],P[10],Q[10,4],R[10,4]
5  COM S[10,8],T[10,9],U[10,6],V[10,6],W[10],X[50],Y[50],Z[10,10]
6  COM A,D1,D2,I,I1,I2,K1,K2,K3,K4,N,N1,N2,O,O1,O2,P1,P2,P3,P4
7  COM T0,T1,T2,T3,T4,T5,T6,T7,T8,T9
8  REM
9  REM    TREK73:  AN ADVANCED STAR TREK BATTLE SIMULATION
10  REM  PROGRAMMED BY WILLIAM K. CHAR AND ASSOCIATES, WILSON
11  REM  EDP, 400 MANSELL, SAN FRAN, CA 94134, (415) 230-6460
12  REM  26 NOVEMBER 1973 ***FOR AUTHORISED PERSONNEL ONLY***
13  REM
14  DEF FNA(X)=X*1.74533E-02
15  DEF FNB(X)=X*57.2958
16  DEF FNC(X)=X-INT(X*2.77778E-03)*360
17  DEF FNR(X)=INT(X*RND(1))+1
18  REM
19  T0=1
20  T1=T0*2
21  T2=T1*2
22  T3=T2*2
23  T4=T3*2
24  T5=T4*2
25  T6=T5*2
26  T7=T6*2
27  T8=T7*2
28  T9=T8*2
29  PRINT LIN(-1);"CAPTAIN:  MY LAST NAME IS ";
30  ENTER T5,T,N$
31  PRINT
32  IF LEN(N$)=0 THEN 30
33  L=0
34  IF N$[1,1]#"*" THEN 37
35  N$=N$[2]
36  L=1
37  PRINT N$":  MY SEX IS :"
38  ENTER T4,T,X$
39  PRINT
40  O$="SIR"
41  IF X$[1,1]="M" THEN 50
42  O$="MISS"
43  IF X$[1,1]="F" THEN 50
44  GOTO FNR(3) OF 45,47,49
45  O$="FAG"
46  GOTO 50
47  O$="FAIRY"
48  GOTO 50
49  O$="FRUIT"
50  PRINT "   I'M EXPECTING [1-9]   ENEMY VESSELS."LIN(0);TAB(23);
51  ENTER T4,T,A
52  PRINT
53  IF T<0 THEN 55
54  IF A=INT(A) AND A>0 AND A<10 THEN 60
55  PRINT "UHURA:  "O$", STARFLEET COMMAND REPORTS THAT IT CAN ONLY"
56  PRINT "   BE FROM 1 TO 9.  TRY AGAIN."
57  PRINT N$":  CORRECT, LIEUTENANT--JUST TESTING YOUR ATTENTION."
58  GOTO 50
59  REM  (ENEMY VESSELS)
60  N=A+1
61  MAT I=ZER
62  FOR I=1 TO 10
63  I[I]=I
64  NEXT I
65  REM  (SCRAMBLE NAMES)
66  FOR I=2 TO 9
67  K=FNR(11-I)+I-1
68  X=I[I]
69  I[I]=I[K]
70  I[K]=X
71  NEXT I
72  FOR I=N+1 TO 10
73  I[I]=0
74  NEXT I
75  REM  (SELECT FEDERATION VESSELS)
76  RESTORE 77
77  DATA "CONSTELLATION","ENTERPRISE","EXCALIBUR","LEXINGTON"
78  DATA "ENDEAVOR","EXCELSIOR","FEDERATION","YORKTOWN"
79  DATA "VALLIANT","CONSTITUTION","ALTAIR","CAPELLA"
80  FOR I=1 TO FNR(12)
81  READ P$
82  NEXT I
83  REM  (SELECT ENEMY NATIONS)
84  RESTORE 85
85  DATA "ARCTURIAN","RIGELIAN","KLINGON","ROMULAN","VULCAN"
86  FOR I=1 TO FNR(5)
87  READ R$
88  NEXT I
89  REM  (SELECT ENEMY CAPTAINS)
90  RESTORE 91
91  DATA "BOLAK","KANG","KOLOTH","KOR","KORAX","KRULIX","QUARLO","TOWL"
92  DATA "T'PAU","TROBLAK"
93  FOR I=1 TO FNR(10)
94  READ S$
95  NEXT I
96  IF L THEN 173
97  PRINT
98  PRINT "SPACE, THE FINAL FRONTIER."
99  PRINT "THESE ARE THE VOYAGES OF THE STARSHIP "P$"."
100  PRINT "ITS FIVE YEAR MISSION: TO EXPLORE STRANGE NEW WORLDS,"
101  PRINT "TO SEEK OUT NEW LIFE AND NEW CIVILIZATIONS,"
102  PRINT "TO BOLDLY GO WHERE NO MAN HAS GONE BEFORE!"
103  PRINT
104  PRINT TAB(20)"S T A R   T R E K"
105  PRINT
106  PRINT "CAPTAIN "N$": CAPTAIN'S LOG, STARDATE "TIM(1)+TIM(0)/100
107  REM  (SELECT MISSIONS)
108  RESTORE 109
109  DATA " WE ARE ACTING IN RESPONSE TO A PRIORITY 1 DISTRESS CALL FROM"
110  DATA "SPACE STATION K7."
111  DATA " WE ARE ORBITING GAMMA 2 TO MAKE A ROUTINE CHECK OF AUTOMATIC"
112  DATA "COMMUNICATIONS AND ASTROGATION STATIONS."
113  DATA " WE ARE ON COURSE FOR EPSILON CANARES 3 TO TREAT COMMISSIONER"
114  DATA "HEADFORD FOR SUKARO'S DISEASE."
115  DATA " WE HAVE BEEN ASSIGNED TO TRANSPORT FEDERATION AMBASSADORS"
116  DATA "TO THE PLANET CONFERENCE, CODE NAMED BABEL, ON TELLERITE"
117  DATA "ANDOREAN."
118  DATA " OUR MISSION IS TO INVESTIGATE A FIND OF TRITANIUM ON BETA 7."
119  DATA " WE ARE ORBITING RIGEL 4 FOR THERAPEUTIC SHORE LEAVE."
120  DATA " WE ARE ORBITING SIGMA IOTA 2 TO STUDY THE EFFECTS OF"
121  DATA "CONTAMINATION UPON A DEVELOPING CULTURE."
122  DATA " WE HAVE ALTERED COURSE FOR A RESCUE MISSION IN THE GAMMA 7A"
123  DATA "SYSTEM."
124  DATA " WE ARE PRESENTLY ON COURSE FOR ALTAIR 6 TO ATTEND INAUGURATION"
125  DATA "CEREMONIES ON THAT PLANET."
126  DATA " WE ARE ON A CARTOGRAPHIC MISSION TO POLEX 8."
127  DATA " WE ARE HEADED FOR MALURIAN IN RESPONSE TO A DISTRESS CALL"
128  DATA "FROM THAT SYSTEM."
129  DATA " WE ARE TO NEGOTIATE A TREATY TO MINE DILITHIUM CRYSTALS FROM"
130  DATA "THE HAULKINS."
131  DATA " WE ARE TO INVESTIGATE STRANGE SENSOR READINGS REPORTED BY A"
132  DATA "SCOUTSHIP INVESTIGATING GAMMA TRIANGULA 6."
133  DATA " WE ARE HEADED FOR PLANETS L370 AND L374 TO INVESTIGATE THE"
134  DATA "DISAPPEARANCE OF THE STARSHIP CONSTELLATION IN THAT VICINITY"
135  DATA " WE ARE ORDERED, WITH A SKELETON CREW, TO PROCEED TO SPACE"
136  DATA "STATION K2 TO TEST DR. RICHARD DAYSTROM'S COMPUTER M-5."
137  DATA " WE HAVE ENCOUNTERED DEBRIS FROM THE SS BEAGLE AND ARE"
138  DATA "PROCEEDING TO INVESTIGATE."
139  DATA " WE ARE ON COURSE FOR EKOS TO LOCATE JOHN GUILD."
140  DATA " WE ARE TO DIVERT AN ASTEROID FROM DESTROYING AN INHABITED"
141  DATA "PLANET."
142  DATA " WE ARE RESPONDING TO A DISTRESS CALL FROM THE SCIENTIFIC"
143  DATA "EXPEDITION ON TRIACUS."
144  DATA " WE HAVE BEEN ASSIGNED TO TRANSPORT THE MEDUSAN AMBASSADOR TO"
145  DATA "TO HIS HOME PLANET."
146  DATA " ***END OF MISSIONS***"
147  FOR I=1 TO FNR(20)
148  READ X$
149  IF X$[1,1]=" " THEN 151
150  GOTO 148
151  NEXT I
152  PRINT "  "X$
153  READ X$
154  IF X$[1,1]=" " THEN 157
155  PRINT "   "X$
156  GOTO 153
157  X$="A23456789"
158  X$=X$[A,A]
159  Y$=""
160  IF A=1 THEN 162
161  Y$="S"
162  PRINT "SULU:  "O$", I'M PICKING UP "X$" VESSEL "Y$" ON INTERCEPTION"
163  PRINT "   COURSE"Y$" WITH THE "P$"."
164  X$="IT"
165  Z$="A "
166  IF A=1 THEN 169
167  X$="THEM"
168  Z$=""
169  PRINT "SPOCK:  SENSORS IDENTIFY "Y$" AS "Z$;R$" BATTLE"
170  PRINT "   CRUISER"Y$", PROBABLY UNDER THE COMMAND OF CAPTAIN "S$"."
171  PRINT N$":  SOUND GENERAL QUARTERS, LIEUTENANT!"
172  PRINT "UHURA:  AYE, "O$"!"
173  PRINT LIN(-1);"COMPUTER:  THE "R$"'S ARE ATTACKING THE "P$" WITH THE"
174  PRINT "  ";
175  FOR I=2 TO N
176  V=I[I]
177  GOSUB 261
178  PRINT " "V$;
179  IF I=N THEN 184
180  IF A<3 THEN 183
181  PRINT ","
182  IF I+1<N THEN 184
183  PRINT " AND THE ";
184  NEXT I
185  PRINT "."
186  REM	  ----- MAJOR INITIALISATIONS -----
187  D1=.2
188  I1=N
189  I2=50
190  K1=4
191  K2=6
192  O1=O2=P1=P2=P3=P4=0
193  MAT A=ZER
194  MAT B=ZER
195  MAT C=ZER
196  MAT D=ZER
197  MAT E=ZER
198  MAT F=ZER
199  MAT G=ZER
200  MAT H=ZER
201  MAT J=ZER
202  MAT K=ZER
203  MAT L=ZER
204  MAT M=ZER
205  MAT N=ZER
206  MAT O=ZER
207  MAT P=ZER
208  MAT Q=ZER
209  MAT R=ZER
210  MAT S=ZER
211  MAT T=ZER
212  MAT U=ZER
213  MAT V=ZER
214  MAT W=ZER
215  MAT X=ZER
216  MAT Y=ZER
217  MAT Z=ZER
218  FOR I=1 TO I1
219  A[I]=B[I]=1
220  C[I]=D[I]=FNR(360)
221  E[I]=.55
222  F[I]=300
223  H[I]=375
224  G[I]=10
225  J[I]=1
226  FOR K=1 TO K1
227  Q[I,K]=10
228  R[I,K]=10
229  NEXT K
230  M[I,K1+1]=10
231  M[I,K1+2]=100
232  N[I,1]=90
233  N[I,4]=270
234  T[I,K2+1]=12
235  T[I,K2+2]=10
236  T[I,K2+3]=200
237  U[I,1]=120
238  U[I,2]=60
239  U[I,5]=300
240  U[I,6]=240
241  FOR K=1 TO 4
242  S[I,K]=1
243  S[I,K+4]=100
244  NEXT K
245  R=4300+FNR(500)
246  B=FNA(I*(360/A))
247  X[I]=R*COS(B)
248  Y[I]=R*SIN(B)
249  Z[I,6]=350
250  NEXT I
251  REM  (FEDERATION EXCEPTIONS)
252  C[1]=D[1]=0
253  E[1]=1
254  F[1]=200
255  H[1]=250
256  J[1]=0
257  X[1]=Y[1]=0
258  Z[1,6]=450
259  I=0
260  CHAIN "*TREK0"
261  REM	  ----- NAME SELECTION SUBROUTINE -----
262  RESTORE 263
263  DATA "BISMARK","CENTUAR","DRADDOCK","FORBIN","KREIGER","SHLURG"
264  DATA "TRAKKA","VARNOR","WARRIOR"
265  IF V>1 THEN 268
266  V$=P$
267  RETURN
268  FOR V2=2 TO V
269  READ V$
270  NEXT V2
271  RETURN
272  END


