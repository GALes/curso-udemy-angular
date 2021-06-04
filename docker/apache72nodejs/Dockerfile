FROM debian:stretch-slim

#ENV http_proxy "http://10.7.6.6:3128"
#ENV https_proxy "http://10.7.6.6:3128"
#ENV http_proxy "http://10.10.254.218:3128"
#ENV https_proxy "http://10.10.254.218:3128"
#ENV ftp_proxy "http://10.10.254.218:3128"
#ENV HTTP_PROXY "http://10.10.254.218:3128"
#ENV HTTPS_PROXY "http://10.10.254.218:3128"
#ENV FTP_PROXY "http://10.10.254.218:3128"

RUN apt-get -y update && apt-get install -y apache2 ca-certificates apt-transport-https wget curl gnupg -y
#ENV APACHE_RUN_USER  www-data
#ENV APACHE_RUN_GROUP www-data
#ENV APACHE_LOG_DIR   /var/log/apache2
#ENV APACHE_PID_FILE  /var/run/apache2/apache2.pid
#ENV APACHE_RUN_DIR   /var/run/apache2
#ENV APACHE_LOCK_DIR  /var/lock/apache2
#ENV APACHE_LOG_DIR   /var/log/apache2
#RUN mkdir -p $APACHE_RUN_DIR
#RUN mkdir -p $APACHE_LOCK_DIR
#RUN mkdir -p $APACHE_LOG_DIR

ENV PHP_VERSION 7.2

RUN wget -q https://packages.sury.org/php/apt.gpg -O- | apt-key add - && \
    echo "deb https://packages.sury.org/php/ stretch main" | tee /etc/apt/sources.list.d/php.list && \
    apt-get update
#RUN add-apt-repository ppa:ondrej/php && apt-get update
RUN apt-get install -y \
#        libapache2-mod-php$PHP_VERSION \
#        php$PHP_VERSION \
#        php$PHP_VERSION-apcu \
#        php$PHP_VERSION-curl \
#        php$PHP_VERSION-gd \
#        php$PHP_VERSION-intl \
#        php$PHP_VERSION-mbstring \
##        php$PHP_VERSION-mcrypt \ # deprecado, se instala de otra forma
#        php$PHP_VERSION-mysqlnd \
#        php$PHP_VERSION-xdebug \
#        php$PHP_VERSION-sqlite3 \
#        php$PHP_VERSION-xml \
#        php$PHP_VERSION-zip \
#	    php$PHP_VERSION-soap \
#        php$PHP_VERSION-dev \
        nano \
        unzip \
        git

# Config php
#ENV PHP_INI /etc/php/$PHP_VERSION/apache2/php.ini
#RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf && \
#    sed -i "s/variables_order.*/variables_order = \"EGPCS\"/g" $PHP_INI && \
#    sed -i 's/;\(date\.timezone =\)/\1 America\/Argentina\/Buenos_Aires/g' $PHP_INI && \
#    sed -i 's/;\(date\.timezone =\)/\1 America\/Argentina\/Buenos_Aires/g' $PHP_INI

# Download composer, phpunit and nvm
#RUN wget -q -O /usr/local/bin/composer https://getcomposer.org/composer.phar && chmod +x /usr/local/bin/composer

#RUN cd \
#		&& mkdir -p downloads \
#		&& cd downloads \
#		&& git clone https://github.com/xdebug/xdebug.git \
#		&& cd xdebug \
#		&& phpize \
#		&& ./configure --enable-xdebug \
#		&& make \
#		&& make install

# php-xdebug config
#ENV XDEBUG_INI /etc/php/$PHP_VERSION/apache2/conf.d/20-xdebug.ini
#RUN echo "zend_extension=$(find /usr/lib/php/* -name xdebug.so | grep 2017 | tail -1)" > $XDEBUG_INI \
#    && echo "xdebug.remote_enable=on" >> $XDEBUG_INI \
#    && echo "xdebug.remote_autostart=off" >> $XDEBUG_INI \
#    && echo "xdebug.remote_host = host.docker.internal" >> $XDEBUG_INI \
#    && echo "xdebug.remote_port = 9003" >> $XDEBUG_INI \
#    && echo "xdebug.idekey = PHPSTORM" >> $XDEBUG_INI

# && \
#    wget -q -O /usr/local/bin/phpunit https://phar.phpunit.de/phpunit-5.7.phar && chmod +x /usr/local/bin/phpunit && \
#    wget -q -O /bin/install-nvm.sh https://raw.githubusercontent.com/creationix/nvm/master/install.sh && chmod +x /bin/install-nvm.sh

#RUN wget https://get.symfony.com/cli/installer -O - | bash \
#		&& mv /root/.symfony/bin/symfony /usr/local/bin/symfony

#ADD dockerhost.sh /dockerhost.sh
ADD run.sh /run.sh
EXPOSE 83 446 9003 3000 4200
RUN chmod 755 /*.sh

#RUN rm -f /var/run/apache2/apache2.pid && a2enmod rewrite

# Instalacion de nvm y nodejs
RUN apt-get install -y git vim curl build-essential sudo
RUN git clone https://github.com/creationix/nvm.git /opt/nvm
RUN mkdir /usr/local/nvm
RUN echo "export NVM_DIR=/usr/local/nvm" >> ~/.bashrc
RUN echo "source /opt/nvm/nvm.sh" >> ~/.bashrc
#RUN source ~/.bashrc
#RUN nvm install 16
#RUN npm install -g typescript
#RUN npm install -g @angular/cli
#RUN npm install -g ionic

# Set the entry directory
WORKDIR /var/www/html
#CMD ["/run.sh"]
