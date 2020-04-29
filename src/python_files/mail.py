import smtplib 
import zaroorisaman
import sys
import random
def get_otp():
    otp=""
    for i in range(6):
        otp=otp+str(random.randint(1,9))
    return otp
# print(get_otp())
from email.mime.text import MIMEText
def send(fp,server,sender_mail,send_to_email,message,sent_status):
    server.sendmail(sender_mail, send_to_email, message)
    fp.write(send_to_email+'\n')
    sent_status.append(send_to_email)
sent_status=[]
#### this code block is for cli
recipent_name=[(str(sys.argv[1].strip()))]
recipent_mail=[(str(sys.argv[2].strip()))]

##### block ends
names=recipent_name
sender_mail=zaroorisaman.u_mail
sender_pass=zaroorisaman.passwd
send_to_email =recipent_mail
len_list=len(send_to_email)
fp=open('response.txt','a')
# print(names,send_to_email)
server = smtplib.SMTP('smtp.gmail.com', 587)
subject = "Otp for family app"
body="Your otp is "+get_otp()
server.starttls()

server.login(sender_mail, sender_pass)
for i in range(len_list):
    body_temp= 'Dear ' + names[i] +',\n' +body
    message = 'Subject: {}\n\n{}'.format(subject,body_temp)
    send(fp,server,sender_mail,send_to_email[i],message,sent_status)
server.quit()
print("Email Sent Successfully!")
print(sent_status)
fp.close()
