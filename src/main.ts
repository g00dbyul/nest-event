import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import {OutBoundSerializer} from "./common/serializer/out-bound.serializer";
import {InBoundDeserializer} from "./common/deserializer/in-bound.deserializer";

async function bootstrap() {
  // const app = await NestFactory.createMicroservice(AppModule, {
  //     transport: Transport.NATS,
  //     options: {
  //         queue: 'customers',
  //         url: 'nats://localhost:4222',
  //         serializer: new OutBoundSerializer(),
  //         deserializer: new InBoundDeserializer()
  //     }
  // });
  // await app.listen();
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
}
bootstrap();
