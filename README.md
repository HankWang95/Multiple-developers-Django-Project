## python
sudo yum install epel-release  
sudo yum install python34  

## pip
yum install python34-setuptools
easy_install-3.4 pip

## mysql:
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum install mysql-server
chown -R root:root /var/lib/mysql
service mysqld restart

mysql -u root
create user devIDENTIFIED BY "1234";
create database web_dev character set utf8;
grant all privileges on web_dev.* to dev@localhost identified by '1234';

## django
pip3 install django

## git 
yum install git 

ssh-keygen -t rsa -C hankwang.whc@gmail.com
then added to :
github->repo->Deploy keys

## mysqlcilent
yum search python3 | grep devel
yum install ................python34-gobject-devel
pip3 install mysqlcilent

## project
(爬虫依赖)
pip3 install lxml 
pip3 install requtest

(mysql img字段依赖)
pip3 insrall Pillow

(链接数据库 执行表创建)
python3 manage.py makemigrations
python3 manage.py migtate

(创建admin)——用户：admin 密码：1234qwer
python3 manage.py createsuperuser

进入admin界面->
创建组：editors teachers students
添加组权限：editors->editor  teachers->up_load


## 部署
yum install nginx
sudo pip3 install uwsgi
(测试 uwsgi)
uwsgi --http :9000 --wsgi-file ./wsgi_server.py

### 配置nginx 和uwsgi

vim  /etc/nginx/conf.d/django.conf 
启动 uwsgi
uwsgi --ini uwsgi.ini 

---


