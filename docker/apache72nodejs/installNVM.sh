#!/bin/bash

#nvm
if ! [ -x "$(command -v nvm)" ]
then
  git clone https://github.com/creationix/nvm.git /opt/nvm
  mkdir /usr/local/nvm
  echo "export NVM_DIR=/usr/local/nvm" >> ~/.bashrc
  echo "source /opt/nvm/nvm.sh" >> ~/.bashrc
  source ~/.bashrc
else
  echo "Ya se ha instalado nvm ($(nvm -v)), saltando instalación"
fi

#npm
if ! [ -x "$(command -v npm)" ]
then
  nvm install 15
else
  echo "Ya se ha instalado npm ($(npm -v)), saltando instalación"
fi

#typescript
if ! [ -x "$(command -v tsc)" ]
then
  npm install -g typescript
else
  echo "Ya se ha instalado typescript ($(tsc -v)), saltando instalación"
fi

#ng
if ! [ -x "$(command -v ng)" ]
then
  npm install -g @angular/cli@11
else
  echo "Ya se ha instalado @angular/cli, saltando instalación"
  ng --version
fi

#ionic
if ! [ -x "$(command -v ionic)" ]
then
  npm install -g ionic
else
  echo "Ya se ha instalado ionic ($(ionic -v)), saltando instalación"
fi

echo "Inicialización completada, contenedor listo para ser usado"
read -p "Press any key to continue . . ." keyPressed
