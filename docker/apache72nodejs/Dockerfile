FROM debian:stretch-slim

#ENV http_proxy "http://10.7.6.6:3128"
#ENV https_proxy "http://10.7.6.6:3128"
ENV http_proxy "http://10.10.254.218:3128"
ENV https_proxy "http://10.10.254.218:3128"
ENV ftp_proxy "http://10.10.254.218:3128"
ENV HTTP_PROXY "http://10.10.254.218:3128"
ENV HTTPS_PROXY "http://10.10.254.218:3128"
ENV FTP_PROXY "http://10.10.254.218:3128"

RUN apt-get update && apt-get install -y \
        apt-transport-https \
        wget \
        curl \
        gnupg \
        nano \
        unzip \
        git \
        vim \
        curl \
        build-essential \
        sudo

# Instalacion de nvm y nodejsrun.sh
ADD installNVM.sh /installNVM.sh
RUN chmod 755 /*.sh
CMD ["/installNVM.sh"]

#RUN git clone https://github.com/creationix/nvm.git /opt/nvm
#RUN mkdir /usr/local/nvm
#RUN echo "export NVM_DIR=/usr/local/nvm" >> ~/.bashrc
#RUN echo "source /opt/nvm/nvm.sh" >> ~/.bashrc
##RUN export NVM_DIR=/usr/local/nvm
##RUN source /opt/nvm/nvm.sh
#RUN source ~/.bashrc
#RUN nvm install 15
#RUN npm install -g typescript
#RUN npm install -g @angular/cli@11
#RUN npm install -g ionic

EXPOSE 3000 4200

# Set the entry directory
WORKDIR /var/www/html
