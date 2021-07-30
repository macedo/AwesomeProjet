FROM ubuntu:20.04

ARG USER_ID
ARG GROUP_ID

RUN addgroup --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user

ENV INSTALL_PATH /opt/app
RUN mkdir -p $INSTALL_PATH

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

RUN npm install -g expo-cli @expo/ngrok@2.4.3

WORKDIR $INSTALL_PATH
COPY app/ .

RUN chown -R user:user /opt/app

EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

USER $USER_ID
CMD ["npm", "install"]
