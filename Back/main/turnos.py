from datetime import datetime,timedelta
import datetime

delta = timedelta(hours=1,minutes=30)
tiempo_ini=datetime.time(9,30,0,0)

t = tiempo_ini.strftime("%H:%M")
print(t)

turnos=[t]
# for i in range(1,11):
#     turnos.append(delta)

# for turno in turnos:
#     print(turno.strftime('%'))
