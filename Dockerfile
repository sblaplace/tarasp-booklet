FROM node:latest

RUN mkdir -p /usr/build/
WORKDIR /usr/build
RUN git clone https://github.com/mthom/scryer-prolog.git
WORKDIR /usr/build/scryer-prolog
RUN cargo build --release
ENV PATH="${PATH}:/usr/build/scryer-prolog/target/release"

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]